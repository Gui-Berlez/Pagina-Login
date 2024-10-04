//const botao = document.querySelector(".login")
//const preencher = document.querySelectorAll(".preencher")//Ao invés do por .preencher nos parenteses, mudar para .inpubox


//botao.addEventListener("click", ()=>{
//alert("Você acessou sua conta!")
    
//})
//Acima era um teste 


document.getElementById("formulario").addEventListener("submit", function(event){
    const usuarioInput = document.getElementById("usuario");
    const senhaInput = document.getElementById("senha");

    let mensagem = "";

    if(usuarioInput.value.trim() === " "){
        mensagem += "O campo Usuário é obrigatório\n";
    }

    if(senhaInput.value.trim() === " "){
        mensagem += "O campo Senha é obrigatório\n";
    }

if(mensagem) {
    event.preventDefault(); // Não deixa-rá o envio ser completado
    alert(mensagem ); // Exibirá a mesnsagem de erro
    usuarioInput.focus();  // Foca no campo Usuário (ou Senha)
}

alert("Você acessou sua conta!")
})

