

const PartyPage = () => {
    const main = document.querySelector('main');
    const nombreJoueurs= localStorage.getItem("nbrJoueurs");
    const nombreMrXX= localStorage.getItem("nbrIncognitos");
    const nombreIncognitos= localStorage.getItem("nbrX");

    

    main.innerHTML = `
        <div class="info-container">
            <div class="">
            <p> ${nombreJoueurs}</p>
            <p> ${nombreIncognitos}</p>
            <p> ${nombreMrXX}</p>
            <p id="bouton" > lancer la game </p> 
            </div>
            <div class="">
            </div>
        </div>
    `;
    const bouton= document.querySelector('#bouton');
    bouton.addEventListener("click",createPartie); 



    async function createPartie(e){
        e.preventDefault();
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

        const response= await fetch('/api/parties',options);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const newPartie = await response.json(); // json() returns a promise => we wait for the data

        console.log('New partie added : ', newPartie);
    };
};

export default PartyPage;