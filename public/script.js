document.addEventListener('DOMContentLoaded', () => {
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const option3 = document.getElementById('option3');
  const question1 = document.getElementById('question1');
  const question2 = document.getElementById('question2');
  const final = document.getElementById('final');
  const finalImage = document.getElementById('finalImage');
  const finalMessage = document.getElementById('finalMessage');
  const nomeDaVitima = document.getElementById('nomeDaVitima');
  const segundaPergunta = document.getElementById('segundaPergunta')

  nomeDaVitima.textContent = config.nomeDaVitima;
  option1.textContent = config.option1;
  option2.textContent = config.option2;
  option3.textContent = config.option3;
  segundaPergunta.textContent = config.segundaPergunta 
  finalImage.src = config.image;

  option1.addEventListener('click', () => {
    question1.style.display = 'none';
    question2.style.display = 'block';
  });

  option2.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - option2.clientWidth;
    const maxY = window.innerHeight - option2.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    option2.style.left = `${x / 2}px`;
    option2.style.top = `${y / 2}px`;
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
      window.location.href = `https://wa.me/${config.numero}?text=${config.mensagem}`;
    }, 5000);
  });
});
