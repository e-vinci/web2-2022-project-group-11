/* eslint-disable eqeqeq */
// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import rules from '../../img/rules.png';
import inco from '../../img/incognito.png';
import idea from '../../img/idea.png';
import login from '../../img/log-in.png';
import { getAuthenticatedUser } from '../../utils/auths';
import logout from '../../img/log-out.png';
/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  let navbar= ``;
  if(getAuthenticatedUser()==undefined){
     navbar = `
    <nav>
      <ul>
        <img class="nav-link" data-uri="/rules" src="${rules}" alt="rules icon">
        <img class="nav-link center" data-uri="/" src="${inco}" alt="home icon">
        <img class="nav-link" data-uri="/word" src="${idea}" alt="trophee icon">
      </ul>
      <img id="log" class="nav-link" data-uri="/login" src="${login}" alt="login icon">
    </nav>
    `;
  }else{

     navbar = `
    <nav>
      <ul>
        <img class="nav-link" data-uri="/rules" src="${rules}" alt="rules icon">
        <img class="nav-link center" data-uri="/" src="${inco}" alt="home icon">
        <img class="nav-link" data-uri="/word" src="${idea}" alt="trophee icon">
      </ul>
      <img id="log" class="nav-link" data-uri="/logout" src="${logout}" alt="login icon">
    </nav>
    `;
  }
  
  
  navbarWrapper.innerHTML = navbar;
 
};

export default Navbar;
