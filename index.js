document.addEventListener('DOMContentLoaded', () => {
  const img1 = document.getElementById('norris');
  const img3 = document.getElementById('tsunoda');

  function swapImages() {
    const tempSrc = img1.src;
    img1.src = img3.src;
    img3.src = tempSrc;
  }

  img1.addEventListener('click', swapImages);
  img3.addEventListener('click', swapImages);
});
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery img');

  // 모든 이미지가 로드된 후 실행
  Promise.all(Array.from(images).map(img => 
    new Promise(resolve => {
      img.onload = resolve;
    })
  )).then(() => {
    // 가장 작은 너비, 높이 찾기
    let minWidth = Math.min(...Array.from(images).map(img => img.naturalWidth));
    let minHeight = Math.min(...Array.from(images).map(img => img.naturalHeight));

    // 모든 이미지에 적용
    images.forEach(img => {
      img.style.width = `${minWidth}px`;
      img.style.height = `${minHeight}px`;
      img.style.objectFit = 'cover';
    });
  });
});
// index.js

// 폼과 입력창, 버튼 선택
// index.js

const form = document.querySelector('.contact form');
const input = form.querySelector('input');
const contactDiv = document.querySelector('.contact');

// MP3 파일 경로
const verstappenAudio = new Audio('ddudduddu.mp3'); // 프로젝트 폴더에 mp3 파일 있어야 함

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = input.value.trim();
    if(name) {
        // 기존 메시지 제거
        const oldMessage = contactDiv.querySelector('.greeting');
        if(oldMessage) oldMessage.remove();

        // 메시지 생성
        const message = document.createElement('p');
        message.className = 'greeting';
        message.textContent = `Nice to see you ${name}!`;
        form.appendChild(message);

        // 이름에 'verstappen' 포함 여부 확인
        if(name.toLowerCase().includes('verstappen')) {
            verstappenAudio.play();
        }

        input.value = '';
    }
});

