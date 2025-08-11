import React from 'react'
import './secondlineimages.css'

import adidas from '../Image/a/a-adidas.jpeg'
import arrow from '../Image/a/a-arrow.jpeg'
import fossil from '../Image/a/a-fossil.jpeg'
import johnplayers from '../Image/a/a-johnplayers.jpeg'
import levis from '../Image/a/a-levis.jpeg'
import puma from '../Image/a/a-puma.jpeg'
import tigc from '../Image/a/a-tigc.jpeg'
import uspa from '../Image/a/a-uspa.jpeg'
import ax from '../Image/b/b-ax.jpeg'

import brook from '../Image/b/b-brooksbrothers.jpeg'
import fortcollins from '../Image/b/b-fortcollins.jpeg'
import gstar from '../Image/b/b-gstarraw.jpeg'
import nike from '../Image/b/b-nike.jpeg'
import th from '../Image/b/b-th.jpeg'

import header from '../Image/c/c-header.jpeg'
import nikee from '../Image/c/c-nike.jpeg'
import crocs from '../Image/c/c-crocs.jpeg'
import polo from '../Image/c/c-uspa.jpeg'
import leecooper from '../Image/c/c-leecooper.jpeg'
import campus from '../Image/c/c-campus.jpeg'
import louis from '../Image/c/c-louisphilippe.jpeg'
import heels from '../Image/c/c-heels.jpeg'


const Secondlineimages = () => {
  return (
    <div className='home_child'>

         <div className='box_three'>
          <img src={ax} alt='ax'/>
          <img src={brook} alt='brookbrothers'/>
          <img src={fortcollins} alt='fortcollins'/>
          <img src={gstar} alt='gstarraw'/>
          <img src={nike} alt='nike'/>
          <img src={th} alt='th'/>
         </div>

          <div className='footwear' >

            <div className='box_four'>
             <img src={header} alt='header'/>
             <img src={nikee} alt='nike'/>
             <img src={crocs} alt='crocs'/>
             <img src={leecooper} alt='leecooper'/>
            </div>

            <div className='box_five'>
             <img src={polo} alt='uspa'/>
             <img src={louis} alt='louis'/>
             <img src={heels} alt='heels'/>
             <img src={campus} alt='campsu'/>
            </div>

          </div>
    <div className='secondline_images'> 

          <div className='box_one'>
            <img src={adidas} alt="Adidas"/>
            <img src={arrow} alt="Arrow"/>
            <img src={fossil} alt="Fossil"/>
            <img src={levis} alt='levis'/>
         </div>

         <div className='box_two'>
            <img src={johnplayers} alt="John Players"/>
            <img src={puma} alt='puma'/>
            <img src={tigc} alt='tigc'/>
            <img src={uspa} alt='uspa'/>
         </div>

    </div>







    </div>
  )
}

export default Secondlineimages;