/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
import { getAuthenticatedUser } from "../../utils/auths";

const WordPage = async  () => {
    const main = document.querySelector('main');
    let isAdmin= false; 

    if(getAuthenticatedUser()!= undefined){
    
      const authenticatedUser= getAuthenticatedUser();
      isAdmin=authenticatedUser.isAdmin;

       


    }

    main.innerHTML = '<div id="motsTemporairesWrapper"></div><div id="tabMotsTemporaires"></div>';
    const motsTemporairesWrapper = document.querySelector('#motsTemporairesWrapper');
    const tabMotsTemporaires = document.querySelector('#tabMotsTemporaires');
    const motsTemporairesDefaultHTML =      ` 
    <div class="wrapper-box">

        <div class="wrapper" id ="formMotsTemporaires">
        <div class="curved" id="curved"></div>
        <h1>Mots</h1>
        <p>Suggerez un mot et son semblable</p>
            <div class="input-box"> 
                <input type="text" name="word" placeholder="Mot" id= "word">
            </div>
          
            <div class="input-box"> 
                <input  type="text" name="synonym" placeholder="Semblable" id="synonym">
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
      const response = await fetch(`${process.env.API_BASE_URL}/motsTemporaires`);
  
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

    function getHtmlMotsTemporairesTableAsString(wordsi) {
  
        if (wordsi?.length === undefined || words.length === 0) {
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
      
        wordsi.forEach((element) => {
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


    
      if(isAdmin===true){
         motsTemporairesWrapper.innerHTML = motsTemporairesDefaultHTML;
         tabMotsTemporaires.innerHTML = motsTemporairesAsHtmlTable;
    
      }
      else  {
    
          motsTemporairesWrapper.innerHTML = motsTemporairesDefaultHTML;
      }
      
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

        const response= await fetch(`${process.env.API_BASE_URL}/motsTemporaires`,options);
        if(response.status===401) main.innerHTML+= `<p> vous devez etre connecté pour suggerer un mot.</p> `;
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        const newMot = await response.json(); // json() returns a promise => we wait for the data

        console.log(' nouveau mot suggeré : ', newMot);
        WordPage();

    }; 
    
    
    attachEventListeners();
  };  
  function attachEventListeners() {
    const tabMots = document.querySelector('#tabMotsTemporaires');
  
    tabMots.querySelectorAll('.accepter').forEach((button) => {
      button.addEventListener('click', async (e) => {
        const { elementId } = e.target.dataset;
        console.log("clicked");
        console.log(elementId);
        await validerMot(elementId);
        WordPage();
      });
    }); 
    tabMots.querySelectorAll('.refuser').forEach((button) => {
      button.addEventListener('click', async (e) => {
        const { elementId } = e.target.dataset;
        console.log("clicked");
        await refuserMot(elementId);
        WordPage();
      });
    }); 
  };

  async function validerMot(id) {
    if(!id) return undefined;
   
    const authenticatedUser = getAuthenticatedUser();
    
    const options = {
        method: 'PATCH',
        
        headers: {
            'Content-Type' : 'application/json',
            Authorization: authenticatedUser.token,

        },

    };

    const response= await fetch(`${process.env.API_BASE_URL}/motsTemporaires/${id}`,options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const motValidé = await response.json(); // json() returns a promise => we wait for the data

    console.log(' nouveau mot validé : ', motValidé);
    return true;
  };


  async function refuserMot(id) {
    if(!id) return undefined;
   
    const authenticatedUser = getAuthenticatedUser();

    const options = {
        method: 'PATCH',
        
        headers: {
            'Content-Type' : 'application/json',
            Authorization: authenticatedUser.token,


        },

    };

    const response= await fetch(`${process.env.API_BASE_URL}/motsTemporaires/refuser/${id}`,options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const motValidé = await response.json(); // json() returns a promise => we wait for the data

    console.log(' nouveau mot validé : ', motValidé);

    return true;
  };

    


    
  
  export default WordPage;