import React,{useState, useReducer, useEffect, useContext} from 'react'
import axios from 'axios'

import { getResponce } from '../../App'
import data from '../../data.json'

function Demographic() {
    const captureQue1Values = useContext(getResponce)
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
    }
    
    const nextPrev = () =>{
        captureQue1Values.countDispatch({type:'que1', value:userNew})
    }

    //console.log(userNew)
    
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
                                                <input type="radio" id={res.label} name={res.name} value={desc} onClick={ ()=> radioClicked(`${res.name}`,`${desc}`)}/>{desc}
                                            </label>)}
                                            {res.name === "religion" ? <label for={res.name} >Others please specify <input type="text" id={res.label} name={res.name}  onChange={ e => radioClicked(`${res.name}`,`${e.target.value}`)}/></label> :
                                            res.name === "education" ? <label for={res.name} >Professional Course (CA/ CS/ CMA etc.) please specify <input type="text" id={res.label} name={res.name}  onChange={ e => radioClicked(`${res.name}`,`${e.target.value}`)}/></label> :
                                            res.name === "industry" ? <label for={res.name} >Other industry please specify <input type="text" id={res.label} name={res.name}  onChange={ e => radioClicked(`${res.name}`,`${e.target.value}`)}/></label> :
                                            '' }
                                        </div>   
                                </div>
                            )}
                            
                            
                            
                        </form>
                        <button className="btn btn-primary next" onClick={()=>nextPrev()}>Next</button>
                    </div>
                </div>
            
            
        </div>
    )
}

export default Demographic
