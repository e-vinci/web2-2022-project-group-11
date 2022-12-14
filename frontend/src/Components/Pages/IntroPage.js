import Navigate from "../Router/Navigate";

const LoginPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
        <div class="number-center">
        <div class="number-countainer">
            <div class="number-but"><p>-</p></div>
            <div class="number-player">
                <h1>Joueurs</h1>
                <p>5</p>
            </div>
            <div class="number-but"><p>+</p></div>
        </div>
        </div>
        <div class="player-countainer">
            <p class="player-buble">3 civils</p>
            <div class="number-incognito">
                <div class="inco-but"><p>-</p></div>
                <p class="player-buble">incognito</p>
                <div class="inco-but"><p>+</p></div>
            </div>
            <div class="number-incognito">
                <div class="inco-but"><p>-</p></div>
                <p class="player-buble">Mr.Xx</p>
                <div class="inco-but"><p>+</p></div>
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
    Navigate('/party');
}
};



export default LoginPage;