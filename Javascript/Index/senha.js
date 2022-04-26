//Função para exibir senha 

function LembrarSenha() {
    var x = document.getElementById("minha-senha");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}