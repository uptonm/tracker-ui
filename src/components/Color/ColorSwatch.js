import React, { useRef, useState } from 'react';
import { default as styleData } from '../../assets/variables';

let style = (color, hover) => {
  return {
    colorSwatch: {
      position: 'relative',
      backgroundColor: hover
        ? styleData.colors[`${color}Hover`]
        : styleData.colors[color],
      height: '12rem',
      width: '12rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'space-between'
    },
    button: {
      position: 'absolute',
      top: '2rem',
      right: '1rem',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'transparent',
      border: 'none'
    },
    name: {
      fontWeight: '200',
      textAlign: 'center',
      color: styleData.colors.white,
      backgroundColor: 'transparent',
      border: 'none',
      resize: 'none'
    },
    clipboard: {
      color: styleData.colors.white,
      transition: 'all 0.25s'
    },
    alert: {
      position: 'absolute',
      bottom: '0rem',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '1rem',
      fontWeight: '200',
      color: styleData.colors.white
    }
  };
};

const ColorSwatch = ({ color, hover }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const colorRef = useRef(null);

  function copyToClipboard(e) {
    e.preventDefault();
    colorRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  }

  return (
    <form style={style(color, hover).colorSwatch}>
      {document.queryCommandSupported('copy') && (
        <button style={style(color, hover).button} onClick={copyToClipboard}>
          {copySuccess ? (
            <i
              className="fal fa-clipboard-check"
              style={style(color, hover).clipboard}
            />
          ) : (
            <i
              className="fal fa-clipboard"
              style={style(color, hover).clipboard}
            />
          )}
        </button>
      )}
      <h1 style={style(color).name}>{color}</h1>
      <textarea
        style={style(color, hover).name}
        ref={colorRef}
        readOnly
        value={
          hover ? styleData.colors[`${color}Hover`] : styleData.colors[color]
        }
      />
      <h1 style={style(color).alert}>{copySuccess ? 'Copied' : ''}</h1>
    </form>
  );
};

export default ColorSwatch;
