const WordPage = () => {
    const main = document.querySelector('main');
    const admin = document.querySelector('admin');
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

    //if (isAdmin){
    admin.innerHTML = 
        ` 
        <h1>Mots et synonymes soumis</h1>
        <table>
        <thead>
            <tr>
                <th>Mot</th>
                <th>Sujet</th>  
            </tr>
        </thead>
        <tbody>
        
                <tr>
                    <td>exemple mot </td>
                    <td>exemple synonyme </td>
                </tr>
        
        </tbody>
    </table>
    `;

  //  }

  };
  
  export default WordPage;