import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';

import EventDashboard from '../../components/event/EventDashboard/EventDashboard';
import NavBar from '../../components/nav/NavBar/NavBar';
import HomePage from '../../components/home/HomePage';
import EventDetailedPage from '../../components/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../components/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../components/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../components/user/settings/SettingsDashboard';
import EventForm from '../../components/event/EventForm/EventForm';
import ModalManager from '../../components/modals/ModalManager';
import { UserIsAuthenticated } from '../../components/auth/authWrapper';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route
                    path='/people'
                    component={UserIsAuthenticated(PeopleDashboard)}
                  />
                  <Route
                    path='/profile/:id'
                    component={UserIsAuthenticated(UserDetailedPage)}
                  />
                  <Route
                    path='/settings'
                    component={UserIsAuthenticated(SettingsDashboard)}
                  />
                  <Route
                    path={['/createEvent', '/manage/:id']}
                    component={UserIsAuthenticated(EventForm)}
                  />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
