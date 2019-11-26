import { books } from './data/books';


const nmbrand = () => Math.floor(Math.random() * books.length);


export const creaMeaBD = (liste) => {
  const divMea = document.createElement('div');
  divMea.id = 'meaBook';
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const desc = document.createElement('p');
  const auteur = document.createElement('p');
  const img = document.createElement('img');

  const idRand = nmbrand();
  const listeBd = liste.filter((l) => l.categorie === 'bd');

  let livre = listeBd.filter((l) => l.id === idRand);

  while (livre.length === 0) {
    const idRand2 = nmbrand();
    livre = listeBd.filter((l) => l.id === idRand2);
  }

  const livreClone = { ...livre[0] };

  h2.innerText = 'BD mise en avant';
  h3.innerText = livreClone.titre;
  desc.innerText = (livreClone.resume === '') ? 'Description indisponible.' : `${livreClone.resume}`;
  auteur.innerText = livreClone.auteur;
  img.src = (livreClone.image === '') ? './assets/images/book-default.png' : `${livreClone.image}`;

  divMea.append(h2, h3, auteur, img, desc);
  return divMea;
};
