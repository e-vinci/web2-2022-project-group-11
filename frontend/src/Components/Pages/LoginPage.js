import { setAuthenticatedUser } from "../../utils/auths";

const LoginPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <section>

        <h1>connexion</h1>
    
        <form method="post" action="" id="login">
            <div>
                <label>Email : </label>
                <input type="email" name="email" id= "email">
            </div>
            <div>
                <label>Username </label>
                <input type="username" name="login" value="" id= "username">
            </div>
            
            <div>
                <label>Password : </label>
                <input  id="password"  name="password" type="password">
            </div>
            <div>
            <p id="login_btn"> Se connecter </p>
            <p id="register_btn"> S'inscrire </p>

            </div>
        </form>
        
        <p>Pas de compte ? Inscrivez vous <a class="nav-link" data-uri="/rules">içi</a><p>

    </section>
    `;

    const registerBtn = document.querySelector("#register_btn");
    registerBtn.addEventListener("click", register);
    const loginBtn = document.querySelector("#login_btn");
    loginBtn.addEventListener("click", login);
   
   
   async function register(e){
    console.log("hok");
    
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

        const authenticatedUser = await response.json(); // json() returns a promise => we wait for the data

        console.log('New user added : ', newUser);
        setAuthenticatedUser(authenticatedUser);
    };


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

        const authenticatedUser = await response.json(); // json() returns a promise => we wait for the data

        console.log('New logged user : ', loggedUser);
        setAuthenticatedUser(authenticatedUser);

    };



};



export default LoginPage;