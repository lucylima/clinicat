
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  if ($enviarForm.value == "Cadastrar") {
    cadastrarPet();
  } else if ($enviarForm.value == "Atualizar pet") {
    enviaEdicao();
  }
  updateCards();
  closeModal();
  alertaSemItens("esconder");
});
