import logo from './logo.svg';
import './App.css';
import './main.scss'

import Main from './components/View/Main';

const responce = {
  "demographic" : [],
  "Loyalty" : []
}

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
