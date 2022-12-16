import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RulesPage from '../Pages/RulesPage';
import RankingPage from '../Pages/RankingPage';
import LoginPage from '../Pages/LoginPage';
import IntroPage from '../Pages/IntroPage';
import PartyPage from '../Pages/PartyPage';
import Logout from '../Logout/LogoutPage';


const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/rules': RulesPage,
  '/ranking': RankingPage,
  '/login': LoginPage,
  '/intro': IntroPage,
  '/party': PartyPage,
  '/new': NewPage,
  '/logout': Logout,

};

export default routes;
