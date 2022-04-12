let sumDistinctOne = 0;
let sumDistinctTwo = 0;
let sumOverLappingOne = 0;
let sumOverLappingTwo = 0;

//Add distinct elements using two different methods;..
function addDistinctOne(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr2.indexOf(arr1[i]) == -1) {
        sumDistinctOne += arr1[i];
        break;
      }
    }
  }

  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        sumDistinctOne += arr2[i];
        break;
      }
    }
  }
}

function addDistinctTwo(arr1, arr2) {
  for (i in arr1) {
    if (!arr2.includes(arr1[i])) {
      sumDistinctTwo += arr1[i];
    }
  }

  for (i in arr2) {
    if (!arr1.includes(arr2[i])) {
      sumDistinctTwo += arr2[i];
    }
  }
}

//Adding overlapping elements using two different methods
function addOverLappingOne(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr2.indexOf(arr1[i]) >= 0) {
        sumOverLappingOne += arr1[i];
        break;
      }
    }
  }

  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[i]) >= 0) {
        sumOverLappingOne += arr2[i];
        break;
      }
    }
  }
}

function addOverLappingTwo(arr1, arr2) {
  for (i in arr1) {
    if (arr2.includes(arr1[i])) {
      sumOverLappingTwo += arr1[i];
    }
  }

  for (i in arr2) {
    if (arr1.includes(arr2[i])) {
      sumOverLappingTwo += arr2[i];
    }
  }
}

addDistinctOne([3, 1, 7, 9], [2, 4, 1, 9, 3]);
addDistinctTwo([3, 1, 7, 9], [2, 4, 1, 9, 3]);
addOverLappingOne([12, 13, 6, 10], [13, 10, 16, 15]);
addOverLappingTwo([12, 13, 6, 10], [13, 10, 16, 15]);

console.log(sumDistinctOne);
console.log(sumDistinctTwo);
console.log(sumOverLappingOne);
console.log(sumOverLappingTwo);
