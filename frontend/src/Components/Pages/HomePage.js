import play from "../../img/play.png";


const HomePage = async () => {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="home">
    <p><span>"INCO</span><span>GNITO"</span></p>
    <img src="${play}">
  </div>
  
  `;
  try {

  const response= await fetch('/api/parties')
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const parties= await response.json();

    console.log(parties);
}catch (err) {
  console.error('HomePage::error: ', err);
}
};



export default HomePage;
