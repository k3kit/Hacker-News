import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useActions } from './hooks/useActions';
import { useTypesSelector } from './hooks/useTypedSelector';
import { Home } from './pages/home/Home';
import { NewsPage } from './pages/news-page/NewsPage';

function App() {
  return (
    <Router>
      <AppBar position="relative">
        <Toolbar>
          <Button to="/" component={Link} sx={{ textDecoration: 'none' }} color="inherit">
            Hacker news
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id">
          <NewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
