
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RulesPage from '../Pages/RulesPage';
import WordPage from '../Pages/WordPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import IntroPage from '../Pages/IntroPage';
import PartyPage from '../Pages/PartyPage';
import Logout from '../Logout/Logout';
import GDPR from '../Pages/GDPRPage';

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
  '/gdpr' : GDPR,

};

export default routes;
