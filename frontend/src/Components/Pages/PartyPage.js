import mrxx from "../../img/mrxx.png";
import spy from "../../img/spy.png";
import who from "../../img/who.png";
import test1 from "../../img/avatar/nun.png";
import test2 from "../../img/avatar/firefighter.png";
import test3 from "../../img/avatar/chef.png";
import test4 from "../../img/avatar/racer.png";
import test5 from "../../img/avatar/pilot.png"

const PartyPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
        <p class="invi">i</p>
        <div class="tour-container">
            <h1>JOUEUR 1</h1>
            <p>Decrivez votre mot secret dans l'ordre indiqué,....</p>
            <p class="invi">i</p>
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
                <div class="passage">
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
};

export default PartyPage;