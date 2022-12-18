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

        const response= await fetch('/api/motsTemporaires',options);
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

  async function validerMot(id){
    if(!id) return undefined;
   
    const authenticatedUser = getAuthenticatedUser();
    
    const options = {
        method: 'PATCH',
        
        headers: {
            'Content-Type' : 'application/json',
            Authorization: authenticatedUser.token,

        },

    };

    const response= await fetch(`/api/motsTemporaires/${id}`,options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const motValidé = await response.json(); // json() returns a promise => we wait for the data

    console.log(' nouveau mot validé : ', motValidé);
  };


  async function refuserMot(id){
    if(!id) return undefined;
   
    const authenticatedUser = getAuthenticatedUser();

    const options = {
        method: 'PATCH',
        
        headers: {
            'Content-Type' : 'application/json',
            Authorization: authenticatedUser.token,


        },

    };

    const response= await fetch(`/api/motsTemporaires/refuser/${id}`,options);
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    const motValidé = await response.json(); // json() returns a promise => we wait for the data

    console.log(' nouveau mot validé : ', motValidé);
  };

    


    
  
  export default WordPage;