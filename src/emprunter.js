import { listeImgLivres, afficherImgLivres, removeListeImgLivres } from './listeImgLivres';

const reloadPage = () => {
  removeListeImgLivres(window.localStorage.getItem('nmbL'));
  window.localStorage.removeItem('nmbL');
  window.localStorage.removeItem('emprunt');
  window.localStorage.removeItem('hNow');
  window.location.reload();
};

export const emprunter = () => {
  const nmbLivres = document.getElementsByClassName('livreReserve');
  const nmbL = nmbLivres.length;
  const date = new Date();
  const hNow = date.getHours();
  listeImgLivres(nmbL, [...nmbLivres]);

  window.localStorage.setItem('nmbL', nmbL);
  window.localStorage.setItem('emprunt', true);
  window.localStorage.setItem('hNow', hNow);


  if (nmbL < 1) {
    // eslint-disable-next-line no-alert
    alert('Vous ne pouvez pas faire un emprunt vide');
  } else {
    document.body.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.innerText = (nmbL > 1)
      ? `Vos ${nmbL} livres sont empruntés. Vous pouvez passer les chercher aujourd'hui avant ${hNow + 2}h.`
      : `Votre livre est emprunté. Vous pouvez passer le chercher aujourd'hui avant ${hNow + 2}h.`;
    document.body.appendChild(h2);
    const btnReload = document.createElement('button');
    btnReload.innerText = 'Annuler la commande';
    btnReload.addEventListener('click', reloadPage);
    document.body.appendChild(afficherImgLivres(nmbL));
    document.body.appendChild(btnReload);
  }
};


export const pageEmprunt = () => {
  const date = new Date();
  const hNow = date.getHours();
  if (hNow <= parseInt(window.localStorage.getItem('hNow'), 10)) {
    document.body.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.innerText = 'Votre délais de récupération à expirer. Veuillez réactualiser votre réservation.';
    document.body.appendChild(h2);
    const btnReload = document.createElement('button');
    btnReload.innerText = 'Annuler la commande';
    btnReload.addEventListener('click', reloadPage);
    document.body.appendChild(btnReload);
  } else {
    document.body.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.innerText = (parseInt(window.localStorage.getItem('nmbL'), 10) > 1)
      ? `Vos ${window.localStorage.getItem('nmbL')} livres sont empruntés. Vous pouvez passer les chercher aujourd'hui avant ${parseInt(window.localStorage.getItem('hNow'), 10) + 2}h.`
      : `Votre livre est emprunté. Vous pouvez passer le chercher aujourd'hui avant ${parseInt(window.localStorage.getItem('hNow'), 10) + 2}h.`;
    document.body.appendChild(h2);
    document.body.appendChild(afficherImgLivres(window.localStorage.getItem('nmbL')));
    const btnReload = document.createElement('button');
    btnReload.innerText = 'Annuler la commande';
    btnReload.addEventListener('click', reloadPage);
    document.body.appendChild(btnReload);
  }
};
