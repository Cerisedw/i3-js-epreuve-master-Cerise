export const cacherLivres = () => {
  const ulListe = document.getElementById('listeLivres');
  const allLi = document.getElementsByTagName('li');
  const arrAllLi = [...allLi];
  arrAllLi.forEach((li) => {
    ulListe.removeChild(li);
  });
};
