import React from 'react'

export default function HourHand({ currHours }) {

  const hoursRatio = currHours / 12;

  return (
    <div
      className="hand hour"
      style={{'--rotation': hoursRatio}}>
    </div>
  )
}
