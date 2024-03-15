import { Route, Redirect, Switch } from 'wouter';
import { routes } from './config/routes';
import { Container } from './components';

const App = () => {
  return (
    <Switch>
      {routes.map(({ Component, ...rest }) => (
        <Route
          path={rest.path}
          component={() => <Container bgImage={rest.bgImage}>{Component}</Container>}
          key={rest.name}
        />
      ))}
      <Route component={() => <Redirect href="/" />} />
    </Switch>
  );
};

export default App;
