import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useActions } from './hooks/useActions';
import { useTypesSelector } from './hooks/useTypedSelector';
import { Home } from './pages/home/Home';
function App() {
  const { news } = useTypesSelector((state) => state.news);
  const { fetchNew, initFetch } = useActions();
  useEffect(() => {
    initFetch();
    fetchNew();
    setInterval(() => {
      fetchNew();
    }, 60000);
  }, []);

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
