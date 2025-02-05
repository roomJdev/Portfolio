// 연락처 폼 제출 이벤트 리스너 추가
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 기본 제출 동작 방지
  alert("메시지가 전송되었습니다!");
});
