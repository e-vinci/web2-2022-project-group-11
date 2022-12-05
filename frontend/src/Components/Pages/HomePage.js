import title from "../../img/titre.png";
import bush from "../../img/bush.png";
import chevron from "../../img/chevron.png";
import inco from "../../img/inco.png";

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="home">
    <div class="title">
      <img class="logo" src="${title}">
    </div>
    <img class="chevron" src="${chevron}">
    <div class="play-countainer">
      <img class="bush" src="${bush}">
      <img class="inco" src="${inco}">
      <img class="bush2" src="${bush}">
    </div>
  </div>
  
  `;

  fetch('http://localhost:3000/mots')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((mots) => {
      console.log(mots);
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    });
};

export default HomePage;
