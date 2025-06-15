const stringToNum = (str) => {
  return [Number(str[1]), Number(str[3])];
};

function ArrayChallenge(strArr) {
  // code goes here
  const integerArray = strArr.map(stringToNum);
  return integerArray;
}

const strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
console.log(ArrayChallenge(strArr));
