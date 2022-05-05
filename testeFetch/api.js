"use strict";
//getAnimeGenres of jikan APIv4
//get animes of jikan APIv4
// const anime = document.getElementById("anime");

const getSeasonNow = async () => {
  const url = "https://api.jikan.moe/v4/seasons/now";
  const response = await fetch(url);
  const data = await response.json();
  const image = await data.data[3].images.jpg.image_url;
  const anime = Object.keys(data.data);
  console.log(data.data[3].images.jpg.image_url);
  console.log(anime);
  return image;
};

// const getSeasonNow = async () => {
//   const url = "https://api.jikan.moe/v4/seasons/now";
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(Object.values(data.data[3].images.jpg.image_url));
//   return Object.keys(data.data);
// };

// const pesquisarSeasonNow = async () => {
//   const url = `https://api.jikan.moe/v4/genres/anime/1/`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

const criarImg = (imagem) => {
  const img = document.createElement("img");
  img.src = imagem;
  return img;
};

const carregarImgAnimes = async () => {
  const container = document.getElementById("imagem-container");
  // const anime = document.getElementById("img").value;
  const imagens = await getSeasonNow();

  const tagImagens = imagens.message.map(criarImg);
  container.replaceChildren(...tagImagens);
};

// const carregarSeason = async () => {
//   const lista = document.getElementById("lista-animes");
//   const anime= await getSeasonNow();
//   lista.innerHTML = `
//     <option>
//         ${anime.join("</option><option>")}
//     </option>`;
// };

// document.getElementById("pesquisar").addEventListener("click", carregarImagens);

// carregarRacas();

getSeasonNow();
