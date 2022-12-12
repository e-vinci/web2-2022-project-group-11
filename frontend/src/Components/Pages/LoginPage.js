import Navigate from "../Router/Navigate";
import RegisterPage from "./RegisterPage";
const LoginPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <section>
        <div class="wrapper">
        <h1>Connexion</h1>
            <div class="input-box"> 
                <label>Username </label>
                <input type="username" name="username" id= "username">
            </div>
            
            <div class="input-box"> 
                <label>Password </label>
                <input  type="password" name="password" id="password">
            </div>
            <div>
            <button id="login_btn" type="submit">Se connecter</button>
            </div>
        </form>
        <p>Pas de compte ? <button id="registerLinkBtn" type="submit">S'inscrire</button>

        </div>

    </section>
    `;

    const registerLink = document.getElementById('registerLinkBtn');
    registerLink.addEventListener('click', () => {
        Navigate('/register');
        console.log('hello');
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

        const response= await fetch('/api/auths/login',options);
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

        const loggedUser = await response.json(); // json() returns a promise => we wait for the data

        console.log('New logged user : ', loggedUser);
    };



};



export default LoginPage;
