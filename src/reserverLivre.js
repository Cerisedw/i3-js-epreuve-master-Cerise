export const reserverLivre = (livre, btn) => {
  console.log(`toto${livre.id}`);
  const divRes = document.getElementById('reservations');
  const divLivre = document.createElement('div');
  divLivre.className = 'livreReserve';

  const h3LivreR = document.createElement('h3');
  const auteurLivreR = document.createElement('p');
  const imgLivreR = document.createElement('img');


  const livreClone = { ...livre };
  h3LivreR.innerText = livreClone.titre;
  auteurLivreR.innerText = livreClone.auteur;
  imgLivreR.src = (livreClone.image === '') ? './assets/images/book-default.png' : `${livreClone.image}`;
  divLivre.append(h3LivreR, imgLivreR, auteurLivreR);
  divRes.appendChild(divLivre);
  // eslint-disable-next-line no-param-reassign
  btn.disabled = true;
};
