/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable prefer-const */
import mrxx from "../../img/mrxx.png";
import spy from "../../img/incognito.png"; 
import who from "../../img/who.png";
import civil from "../../img/civil.png";
import trophee from "../../img/coupe.png";
import spirale from "../../img/spirale2.png";

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


const PartyPage =async () => {
    const nombreJoueurs= localStorage.getItem("nbrJoueurs");
    const nombreMrXX= localStorage.getItem("nbrX");
    const nombreIncognitos= localStorage.getItem("nbrIncognitos");
    clearPage();

    createPartie(nombreJoueurs,nombreIncognitos, nombreMrXX);
    async function createPartie(nombreJoueurs,nombreIncognitos, nombreMrXX){

        const options = {
            method: 'POST',
            body: JSON.stringify({
               
                nombreJoueurs,
                nombreIncognitos,
                nombreMrXX
            }),
            headers: {
                'Content-Type' : 'application/json',

            },

        };

        const response= await fetch(`${process.env.API_BASE_URL}/parties`,options);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const newPartie = await response.json(); // json() returns a promise => we wait for the data
    
        const idMot= newPartie.idMot;
        localStorage.setItem("idMot", idMot);


    
    
    
        
        try {
    
            const response= await fetch(`${process.env.API_BASE_URL}/mots/${idMot}`)
                if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
              const leMot = await response.json();
          
              console.log(leMot);
              localStorage.setItem("mot", leMot.mot);
              localStorage.setItem("semblable", leMot.semblable);
    
    
              
          }catch (err) {
            console.error('HomePage::error: ', err);
          };
    
          const mot = localStorage.getItem("mot");
          
          console.log(mot);
    
          const semblable= localStorage.getItem("semblable");
    
          console.log(semblable);
    
        
       
    };

   

      

    
    const main = document.querySelector('main');
    
    main.innerHTML = `
        <div class="pop-up">
        
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
                        <img src="${spy}">
                        <p id="incoRe">${nombreIncognitos}</p>
                    </div>
                    <div class="rest">
                        <img src="${mrxx}">
                        <p id="mrRe">${nombreMrXX}</p>
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

    let mot2 = localStorage.getItem("mot");
    let semblable2 = localStorage.getItem("semblable");
    console.log(mot2 + "111");

    // let idPerso = 1;
    let idCard = 0;
    let input = 'rien';
    let nomJoueur = '';
    
    let mrxR = nombreMrXX;
    let incoR = nombreIncognitos;
    let civilR = nombreJoueurs - nombreIncognitos - nombreMrXX;

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
                    <h3 class="alrt">Saisis ton nom pour dévoiler ton mot secret</h3>
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
            document.querySelector(".ajouter-input").style.animation = "";

            if(input === '') {
                document.querySelector(".alrt").style.color = "red";
                document.querySelector(".alrt").textContent = "N'oublie pas de rentrer ton nom";
                document.querySelector(".ajouter-input").style.animation = "alert 0.3s";
                document.querySelector(".ajouter-input").style.border = "2px solid red";
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
                        <h5>${mot2}</h5>
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
                        <h5>${semblable2}</h5>
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
                infoMessage.innerHTML = `Décrivez votre mot secret dans l'ordre, en commençant par le numéro 1 puis dans le sens horlogé. Utilisez juste un mot`;
                
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

                    nomJoueur = envie[i].querySelector('.avatname').textContent;
                    
                    if(envie[i].classList.contains("civil") === true) {
                        envie[i].querySelector('.avat').src = civil;
                        civilR -= 1;
                        tuerCivil();
                    } else if(envie[i].classList.contains("inco") === true) {
                        envie[i].querySelector('.avat').src = spy;
                        incoR -= 1;
                        document.querySelector("#incoRe").innerHTML = incoR;
                        tuerIncognito();
                    } else if(envie[i].classList.contains("mrxx") === true) {
                        envie[i].querySelector('.avat').src = mrxx;
                        mrxR -= 1;
                        document.querySelector("#mrRe").innerHTML = mrxR;
                        trouverMot();
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

    function tuerIncognito() {

        popUp.innerHTML = `
            <div class="inco-content">
                <div class="civil-card">
                    <h1>Incognito éliminé !</h1>
                    <img src="${spy}">
                    <h2>${nomJoueur}</h2>
                    <p class="action-ok">OK</p>
                </div>
            </div>
        `;   

        retirerPopUpInco();
    };

    function retirerPopUpInco() {
        const incoBut = document.querySelector(".inco-content");

        incoBut.addEventListener('click', () => {

            popUp.innerHTML = ``;

            if(incoR == 0 && mrxR == 0) {
                gagnerPartieC();
            } else {
                // empty
            }
        }); 
    };



    function tuerCivil() {

        let pop = `
            <div class="civil-content">
                <div class="civil-card">
                    <h1>1 Civil(e) en moins !</h1>
                    <img src="${civil}">
                    <h2>${nomJoueur}</h2>
                    <p class="action-ok">OK</p>
                </div>
            </div>
        `;

        popUp.innerHTML = pop;        
        retirerPopUpCivil();
    };

    function retirerPopUpCivil() {
        const civilBut = document.querySelector(".civil-content");

        civilBut.addEventListener('click', () => {

            popUp.innerHTML = ``;

            if(civilR === 1) {
                lancerQuoi();
            } else {
                // empty
            }
        });      
    };

    function lancerQuoi() {
        let iR = incoR;
        let mR = mrxR;
        console.log(iR + mR);

        if(iR >= 1 && mR >= 1) {
            console.log("Infil");
            gagnerPartieInfil();
        } 
        
        if(iR == 0 && mR >= 1) {
            console.log("mrxx");
            gagnerPartieM();
        } 

        if(iR >= 1 && mR == 0) {
            console.log("inco");
            gagnerPartieI();
        }
        
    }

    function trouverMot() {
        let pop = `
            <div class="mrxx-content">
                <div class="mrxx-card">
                    <h1>Mr.Xx a<br>été démasqué</h1>
                    <img src="${mrxx}">
                    <input id="valider-input" type="text" placeholder="Deviner ?" name="deviner" autocomplete="off">
                    <h2 class="alrt">${nomJoueur}, devine le mot des civils pour gagner !</h2>
                    <p class="action-ok" id="valider-but">Valider</p>
                </div>
            </div>
        `;

        popUp.innerHTML = pop;
        verifierMot();
    };

    function verifierMot() {

        const validerBut = document.querySelector("#valider-but");

        validerBut.addEventListener('click', () => {
            input = document.querySelector("#valider-input").value;
            if(input==='') {
                document.querySelector(".alrt").style.color = "red";
                document.querySelector(".alrt").textContent = "Tu dois rentrer un mot";
                document.querySelector("#valider-input").style.animation = "alert 0.3s";
                document.querySelector("#valider-input").style.border = "2px solid red";
            } else {
                popUp.innerHTML = ``;
                if(mot2.toLowerCase() === input.toLowerCase()) {
                    console.log("Navigate bien !");
                    gagnerPartieM();
                } else {
                    tuerMrxx();
                }
            }
        });

    };

    function tuerMrxx() {

        let pop = `
            <div class="wrong-content">
                <div class="mrxx-card">
                    <h1>Désolé, mauvaise<br>réponse !</h1>
                    <img src="${mrxx}">
                    <p class="action-ok">OK</p>
                </div>
            </div>
        `;
        
        popUp.innerHTML = pop;
        retirerPopUpMrx();
    };

    function retirerPopUpMrx() {
        const mmBut = document.querySelector(".wrong-content");
        
        mmBut.addEventListener('click', () => {

            if(mrxR == 0 && incoR == 0) {
                popUp.innerHTML = ``;
                gagnerPartieC();
            } else {
                popUp.innerHTML = ``;
            }

        });
    };


    function gagnerPartieI() {
        console.log("viens ici");
        let pop = ``;

        if(nombreIncognitos == 1) {
            pop = `
                <div class="relancer-content">
                    <div class="relancer-card">
                        <img class="win-trophee" src="${trophee}">
                        <img class="mrxx-win" src="${spy}">
                        <h3>L'Incognito a gagné</h3>
                    </div>
                    <img class="spirale" src="${spirale}">
                </div>
            `;
        } else {
            pop = `
                <div class="relancer-content">
                    <div class="relancer-card">
                        <img class="win-trophee" src="${trophee}">
                        <img class="mrxx-win" src="${spy}">
                        <h3>Les Incognitos ont gagné</h3>
                    </div>
                    <img class="spirale" src="${spirale}">
                </div>
            `;
        }
        
        popUp.innerHTML = pop;
        relancerPartie();
    };

    function gagnerPartieC() {

        popUp.innerHTML = `
            <div class="relancer-content">
                <div class="relancer-card">
                    <img class="win-trophee" src="${trophee}">
                    <img class="mrxx-win" src="${civil}">
                    <h3>Les Civils ont gagné</h3>
                </div>
                <img class="spirale" src="${spirale}">
            </div>
        `;

        relancerPartie();
    };

    function gagnerPartieInfil() {
        let pop = `
            <div class="relancer-content">
                <div class="relancer-card">
                    <img class="win-trophee" src="${trophee}">
                    <img class="mrxx-win" src="${mrxx}">
                    <h3>Les Infiltrés ont gagné</h3>
                </div>
                <img class="spirale" src="${spirale}">
            </div>
        `;
        popUp.innerHTML = pop;
        relancerPartie();
    };

    function gagnerPartieM() {
        console.log("Viens ici");
        let pop = ``;

        if(nombreMrXX == 1) {
            pop = `
                <div class="relancer-content">
                    <div class="relancer-card">
                        <img class="win-trophee" src="${trophee}">
                        <img class="mrxx-win" src="${mrxx}">
                        <h3>Le Mister.Xx a gagné</h3>
                    </div>
                    <img class="spirale" src="${spirale}">
                </div>
            `;
        } else {
            pop = `
                <div class="relancer-content">
                    <div class="relancer-card">
                        <img class="win-trophee" src="${trophee}">
                        <img class="mrxx-win" src="${mrxx}">
                        <h3>Les Mister.Xx ont gagné</h3>
                    </div>
                    <img class="spirale" src="${spirale}">
                </div>
            `;
            
        }
        

        popUp.innerHTML = pop;
        relancerPartie();
    };

    function relancerPartie() {

        const relancerBut = document.querySelector(".relancer-content");

        relancerBut.addEventListener('click', () => {
            console.log("Relancer partie");
            window.location.reload();
        });
    };

    function donnerOrdrePassage() {
        const tabCivil = document.querySelectorAll(".civil");

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