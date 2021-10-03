import React,{useState, useReducer, useContext} from 'react'

import data from '../../data.json'

import Radio5 from './Radio5'
import { getResponce } from '../../App'

export const Radio4AValue = React.createContext()
export const Radio4BValue = React.createContext()
export const Radio4CValue = React.createContext()

export default function Motivational() {
    const captureQue4aValues = useContext(getResponce)
    const captureQue4bValues = useContext(getResponce)
    const captureQue4cValues = useContext(getResponce)

    const [radio4A, setradio4A] = useState([])
    const [radio4B, setradio4B] = useState([])
    const [radio4C, setradio4C] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'a':
                return {...state, [action.name]:action.value}
            case 'b':
                return {...state, [action.name]:action.value}  
            case 'c':
                return {...state, [action.name]:action.value}   
            case 'default':
                return state
        }
    }

    const [state4A, dispatchA ] = useReducer(reducer, radio4A)
    const [state4B, dispatchB ] = useReducer(reducer, radio4B)
    const [state4C, dispatchC ] = useReducer(reducer, radio4C)

    const radioClicked = (n, d) =>  dispatchB({type:'b', value:d, name: n})
        
    const radioClicked2 = (n, d) =>  dispatchC({type:'c', value:d, name: n})

    //console.log(state4A)
    //console.log(state4B)
    //console.log(state4C)

    const nextPrev = () =>{
        captureQue4aValues.countDispatch({type:'que4a', value:state4A})
        captureQue4bValues.countDispatch({type:'que4b', value:state4B})
        captureQue4cValues.countDispatch({type:'que4c', value:state4C})
    }

    return (
        <div className="section" id="motivational" >
            <div className="panel panel-default">
                    <div className="panel-heading">{data.que4a.sec}</div>
                    <div className="panel-body">
                        <h4>{data.que4a.qSec}</h4>
                        <Radio4AValue.Provider value={{countState: state4A, countDispatch: dispatchA}}><Radio5 data={data.que4a}  /></Radio4AValue.Provider>

                        <h4>{data.que4b.qSec}</h4>
                        {data.que4b.q.map(res => 
                            <div className="radioInline" id={res.A} key={res.A}>
                                <div className="num">{res.A}</div>
                                <div className="dis">{res.d}</div>
                                <div>
                                    <div className="num">{}</div>
                                    <div className="selectPanel2">{data.que4b.des4.map(des => 
                                        <label for={res.A} >
                                            <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                                        </label>)}
                                    </div>
                                </div>
                            </div>
                        )}

                        <h4>{data.que4c.qSec}</h4>
                        {data.que4c.q.map(res => 
                            <div className="radioInline" id={res.A} key={res.A}>
                                <div style={{display: "block", margin: "5px 0"}}>
                                    <div className="num">{res.A}</div>
                                    <div className="dis">{res.d}</div>
                                </div>
                                {res.opt.map(resp => 
                                <div className={resp.slot} >
                                    <label for={res.A} >
                                        <input type="radio" id={resp.slot} name={res.A} value={resp.span} onClick={ ()=> radioClicked2(`${res.A}`,`${resp.span}`)}/>
                                        {resp.span}
                                    </label>    
                                    <span>{resp.opt}</span>
                                    
                                </div>)}
                            </div>
                        )}
                        <button className="btn btn-primary" onClick={()=>nextPrev()}>Next</button>
                    </div>
            </div>
            
            
        </div>
    )
}
