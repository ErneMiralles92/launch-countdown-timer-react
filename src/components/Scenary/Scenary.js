import React, { useEffect, useState } from 'react';
import DigitCard from '../DigitCard/DigitCard';
import theme from '../../theme';
import ScenaryClasses from './Scenary.module.css';
// import { ReactComponent as FacebookIcon } from '../../assets/images/icon-facebook.svg';
import ButtonSocialNetwork from '../UI/Buttons/ButtonSocialNetwork';

const Scenary = (props) => {
  // const [seconds, addSeconds] = useReducer((state) => state + 1, 0);
  const [countDown, setCountDown] = useState(14 * 24 * 60 * 60 * 1000);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [flipCard, setFlipCard] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const TIME_ACCURRACY = 250;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - TIME_ACCURRACY);
    }, TIME_ACCURRACY);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const newCountDown = getInfoFormDate(countDown);
    const futureCountDown = getInfoFormDate(countDown - TIME_ACCURRACY);
    // console.log({ newCountDown: newCountDown });
    setSeconds(newCountDown.seconds);
    setMinutes(newCountDown.minutes);
    setHours(newCountDown.hours);
    setDays(newCountDown.days);
    const flips = {
      days: false,
      hours: false,
      minutes: false,
      seconds: false,
    };
    for (const key in futureCountDown) {
      flips[key] = futureCountDown[key] !== newCountDown[key];
    }
    setFlipCard(flips);
  }, [countDown]);
  const getInfoFormDate = (dateMS) => {
    const secMS = 1000;
    const minMS = 60 * secMS;
    const hourMS = 60 * minMS;
    const dayMS = 24 * hourMS;

    const elapsedTimeData = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    elapsedTimeData.days = Math.floor(dateMS / dayMS);
    dateMS = dateMS % dayMS;
    elapsedTimeData.hours = Math.floor(dateMS / hourMS);
    dateMS = dateMS % hourMS;
    elapsedTimeData.minutes = Math.floor(dateMS / minMS);
    dateMS = dateMS % minMS;
    elapsedTimeData.seconds = Math.floor(dateMS / secMS);
    return elapsedTimeData;
  };
  return (
    <div className={ScenaryClasses.container}>
      <div
        style={{
          background: `linear-gradient(${theme.colors.mostDarkBlue},${theme.colors.veryDarkBlue}`,
        }}
      >
        <div className={ScenaryClasses.stars}>
          <div className="text-h5" style={{ color: theme.colors.white, paddingTop: '100px' }}>
            WE&lsquo;RE LAUNCHING SOON
          </div>
          <div className={`${ScenaryClasses.watchContainer}`}>
            <DigitCard flip={flipCard.days} number={days} unit={'days'} />
            <DigitCard flip={flipCard.hours} number={hours} unit={'hours'} />
            <DigitCard flip={flipCard.minutes} number={minutes} unit={'minutes'} />
            <DigitCard flip={flipCard.seconds} number={seconds} unit={'seconds'} />
          </div>
        </div>
      </div>
      <div className={ScenaryClasses.hills} style={{ backgroundColor: theme.colors.veryDarkBlue }}>
        <div className={ScenaryClasses.btnGroup}>
          <div className={ScenaryClasses.btnIcon}>
            <ButtonSocialNetwork className socialNetwork="facebook" />
          </div>
          <div className={ScenaryClasses.btnIcon}>
            <ButtonSocialNetwork socialNetwork="pinterest" />
          </div>
          <div className={ScenaryClasses.btnIcon}>
            <ButtonSocialNetwork socialNetwork="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenary;
