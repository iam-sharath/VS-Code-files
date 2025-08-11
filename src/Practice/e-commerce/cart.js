import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Cart = () => {
  return (
    <div><h2>
      cart
      </h2>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item onClick={}></Dropdown.Item> */}
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}

export default Cart