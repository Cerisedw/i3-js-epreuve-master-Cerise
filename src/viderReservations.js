export const viderReservations = (nomDeClasse) => {
  const livres = document.getElementsByClassName(nomDeClasse);
  while (livres.length > 0) {
    livres[0].parentNode.removeChild(livres[0]);
  }
  const allBtnReserver = document.getElementsByClassName('btnReserver');
  const listeBtnReserver = [...allBtnReserver];
  // eslint-disable-next-line no-param-reassign
  listeBtnReserver.forEach((btn) => { btn.disabled = false; });
  console.log(listeBtnReserver);
};
