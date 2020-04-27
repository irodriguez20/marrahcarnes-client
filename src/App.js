import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import home from './Pages/home';
import login from './Pages/login';
import signup from './Pages/signup';
import NavBar from './Components/NavBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#eeeeee',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      contrastText: '#000000',
    },
  },
  typography: {
    useNextVariants: true
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/login' component={login} />
                <Route exact path='/signup' component={signup} />
              </Switch>
            </div>

          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
