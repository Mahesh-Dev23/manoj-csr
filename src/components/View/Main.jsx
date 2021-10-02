import React from 'react'

import Data from '../../data.json'

import Demographic from './Demographic'
import Loyalty from './Loyalty'
import Radio5 from './Radio5'
import ROI from './ROI'
import PreferToStay from './PreferToStay'
import Leadership from './Leadership'
import Govt from './Govt'
import Motivational from './Motivational'



function Main() {
    return (
        <div>
            <div id="top">
                <h3>Welcome to Corporate Social Responsibility - Survey</h3>
                {/* <h4>Thank you for participating in this survey.</h4> */}
                <h5>Please fill all the questions carefully. Please do not leave any questions blank.</h5>
            </div>
            <div className="container-fluid">
                <Demographic />
                <Loyalty data={Data.que2} id={"loyalty"} />
                <ROI />
                <Motivational />
                <Leadership />
                <Govt />
                <PreferToStay />
            </div>

        </div>
    )
}

export default Main
