import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailContainer from '../pages/BadgeDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:id" component={BadgeDetailContainer} />
            <Route exact path="/badges/:id/edit" component={BadgeEdit} />
            <Route component={NotFound} />

        </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;