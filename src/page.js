export function createCrad(title, imgSrc, description) {
  const card = document.createElement("div").classList("card");
  card.innerHTML = `
    <h3>${title}</h3>
    <img src="${imgSrc}" width="50" height="50" />
    <p>${description}</p>
    `;
  return card;
}
