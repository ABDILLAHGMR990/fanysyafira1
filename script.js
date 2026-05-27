const giftBox = document.getElementById('giftBox');
const letterPage = document.getElementById('letterPage');

giftBox.addEventListener('click', () => {
  giftBox.style.display = 'none';
  letterPage.classList.remove('hidden');

  const music = document.getElementById('bgMusic');

  music.play().catch(() => {
    console.log('Autoplay blocked');
  });
});

function createHeart(){
  const heart = document.createElement('div');

  heart.classList.add('heart');
  heart.innerHTML = '💖';

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },5000);
}

setInterval(createHeart,200);
