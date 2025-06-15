const stringToNum = (str) => {
  return [Number(str[1]), Number(str[3])];
};

function ArrayChallenge(strArr) {
  // code goes here
  const integerArray = strArr.map(stringToNum);
  console.log(integerArray);

  return integerArray.reduce(
    ([isBinaryTree, uniqueList], integers) => {
      const hid = uniqueList.reduce((init, list) => {
        
        if (list.includes(integers[0]) || list.includes(integers[1])) {
          return true;
        }

        uniqueList.push(integers);
        return false;
      });
      
      return [hid, uniqueList];
    },
    [true, []]
  );

  return strArr;
}

const strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
console.log(ArrayChallenge(strArr));
