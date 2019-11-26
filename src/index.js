import { creaMeaBD } from './meaBook';
import { listeCreaBook } from './listeBooks';
import { emprunter, pageEmprunt } from './emprunter';
import { viderReservations } from './viderReservations';

// Json
fetch('../src/data/data.json')
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    const listeLivres = data.books;
    console.log(listeLivres);

    // Création de la page
    const h1 = document.createElement('h1');
    h1.innerText = 'Book en stock';

    // création des éléments
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    const ulLivres = document.createElement('ul');

    if (window.localStorage.getItem('emprunt') === 'true') {
      console.log('toto');
      pageEmprunt();
    } else {
      document.body.appendChild(h1);
      // append les éléments avec les fonctions de création de contenu
      // le header
      header.appendChild(creaMeaBD(listeLivres));

      document.body.appendChild(header);

      // le main
      listeLivres.forEach((livre) => {
        ulLivres.appendChild(listeCreaBook(livre));
      });

      main.appendChild(ulLivres);

      document.body.appendChild(main);

      // le footer

      const h2Footer = document.createElement('h2');
      h2Footer.innerText = 'Réservation en cours';

      const btnEmprunter = document.createElement('button');
      btnEmprunter.innerText = 'Emprunter';
      btnEmprunter.addEventListener('click', emprunter);

      const btnAnnuler = document.createElement('button');
      btnAnnuler.innerText = 'Annuler les réservations';
      btnAnnuler.addEventListener('click', () => {
        viderReservations('livreReserve');
      });

      const divReservation = document.createElement('div');
      divReservation.id = 'reservations';
      footer.append(h2Footer, btnEmprunter, divReservation, btnAnnuler);

      document.body.appendChild(footer);
    }
  });


// import $ from 'jquery';
