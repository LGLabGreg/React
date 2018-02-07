import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainNav from '../components/MainNav';
import DashboardPage from '../components/DashboardPage';
import AddExpansePage from '../components/AddExpansePage';
import EditExpansePage from '../components/EditExpansePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <MainNav />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpansePage} />
        <Route path="/edit/:id" component={EditExpansePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;