const $container = document.getElementsByClassName("container-principal")[0];
const $noItems = document.getElementsByClassName("sem-items")[0];
const $menu = document.getElementsByClassName("menu-opcao");
const $menuTitle = document.getElementsByClassName("categoria-menu")[0];
const $newPetButtons = document.getElementsByClassName("adicionar-novo");

const updateCards = () => {
  const database = readLocalStorage();
  const cards = document.querySelectorAll(".cardPet");
  for (let card of cards) card.parentNode.removeChild(card);
  database.forEach(createCards);
};

const alertaSemItens = (modo) => {
  if (modo === "mostrar") {
    $semItems.classList.remove("none");
  } else if (modo === "esconder") {
    $semItems.classList.add("none");
  }
};

for (let item of $adicionarNovo)
  item.addEventListener("click", () => {
    $submitForm.value = "Cadastrar";
    showModal();
  });

for (let item of $menu) {
  item.addEventListener("click", () => {
    switch (item.id) {
      case "inicio":
        $menuTitle.innerHTML = "Início";
        break;
    }
  });
}

updateCards();
