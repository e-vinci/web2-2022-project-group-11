import { getAuthenticatedUser } from "../../utils/auths";

import {isAdmin} from "./LoginPage";
const WordPage = async  () => {
    const main = document.querySelector('main');
    main.innerHTML = '<div id="motsTemporairesWrapper"></div><div id="tabMotsTemporaires"></div>';
    const motsTemporairesWrapper = document.querySelector('#motsTemporairesWrapper');
    const tabMotsTemporaires = document.querySelector('#tabMotsTemporaires');
    const motsTemporairesDefaultHTML =      ` 
    <div class="wrapper-box">
        <div class="curved" id="curved"></div>
        <div class="wrapper" id ="formMotsTemporaires">
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

    const words = await readAllMotsTemporaires();
    console.log(words);

    const motsTemporairesAsHtmlTable = getHtmlMotsTemporairesTableAsString(words);

    function getHtmlMotsTemporairesTableAsString(words) {
        console.log("coucou");
        if (words?.length === undefined || words.length === 0) {
          return '<p class="p-5">No temporary words yet : (</p>';
        }
      
        let htmlMotsTemporairesTable = `<div class="table-responsive p-5">
        <h1>Mots et synonymes suggérés</h1>
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


    
    //if (!isAdmin){
     motsTemporairesWrapper.innerHTML = motsTemporairesDefaultHTML;
     tabMotsTemporaires.innerHTML = motsTemporairesAsHtmlTable;

  // }
   //else{
   // motsTemporairesWrapper.innerHTML = motsTemporairesDefaultHTML;
   //}

   const nouveauMotBtn= document.querySelector("#word_btn");
    nouveauMotBtn.addEventListener("click", suggererMot);


    async function suggererMot(e){
        e.preventDefault();

        const mot= document.querySelector("#word").value;
        const semblable= document.querySelector("#synonym").value;
        const authenticatedUser = getAuthenticatedUser();
        if(authenticatedUser===undefined) {
          formMotsTemporaires.innerHTML+= `<p>Vous devez etre connecté pour suggerer un mot.</p> `;
        }
        else{
          formMotsTemporaires.innerHTML+= `<p>Merci de ta participation !</p> `;
        }
        console.log(authenticatedUser);
        const options = {
            method: 'POST',
            body: JSON.stringify({
                mot,
                semblable,
            

            }),
            headers: {
                'Content-Type' : 'application/json',
                Authorization : authenticatedUser.token,

            },

        };

        const response= await fetch('/api/motsTemporaires',options);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        const newMot = await response.json(); // json() returns a promise => we wait for the data

        console.log(' nouveau mot suggeré : ', newMot);
    };   
    };
    
  
  export default WordPage;