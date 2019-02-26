import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
      </Provider>
    );
  }
}

export default App;
