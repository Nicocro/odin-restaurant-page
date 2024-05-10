export function createCard(title, imgSrc, description) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${title}</h3>
    <img src="${imgSrc}" width="50" height="50" />
    <p>${description}</p>
    `;
  return card;
}

export function logStuff(string) {
  console.log(string);
}
