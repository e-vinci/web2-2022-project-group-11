import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RulesPage from '../Pages/RulesPage';
import RankingPage from '../Pages/RankingPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import IntroPage from '../Pages/IntroPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/rules': RulesPage,
  '/ranking': RankingPage,
  '/login': LoginPage,
  '/register' : RegisterPage,
  '/intro': IntroPage,
  '/new': NewPage,
};

export default routes;
