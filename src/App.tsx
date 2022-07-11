import React from 'react';
import NextCSV from './components/NextCSV'
import Thumbname from './components/Thumbname'
import Article from './components/Article';
import './App.css';

function App() {
  return(
    <div>
      <NextCSV
        month={7}
        date = {18}
      />
      <p>------導入-------</p>
      <p>最初のコンポーネント導入</p>
      <Thumbname />
      <Article
        title = 'my fist article'
        body = "I'd got started with react x Typescript"
      />
    </div>
  );
}

export default App;