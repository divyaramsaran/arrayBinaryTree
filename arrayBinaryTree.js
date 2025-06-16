const stringToNum = (str) => {
  return [Number(str[1]), Number(str[3])];
};

const entries = (integerArray, target) => {
  return integerArray.filter(([child, root]) => target[0] === root);
};

const isBinaryTree = (integerArray, rootNode) => {
  if (rootNode.length === 0) {
    return true;
  }

  const nodeEntries = integerArray.filter(
    ([child, root]) => rootNode[0] === root
  );

  if (nodeEntries.length > 2) {
    return false;
  }

  while (true) {
    const element = nodeEntries[0];
    const entry = element !== undefined ? entries(integerArray, element) : [];

    if (entry.length > 2) {
      return false;
    }

    if (nodeEntries.length === 0) {
      return true;
    }

    if (entry.length !== 0) {
      entry.map((list) => nodeEntries.push(list));
    }

    nodeEntries.shift();
  }

  console.log(nodeEntries);
};

function ArrayChallenge(strArr) {
  // code goes here
  const integerArray = strArr.map(stringToNum);
  const childNodes = integerArray.map(([child, parent]) => child);
  const rootNode = integerArray
    .filter(([child, parent]) => !childNodes.includes(parent))
    .flat();

  return isBinaryTree(integerArray, rootNode);
}

const strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)", "(10,5)"];
console.log(ArrayChallenge(strArr));
