import React, {useState, useReducer, useContext} from 'react'

import Data from '../../data.json'

import Radio5 from './Radio5'
import Scale5 from './scale5'
import { getResponce } from '../../App'

export const Radio3AValue = React.createContext()
export const Radio3BValue = React.createContext()
export const Radio3CValue = React.createContext()
export const Radio3DValue = React.createContext()

function ROI() {
    const captureQue3aValues = useContext(getResponce)
    const captureQue3bValues = useContext(getResponce)
    const captureQue3cValues = useContext(getResponce)
    const captureQue3dValues = useContext(getResponce)

    const [radio3A, setradio3A] = useState([])
    const [radio3B, setradio3B] = useState([])
    const [radio3C, setradio3C] = useState([])
    const [radio3D, setradio3D] = useState([])

    
    const reducer = (state, action)=>{
        switch(action.type){
            case 'a':
                return {...state, [action.name]:action.value}
            case 'b':
                return {...state, [action.name]:action.value}  
            case 'c':
                return {...state, [action.name]:action.value}
            case 'roi':
                return {...state, [action.name]:action.value}      
            case 'default':
                return state
        }
    }

    const [state3A, dispatchA ] = useReducer(reducer, radio3A)
    const [state3B, dispatchB ] = useReducer(reducer, radio3B)
    const [state3C, dispatchC ] = useReducer(reducer, radio3C)
    const [state3D, dispatch ] = useReducer(reducer, radio3D)
    //console.log(state3A)
    //console.log(state3B)
    //console.log(state3D)
    //console.log(state3C)

    const nextPrev = () =>{
        captureQue3aValues.countDispatch({type:'que3a', value:state3A})
        captureQue3bValues.countDispatch({type:'que3b', value:state3B})
        captureQue3cValues.countDispatch({type:'que3c', value:state3C})
        captureQue3dValues.countDispatch({type:'que3d', value:state3D})
    }

    return (
        <div className="section" id="roi" >
            <div className="panel panel-default">
                    <div className="panel-heading">{Data.que3d.sec}</div>
                    <div className="panel-body">

                        <h4>{Data.que3a.qSec}</h4>
                        <Radio3AValue.Provider value={{countState: state3A, countDispatch: dispatchA}}><Scale5 data={Data.que3a}  /></Radio3AValue.Provider>

                        <h4>{Data.que3b.qSec}</h4>
                        <Radio3BValue.Provider value={{countState: state3B, countDispatch: dispatchB}}><Scale5 data={Data.que3b}  /></Radio3BValue.Provider>

                        <h4>{Data.que3c.qSec}</h4>
                        <Radio3CValue.Provider value={{countState: state3C, countDispatch: dispatchC}}><Scale5 data={Data.que3c} id={"roi4"} /></Radio3CValue.Provider>

                        <h4>{Data.que3d.qSec}</h4>
                        <div className="radioInline qTitles">
                            <div className="num">{Data.que3d.des1}</div>
                            <div className="dis">{Data.que3d.des2}</div>
                            <div className="selectPanel">{Data.que3d.des3}</div>   
                        </div>
                        <Radio3DValue.Provider value={{countState: state3D, countDispatch: dispatch}}><Radio5 data={Data.que3d} id={"roi4"} /></Radio3DValue.Provider>
                        <button className="btn btn-primary" onClick={()=>nextPrev()}>Next</button>
                    </div>
            </div>
        </div>
    )
}

export default ROI
