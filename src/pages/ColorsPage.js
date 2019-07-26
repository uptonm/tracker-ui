import React from 'react';
import ColorSwatch from '../components/Color/ColorSwatch';

let style = {
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '1rem'
  },
  header: {
    textAlign: 'center'
  }
};

export default () => {
  return (
    <div>
      <h1 style={style.header}>Color Pallete - Normal</h1>
      <div style={style.row}>
        <ColorSwatch color="primary" />
        <ColorSwatch color="secondary" />
        <ColorSwatch color="success" />
        <ColorSwatch color="danger" />
        <ColorSwatch color="warning" />
        <ColorSwatch color="info" />
        <ColorSwatch color="light" />
        <ColorSwatch color="dark" />
      </div>
      <h1 style={style.header}>Color Pallete - Hover</h1>
      <div style={style.row}>
        <ColorSwatch color="primary" hover />
        <ColorSwatch color="secondary" hover />
        <ColorSwatch color="success" hover />
        <ColorSwatch color="danger" hover />
        <ColorSwatch color="warning" hover />
        <ColorSwatch color="info" hover />
        <ColorSwatch color="light" hover />
        <ColorSwatch color="dark" hover />
      </div>
    </div>
  );
};
