const isAdmin = false;

const WordPage = async  () => {
    const main = document.querySelector('main');
    if (!isAdmin){
    main.innerHTML = 
        ` 
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
        <div class="">
        <h1>Mots et synonymes soumis (admin)</h1>
        <table>
        <thead>
            <tr>
                <th>Mot</th>
                <th>Synonyme</th>
                <th>Validation</th>
                <th>Refus</th>
            </tr>
        </thead>
        <tbody>
            <form action="/members/admin/question" method="post">
                <tr>
                    <td>exemple</td>
                    <td>exemple</td>
                    <input type="hidden" name="word_id" value=>
                    <td>
                        <input type="submit" value="Accepter" name="btn" class="accepter">
                    </td>
                    <td>
                        <input type="submit" value="Refus" name="btn" class="refus">
                    </td>
                </tr>
                </form>
        </tbody>
    </table>
    </div>
    `;

   }
   else{
    main.innerHTML = `
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
   }
    try {
        console.log("ok"); 
        const response= await fetch('/api/motsTemporaires')
            if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
          const motsTemporaires= await response.json();
      
          console.log(motsTemporaires);
      }catch (err) {
        console.error('wordPage::error: ', err);
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
        if(response.status==401) main.innerHTML+= `<p> vous devez etre connecté pour suggerer un mot.</p> `;
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
        const newMot = await response.json(); // json() returns a promise => we wait for the data

        console.log(' nouveau mot suggeré : ', newMot);
    };
    //icic je rajoute le coms

   
   
  };
  
  export default WordPage;