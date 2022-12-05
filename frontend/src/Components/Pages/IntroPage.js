const LoginPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
        <p class="ranking">Joueurs : 5</p>
        <div class="number-countainer">
            <div class="number-but"><p>-</p></div>
            <div class="number-player">
                <h1>Joueurs</h1>
                <p>5</p>
            </div>
            <div class="number-but"><p>+</p></div>
        </div>
        <div class="player-countainer">
            <p>3 civils</p>
            <div class="number-incognito">
                <div class="inco-but"><p>-</p></div>
                <p>incognito</p>
                <div class="inco-but"><p>+</p></div>
            </div>
            <div class="number-incognito">
                <div class="inco-but"><p>-</p></div>
                <p>Mr.Xx</p>
                <div class="inco-but"><p>+</p></div>
            </div>
        </div>
    `;
};

export default LoginPage;