// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import rules from '../../img/rules.png';
import inco from '../../img/inco.png';
import trophee from '../../img/trophee.png';
import login from '../../img/login2.png';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav>
    <ul>
      <img class="nav-link" data-uri="/rules" src="${rules}" alt="rules icon">
      <img class="nav-link center" data-uri="/" src="${inco}" alt="home icon">
      <img class="nav-link" data-uri="/ranking"src="${trophee}" alt="trophee icon">
    </ul>
    <img id="log" class="nav-link" data-uri="/login" src="${login}" alt="login icon">
  </nav>
  `;
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
