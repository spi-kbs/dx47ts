import React from 'react';
import List1 from './List1';
import List2 from './List2';
import {NumCounter} from './components/NumCounter';


function App() {
  return (
    <React.Fragment>
      カウンタ
      <NumCounter />
      リスト2
      <List2 />
      リスト1
      <List1 />
    </React.Fragment>
  );
}

export default App;
