document.addEventListener('DOMContentLoaded', function () {

   document.querySelector('.mensagens-btn').addEventListener('click', function () {
      document.querySelector('.sessao-mensagens').classList.add('mostrar-mensagem');
      document.querySelector('.sessao-mensagens').classList.add('show');
   });

   document.querySelector('.mensagens-fechar').addEventListener('click', function () {
      document.querySelector('.sessao-mensagens').classList.remove('show');
      document.querySelector('.sessao-mensagens').classList.remove('mostrar-mensagem');
   });
});