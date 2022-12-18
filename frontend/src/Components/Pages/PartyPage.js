/* eslint-disable no-unreachable-loop */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable prefer-const */
import mrxx from "../../img/mrxx.png";
import spy from "../../img/spy.png";
import who from "../../img/who.png";
import civil from "../../img/civil.png";

import perso1 from "../../img/avatar/1.png";
import perso2 from "../../img/avatar/2.png";
import perso3 from "../../img/avatar/3.png";
import perso4 from "../../img/avatar/4.png";
import perso5 from "../../img/avatar/5.png";
import perso6 from "../../img/avatar/6.png";
import perso7 from "../../img/avatar/7.png";
import perso8 from "../../img/avatar/8.png";
import perso9 from "../../img/avatar/9.png";
import perso10 from "../../img/avatar/10.png";
import perso11 from "../../img/avatar/11.png";
import perso12 from "../../img/avatar/12.png";
import perso13 from "../../img/avatar/13.png";
import perso14 from "../../img/avatar/14.png";
import perso15 from "../../img/avatar/15.png";
import perso16 from "../../img/avatar/16.png";
import perso17 from "../../img/avatar/17.png";
import perso18 from "../../img/avatar/18.png";
import perso19 from "../../img/avatar/19.png";
import perso20 from "../../img/avatar/20.png";
import perso21 from "../../img/avatar/21.png";

import card from "../../img/carte.png";
import warning from "../../img/warning.png";
import { clearPage } from '../../utils/render';


const PartyPage = () => {
    const nombreJoueurs= localStorage.getItem("nbrJoueurs");
    const nombreMrXX= localStorage.getItem("nbrX");
    const nombreIncognitos= localStorage.getItem("nbrIncognitos");
    clearPage();
    
    const main = document.querySelector('main');
    
    main.innerHTML = `
        <div class="pop-up">
        
        
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
        </div>
        <p class="invi">i</p>
        <div class="tour-container">
            <div class="tour-line">
            </div>
            <img src="${warning}">
            <div class="tour-text">
                <h1 id="i-title">Joueur 1</h1>
                <p id="i-message">Choisis une carte</p>
            </div>
        </div>
        <div class="info-container">
            <div class="info-rest">
                <p>Infiltrés restants</p>
                <div class="rest-container">
                    <div class="rest">
                        <img src="${mrxx}">
                        <p>${nombreMrXX}</p>
                    </div>
                    <div class="rest">
                        <img src="${spy}">
                        <p>${nombreIncognitos}</p>
                    </div>
                </div>
            </div>
            <div class="info-effets">
            </div>
        </div>
        <div class="card-container">

        </div>
        <div class="vote-div">

        </div>
    `;

    // let idPerso = 1;
    let idCard = 0;
    let input = 'rien';

    const cardContainer = document.querySelector(".card-container");

    const popUp = document.querySelector(".pop-up");
    const infoTitle = document.querySelector("#i-title");
    const infoMessage = document.querySelector("#i-message");

    
    
    // eslint-disable-next-line prefer-const
    let o = 0;

    createCard();
    lancerPopUpAction(o);

  



    function createCard() {
        let u = 0;
        let cards = ``;
        while (u < nombreJoueurs) {
            cards += `
                <div class="cardC" id="${u+1}">
                    <img class="avatwho" src="${who}">
                    <div class="passage-div">
                    </div>
                </div>
            `;
            u += 1;
        }
        cardContainer.innerHTML = cards;
    };

    let stop = 0;
    let stop2 =0;

    function voirCard() {
        const clickCard = document.querySelectorAll('.cardC');
        // eslint-disable-next-line no-plusplus
    
            for(let i=0; i < clickCard.length; i++) {
                // eslint-disable-next-line no-const-assign
                clickCard[i].addEventListener('click', () => {
                    idCard = clickCard[i].id;
                    
                    if(stop === 1) {
                        console.log(idCard);
                    } else {
                        lancerPopUpAjouter();
                    }
                    
                });
        
            } 

    }


    function lancerPopUpAction(object) {

        infoTitle.innerHTML = `Joueur ${o+1}`;
        infoMessage.innerHTML = `Choisis une carte`;
        // eslint-disable-next-line prefer-const
        let pop = `
            <div class="action-content">
                <div class="action-card">
                    <h1>Joueur ${object+1}</h1>
                    <h2>Choisis une carte</h2>
                    <img src="${card}">
                    <p class="action-ok">OK</p>
                </div>
            </div>
        `;

        popUp.innerHTML = pop;
        retirerPopUp(".action-content");
    };

    let tableauPerso = [perso1, perso2, perso3, perso4, perso5, perso6, perso7, perso8, perso9, perso10,
                            perso11, perso12, perso13, perso14, perso15, perso16, perso17, perso18, perso19, perso20, perso21];
    let randomPerso = Math.floor(Math.random() * 21);

    function lancerPopUpAjouter() {
        // eslint-disable-next-line prefer-const
        randomPerso = Math.floor(Math.random() * 21);
        let pop = `
            <div class="ajouter-content">
                <div class="ajouter-card">
                    <div class="character">
                        <img class="chara-avat" src="${tableauPerso[randomPerso]}">
                    </div>
                    <input class="ajouter-input" type="text" placeholder="Choisis un nom" name="nom" autocomplete="off">
                    <h3>Saisis ton nom pour dévoiler ton mot secret</h3>
                    <p class="ajouter-ok" id="ajouter-perso">Lis ton mot secret</p>
                </div>
            </div>
        `;

        popUp.innerHTML = pop;
        créerJoueur(idCard);
    };

    function créerJoueur(carte) {
        const butCréer = document.querySelector("#ajouter-perso");
        const carteSelectionnée = document.getElementById(carte); 

        butCréer.addEventListener('click', () => {
            carteSelectionnée.classList.remove("cardC");
            carteSelectionnée.classList.add("card");
            carteSelectionnée.classList.add("jeu");
            carteSelectionnée.classList.add("vie");
            input = document.querySelector(".ajouter-input").value;

            if(input === '') {
                window.alert("Veillez rentrer votre nom");
            } else {
                carteSelectionnée.innerHTML = `
                <img class="avat" src="${tableauPerso[randomPerso]}">
                <p class="avatname">${input}</p>
                <div class="passage-div">
                </div>
                `;

                popUp.innerHTML = ``;
                trouverRole(idCard);
            }

        });
    };

    let civilRestant = nombreJoueurs - nombreIncognitos - nombreMrXX;
    let incognitoRestant = nombreIncognitos;
    let mrxxRestant = nombreMrXX;
    let joueurRestant = nombreJoueurs;
    let randomNombre = 0;

    function trouverRole(id) {
        const idJoueur = document.getElementById(id);
        let role = 'Incognito';
        randomNombre = Math.ceil(Math.random() * joueurRestant);

        if(civilRestant >= 1 && incognitoRestant >= 1 && mrxxRestant >= 1) {
            
            if(randomNombre >= 1 && randomNombre <= civilRestant) {
                role = 'Civil';
                idJoueur.classList.add("civil");
                civilRestant -= 1;
                joueurRestant -= 1;
            } else if(randomNombre > +civilRestant + +incognitoRestant) {
                role = 'Mr.Xx';
                idJoueur.classList.add("mrxx");
                mrxxRestant -= 1;
                joueurRestant -= 1;
            } else {
                role = 'Incognito';
                idJoueur.classList.add("inco");
                incognitoRestant -= 1;
                joueurRestant -= 1;
            }

        } else if(civilRestant >= 1 && incognitoRestant >= 1 && mrxxRestant <= 0) {

            if(randomNombre >= 1 && randomNombre <= civilRestant) {
                role = 'Civil';
                idJoueur.classList.add("civil");
                civilRestant -= 1;
                joueurRestant -= 1;
            } else {
                role = 'Incognito';
                idJoueur.classList.add("inco");
                incognitoRestant -= 1;
                joueurRestant -= 1;
            }

        } else if(civilRestant >= 1 && incognitoRestant <= 0 && mrxxRestant >= 1) {

            if(randomNombre >= 1 && randomNombre <= civilRestant) {
                role = 'Civil';
                idJoueur.classList.add("civil");
                civilRestant -= 1;
                joueurRestant -= 1;
            } else {
                role = 'Mr.Xx';
                idJoueur.classList.add("mrxx");
                mrxxRestant -= 1;
                joueurRestant -= 1;
            }

        } else if(civilRestant <= 0 && incognitoRestant >= 1 && mrxxRestant >= 1) {

            if(randomNombre >= 1 && randomNombre <= incognitoRestant) {
                role = 'Incognito';
                idJoueur.classList.add("inco");
                incognitoRestant -= 1;
                joueurRestant -= 1;
            } else {
                role = 'Mr.Xx';
                idJoueur.classList.add("mrxx");
                mrxxRestant -= 1;
                joueurRestant -= 1;
            }

        } else if(civilRestant >= 1 && incognitoRestant <= 0 && mrxxRestant <= 0) {
            role = 'Civil';
            idJoueur.classList.add("civil");
            civilRestant -= 1;
            joueurRestant -= 1;
        } else if(civilRestant <= 0 && incognitoRestant >= 1 && mrxxRestant <= 0) {
            role = 'Incognito';
            idJoueur.classList.add("inco");
            incognitoRestant -= 1;
            joueurRestant -= 1;
        } else if(civilRestant <= 0 && incognitoRestant <= 0 && mrxxRestant >= 1) {
            role = 'Mr.Xx';
            idJoueur.classList.add("mrxx");
            mrxxRestant -= 1;
            joueurRestant -= 1;
        }

        let pop = ``;

        if(role === 'Civil') {
            pop = ` 
                <div class="action-content">
                    <div class="role-card">
                        <h1>${input}</h1>
                        <h4>Ton mot secret est</h4>
                        <h5>Banane</h5>
                        <p class="action-ok">Suivant</p>
                    </div>
                </div>
            `;
        } else if(role === 'Incognito') {
            pop = ` 
                <div class="action-content">
                    <div class="role-card">
                        <h1>${input}</h1>
                        <h4>Ton mot secret est</h4>
                        <h5>Banane</h5>
                        <p class="action-ok">Suivant</p>
                    </div>
                </div>
            `;
        } else if(role === 'Mr.Xx') {
            pop = ` 
                <div class="action-content">
                    <div class="role-card">
                        <h1>${input}</h1>
                        <h4>Tu n'as pas de mot secret</h4>
                        <h5>Tu es Mr.Xx</h5>
                        <p class="action-ok">Suivant</p>
                    </div>
                </div>
            `;
        }

        

        popUp.innerHTML = pop;
        document.querySelector(".action-content").classList.add("role-content");
        retirerPopUpRole(); 
    };

    function retirerPopUpRole() {
        const remove = document.querySelector(".role-content");

        remove.addEventListener('click', () => {
            popUp.innerHTML = ``;
            if(o+1 >= nombreJoueurs) {
                infoTitle.innerHTML = `Heure de décrire`;
                infoMessage.innerHTML = `Décrivez votre mot secret dans l'ordre indiqué, en utilisant juste un mot`;
                
                let vote = `
                    <div class="vote-but">
                        <p>Passer au vote</p>
                    </div>
                `;

                document.querySelector('.vote-div').innerHTML = vote;
                donnerOrdrePassage();
                stop = 1;
                clickVote();
            } else {
                o += 1;
                lancerPopUpAction(o);
            }
        });
    };

    function clickVote() {
        const boutonVote = document.querySelector(".vote-but");

        boutonVote.addEventListener('click', () => {
            voter();
            document.querySelector(".vote-div").innerHTML = ``;
        });
    };

    function voter() {
        document.querySelector(".card").lastElementChild.innerHTML = ``;
        const envie = document.querySelectorAll(".vie");

        for(let i=0; i < envie.length; i++) {
            let pop = `
                <div class="elimine">
                    <p>Éliminer</p>
                </div>
            `;
            envie[i].lastElementChild.innerHTML = pop;
        }

        infoTitle.innerHTML = `Phase de l'élimination`;
        infoMessage.innerHTML = `Discutez qui éliminer puis votez tous en meme temps en pointant du doigt !`;
        eliminer();
    };


    function eliminer() {
        const envie = document.querySelectorAll(".vie");
        stop2 = 0;

        for(let i=0; i < envie.length; i++) {
            envie[i].addEventListener('click', () => {
                if(stop2 === 1) {
                    // empty
                } else {

                    for(let v=0; v < envie.length; v++) {
                        envie[v].lastElementChild.innerHTML = ``;
                    }

                    envie[i].classList.remove('vie');
                    envie[i].classList.add('card-mort');

                    console.log(envie[i].classList.contains("civil"));
                    
                    if(envie[i].classList.contains("civil") === true) {
                        console.log("civil");
                        envie[i].querySelector('.avat').src = civil;
                    } else if(envie[i].classList.contains("inco") === true) {
                        console.log("inco");
                        envie[i].querySelector('.avat').src = spy;
                    } else if(envie[i].classList.contains("mrxx") === true) {
                        console.log("mrxx");
                        envie[i].querySelector('.avat').src = mrxx;
                    }
                    

                    let vote = `
                        <div class="vote-but">
                            <p>Passer au vote</p>
                        </div>
                    `;

                    document.querySelector('.vote-div').innerHTML = vote;
                    infoTitle.innerHTML = `Heure de parlementer`;
                    infoMessage.innerHTML = `Avec les informations que vous avez en plus, trouver qui se cache parmis vous`;
                    clickVote();
                    stop2 = 1;
                }
            });
        }

    };

    function donnerOrdrePassage() {
        const tabCivil = document.querySelectorAll(".civil");
        const tabJoueur = document.querySelectorAll(".card");
        randomNombre = Math.ceil(Math.random() * tabCivil.length);
        let premier = tabCivil[0].id;

        for (let i=0; i < tabCivil.length; i++) {
            if(randomNombre-1 === i) {
                premier = tabCivil[i].id;
            }
        }

        document.getElementById(premier).lastElementChild.innerHTML = `
            <div class="passage uno">
                <p>1</p>
            </div>
        `;

        let numeroMax = nombreJoueurs;
        let numeroMin = 2;
        let tableau = new Array(nombreJoueurs-1);

        for(let i=0; i < tabJoueur.length; i++) {
            randomNombre = Math.ceil(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
            tableau[0] = randomNombre;
            for(let y=0; y < nombreJoueurs-1; y++) { 

                randomNombre = Math.ceil(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);

                while(tableau[y] === randomNombre) {
                    randomNombre = Math.ceil(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
                };

                tableau[i] = randomNombre;
            }

            if(i === premier-1){
                // empty 
            } else {
                tabJoueur[i].lastElementChild.innerHTML =  `
                    <div class="passage">
                        <p>${randomNombre}</p>
                    </div>
                `;
            }
        }

        console.log(tableau);
    };


    function retirerPopUp(div) {
        const remove = document.querySelector(div);
        
        remove.addEventListener('click', () => {
            popUp.innerHTML = ``;
            voirCard();
        });
    };

};


export default PartyPage;