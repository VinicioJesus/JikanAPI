"use strict";
//getAnimeGenres of jikan APIv4 
//get animes of jikan APIv4
const anime = document.getElementById("anime");

const getAllAnimes = async () => {
  const url = "https://api.jikan.moe/v4/anime";
  const response = await fetch(url);
  const data = await response.json();
  return Object.keys(data.anime);
};

const pesquisarAnime = async () => {
  const url = `https://api.jikan.moe/v4/genres/anime/1/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const criarImg = (imagem) => {
  const img = document.createElement("img");
  img.src = imagem;
  return img;
};

const carregarImagens = async () => {
  const container = document.getElementById("imagem-container");
  const anime = document.getElementById("anime").value;
  const imagens = await pesquisarCachorro(raca);

  const tagImagens = imagens.message.map(criarImg);
  container.replaceChildren(...tagImagens);
};

const carregarRacas = async () => {
  const lista = document.getElementById("lista-animes");
  const animes = await pesquisarAnime();
  lista.innerHTML = `<option> ${anime.join("</option><option>")} </option>`;
};

document.getElementById("pesquisar").addEventListener("click", carregarImagens);

carregarRacas();
