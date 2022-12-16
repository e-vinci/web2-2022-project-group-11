import mrxx from "../../img/mrxx.png";
import spy from "../../img/spy.png";
import who from "../../img/who.png";
import civil from "../../img/civil.png";
import test1 from "../../img/avatar/nun.png";
import test2 from "../../img/avatar/firefighter.png";
import test3 from "../../img/avatar/chef.png";
import test4 from "../../img/avatar/racer.png";
import test5 from "../../img/avatar/pilot.png";
import card from "../../img/carte.png";
import chevronD from "../../img/chevron-character-droit.png";
import chevronG from "../../img/chevron-character-gauche.png";
import warning from "../../img/warning.png";

const PartyPage = () => {
    const main = document.querySelector('main');
    const nombreJoueurs= localStorage.getItem("nbrJoueurs");
    const nombreMrXX= localStorage.getItem("nbrIncognitos");
    const nombreIncognitos= localStorage.getItem("nbrX");

    

    main.innerHTML = `
        
        <div class="action-content">
            <div class="action-card">
                <h1>Joueur 1</h1>
                <h2>Choisis une carte</h2>
                <img src="${card}">
                <p class="action-ok">OK</p>
            </div>
        </div>
        <div class="ajouter-content">
            <div class="ajouter-card">
                <h2>Choisis ton personnage</h2>
                <div class="character">
                    <img class="chara-chevron" src="${chevronG}">
                    <img class="chara-avat" src="${test5}">
                    <img class="chara-chevron" src="${chevronD}">
                </div>
                <input class="ajouter-input" type="text" placeholder="Choisis un nom" name="nom">
                <h3>Saisis ton nom pour dévoiler ton mot secret</h3>
                <p class="ajouter-ok">Lis ton mot secret</p>
            </div>
        </div>
        <div class="civil-content">
            <div class="civil-card">
                <h1>1 Civil(e) en moins !</h1>
                <img src="${civil}">
                <h2>Valérie</h2>
                <p class="action-ok">OK</p>
            </div>
        </div>
        <div class="mrxx-content">
            <div class="mrxx-card">
                <h1>Mr.Xx a<br>été démasqué</h1>
                <img src="${mrxx}">
                <input type="text" placeholder="Deviner ?" name="deviner">
                <h2>Jérémi, devine le mot des civils pour gagner !</h2>
                <p class="action-ok">OK</p>
            </div>
        </div>
        <p class="invi">i</p>
        <div class="tour-container">
            <div class="tour-line">
            </div>
            <img src="${warning}">
            <div class="tour-text">
                <h1>Joueur 1</h1>
                <p>Decrivez votre mot secret dans l'ordre indiqué,....</p>
            </div>
        </div>
        <div class="info-container">
            <div class="info-rest">
                <p>Infiltrés restants</p>
                <div class="rest-container">
                    <div class="rest">
                        <img src="${mrxx}">
                        <p>2</p>
                    </div>
                    <div class="rest">
                        <img src="${spy}">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div class="info-effets">
            </div>
        </div>
        <div class="card-container">
            <div class="card">
                <img class="avatwho" src="${who}">
            </div>
            <div class="card">
                <img class="avatwho" src="${who}">
            </div>
            <div class="card">
                <img class="avatwho" src="${who}">
            </div>
            <div class="card">
                <img class="avatwho" src="${who}">
            </div>
            <div class="card">
                <img class="avatwho" src="${who}">
            </div>
            <div class="card card-mort">
                <img class="avat" src="${mrxx}">
                <p class="avatname">Stalone</p>
            </div>
            <div class="card">
                <img class="avat" src="${test1}">
                <p class="avatname">Gabriel</p>
                <div class="passage">
                    <p>2</p>
                </div>
            </div>
            <div class="card">
                <img class="avat" src="${test4}">
                <p class="avatname">Quentin</p>
                <div class="passage">
                    <p>3</p>
                </div>
            </div>
            <div class="card">
                <img class="avat" src="${test2}">
                <p class="avatname">Moha</p>
                <div class="passage uno">
                    <p>1</p>
                </div>
            </div>
            <div class="card">
                <img class="avat" src="${test3}">
                <p class="avatname">Terminatodelaconfrr</p>
                <div class="elimine">
                    <p>Éliminer</p>
                </div>
            </div>
        </div>
        <div class="vote-but">
            <p>Passer au vote</p>
        </div>
    `;
    sayHello();

    function sayHello(){
        console.log("coucou toi");
    }
    createPartie();
    



    async function createPartie(e){
       // e.preventDefault();
        console.log("hello");
        const idMembre=1;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                nombreJoueurs,
                nombreIncognitos,
                nombreMrXX,
                idMembre,

            }),
            headers: {
                'Content-Type' : 'application/json',

            },

        };
        console.log(options)

        const response= await fetch('/api/parties',options);
        console.log(response);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const newPartie = await response.json(); // json() returns a promise => we wait for the data

        console.log('New partie added : ', newPartie);
    };
};

export default PartyPage;