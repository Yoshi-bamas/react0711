import React from 'react';
import Button from '@mui/material/Button';

import NextCSV from './components/NextCSV'
import Thumbname from './components/Thumbname'
import Article from './components/Article';
import Counter from './components/Counter';
import './App.css';

function App() {
  return(
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </head>
      <div>
        <NextCSV
          month={7}
          date = {18}
        />
        <p>------MUI お試し--------</p>
        <Button variant="contained">ぽちっとな</Button>
        <p>------導入-------</p>
        <p>最初のコンポーネント導入</p>
        <Thumbname />
        <Article
          title = 'my fist article'
        />
        <Counter />
      </div>
    </html>
  );
}

export default App;