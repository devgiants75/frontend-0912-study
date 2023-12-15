//! HTML 문서에서 'surveyForm' ID를 가진 폼 요소를 찾아 form 변수에 할당
const form = document.getElementById('surveyForm');
// HTML 문서에서 'question' 클래스를 가진 모든 요소를 찾아 questions 변수에 할당
const questions = document.querySelectorAll('.question');
// 'prevBtn' ID를 가진 이전 버튼 요소를 찾아 prevBtn 변수에 할당
const prevBtn = document.getElementById('prevBtn');
// 'nextBtn' ID를 가진 다음 버튼 요소를 찾아 nextBtn 변수에 할당
const nextBtn = document.getElementById('nextBtn');
// 폼 내의 제출(submit) 타입의 입력 요소를 찾아 submitBtn 변수에 할당
const submitBtn = form.querySelector('input[type=submit]');
// 현재 활성화된 질문을 추적하기 위한 변수, 초기값은 0 (첫 번째 질문)
let currentQuestion = 0;

//! 버튼의 표시 상태를 업데이트하는 함수
function updateButtons() {
    // 첫 번째 질문일 경우 이전 버튼을 숨김, 그 외에는 표시
    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline';

    // 마지막 질문이 아닐 경우 다음 버튼을 표시하고, 마지막 질문일 경우 숨김
    nextBtn.style.display = currentQuestion < questions.length - 1 ? 'inline' : 'none';
    // 마지막 질문일 경우 제출 버튼을 표시하고, 그 외에는 숨김
    submitBtn.style.display = currentQuestion === questions.length - 1 ? 'inline' : 'none';
}

//! 현재 질문에 대한 답변이 선택되었는지 확인하는 함수
function isCurrentQuestionAnswered() {
    // 현재 질문에 있는 모든 라디오 버튼을 찾음
    const radios = questions[currentQuestion].querySelectorAll('input[type="radio"]');
    // 라디오 버튼 중 하나라도 체크되어 있으면 true 반환, 아니면 false 반환
    return Array.from(radios).some(radio => radio.checked);
}

//! 특정 질문을 보여주는 함수
function showQuestion(index) {
    // 모든 질문을 숨김
    questions.forEach(question => question.classList.remove('active'));
    // 지정된 인덱스의 질문만 표시
    questions[index].classList.add('active');
    // 버튼 상태 업데이트
    updateButtons();
}

//! 초기에 첫 번째 질문 표시
showQuestion(currentQuestion);

//! 이전 버튼 클릭 이벤트 리스너
prevBtn.addEventListener('click', () => {
    // 현재 질문이 첫 번째 질문이 아닐 경우
    if (currentQuestion > 0) {
        // 이전 질문으로 이동
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

//! 다음 버튼 클릭 이벤트 리스너
nextBtn.addEventListener('click', () => {
    // 마지막 질문 전까지만 확인
    if (currentQuestion < questions.length - 1) {
        // 현재 질문에 답변이 되었는지 확인
        if (isCurrentQuestionAnswered()) {
            // 답변이 되었으면 다음 질문으로 이동
            currentQuestion++;
            showQuestion(currentQuestion);
        } else {
            // 답변이 되지 않았으면 경고 메시지 표시
            alert('이 질문에 답변해주세요.');
        }
    }
});

//! 폼 제출 이벤트 리스너
form.addEventListener('submit', (e) => {
    // 마지막 질문에 대한 답변 확인
    if (!isCurrentQuestionAnswered()) {
        // 답변이 되지 않았으면 기본 제출 동작 방지 및 경고 메시지 표시
        e.preventDefault();
        alert('모든 질문에 답변해주세요.');
    }
});
