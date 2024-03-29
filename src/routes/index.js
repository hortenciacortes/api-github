import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Components/Login';
import Perfil from '../Components/Perfil';
import Respositorio from '../Components/Repositorios';
import Followers from '../Components/Followers';
import Following from '../Components/Following';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/perfil' component={Perfil} />
      <Route path='/repos' component={Respositorio} />
      <Route path='/followers' component={Followers} />
      <Route path='/following' component={Following} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
