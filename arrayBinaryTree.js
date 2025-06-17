const parseEdges = (stringParis) => {
  return stringParis.map((currentNode) =>
    currentNode
      .replaceAll("(", "")
      .replaceAll(")", "")
      .split(",")
      .map((strNum) => Number(strNum))
  );
};

const isBinaryTree = (integerArray, nodesToVisit) => {
  while (nodesToVisit.length !== 0) {
    const currentNode = nodesToVisit[0];
    const children =
      currentNode !== undefined
        ? getChildrenForParent(integerArray, currentNode)
        : [];

    if (children.length > 2) {
      return false;
    }

    if (children.length !== 0) {
      children.forEach((child) => nodesToVisit.push(child));
    }

    nodesToVisit.shift();
  }

  return true;
};

const getChildrenForParent = (integerArray, target) => {
  return integerArray.filter(([child, root]) => target[0] === root);
};

const validateBinarytree = (integerArray, rootNode) => {
  if (rootNode.length === 0) {
    return true;
  }

  const initialChildren = integerArray.filter(
    ([child, root]) => rootNode[0] === root
  );

  if (initialChildren.length > 2 || rootNode.length > 2) {
    return false;
  }

  return isBinaryTree(integerArray, initialChildren);
};

function ArrayChallenge(strArr) {
  const edges = parseEdges(strArr);
  const childNodes = edges.map(([child, parent]) => child);
  const rootNode = edges
    .filter(([child, parent]) => !childNodes.includes(parent))
    .flat();

  return validateBinarytree(edges, rootNode);
}

const strArr = ["(1,2)", "(3,2)", "(2,12)", "(5,3)"];

console.log(ArrayChallenge(strArr));
