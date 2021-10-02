import React,{useState, useReducer} from 'react'

import Data from '../../data.json'

import Radio5 from './Radio5'

export const Radio7Value = React.createContext()

function PreferToStay() {
    const [radio7, setRadio7] = useState([])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'preferToStay':
                return {...state, [action.name]:action.value}
            case 'default':
                return state
        }
    }

    const [state7, dispatch ] = useReducer(reducer, radio7)
    console.log(state7)

    return (
        <div className="section" id="prefer" >
            <div className="panel panel-default">
                    <div className="panel-heading">{Data.que7.sec}</div>
                    <div className="panel-body">
                        <div className="radioInline qTitles">
                                    <div className="num">{Data.que7.des1}</div>
                                    <div className="dis">{Data.que7.des2}</div>
                                    <div className="selectPanel">{Data.que7.des3}</div>
                                    
                                </div>
                        <form id="prefer" > 
                            
                            {/* <button type="submit" className="btn btn-primary" onClick={() => submitData("loyalty")}>Next</button> */}
                        </form>
                        <Radio7Value.Provider value={{countState: state7, countDispatch: dispatch}}><Radio5 data={Data.que7} id={"roi4"} /></Radio7Value.Provider>
                    </div>
                </div>
        </div>
    )
}

export default PreferToStay
