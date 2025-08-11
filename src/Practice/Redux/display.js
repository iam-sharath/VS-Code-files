import React from 'react'
import {connect } from 'react-redux'
import { DecAction, IncAction } from './action'
const Displayredux = ({local,IncAction,DecAction}) => {
  return (
    <div>
        <center>
            <h2>{local}</h2>
            <button onClick={IncAction}>INCREMENT</button>
             <button onClick={DecAction}>DECREMENT</button>
        </center>
    </div>
  )
}
const mapStateToProps= state =>({
local : state
})
export default connect(mapStateToProps,{IncAction,DecAction})(Displayredux)