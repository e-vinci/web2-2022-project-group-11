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
  };
  
  export default WordPage;