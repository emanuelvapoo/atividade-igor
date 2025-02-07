document.getElementById("cadastro").addEventListener("click", function(){
    preventDefault()
    //capturei os elementos HTML
    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")
    const nome = document.querySelector("#nome")
    const usuario = document.querySelector("#usuario")

    //Extrair valor digitado pelo usuário no campo input
    const emailValue = email.value()
    const senhaValue = senha.value()
    const nomeValue = nome.value()
    const usuarioValue = usuario.value()

    if(emailValue === ""){
        email.classList.add("erro")
    }

    if(senhaValue === ""){
        senha.classList.add("erro")
    }

    if(nomeValue === ""){
        nome.classList.add("erro")
    }

    if(usuarioValue === ""){
        usuario.classList.add("erro")
    }
}

)