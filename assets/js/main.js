/*guia-bot */



function toggleChatBox() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function closeChatBox() {
    var chatBox = document.getElementById("chatBox");
    chatBox.style.display = "none";
}


/*Calculadora IMC */
const form = document.getElementById('form');

form.addEventListener('submit', function (event) { //event -> criaçao do evento
    event.preventDefault();

    /*capitura dos valores do peso e da altura*/
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    /*função do imc*/
    const imc = (peso / (altura * altura)).toFixed(2); //toFixed -> aparecer duas casas depois da ','

    /*captura do value*/
    const valor = document.getElementById('valor');

    let descricao = '';

    /*remoçao da classe hidden*/

    document.getElementById('infos').classList.remove('hidden');

    /*criação das condicionas*/

    if (imc < 18.5) {
        descricao = 'ALERTA!! Abaixo do peso!'
    } else if (imc >= 18.5 && imc <= 25) {
        descricao = 'PARABÉNS!! Peso ideal!'
    } else if (imc > 25 && imc <= 30) {
        descricao = 'ATENÇÃO!! Sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        descricao = 'ATENÇÃO!! Obesidade Moderada!'
    } else if (imc > 35 && imc <= 40) {
        descricao = 'CUIDADO!! Obesidade Severa!'
    } else {
        descricao = 'CUIDADO!! Obesidade Morbida!'
    }


    /*Visualização do resultado*/
    valor.textContent = imc.replace('.', ', '); //o replace vai trocar o '.' pela ','
    document.getElementById('descricao').textContent = descricao;

});

document.addEventListener('DOMContentLoaded', function () {
    const ponteira = document.querySelector('.ponteira');
    const emotionImgs = document.querySelectorAll('.emotion-meter img');
    const emotionDescription = document.getElementById('emotion-description');
    
    // Adiciona evento de clique em cada imagem de emoção
    emotionImgs.forEach(function(emotionImg) {
        emotionImg.addEventListener('click', function() {
            // Define a posição da ponteira com base na posição da imagem de emoção clicada
            const rect = emotionImg.getBoundingClientRect();
            const ponteiraPosition = rect.left + (rect.width / 2);
            ponteira.style.left = ponteiraPosition + 'px';
            
            // Exibe a descrição da emoção clicada
            const emotion = emotionImg.dataset.emotion;
            emotionDescription.textContent = `Você já pensou em como esse sentimento de ${emotion} vai determinar o seu dia?`;
        });
    });
    
    // Adiciona evento de mouse para arrastar a ponteira
    ponteira.addEventListener('mousedown', function (event) {
        let isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', function () {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
        });
    
        function onMouseMove(event) {
            if (!isDragging) return;
            const rect = ponteira.parentElement.getBoundingClientRect();
            let x = event.clientX - rect.left;
            x = Math.max(0, Math.min(rect.width, x));
            ponteira.style.left = x + 'px';
        }
    });
});