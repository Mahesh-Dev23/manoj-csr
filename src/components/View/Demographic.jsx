import React,{useState, useReducer, useEffect} from 'react'
import axios from 'axios'


import data from '../../data.json'
import postData from '../Controller/post'

function Demographic() {
    const [user, setUser] = useState()
    let userLength 
    const reducer = (state, action)=>{
        switch(action.type){
            case 'demo':
                return {...state, [action.name]:action.value}
            case 'default' :
                return state    
        }
    }

    const [userNew, dispatch] = useReducer(reducer, user)

    
        
  

    const radioClicked = (n, d) => {
        dispatch({type:'demo', value:d, name: n})
        
       if(userNew){
            userLength = Object.keys(userNew).length
            const dataLength = data.que1.q.length + 2
            postData(userNew, dataLength)
        }
    }
    
    const nextPrev = () =>{

    }
    console.log(data.que1.q.length+2 + " " + userLength)
    
    return (
        <div className="section" id="demographic" >
            
                <div className="panel panel-default">
                    <div className="panel-heading">{data.demo.sec}</div>
                    <div className="panel-body">
                        <form  id="demo">
                            <div className="form-group">
                                <label for="name">{data.demo.name.label}</label>
                                <input type="text" className="form-control" id="name" onChange={e=>radioClicked( data.demo.name.name, e.target.value)}></input>
                            </div>
                            
                            <div className="form-group">
                                <label for="mobile">{data.demo.mobile.label}</label>
                                <input type="text" className="form-control" id="mobile" onChange={e=>radioClicked( data.demo.mobile.name, e.target.value)}></input>
                            </div>
                            {data.que1.q.map( res =>
                                <div className="form-group ">
                                    <label >{res.label}</label>
                                        <div className="radioInline">
                                            {res.des.map(desc => 
                                            <label for={desc} >
                                                <input type="radio" id={res.label} name={res.label} value={desc} onClick={ ()=> radioClicked(`${res.name}`,`${desc}`)}/>{desc}
                                            </label>)}
                                        </div>   
                                </div>
                            )}
                            
                            
                            
                        </form>
                        <button className="btn btn-primary" onClick={()=>nextPrev()}>Next</button>
                    </div>
                </div>
            
            
        </div>
    )
}

export default Demographic
