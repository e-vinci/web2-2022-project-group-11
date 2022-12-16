import rules1 from "../../img/rules/1.png";
import rules2 from "../../img/rules/2.png";
import rules3 from "../../img/rules/3.png";
import rules4 from "../../img/rules/4.png";
import rules5 from "../../img/rules/5.png";
import rules6 from "../../img/rules/6.png";
import rules7 from "../../img/rules/7.png";
import rules8 from "../../img/rules/8.png";

let counter = 2;

const RulesPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="rules">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">
            <input type="radio" name="radio-btn" id="radio5">
            <input type="radio" name="radio-btn" id="radio6">
            <input type="radio" name="radio-btn" id="radio7">
            <input type="radio" name="radio-btn" id="radio8">

            <div class="slide first">
                <div class="slide-center">
                    <img src="${rules1}">
                </div>
                <div class="slide-text">
                    <h1>Bienvenue !</h1>
                    <p>Incognito est un jeu de société auquel vous pouvez jouer 
                    avec vos amis sur un meme pc !</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules2}">
                </div>
                <div class="slide-text">
                    <h1>Les civils</h1>
                    <p>Ils recoivent tous le meme mot secret. 
                    Leur objectif est de démasquer l'Incognito et Mr.Xx</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules3}">
                </div>
                <div class="slide-text">
                    <h1>L'Incognito</h1>
                    <p>Il recoit un mot légèrement différent de celui des Civils.
                    Son objectif est de se faire passer pour un Civil !</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules4}">
                </div>
                <div class="slide-text">
                    <h1>Mr.Xx</h1>        
                    <p>Il ne recoit aucun mot. Son but est de faire croire qu'il en a un, tout en essayant
                    de deviner le mot des Civils.</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules5}">
                </div>
                <div class="slide-text">
                    <h1>Obtenez votre mot</h1>
                    <p>Discrètement, chacun à votre tour et sans que les autres joueurs le voient,
                    choississez une carte pour recevoir un mot secret.</br>Pour l'instant, vous ne savez pas 
                    si vous etes un Civil ou un Incognito (Si vous etes Mr.Xx, vous le serez)</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules6}">
                </div>
                <div class="slide-text">
                    <h1>Décrivez votre mot</h1>
                    <p>Chacun décrit son mot. Mr.Xx doit improviser.</br> Ecoutez attentivement,
                    c'est votre chance de découvrir les roles de vos amis et le votre !</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules7}">
                </div>
                <div class="slide-text">
                    <h1>Discussion Time</h1>
                    <p>Les joueurs non éliminés discutent et s'influencent pour décider qui éliminer !</p>
                </div>
            </div>

            <div class="slide">
                <div class="slide-center">
                    <img src="${rules8}">
                </div>
                <div class="slide-text">
                    <h1>Phase de vote</h1>
                    <p>Trouvez un joueur qui a un role différent du votre. Votez en le pointant du doigt
                    en meme temps que les autres joueurs restants.</br>
                    Le joueur avec le plus de votes est éliminé. Il vous suffit de cliquer sur la carte du joueur !</p>
                </div>
            </div>
            
        </div>
        <div class="navigation-auto">
            <div class="auto-btn1 delete"></div>
            <div class="auto-btn2 delete"></div>
            <div class="auto-btn3 delete"></div>
            <div class="auto-btn4 delete"></div>
            <div class="auto-btn5 delete"></div>
            <div class="auto-btn6 delete"></div>
            <div class="auto-btn7 delete"></div>
            <div class="auto-btn8 delete"></div>
        </div>
        <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
            <label for="radio5" class="manual-btn"></label>
            <label for="radio6" class="manual-btn"></label>
            <label for="radio7" class="manual-btn"></label>
            <label for="radio8" class="manual-btn"></label>
        </div>
        
    </div>
    
    `;

   /* document.querySelector(`.auto-btn1`).style.backgroundColor = 'white';

    setInterval(() => {
        document.getElementById(`radio${  counter}`).checked = true;
        const deleteDiv = document.querySelectorAll('.delete'); 
        // eslint-disable-next-line no-param-reassign
        deleteDiv.forEach((div) => {div.style.backgroundColor = 'transparent'});
        document.querySelector(`.auto-btn${ counter}`).style.backgroundColor = 'white';
       counter += 1;
       if(counter > 8) {
           counter = 1;
       }
     }, 7000);

     let count = 0;
    
  const radioBtn = document.querySelectorAll('.radio-btn');
   radioBtn.addEventListener('click', () => {
        count = 0;
        radioBtn.forEach((element) => {
            if(element.checked === true) {
                counter = count;
            };
            count += 1;
        });
    });
*/    
  };

  

 

 
  
  export default RulesPage;