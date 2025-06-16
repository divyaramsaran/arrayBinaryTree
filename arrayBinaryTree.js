const stringToNum = (str) => {
  return str.map((element) =>
    element
      .replaceAll("(", "")
      .replaceAll(")", "")
      .split(",")
      .map((strNum) => Number(strNum))
  );
};

const isBinaryTree = (integerArray, nodeEntries) => {
  while (nodeEntries.length !== 0) {
    const element = nodeEntries[0];
    const entry = element !== undefined ? entries(integerArray, element) : [];

    if (entry.length > 2) {
      return false;
    }

    if (entry.length !== 0) {
      entry.map((list) => nodeEntries.push(list));
    }

    nodeEntries.shift();
  }

  return true;
};

const entries = (integerArray, target) => {
  return integerArray.filter(([child, root]) => target[0] === root);
};

const validateBinarytree = (integerArray, rootNode) => {
  if (rootNode.length === 0) {
    return true;
  }

  const nodeEntries = integerArray.filter(
    ([child, root]) => rootNode[0] === root
  );

  if (nodeEntries.length > 2 || rootNode.length > 2) {
    return false;
  }

  return isBinaryTree(integerArray, nodeEntries);
};

function ArrayChallenge(strArr) {
  const integerArray = stringToNum(strArr);
  const childNodes = integerArray.map(([child, parent]) => child);
  const rootNode = integerArray
    .filter(([child, parent]) => !childNodes.includes(parent))
    .flat();

  return validateBinarytree(integerArray, rootNode);
}

const strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)", "(3,5)"];

console.log(ArrayChallenge(strArr));
