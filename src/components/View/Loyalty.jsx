import React,{useState, useEffect, useReducer, useContext} from 'react'

import { getResponce } from '../../App'

import Radio5 from './Radio5'

export const Radio2Value = React.createContext()

function Loyalty({data}) {
    const captureQue2Values = useContext(getResponce)
    const [radioArray, setRadioArray] = useState([])
    //console.log( radioArray )

    const reducer = (state, action)=>{
        switch(action.type){
            case 'main':
                return{...state, [action.name]:action.value}
            default :
                return state       
        }      
    }

    // user reducer 
    const [newState, dispatch] = useReducer( reducer, radioArray)

    const nextPrev = () =>{
        captureQue2Values.countDispatch({type:'que2', value:newState})
    }
    // console.log(newState)
    return (
        <div className="section" id="loyalty" >
            <div className="panel panel-default">
                    <div className="panel-heading">{data.sec}</div>
                    <div className="panel-body">
                        <div className="radioInline qTitles">
                            <div className="num">{data.des1}</div>
                            <div className="dis">{data.des2}</div>
                            <div className="selectPanel">{data.des3}</div>          
                        </div>
                        <form  >
                            <Radio2Value.Provider value={{countState: newState, countDispatch: dispatch}}>< Radio5 data={data} /></Radio2Value.Provider>                             
                        </form>    
                            <button type="submit" className="btn btn-primary" onClick={() => nextPrev()}>Next</button>
                        
                    </div>
                </div>
            
        </div>
    )
}

export default Loyalty
