import React from 'react';
import DigitCardClasses from '../DigitCard.module.css';
import theme from '../../../theme';
import PropTypes from 'prop-types';

const BaseCard = (props) => {
  return (
    <div
      className={DigitCardClasses.card}
      style={{
        background: `linear-gradient(0deg, ${theme.colors.leastDesaturatedBlue} 50%,${theme.colors.darkDesaturatedBlue}  50%`,
      }}
    >
      <hr className={DigitCardClasses.divider} />
      <div
        className={`${DigitCardClasses.number}`}
        style={{
          color: theme.colors.softRed,
        }}
      >
        {props.number < 10 ? `0${props.number}` : props.number}
      </div>
    </div>
  );
};

BaseCard.propTypes = {
  number: PropTypes.number,
  flip: PropTypes.bool,
};

export default BaseCard;
