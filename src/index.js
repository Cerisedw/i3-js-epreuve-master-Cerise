import { creaMeaBD } from './meaBook';
import { listeCreaBook } from './listeBooks';
import { emprunter, pageEmprunt } from './emprunter';
import { viderReservations } from './viderReservations';
import { cacherLivres } from './cacherLesLivres';
import { filtrerLivres } from './fonctionFiltre';

// Json
fetch('../src/data/data.json')
  .then((res) => res.json())
  .then((data) => {
    const listeLivres = data.books;

    // Création de la page
    const h1 = document.createElement('h1');
    h1.innerText = 'Book en stock';

    // création des éléments
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    const ulLivres = document.createElement('ul');
    ulLivres.id = 'listeLivres';

    if (window.localStorage.getItem('emprunt') === 'true') {
      pageEmprunt();
    } else {
      document.body.appendChild(h1);
      // append les éléments avec les fonctions de création de contenu
      // le header

      // Bouton de filtre
      const btnshowAll = document.createElement('button');
      btnshowAll.innerText = 'Tous les livres';
      btnshowAll.addEventListener('click', () => {
        const ulDeLivres = document.getElementById('listeLivres');
        cacherLivres();
        listeLivres.forEach((livre) => {
          ulDeLivres.appendChild(listeCreaBook(livre));
        });
      });

      const btnBD = document.createElement('button');
      btnBD.innerText = 'BDs';
      btnBD.addEventListener('click', () => {
        filtrerLivres(listeLivres, 'bd');
      });

      const btnEssai = document.createElement('button');
      btnEssai.innerText = 'Essais';
      btnEssai.addEventListener('click', () => {
        filtrerLivres(listeLivres, 'essai');
      });

      const btnRoman = document.createElement('button');
      btnRoman.innerText = 'Romans';
      btnRoman.addEventListener('click', () => {
        filtrerLivres(listeLivres, 'roman');
      });


      header.appendChild(creaMeaBD(listeLivres));
      header.append(btnshowAll, btnBD, btnEssai, btnRoman);


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
