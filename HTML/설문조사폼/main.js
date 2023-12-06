//! 1. 동작 구현에 필요한 HTML 요소들을 변수에 할당
const form = document.getElementById('surveyForm');
const questions = document.querySelectorAll('.question');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
//? 폼 내의 제출(submit) 타입의 입력 요소를 찾아 변수에 할당
const submitBtn = form.querySelector('input[type=submit]');
//? 현재 활성화된 질문을 추적하기 위한 변수, 초기값은 0 (첫 번째 질문)
let currentQuestion = 0;

//! 2. 버튼의 표시 상태를 업데이트하는 함수
function updateButtons() {
  //? "이전" 버튼 보이기/숨기기
  // 첫 번째 질문일 경우 이전 버튼을 숨김, 그 외에는 표시

  //? "다음" 버튼과 "제출" 버튼 업데이트
  // - 마지막 질문이 아닐 경우 다음 버튼을 표시하고, 마지막 질문일 경우 숨김

  // - 마지막 질문일 경우 제출 버튼을 표시하고, 그 외에는 숨김

}

//! 3. 현재 질문에 대한 답변이 선택되었는지 확인하는 함수
function isCurrentQuestionAnswered() {
  // 현재 질문에 있는 모든 라디오 버튼을 찾음

  // 라디오 버튼 중 하나라도 체크되어 있으면 true 반환, 아니면 false 반환

}

//! 4. 특정 질문을 보여주는 함수
function showQuestion(index) {
  // 모든 질문을 숨김

  // 지정된 인덱스의 질문만 표시

  // 버튼 상태 업데이트

}

//! 5. 초기에 첫 번째 질문 표시
showQuestion(currentQuestion);

//! 6. 이전 버튼 클릭 이벤트 리스너
prevBtn.addEventListener('click', () => {
  // 현재 질문이 첫 번째 질문이 아닐 경우(if 조건문)

  // 이전 질문으로 이동 (조건문 내의 로직)
});

//! 7. 다음 버튼 클릭 이벤트 리스너
nextBtn.addEventListener('click', () => {
  // 마지막 질문 전까지만 답변 여부 확인 (if 조건문)

  // 현재 질문에 답변이 되었는지 확인 (조건문 내의 로직)

  // 답변이 되지 않았으면 경고 메시지 표시 (else문)

});

//! 8. 폼 제출 이벤트 리스너
form.addEventListener('submit', (e) => {
  // 마지막 질문에 대한 답변 확인 (if 조건문)

  // 답변이 되지 않았으면 기본 제출 동작 방지 및 경고 메시지 표시
});
