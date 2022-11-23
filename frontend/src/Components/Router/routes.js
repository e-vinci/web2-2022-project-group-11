import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import RulesPage from '../Pages/RulesPage';
import RankingPage from '../Pages/RankingPage';
import LoginPage from '../Pages/LoginPage';

const routes = {
  '/': HomePage,
  '/game': GamePage,
  '/rules': RulesPage,
  '/ranking': RankingPage,
  '/login': LoginPage,
  '/new': NewPage,
};

export default routes;
