import { cacherLivres } from './cacherLesLivres';
import { listeCreaBook } from './listeBooks';

export const filtrerLivres = (liste, cat) => {
  const ulDeLivres = document.getElementById('listeLivres');
  cacherLivres();
  const allBD = liste.filter((livre) => livre.categorie === cat);
  allBD.forEach((roman) => {
    ulDeLivres.appendChild(listeCreaBook(roman));
  });
};
