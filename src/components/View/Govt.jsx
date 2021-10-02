import React, {useState, useReducer} from 'react'

import data from '../../data.json'

export default function Govt() {
    const [radio4, setRadio4] = useState()

    const reducer = (state, action)=>{
        switch(action.type){
            case 'govt':
                return {...state, [action.name]:action.value}
            case 'default' :
                return state    
        }
    }

    const [state4, dispatch] = useReducer(reducer, radio4)

    const radioClicked = (n, d) => {
        dispatch({type:'govt', value:d, name: n})
    }
    console.log(state4)
    return (
        <div className="section" id="govt" >
            <div className="panel panel-default">
                    <div className="panel-heading">{data.que6.sec}</div>
                    <div className="panel-body">
                        
                        {data.que6.q.map(res => 
                            <div className="radioInline" id={res.A} key={res.A}>
                                <div className="num">{res.A}</div>
                                <div className="dis">{res.d}</div>
                                <div>
                                    <div className="num">{}</div>
                                    <div className="selectPanel2">{data.que6.des4.map(des => 
                                        <label for={res.A} >
                                            <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                                        </label>)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
            </div>
            
            
        </div>
    )
}
