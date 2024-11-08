document.querySelector('.btn.botao-padrao').addEventListener('click', () => {
  // Use setTimeout para adiar a execução das operações pesadas
  setTimeout(() => {
    // Realize aqui as operações que podem ser demoradas

    // Limpar os campos do formulário
    document.getElementById('floatingNome').value = '';
    document.getElementById('floatingEmail').value = '';
    document.getElementById('floatingTelefone').value = '';
    document.getElementById('nivel-satisfacao').value = '';
    document.querySelector('.form-select').selectedIndex = 0;
    document.getElementById('flexCheckDefault').checked = false;

    // Mostrar um popup de agradecimento
    alert("Obrigado! Logo nossa equipe entrará em contato.");
  }, 0);
});
