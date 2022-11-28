const LoginPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <section>

        <h1>Connexion</h1>
    
        <form method="post" action="" id="login">
            <div>
                <label>Login (email) : </label>
                <input type="email" name="login" value="" >
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" value="">
            </div>
            <div>
                <input type="submit" value="Me connecter" id="login_btn">
            </div>
        </form>
        
        <p>Pas de compte ? Inscrivez vous <a class="nav-link" data-uri="/rules">içi</a><p>

    </section>
    `;
};

export default LoginPage;