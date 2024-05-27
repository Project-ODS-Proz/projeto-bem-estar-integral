/*Validação do formulário de contato */

/*seleção do documento */
const form = document.querySelector("#contato")

/*---seleção dos inputs---*/

/*seleção do input name */
const nameInput = document.querySelector("#name")
/*seleção do input email */
const emailInput = document.querySelector("#email")
/*seleção do input telefone */
const telefoneInput = document.querySelector("#telefone")
/*seleção do input da caixa de texto */
const mensagemTextarea = document.querySelector("#mensagem")

/* teste de impressão dos elementos da DOM*/
/*console.log(contato, nameInput, emailInput, telefoneInput, mensagemInput);*/

/*Validação*/

/*adição do evento ao formulário */
form.addEventListener("submit", (event) =>{ /*ação aplicada ao submit quando for acionado */
  event.preventDefault(); /*processo de validação antes do envio */

  /*verificação dos campos*/

  /*Nome - verificação se o campo está vazio*/
    if(nameInput.value === "") {  /*value->valor ""->vazio */
      alert("O campo nome não pode ficar vazio"); /*se a condição for verdadeira irá retornar um alerta */
      return; /*não continuar a função */
    }

    /*E-mail - se o preenchimento está correto ou vazio*/
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
      alert("Preencher o campo de e-mail corretamente");
      return;
    }

    /*Telefone - verificar se o campo está vazio*/

    if(telefoneInput.value === "") {  /*value->valor ""->vazio */
    alert("Preencha o número de telefone"); /*se a condição for verdadeira irá retornar um alerta */
    return; /*não continuar a função */
  }

    /*Mensagem - verificar se está preenchida */
    if(mensagemTextarea.value === "") {  /*value->valor ""->vazio */
      alert("A caixa de texto não foi preenchida"); /*se a condição for verdadeira irá retornar um alerta */
      return; /*não continuar a função */
    }


    /*caso todos os campos estejam corretamente preenchidos, ocorrerá o envio do formulário */

    /*envio do formulário*/
    form.submit();

});

/*Função de Validação de e-mail */
function isEmailValid(email){

  /*criação de uma regex (padrão de pesquisa utilizado para correspondência de padrões em strings) para validar email*/
  const emailRegex = new RegExp(
    /* usuario@dominio.complemento(extenção)*/
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/ /*Validação de aA - zZ , números de 0 - 9, caracteres especiais, {2,0}$ -> o padrão pode aconter duas ou mais vezes*/
  );

  /*se a condição for verdadeira*/
  if(emailRegex.test(email)){
    return true
  }
  /*senão*/
  return false; /*e-mail falso*/
}

