const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const option3 = document.getElementById('option3');
const final = document.getElementById('final');
const finalImage = document.getElementById('finalImage');
const finalMessage = document.getElementById('finalMessage');

option1.addEventListener('click', () => {
  question1.style.display = 'none';
  question2.style.display = 'block';
});

option2.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - option2.clientWidth * 2); 
  const y = Math.random() * (window.innerHeight - option2.clientHeight * 2); 
  option2.style.left = `${x}px`;
  option2.style.top = `${y}px`;
  option2.style.position = 'absolute';
});

option3.addEventListener('click', () => {
  question2.style.display = 'none';
  final.style.display = 'block';
  finalImage.style.display = 'block';
  
  setTimeout(() => {
    finalImage.style.display = 'none';
    finalMessage.style.display = 'block';
  }, 3000);
  
  setTimeout(() => {
    window.location.href = 'https://wa.me/555183280627?text=CLARO%20andre%2C%20impossivel%20recusar%20um%20convite%20seu';
  }, 5000);
});
