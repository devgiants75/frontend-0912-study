{
//! Q1. 배열에서 짝수와 홀수 분리하기
// : 주어진 배열에서 짝수와 홀수를 분리하여 두 개의 새로운 배열로 만드는 코드를 작성
// 예시 배열: let numbers = [1, 2, 3, 4, 5, 6];
// 결과: 짝수 배열 [2, 4, 6], 홀수 배열 [1, 3, 5]
let numbers = [1, 2, 3, 4, 5, 6];
let even = [];
let odd = [];

numbers.forEach(number => {
  if(number % 2 === 0) {
    even.push(number);
  } else {
    odd.push(number);
  }
});

console.log(even, odd);

//! Q2. 배열의 순서 뒤집기
// 주어진 배열의 요소 순서를 뒤집는 코드를 작성
// : 내장 함수 reverse 사용 X
// 예시 배열: [1, 2, 3, 4, 5]
// 결과: [5, 4, 3, 2, 1]

let array = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray(array));

//! Q3. 2차원 배열에서 대각선 요소의 합 구하기
// 주어진 2차원 배열의 대각선(왼쪽 상단에서 오른쪽 하단) 요소들의 합을 구하는 함수를 작성
// 예시 배열: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// 결과: 15 (1 + 5 + 9)

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

matrix[0, 0];
matrix[1, 1];
matrix[2, 2];

function diagonalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

console.log(diagonalSum(matrix)); // 15

//! Q4. 배열에서 특정 요소 제거하기
// 주어진 배열에서 모든 지정된 요소를 제거하는 함수를 작성
// 예시: 입력 배열 [1, 3, 4, 6, 3, 2], 제거할 요소 3
// 결과: [1, 4, 6, 2]

let arrayElement = [1, 3, 4, 6, 3, 2];

function removeElement(arr, element) {
  return arr.filter(el => el !== element);
}

console.log(removeElement(arrayElement, 3)); // [1, 4, 6, 2]

//! Q5. 객체 속성 합산하기
// 주어진 객체의 모든 수치 속성값의 합을 계산하는 함수를 작성
// 예시: 입력 객체 { a: 10, b: 20, c: "30", d: 40 }
// 결과: 70 (문자열 '30'은 숫자로 계산하지 않습니다)

let object = { a: 10, b: 20, c: "30", d: 40 };
function sumNumberProperties(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(sumNumberProperties(object)); // 70
} // 닫히는 중괄호