import React,{useState, useEffect, useReducer} from 'react'


import submitData from '../Controller/submitData'

import Radio5 from './Radio5'

export const Radio2Value = React.createContext()

function Loyalty({data}) {

    const [radioArray, setRadioArray] = useState([])
    console.log( radioArray )

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


    // const radioClicked = (n, d) => {
    //     dispatch({type:'main', value:d, name:n})
    // }

    console.log(newState)
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
                            {/* {data.q.map(res => 
                                <div className="radioInline" id={res.A} key={res.A}>
                                    <div className="num">{res.A}</div>
                                    <div className="dis">{res.d}</div>
                                    <div className="selectPanel">{data.des4.map(des => 
                                        <label for={res.A} >
                                            <input type="radio" id={res.A + des} name={res.A} value={des} onClick={ ()=> radioClicked(`${res.A}`,`${des}`)}/>{des}
                                        </label>)}
                                    </div>
                                </div>
                            )} */}
                                    
                                
                            
                            <button type="submit" className="btn btn-primary" onClick={() => submitData("loyalty")}>Next</button>
                        </form>
                    </div>
                </div>
            
        </div>
    )
}

export default Loyalty
