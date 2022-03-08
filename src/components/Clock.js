import { React, useEffect, useState, useRef } from 'react'
import Number from './Number'
import HourHand from './HourHand'
import MinuteHand from './MinuteHand'
import SecondHand from './SecondHand'

export default function Clock() {
  const [currHour, setCurrHour] = useState();
  const [currMinute, setCurrMinute] = useState();
  const [currSecond, setCurrSecond] = useState();
  const intervalID = useRef();

  function getDate() {
    const date = new Date();
    setCurrHour(date.getHours());
    setCurrMinute(date.getMinutes());
    setCurrSecond(date.getSeconds());
  }

  useEffect(() => {
    getDate();
    intervalID.current = setInterval(getDate, 1000);
    return () => {
      clearInterval(intervalID.current);
    }
  }, []);

  const numbers = [...Array(12).keys()].map(num => num + 1);

  return (
    <div className="clock">
      {numbers.map(num => (
          <Number key={`number${num}`} num={num} />
      ))}
      <SecondHand currSecond={currSecond} />
      <MinuteHand currMinute={currMinute} />
      <HourHand currHour={currHour} />
    </div>
  )
}
