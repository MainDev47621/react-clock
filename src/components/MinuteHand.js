import React from 'react';

export default function MinuteHand({ currMinute }) {

  const minutesRatio = currMinute / 60;

  return (
    <div
      className="hand minute"
      style={{'--rotation': minutesRatio}}>
    </div>
  )
}