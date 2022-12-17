import {isAdmin} from "./LoginPage";
const WordPage = async  () => {
    const main = document.querySelector('main');
    main.innerHTML = '<div id="motsTemporairesWrapper"></div><div id="tabMotsTemporaires"></div>';
    const motsTemporairesWrapper = document.querySelector('#motsTemporairesWrapper');
    const tabMotsTemporaires = document.querySelector('#tabMotsTemporaires');
    const motsTemporairesDefaultHTML =      ` 
    <p class="ranking">Vous devez etre connecté pour ajouter un mot</p>
    <div class="wrapper-box">
        <div class="curved" id="curved"></div>
        <div class="wrapper">
        <h1>Suggerez un mot et son synonyme</h1>
            <div class="input-box"> 
                <input type="text" name="word" placeholder="Mot" id= "word">
            </div>
          
            <div class="input-box"> 
                <input  type="text" name="synonym" placeholder="Synonyme" id="synonym">
            </div>
            <div>
            <button id="word_btn" type="submit">Soumettre</button>
            </div>
        </form>
        </div>
        </div>
`;
    const readAllMotsTemporaires = async () => {
    try {
      const response = await fetch('/api/motsTemporaires');
  
      if (!response.ok) {
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      }
      const motsTemporaires = await response.json();
      return motsTemporaires;
    } catch (err) {
      console.error('wordPage::error: ', err);
      throw err;
    }
    };
    const mots = await readAllMotsTemporaires;
      
    const motsTemporairesAsHtmlTable = getHtmlMotsTemporairesTableAsString(mots);

      
    function getHtmlMotsTemporairesTableAsString(words) {
        console.log("coucou");
        if (words?.length === undefined || words.length === 0) {
          return '<p class="p-5">No temporary words yet : (</p>';
        }
      
        let htmlMotsTemporairesTable = `<div class="table-responsive p-5">
        <table class="table">
      <thead>
        <tr>
          <th scope="col">Mots</th>
          <th scope="col">Synonymes</th>
          <th scope="col">Validation</th>
          <th scope="col">Refus</th>
        </tr>
      </thead>
      <tbody>`;
      
        words.forEach((element) => {
          htmlMotsTemporairesTable += `
          <tr>
            <td>${element.mot}</td>
            <td>${element.semblable}</td>
            <td><button type="button" class="btn btn-info accepter" data-element-id="${element.id}">Accepter</button></td>
            <td><button type="button" class="btn btn-info refuser" data-element-id="${element.id}">Refuser</button></td>
          </tr>
          `;
        });
      
        return htmlMotsTemporairesTable;
      };
    
    

    if (isAdmin){
     motsTemporairesWrapper.innerHTML = motsTemporairesDefaultHTML;
     tabMotsTemporaires.innerHTML = motsTemporairesAsHtmlTable;

   }
   else{
    motsTemporairesWrapper.innerHTML = motsTemporairesDefaultHTML;
   }

   const nouveauMotBtn= document.querySelector("#word_btn");
    nouveauMotBtn.addEventListener("click", suggererMot);


    async function suggererMot(e){
        e.preventDefault();

        const mot= document.querySelector("#word").value;
        const semblable= document.querySelector("#synonym").value;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                mot,
                semblable,
            

            }),
            headers: {
                'Content-Type' : 'application/json',

            },

        };

        const response= await fetch('/api/motsTemporaires',options);
        if(response.status===401) main.innerHTML+= `<p> vous devez etre connecté pour suggerer un mot.</p> `;
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        const newMot = await response.json(); // json() returns a promise => we wait for the data

        console.log(' nouveau mot suggeré : ', newMot);
    };   
    };
  
  export default WordPage;