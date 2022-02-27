import React from 'react'

export default function Number({ num }) {
  return (
    <div
      className="number"
      style={{'--rotation': num}}>
        <p
          className="num-box"
          style={{'--tilt': num}}>{num}</p>
    </div>
  )
}
