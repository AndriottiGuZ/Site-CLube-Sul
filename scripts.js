const antbutton = document.getElementById('ant');
const nextbutton = document.getElementById('next');
const itens = document.querySelectorAll('.item');
const pontos = document.querySelectorAll('.ponto');
const numeroind = document.querySelector('.numeros');
const list = document.querySelector('.list');


let active = 0;
const total = itens.length;
let timer; 

function update(direction) {
        document.querySelector('.item.ativo').classList.remove('ativo');
        document.querySelector('.ponto.ativo').classList.remove('ativo');

        if (direction > 0) {
                if (active < 3) { active = active + 1} else { active = 0 }

        } else { if (active > 0) { active = active - 1} else { active = 3 } }

        numeroind.innerHTML = `0${active + 1}`;
        itens[active].classList.add('ativo');
        pontos[active].classList.add('ativo');
    }


antbutton.addEventListener('click', function() {
    update(-1);
})


document.querySelectorAll(".btn-servico").forEach(botao => {
    botao.addEventListener("click", () => {

        const card = botao.closest(".card-servico");
        card.classList.toggle("ativo");

    });
});