import React,{useState, useReducer, useEffect, useContext} from 'react'
import logo from './logo.svg';
import './App.css';
import './main.scss'

import Main from './components/View/Main';

import post from './components/Controller/post';

export const getResponce = React.createContext()

function App() {
  const responce = {
    "que1" : {},
    "que2" : {},
    "que3a":{},
    "que3b" : {},
    "que3c" : {},
    "que3d":{},
    "que4a" : {},
    "que4b" : {},
    "que4c":{},
    "que5a" : {},
    "que5b" : {},
    "que6":{},
    "que7":{}
  }
  const [allRes = responce, setAllRes] = useState()

  const reducer = (state, action) =>{
    switch(action.type){
      case 'que1':
        return {...state, "que1":action.value}
      case 'que2':
        return {...state, "que2":action.value}
      case 'que3a':
        return {...state, "que3a":action.value}
      case 'que3b':
        return {...state, "que3b":action.value}
      case 'que3c':
        return {...state, "que3c":action.value}
      case 'que3d':
        return {...state, "que3d":action.value}
      case 'que4a':
        return {...state, "que4a":action.value}
      case 'que4b':
        return {...state, "que4b":action.value}
      case 'que4c':
        return {...state, "que4c":action.value}
      case 'que5a':
        return {...state, "que5a":action.value}
      case 'que5b':
        return {...state, "que5b":action.value}    
      case 'que6':
        return {...state, "que6":action.value}
      case 'que7':
        return {...state, "que7":action.value}         
      case 'default' :
        return state    
    }
  }

  const [newState, dispatch] = useReducer(reducer, allRes)

  const submitResponce = () =>{
    post(newState)
  }
  console.log(newState)
  return (
    <div className="App">
      <getResponce.Provider value={{countState: newState, countDispatch: dispatch}}><Main/></getResponce.Provider>
      <div className="section">
        <h3>Thank you for participating in this survey.</h3>
        <p>Please click "Submit" button to submit the survey!</p>
        <button className="btn btn-primary" onClick={()=>submitResponce()}>Submit</button>
      </div>
    </div>
  );
}

export default App;
