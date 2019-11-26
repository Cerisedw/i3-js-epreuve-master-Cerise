export const listeImgLivres = (nmbLivre, arrImg) => {
  for (let i = 0; i < nmbLivre; i++) {
    window.localStorage.setItem(`img${i}`, arrImg[i].children[1].attributes.src.nodeValue);
  }
};


export const afficherImgLivres = (nmbLivre) => {
  const divImg = document.createElement('div');
  for (let i = 0; i < nmbLivre; i++) {
    const urlimg = window.localStorage.getItem(`img${i}`);
    const img = document.createElement('img');
    img.src = urlimg;
    divImg.appendChild(img);
  }
  return divImg;
};

export const removeListeImgLivres = (nmbLivre) => {
  for (let i = 0; i < nmbLivre; i++) {
    window.localStorage.removeItem(`img${i}`);
  }
};
