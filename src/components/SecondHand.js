import React from 'react'

export default function SecondHand({ currSecond }) {

  const secondsRatio = currSecond / 60;

  return (
    <div
      className="hand second"
      style={{'--rotation': secondsRatio}}>
    </div>
  )
}
