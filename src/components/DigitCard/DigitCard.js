import React, { useRef } from 'react';
import DigitCardClasses from './DigitCard.module.css';
import BaseCard from './BaseCard/BaseCard';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';
import theme from '../../theme';

const DigitCard = (props) => {
  const nodeRef = useRef(null);
  const animationTiming = {
    enter: 1000,
    exit: 0,
  };
  return (
    <div>
      <div className={DigitCardClasses.flipCard}>
        <CSSTransition
          nodeRef={nodeRef}
          in={props.flip}
          timeout={animationTiming}
          classNames="flip"
        >
          <div ref={nodeRef} className={DigitCardClasses.flipCardInner}>
            <div className={DigitCardClasses.flipCardFront}>
              <BaseCard flip={props.flip} number={props.number} />
            </div>
            <div className={DigitCardClasses.flipCardBack}>
              <BaseCard flip={props.flip} number={props.number} />
            </div>
          </div>
        </CSSTransition>
      </div>
      <div className={DigitCardClasses.unit} style={{ color: theme.colors.grayishBlue }}>
        {props.unit}
      </div>
    </div>
  );
};

DigitCard.propTypes = {
  unit: PropTypes.string,
  number: PropTypes.number,
  flip: PropTypes.bool,
};

export default DigitCard;
