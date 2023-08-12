import React from 'react';
import { warningStyle, infoStyle, successStyle } from './messageStyles';

const DisplayStatus = (props) => {
  let messageStyle;
  switch (props.message) {
    case 'warning':
      messageStyle = warningStyle;
      break;
    case 'info':
      messageStyle = infoStyle;
      break;
    case 'success':
      messageStyle = successStyle;
      break;
    default:
      messageStyle = infoStyle;
  }
  return (
    <p style={messageStyle}>
      {' '}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam minus
      veritatis sit impedit ipsum tenetur voluptatum quo qui autem consequatur,
      facilis quae laborum beatae nemo saepe? Placeat, accusamus ducimus.
    </p>
  );
};

export default DisplayStatus;
