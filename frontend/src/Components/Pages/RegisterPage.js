const RegisterPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="wrapper-box">
    <div class="wrapper">
    <h1>Inscription</h1>
    <form method="post" action="" id="register">
        <div class="input-box">
            <label>Email </label>
            <input type="email" name="email" id="email" placeholder="Entrez un e-mail">
        </div>
        <div class="input-box">
        <label>Pseudo </label>
        <input type="text" name="username" id="username" placeholder="Entrez un pseudo" />
        </div>
        <div class="input-box">
            <label>Mot de passe </label>
            <input type="password" name="password" placeholder="Entrez un mot de passe"id="password"/>
        </div>
        <div>         
        <button id="register_btn" type="">S'inscrire</button>
        </div>
    </form>
    </div>
    </div>
    `;

    const registerBtn = document.querySelector("#register_btn");
    registerBtn.addEventListener("click", register);

    async function register(e){
        e.preventDefault();

        const email= document.querySelector("#email").value;
        const username= document.querySelector("#username").value;
        const password= document.querySelector("#password").value;

        const options = {
            method: 'POST',
            body: JSON.stringify({
                email,
                username,
                password,

            }),
            headers: {
                'Content-Type' : 'application/json',

            },

        };

        const response= await fetch('/api/auths/register',options);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const newUser = await response.json(); // json() returns a promise => we wait for the data

        console.log('New user added : ', newUser);
    };
};



export default RegisterPage;