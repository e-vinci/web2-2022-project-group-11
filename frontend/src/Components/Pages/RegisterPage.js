import { setAuthenticatedUser } from "../../utils/auths";


const RegisterPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
<section>
    <h1>Inscription Membre</h1>
    <form method="post" action="" id="register">
        <div>
            <label>Nom : </label>
            <input type="text" name="lastname" value="" placeholder="Exemple : Senhaji" />
        </div>
        <div>
            <label>Prénom : </label>
            <input type="text" name="firstname" value="" placeholder="Exemple : Mohammed">
        </div>
        <div>
            <label>Email : </label>
            <input type="email" name="email" value="" placeholder="Exemple : moha@vinci.be">
        </div>
        <div>
            <label>Mot de passe : </label>
            <input type="password" name="password" value="" />
        </div>
        <div>
            <label>Confirmation mot de passe : </label>
            <input type="password" name="passwordConfirmation" value="">
        </div>
        <div>
            <input type="submit" value="M'enregistrer" id="register_btn">
        </div>
    </form>

    <div class="error-message">
        {{#if errors}}
            <p> Erreurs : </p>
            <ul>
                {{#each errors}}
                    <li>{{this.msg}}</li>
                {{/each}}
            </ul>
        {{/if}}
    </div>
</section>
    `;
};

export default RegisterPage;