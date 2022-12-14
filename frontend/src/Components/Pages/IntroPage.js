import Navigate from "../Router/Navigate";

const LoginPage = () => {
    
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="number-center">
        <div class="number-countainer">
            <div class="number-but" id="nbr_joueur_moins"><p>-</p></div>
            <div class="number-player">
                <h1>Joueurs</h1>
                <p id="nbr_joueurs"></p>
            </div>
            <div class="number-but" id="nbr_joueur_plus"><p>+</p></div>
        </div>
        </div>
        <div class="player-countainer">
            <p class="player-buble"><span id="nbr_civils"></span> civils</p>
            <div class="number-incognito">
                <div class="inco-but" id="nbr_incognito_moins"><p>-</p></div>
                <p class="player-buble"><span id="nbr_incognitos"></span> incognito</p>
                <div class="inco-but" id="nbr_incognito_plus"><p>+</p></div>
            </div>
            <div class="number-incognito">
                <div class="inco-but" id="nbr_mrxx_moins"><p>-</p></div>
                <p class="player-buble"><span id="nbr_mrxx"></span> Mr.Xx</p>
                <div class="inco-but" id="nbr_mrxx_plus"><p>+</p></div>
            </div>
        </div>
        <div class="effect-container">
        
        </div>
        <div class="but-center">
            <button class="start-but">Commencer</button>
        </div>
    `;
    const startBtn = document.querySelector(".start-but");
    startBtn.addEventListener("click", toPage );
    function toPage(){
        localStorage.setItem("nbrJoueurs", countJoueurs);
        localStorage.setItem("nbrIncognitos", countIncognitos);
        localStorage.setItem("nbrX", countMrxx);
        Navigate('/party');
    };

    const nbrJoueurs = document.querySelector("#nbr_joueurs");
    const nbrCivils = document.querySelector("#nbr_civils");
    const nbrIncognitos = document.querySelector("#nbr_incognitos");
    const nbrMrxx = document.querySelector("#nbr_mrxx");
    


    let countJoueurs = 4;
    let countCivils = countJoueurs - 1;
    let countIncognitos = 1;
    let countMrxx = 0;
    let countIM = 1;



    nbrJoueurs.innerHTML = countJoueurs;
    nbrCivils.innerHTML = countCivils;
    nbrIncognitos.innerHTML = countIncognitos;
    nbrMrxx.innerHTML = countMrxx;

    const joueursMoins = document.querySelector("#nbr_joueur_moins");
    const joueursPlus = document.querySelector("#nbr_joueur_plus");

    const incognitoMoins = document.querySelector("#nbr_incognito_moins");
    const incognitoPlus = document.querySelector("#nbr_incognito_plus");

    const mrxxMoins = document.querySelector("#nbr_mrxx_moins");
    const mrxxPlus = document.querySelector("#nbr_mrxx_plus");

    effacerSigne(mrxxMoins);
    effacerSigne(incognitoMoins);
    effacerSigne(incognitoPlus);

    joueursPlus.addEventListener('click', () => {
             
          if(countJoueurs === 20) {
            // empty
        } else {
            afficherSigne(joueursMoins);
            countJoueurs += 1;
            countCivils = Math.ceil(countJoueurs * 0.51);
            countMrxx = 1;
            if(countJoueurs > 10 && countJoueurs < 17 ) {
                countMrxx = 2;
            } else if(countJoueurs > 16) {
                countMrxx = 3;
            }
            countIncognitos = countJoueurs - countCivils - countMrxx;
        }

        if(countJoueurs >= 5) {
            effacerSigne(incognitoPlus);
            effacerSigne(mrxxPlus);
            verifiePlus();
            verifieMoins();
            verifieMoins2();
        }

        if(countJoueurs === 3) {
            countCivils = 2;
            countIncognitos = 1;
            countMrxx = 0;
            effacerSigne(incognitoPlus);
            effacerSigne(incognitoMoins);
            afficherSigne(mrxxPlus);
            effacerSigne(mrxxMoins);
        } 
        
        if(countJoueurs === 4) {
            countCivils = 3;
            countIncognitos = 1;
            countMrxx = 0;
            effacerSigne(incognitoPlus);
            effacerSigne(incognitoMoins);
            afficherSigne(mrxxPlus);
            effacerSigne(mrxxMoins);
        } 

        if(countJoueurs === 5) {
            countCivils = 3;
            countIncognitos = 1;
            countMrxx = 1;
            effacerSigne(incognitoPlus);
            afficherSigne(incognitoMoins);
            effacerSigne(mrxxPlus);
            afficherSigne(mrxxMoins);
        }

        if(countJoueurs === 20) {
            effacerSigne(joueursPlus);
        }

        nbrJoueurs.innerHTML = countJoueurs;
        nbrCivils.innerHTML = countCivils;
        nbrIncognitos.innerHTML = countIncognitos;
        nbrMrxx.innerHTML = countMrxx;
        countIM = countIncognitos + countMrxx;
    });
    
    joueursMoins.addEventListener('click', () => {
        if(countJoueurs === 3) {
            // empty
        } else {
            afficherSigne(joueursPlus);
            countJoueurs -= 1;
            countCivils = Math.ceil(countJoueurs * 0.51);
            countMrxx = 1;
            if(countJoueurs > 10 && countJoueurs < 17 ) {
                countMrxx = 2;
            } else if(countJoueurs > 16) {
                countMrxx = 3;
            }
            countIncognitos = countJoueurs - countCivils - countMrxx;
            verifiePlus();
            verifieMoins();
            verifieMoins2();
            effacerSigne(incognitoPlus);
            effacerSigne(mrxxPlus);
        }

        if(countJoueurs === 3) {
            countCivils = 2;
            countIncognitos = 1;
            countMrxx = 0;
            effacerSigne(incognitoPlus);
            effacerSigne(incognitoMoins);
            afficherSigne(mrxxPlus);
            effacerSigne(mrxxMoins);
            effacerSigne(joueursMoins);
        } 
        
        if(countJoueurs === 4) {
            countCivils = 3;
            countIncognitos = 1;
            countMrxx = 0;
            incognitoPlus.style.opacity = 0;
            incognitoMoins.style.opacity = 0;
            mrxxPlus.style.opacity = 1;
            mrxxMoins.style.opacity = 0; 
        } 

        if(countJoueurs === 5) {
            countCivils = 3;
            countIncognitos = 1;
            countMrxx = 1;
            incognitoPlus.style.opacity = 0;
            incognitoMoins.style.opacity = 1;
            mrxxPlus.style.opacity = 0;
            mrxxMoins.style.opacity = 1;
        }

        nbrJoueurs.innerHTML = countJoueurs;
        nbrCivils.innerHTML = countCivils;
        nbrIncognitos.innerHTML = countIncognitos;
        nbrMrxx.innerHTML = countMrxx;
        countIM = countIncognitos + countMrxx;
    });




    incognitoPlus.addEventListener('click', () => {
        if(countJoueurs === 3 && countMrxx === 1) {
            effacerSigne(mrxxMoins);
            effacerSigne(incognitoMoins);
            effacerSigne(incognitoPlus);
            afficherSigne(mrxxPlus);
            countIncognitos += 1;
            countMrxx -= 1;
          
            

        } else if (countJoueurs === 4) {
            if(countMrxx === 1 && countIncognitos === 0) {
                countIncognitos += 1;
                countCivils -= 1;
                effacerSigne(incognitoPlus);
                afficherSigne(incognitoMoins);
                afficherSigne(mrxxMoins);
            }
        } else if(countJoueurs > 4 && countIncognitos + countMrxx < countIM) {
            countCivils -= 1;
            countIncognitos += 1;
            verifiePlus();
            verifieMoins();
            verifieMoins2()
        }

        nbrCivils.innerHTML = countCivils;
        nbrIncognitos.innerHTML = countIncognitos;
        nbrMrxx.innerHTML = countMrxx;
    });

    incognitoMoins.addEventListener('click', () => {
        if(countJoueurs < 4) {
            // empty
        } else if(countJoueurs === 4) {
            if(countIncognitos === 1 && countMrxx === 1) {
                countCivils += 1;
                countIncognitos -= 1;
                effacerSigne(incognitoMoins);
                effacerSigne(mrxxMoins);
                afficherSigne(incognitoPlus);
            }
        } else if(countCivils + 1 < countJoueurs && countIncognitos !== 0){
            verifieMoins();
            countCivils += 1;
            countIncognitos -= 1;
            verifiePlus();
            verifieMoins2();
        }
        
        nbrCivils.innerHTML = countCivils;
        nbrIncognitos.innerHTML = countIncognitos;
        nbrMrxx.innerHTML = countMrxx
    });

    mrxxPlus.addEventListener('click', () => {
        if(countJoueurs === 3 && countIncognitos === 1) {
            afficherSigne(incognitoPlus);
            effacerSigne(mrxxPlus);
            effacerSigne(incognitoMoins);
            effacerSigne(mrxxMoins);
            countMrxx += 1;
            countIncognitos -= 1;
        } else if (countJoueurs === 4) {
            if(countIncognitos === 1 && countMrxx === 0) {
                countMrxx += 1;
                countCivils -= 1;
                effacerSigne(mrxxPlus);
                afficherSigne(incognitoMoins);
                afficherSigne(mrxxMoins);
            }
        } else if(countJoueurs > 4 && countIncognitos + countMrxx < countIM) {
            countCivils -= 1;
            countMrxx += 1;
            verifiePlus();
            verifieMoins();
            verifieMoins2();
        }
        
        nbrCivils.innerHTML = countCivils;
        nbrMrxx.innerHTML = countMrxx;
        nbrIncognitos.innerHTML = countIncognitos;
    });

    mrxxMoins.addEventListener('click', () => {
        if(countJoueurs < 4) {
            // empty
        } else if(countJoueurs === 4) {
            if(countIncognitos === 1 && countMrxx === 1) {
                countCivils += 1;
                countMrxx -= 1;
                effacerSigne(incognitoMoins);
                effacerSigne(mrxxMoins);
                afficherSigne(mrxxPlus);
            }
        } else if(countCivils + 1 < countJoueurs && countMrxx !== 0) {
            verifieMoins();
            countCivils += 1;
            countMrxx -= 1;
            verifiePlus();
            verifieMoins2();
        }

        nbrCivils.innerHTML = countCivils;
        nbrMrxx.innerHTML = countMrxx;
        nbrIncognitos.innerHTML = countIncognitos;
    });

    function verifiePlus() {
        if(countIncognitos + countMrxx >= countIM) {
            effacerSigne(incognitoPlus);
            effacerSigne(mrxxPlus);
        } else if(countIncognitos + countMrxx < countIM) {
            afficherSigne(incognitoPlus);
            afficherSigne(mrxxPlus);
        }
    }

    function verifieMoins() {
        if(countIncognitos === 1 && countMrxx === 1 || countIncognitos === 0 && countMrxx === 2 || countIncognitos === 2 && countMrxx === 0) {
            effacerSigne(incognitoMoins);
            effacerSigne(mrxxMoins);
        } else {
            afficherSigne(incognitoMoins);
            afficherSigne(mrxxMoins);
        }
        
    }

    function verifieMoins2() {
        if (countIncognitos <= 0) {
            effacerSigne(incognitoMoins);
        } 
        
        if(countMrxx <= 0) {
            effacerSigne(mrxxMoins);
        } 

        if(countMrxx >= 2 || countMrxx === 1 && countIncognitos === 1) {
            afficherSigne(mrxxMoins);
        }

        if(countIncognitos >= 2 || countMrxx === 1 && countIncognitos === 1) {
            afficherSigne(incognitoMoins);
        }
    }

    function effacerSigne(monSigne) {
        // eslint-disable-next-line no-param-reassign
        monSigne.style.opacity = 0;
        // eslint-disable-next-line no-param-reassign
        monSigne.style.cursor = "default";
    }

    function afficherSigne(monSigne) {
        // eslint-disable-next-line no-param-reassign
        monSigne.style.opacity = 1;
        // eslint-disable-next-line no-param-reassign
        monSigne.style.cursor = "pointer";
    };

    

    


    
};

export  default LoginPage;