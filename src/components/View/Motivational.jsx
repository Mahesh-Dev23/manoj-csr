import React,{useState, useReducer, useContext} from 'react'

import data from '../../data.json'

import Radio5 from './Radio5'

export const Radio4AValue = React.createContext()
export const Radio4BValue = React.createContext()
export const Radio4CValue = React.createContext()

export default function Motivational() {

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

    console.log(state4A)
    console.log(state4B)
    console.log(state4C)
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
                                {res.opt.map(res => 
                                <div className={res.slot} >
                                    <label for={res.A} >
                                        <input type="radio" id={res.slot} name={res.A} value={res.span} onClick={ ()=> radioClicked2(`${res.A}`,`${res.span}`)}/>
                                        {res.span}
                                    </label>    
                                    <span>{res.opt}</span>
                                    {/* <div className="num">{}</div> */}
                                   
                                        {/* <div className={`selectPanel2 ${res.slot}`}> {res.span.map(des => 
                                            <label for={res.A} >
                                                <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked2(`${res.A}`,`${des}`)}/>
                                                {des}
                                                
                                            </label>
                                            
                                        
                                        )}
                                        <span>{res.opt.map( opt => opt)}</span>
                                        </div> */}
                                        
                                    
                                </div>)}
                            </div>
                        )}
                    </div>
            </div>
            
            
        </div>
    )
}
