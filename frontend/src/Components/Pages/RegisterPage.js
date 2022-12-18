/* eslint-disable eqeqeq */
import Navigate from "../Router/Navigate";

const RegisterPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="wrapper-box" >
    <div class="wrapper" id= "formRegister">
    <div class="curved" id="curved"></div>
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
        <p> En vous inscrivant vous acceptez nos <a href="/gdpr">conditions</a>
        <div>         
        <button id="register_btn" type="">S'inscrire</button>
        </div>
    </form>
    </div>
    </div>
    `;
    const formRegister= document.querySelector("#formRegister");

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

        const response= await fetch(`${process.env.API_BASE_URL}/auths/register`,options);

        if(response.status==409)  {
            console.log("ko");
            
            formRegister.innerHTML+= `<p>Cet username existe déja ! </p> `;
        }
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const newUser = await response.json(); // json() returns a promise => we wait for the data
        

        console.log('New user added : ', newUser);
        Navigate('/login');
    };
};



export default RegisterPage;