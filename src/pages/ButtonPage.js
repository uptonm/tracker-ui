import React from 'react';

import Button from '../components/Button/Button';

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
      <h1 style={style.header}>Normal Buttons</h1>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'primary'}
          text={'Primary Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'secondary'}
          text={'Secondary Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'success'}
          text={'Success Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'danger'}
          text={'Danger Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'warning'}
          text={'Warning Button'}
        />
      </div>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'info'}
          text={'Info Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'light'}
          text={'Light Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'dark'}
          text={'Dark Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'link'}
          text={'Link Button'}
        />
      </div>
      <h1 style={style.header}>Outline Buttons</h1>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'primary'}
          outline
          text={'Primary-Outline Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'secondary'}
          outline
          text={'Secondary-Outline Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'success'}
          outline
          text={'Success-Outline Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'danger'}
          outline
          text={'Danger-Outline Button'}
        />
      </div>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'warning'}
          outline
          text={'Warning-Outline Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'info'}
          outline
          text={'Info-Outline Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'light'}
          outline
          text={'Light-Outline Button'}
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'dark'}
          outline
          text={'Dark-Outline Button'}
        />
      </div>
      <h1 style={style.header}>Disabled Buttons</h1>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'primary'}
          text={'Primary Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'secondary'}
          text={'Secondary Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'success'}
          text={'Success Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'danger'}
          text={'Danger Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'warning'}
          text={'Warning Button'}
          disabled
        />
      </div>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'info'}
          text={'Info Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'light'}
          text={'Light Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'dark'}
          text={'Dark Button'}
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'link'}
          text={'Link Button'}
          disabled
        />
      </div>
      <h1 style={style.header}>Disabled Outline Buttons</h1>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'primary'}
          text={'Primary Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'secondary'}
          text={'Secondary Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'success'}
          text={'Success Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'danger'}
          text={'Danger Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'warning'}
          text={'Warning Button'}
          outline
          disabled
        />
      </div>
      <div style={style.row}>
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'info'}
          text={'Info Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'light'}
          text={'Light Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'dark'}
          text={'Dark Button'}
          outline
          disabled
        />
        <Button
          onClick={() => console.log('onClick Handler')}
          type={'link'}
          text={'Link Button'}
          outline
          disabled
        />
      </div>
    </div>
  );
};
