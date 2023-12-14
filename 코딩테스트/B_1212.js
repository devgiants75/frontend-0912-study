{
//! Q1. 배열에서 최대값과 최소값 찾기
// : 배열 numbers에 있는 숫자들 중 최대값과 최소값을 찾는 코드를 작성
// 예시 배열: let numbers = [3, 9, 7, 5, 1, 8];

let numbers = [3, 9, 7, 5, 1, 8];
let max = numbers[0];
let min = numbers[0];

numbers.forEach(number => {
  if (number > max) {
    max = number;
  }

  if (number < min) {
    min = number;
  }
});

console.log(`최대값: ${max}, 최소값: ${min}`);

//! Q2. 객체에서 특정 값에 해당하는 속성 찾기
// : 객체 person에서 나이가 30인 사람의 이름을 찾는 코드를 작성
// 예시 객체: let person = { "Tom": 25, "Jerry": 30, "Spike": 28 };
let person = { "Tom": 25, "Jerry": 30, "Spike": 28 };
let foundName = '';

// person 객체의 모든 키(이름)를 배열 형태로 저장
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  // person[keys[i]] : 현재 키에 해당하는 사람의 나이
  if (person[keys[i]] === 30) {
    foundName = keys[i];
    // 찾은 후에는 더 이상 반복 X
    break;
  }
}

console.log(`나이가 30인 사람: ${foundName}`);

//! Q3. 중복 문자 제거하기
// : 주어진 문자열에서 중복된 문자를 제거한 새로운 문자열을 반환하는 함수를 작성
// 예시: 입력 "banana" → 출력 "ban"
function removeDuplicates(str) {
  // new Set(str): 문자열에서 중복을 제거
  // Set: 중복을 허용하지 않는 데이터 구조
  // [...new Set(str)]: [b, a, n, a, n, a] >> [b, a, n]
  return [...new Set(str)].join('');
  // 스프레드 연산자를 사용하여 배열로 변환
  // join('')메소드를 사용하여 배열의 모든 요소를 빈 문자열을 사용하여 연결
}

console.log(removeDuplicates('banana')); // ban

//! Q4. 문자열 내의 특정 문자 개수 세기
// : 주어진 문자열에서 특정 문자의 개수를 반환하는 함수를 작성
// 예시: 입력 ("javascript", "a") → 출력 2

let string = "javascript";

function countChar(str, char) {
  // split 메소드
  // : 문자열을 나누어 배열에 저장한 후 리턴
  return str.split('').filter(c => c === char).length;
}

console.log(countChar(string, "a"));

//! Q5. 피보나치 수열의 n번째 항을 계산하기
// : 피보나치 수열에서 n번째 숫자를 반환하는 함수를 작성하세요. (0번째는 0, 1번째는 1)
// 예시: 입력 5 → 출력 5 (피보나치 수열: 0, 1, 1, 2, 3, 5)

// 피보나치 수열은 이전 두 항의 합으로 계산
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c; // 현재 계산 중인 피보나치 수열의 항

  // 피보나치 수열의 첫 번째 항(0)을 반환
  if (n === 0) return a;

  // i는 현재 계산하고 있는 피보나치 수열의 인덱스
  for (let i = 2; i <= n; i++) {
    c = a + b;

    // a와 b의 값을 갱신
    a = b;
    b = c;
  }

  return b; 
}

console.log(fibonacci(6)); // 8

//? 피보나치 수열
// : 첫 번째와 두 번째 항은 각각 0과 1이다.
// : 그 이후의 모든 항은 바로 앞의 두 항의 합으로 이루어진다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

} // 닫히는 중괄호