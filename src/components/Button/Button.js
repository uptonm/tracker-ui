import React from 'react';
import Radium from 'radium'; // Used for easier styling of effects
import styles from './styleData';

const button = props => {
  return (
    <button
      onClick={props.onClick}
      style={{
        ...styles(props.type, props.outline, props.disabled).btn,
        ...styles(props.type, props.outline, props.disabled).btn[props.type]
      }}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Radium(button);
