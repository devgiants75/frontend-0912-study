//! Q1. (for 반복문, if 조건문)
// 1에서부터 100까지의 합을 구하세요. 단, 3배수의 합 만을 구하는 방법을 기술하세요.

// 합을 저장할 변수 초기화
let sum = 0;

for(let index = 1; index <= 100; index++) {
  if (index % 3 === 0) {
    sum += index;
  }
}

console.log(sum); // 최종 합 출력 - 1683

//! Q2. (slice | substring)
// str 변수에 담긴 문자열의 내용 중 빨간색의 문자열만 취하는 방법을 기술하세요.
// str = "오늘은 2022년 08월 20일 입니다."
// >> 빨간색 문자열: '2022년 08월 20일'
const str = "오늘은 2022년 08월 20일 입니다.";

//? slice 사용방법
// '2022년 08월 20일'부분 추출
const redTextSlice = str.slice(4, 17); // slice(시작위치-포함O, 종료위치-포함X)
console.log(redTextSlice);

//? substring 사용방법
const redTextSubstring = str.substring(4, 17); // substring(시작위치-포함O, 종료위치-포함X)
console.log(redTextSubstring);

// slice와 substring의 차이

// 인자가 음수인경우

// slice는 자유롭게 사용 가능
// : 뒤에서부터 문자열을 자를때 사용

// substring은 음수를 대입하는 경우 해당 값이 0으로 치환되어 사용됨.


//! Q3. 
// 오늘은 2022년 8월 20일 입니다. 오늘에 해당되는 분기를 구하는 방법을 기술하세요.

// 자바스크립트에서는 월의 시작이 0, 8월은 7로 표시
function getQuarter(month) {
  // Math.ceil함수는 올림처리를 하여 분기를 계산
  // 1, 2, 3 (1분기), 4, 5, 6(2분기)
  // , 7, 8, 9(3분기), 10, 11, 12(4분기)
  return Math.ceil(month / 3);
}
// 2022년 8월 20일에 해당하는 Date 객체 생성
const date = new Date(2022, 7, 20);

// getMonth 메소드를 사용하여 현재 월을 가져옴.
// 결과값에 1을 더해 실제 월로 변환
const quarter = getQuarter(date.getMonth() + 1);

console.log(`분기: ${quarter}`); // 분기: 3

//! Q4. 
// arr 배열을 오름차순으로 정렬하는 방법을 기술하세요. 단, 연산자(if, for) 만 사용하여 문제를 해결하세요.
let arr = [];
arr[0] = 8;
arr[1] = 9;
arr[2] = 4;
arr[3] = 3;
arr[4] = 5;

console.log(arr); // [ 8, 9, 4, 3, 5 ]

// 버블정렬(bubble sort) 알고리즘
// : 서로 인접한 두 원소를 검사해서 정렬하는 알고리즘
// : 인접한 2개의 레코드를 비교해서 크기가 순서대로 되어 있지 않으면 서로 교환

// 버블 정렬 구현
for (let i = 0; i < arr.length; i++) {
  // 각 반복마다 최대값이 배열의 오른쪽으로 이동
  // 이미 정렬된 요소는 다시 확인할 필요 X
  // arr.length(5) - (0 ~ 4) - 1
  for (let j = 0; j < arr.length - i - 1; j++) {
    // 현재 요소가 다음 요소보다 크면 위치를 교환
    // >> 큰 값들이 배열의 오른쪽으로 이동
    if (arr[j] > arr[j+1]) {
      // 두 요소의 위치를 교환하기 위해 임시 변수(temp)를 사용
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}

// 정렬된 배열 출력
console.log(arr); // [ 3, 4, 5, 8, 9 ]


//! Q5. 
// 두 개의 배열을 하나의 배열로 만들고, 중복되는 값을 제거하는 방법을 기술하세요.
// arr1 = [3, 4, 5];
// arr2 = [9, 6, 4, 2];


let arr1 = [3, 4, 5];
let arr2 = [9, 6, 4, 2];

// 두 배열 합치기
let combinedArr = [...arr1, ...arr2]; // [3, 4, 5, 9, 6, 4, 2]

//? 중복 제거 방법
// Set 객체: 자바스크립트 내장 객체로, 중복된 값을 저장하지 X
let uniqueArr = [...new Set(combinedArr)];
console.log(uniqueArr); // [ 3, 4, 5, 9, 6, 2 ]

// filter메소드
// : 매개변수 (value(현재 요소값), index(현재 인덱스 번호), self)
let uniqueFilterArr = combinedArr.filter((value, index, self) => {
  // indexOf: 배열이나 문자열과 같은 객체에서
  // 특정 요소나 문자열의 첫 번째 위치를 찾는 데 사용하는 메소드
  return self.indexOf(value) === index;
});

console.log(uniqueFilterArr); // [ 3, 4, 5, 9, 6, 2 ]