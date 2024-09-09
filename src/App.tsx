import { Route, Redirect, Switch } from 'wouter';
import { routes } from './config/routes';
import { Container } from './components';
import { BannerProvider } from './context';

const App = () => {
  return (
    <BannerProvider>
      <Switch>
        {routes.map(({ Component, ...rest }) => (
          <Route path={rest.path} component={() => <Container>{Component}</Container>} key={rest.name} />
        ))}
        <Route component={() => <Redirect href="/" />} />
      </Switch>
    </BannerProvider>
  );
};

export default App;
