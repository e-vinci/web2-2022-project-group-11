
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RulesPage from '../Pages/RulesPage';
import WordPage from '../Pages/WordPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import IntroPage from '../Pages/IntroPage';
import PartyPage from '../Pages/PartyPage';
import Logout from '../Logout/Logout';


const routes = {
  '/': HomePage,
  '/rules': RulesPage,
  '/word': WordPage,
  '/login': LoginPage,
  '/register' : RegisterPage,
  '/intro': IntroPage,
  '/party': PartyPage,
  '/new': NewPage,
  '/logout': Logout,

};

export default routes;
