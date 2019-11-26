import { reserverLivre } from './reserverLivre';

export const listeCreaBook = (livre) => {
  const liLivre = document.createElement('li');
  const h3Livre = document.createElement('h3');
  const descLivre = document.createElement('p');
  const auteurLivre = document.createElement('p');
  const imgLivre = document.createElement('img');

  // eslint-disable-next-line no-nested-ternary
  liLivre.className = (livre.categorie === 'roman') ? 'roman' : ((livre.categorie === 'bd') ? 'bd' : 'essai');

  h3Livre.innerText = livre.titre;
  descLivre.innerText = (livre.resume === '') ? 'Description indisponible.' : `${livre.resume}`;
  auteurLivre.innerText = livre.auteur;
  imgLivre.src = (livre.image === '') ? './assets/images/book-default.png' : `${livre.image}`;

  const btnReserver = document.createElement('button');
  btnReserver.innerText = 'Réserver';
  btnReserver.className = 'btnReserver';
  btnReserver.addEventListener('click', (e) => {
    const nmbLivres = document.getElementsByClassName('livreReserve');
    const nmbL = nmbLivres.length;
    if (nmbL > 2) {
      // eslint-disable-next-line no-alert
      alert('Vous ne pouvez pas réserver plus de 3 livres.');
    } else {
      reserverLivre(livre, e.target);
    }
  });

  liLivre.append(h3Livre, auteurLivre, imgLivre, descLivre, btnReserver);
  return liLivre;
};
