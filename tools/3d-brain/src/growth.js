// A connectivity replay, not an invented historical timeline. Every branch is
// backed by an existing graph edge; disconnected notes start their own roots.
export function planGrowth(nodes, links) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const adjacent = new Map(nodes.map((n) => [n.id, []]));
  const idOf = (value) => typeof value === 'object' ? value.id : value;
  for (const link of links) {
    const a = idOf(link.source), b = idOf(link.target);
    if (!byId.has(a) || !byId.has(b)) continue;
    adjacent.get(a).push({id:b, link}); adjacent.get(b).push({id:a, link});
  }
  const ranked = [...nodes].sort((a,b) => (b.source === 'wiki') - (a.source === 'wiki') || (b.degree || 0) - (a.degree || 0) || a.id.localeCompare(b.id));
  for (const list of adjacent.values()) list.sort((a,b) => (byId.get(b.id).degree || 0) - (byId.get(a.id).degree || 0) || a.id.localeCompare(b.id));
  const seen = new Set(), records = [], byNode = new Map();
  const append = (node, parent = null, link = null) => {
    const record = {node, parent, link, index:records.length, home:{x:node.x,y:node.y,z:node.z}, born:0, origin:null};
    records.push(record); byNode.set(node.id,record); seen.add(node.id);
    return record;
  };
  for (const seed of ranked) {
    if (seen.has(seed.id)) continue;
    const queue = [append(seed)];
    for (let q = 0; q < queue.length; q++) {
      const parent = queue[q];
      const available = adjacent.get(parent.node.id).filter((item) => !seen.has(item.id));
      // A few new branches at a time avoids a giant star exploding from one hub.
      for (const next of available.slice(0,3)) queue.push(append(byId.get(next.id), parent, next.link));
      if (available.length > 3) queue.push(parent);
    }
  }
  records.forEach((record,i) => {
    record.born = i === 0 ? 0 : i === 1 ? 1.2 : i === 2 ? 2.4 : 3 + 23 * Math.pow((i-2) / Math.max(1, records.length-3), .62);
  });
  return {records, byNode, treeLinks:new Set(records.map((r) => r.link).filter(Boolean)), duration:29};
}

// Pascal's Brain: a real history replay. Notes appear in the order they were
// created (node.bornAt), on a timeline from the first note to today. Each new
// note springs from an already-existing note it links to; unlinked notes start
// at the orb. Same-day bursts are staggered slightly so they stay readable.
export function planHistory(nodes, links) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const adjacent = new Map(nodes.map((n) => [n.id, []]));
  const idOf = (value) => typeof value === 'object' ? value.id : value;
  for (const link of links) {
    const a = idOf(link.source), b = idOf(link.target);
    if (!byId.has(a) || !byId.has(b)) continue;
    adjacent.get(a).push({id:b, link}); adjacent.get(b).push({id:a, link});
  }
  const bornOf = (n) => Number.isFinite(n.bornAt) ? n.bornAt : (n.updated || 0);
  const order = [...nodes].sort((a,b) => bornOf(a) - bornOf(b) || (b.degree || 0) - (a.degree || 0) || a.id.localeCompare(b.id));
  const first = bornOf(order[0]), last = Math.max(bornOf(order[order.length-1]), first + 86400000);
  const start = 1.5, span = 32, gap = Math.min(.02, 6 / Math.max(1, order.length));
  const records = [], byNode = new Map();
  let previous = -Infinity;
  for (const node of order) {
    let best = null;
    for (const item of adjacent.get(node.id)) {
      if (!byNode.has(item.id)) continue;
      if (!best || (byId.get(item.id).degree || 0) > (byId.get(best.id).degree || 0)) best = item;
    }
    let born = records.length === 0 ? 0 : start + span * (bornOf(node) - first) / (last - first);
    born = Math.max(born, previous + gap); previous = born;
    const record = {node, parent:best ? byNode.get(best.id) : null, link:best?.link || null, index:records.length, home:{x:node.x,y:node.y,z:node.z}, born, date:bornOf(node), origin:null};
    records.push(record); byNode.set(node.id, record);
  }
  const duration = Math.max(previous + 2.5, start + span + 2);
  // Calendar date shown at time t: the timeline position, never earlier than the newest note on screen.
  const dateAt = (t, newest) => Math.max(newest || first, Math.min(last, first + (last - first) * Math.max(0, t - start) / span));
  return {records, byNode, treeLinks:new Set(records.map((r) => r.link).filter(Boolean)), duration, mode:'history', first, last, dateAt};
}

export function growthPosition(record, t, fill) {
  const age = Math.max(0, t-record.born);
  const u = Math.min(1, age/1.6);
  const spring = u >= 1 ? 1 : 1 - Math.exp(-5*u) * Math.cos(7*u);
  // History mode passes `fill` (share of notes born so far) so the globe's size tracks real content.
  const spread = .17 + .83 * (fill ?? Math.min(1,t/26));
  const origin = record.origin || {x:0,y:0,z:0};
  const progress = record.index === 0 ? Math.min(1,t/18) : spring;
  return Object.fromEntries(['x','y','z'].map((axis) => [axis, origin[axis] + (record.home[axis]*spread - origin[axis])*progress]));
}
