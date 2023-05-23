// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const s = 'stop';
  const tree = [root, s];
  const counters = [0];

  while(tree.length > 1) {
    const node = tree.shift();

    if (node === s) {
      counters.push(0)
      tree.push(s);
    } else {
      tree.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
