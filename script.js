//primeira parte feita

setInterval(() => {
      createBall();
    }, 500);

let contagemDeclicks = 0;
let AcertosHtml = document.getElementById('Acertos');

function createBall() {
      const ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.left = Math.random() * 150 + "%"; // direcionando a bolinha para um lado aleatorio para os lados
      ball.style.top = Math.random() * 94 + "%"; // direcionando a bolinha aleatoriamente para cima
      container.appendChild(ball);

      ball.addEventListener('click', function() {
            contagemDeclicks++;
            AcertosHtml.innerHTML = contagemDeclicks;
            ball.classList.remove('ball');
            
      }) 
      
      setTimeout(() => {
            ball.remove();
          }, 3000);


}
