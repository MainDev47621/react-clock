import React from 'react'
import Number from './Number'
import HourHand from './HourHand'
import MinuteHand from './MinuteHand'
import SecondHand from './SecondHand'

export default function Clock() {
  const numbers = [...Array(12).keys()].map(num => num + 1);
  return (
    <div className="clock">
      {numbers.map(num => (
          <Number key={`number${num}`} num={num} />
      ))}
    </div>
  )
}
