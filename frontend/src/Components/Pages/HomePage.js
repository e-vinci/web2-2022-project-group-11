import play from "../../img/play.png";
import Navigate from "../Router/Navigate";


const HomePage = async () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="home">
    <p><span>"INCO</span><span>GNITO"</span></p>
    <img id="topage" data-uri="/intro" src="${play}">
  </div>
  `;
  try {

  const response= await fetch(`${process.env.API_BASE_URL}/parties`)
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const parties= await response.json();

    console.log(parties);
}catch (err) {
  console.error('HomePage::error: ', err);
}

const playBtn = document.querySelector("#topage");
    playBtn.addEventListener("click", toPage );
    
    function toPage(){
        Navigate('/intro');
    }

};



export default HomePage;
