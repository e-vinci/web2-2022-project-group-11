const WordPage = () => {
    const main = document.querySelector('main');
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
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const newMot = await response.json(); // json() returns a promise => we wait for the data

        console.log(' nouveau mot suggeré : ', newMot);
    };
  };
  
  export default WordPage;