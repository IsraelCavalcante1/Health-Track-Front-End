// Slide que fica trocando a foto / texto do banner

let time = 7000,
   currentImageIndex = 0,
   images = document.querySelectorAll("#slider div")
   max = images.length;

   function nextImage(){
      images[currentImageIndex].classList.remove("selected") // Adicionar a classe na imagem atual, começando de 0

      currentImageIndex++ // Mudando o valor do index, ou seja, apontando a próxima imagem sempre que passar pela função
      if(currentImageIndex >= max){
         currentImageIndex = 0
         

      }
      images[currentImageIndex].classList.add("selected") // Adicionar a classe na imagem atual, começando de 0

   }

   function start(){
      setInterval(() => {
         // troca de imagem
         nextImage()
      }, time)
      
   }

   window.addEventListener("load", start)


function LembrarSenha() {
   var x = document.getElementById("minha-senha");
   if (x.type === "password") {
      x.type = "text";
   } else {
      x.type = "password";
   }
}

