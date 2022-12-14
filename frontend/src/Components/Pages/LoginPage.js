/* eslint-disable eqeqeq */
import Navigate from "../Router/Navigate";
// eslint-disable-next-line import/newline-after-import
import down from '../../img/down.png';
import { setAuthenticatedUser } from "../../utils/auths";
import Navbar from "../Navbar/Navbar";


const LoginPage = () => {
   // Logout();
    const main = document.querySelector('main');
    main.innerHTML = `
    <div class="wrapper-box">
        <div class="wrapper">
        <div class="curved" id="curved"></div>
        <h1>Connexion</h1>
            <div class="input-box"> 
                <label>Username </label>
                <input type="username" name="username" placeholder="Pseudo" id= "username">
            </div>
            
            <div class="input-box"> 
                <label>Password </label>
                <input  type="password" name="password" placeholder="Mot de passe" id="password">
            </div>
            <div>
            <button id="login_btn" type="submit">Se connecter</button>
            </div>
        </form>
        <div class=no-account>
        <br>
        <p>Pas de compte ? Inscrivez vous </p>
        <p><img src="${down}" width=10% height=10% alt="Indication"> </p>
        <p><button id="registerLinkBtn" type="">Inscription</button></p>
        </div>
        </div>
        </div>
    `;

    const registerLink = document.getElementById('registerLinkBtn');
    registerLink.addEventListener('click', () => {
        Navigate('/register');
    })

    const loginBtn = document.querySelector("#login_btn");
    loginBtn.addEventListener("click", login);
   
   


    async function login(e){
        e.preventDefault();

        const username= document.querySelector("#username").value;
        const password= document.querySelector("#password").value;


        const options = {
            method: 'POST',
            body: JSON.stringify({
               
                username,
                password,

            }),
            headers: {
                'Content-Type' : 'application/json',

            },

        };

        const curved= document.querySelector("#curved");
        const response= await fetch(`${process.env.API_BASE_URL}/auths/login`,options);
        if(response.status==401){
            curved.innerHTML+= `<p>Mot de passe incorrect ! </p> `;

        }
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const authenticatedUser = await response.json(); // json() returns a promise => we wait for the data

        console.log('New logged user : ', authenticatedUser);
        setAuthenticatedUser(authenticatedUser);
        // eslint-disable-next-line prefer-destructuring, no-unused-vars
        const isAdmin = authenticatedUser.isAdmin;
        Navbar();
        Navigate('/');
        

    };



};



export default LoginPage;
