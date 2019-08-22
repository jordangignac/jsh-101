import React from 'react';
import styled from 'styled-components';

export const keyboardValues = [
  {white: ['F2', 'G2', 'A2', 'B2'], black: ['Gb2', 'Ab2', 'Bb2']},
  {white: ['C3', 'D3', 'E3'], black: ['Db3', 'Eb3']},
  {white: ['F3', 'G3', 'A3', 'B3'], black: ['Gb3', 'Ab3', 'Bb3']},
  {white: ['C4', 'D4', 'E4'], black: ['Db4', 'Eb4']},
  {white: ['F4'], black: []},
];

const MidiWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
`;

const KeyGroup = styled.div`
  height: 100%;
  position: relative;
  border-right: 1px solid #444;
  width: ${p => p.length * 50}px;
  &:nth-last-child(1) {
    border-right: none;
  }
`;

const Keys = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  margin: auto;
`;

const Black = styled.div`
  z-index: 99;
  width: 25px;
  height: 55%;
  margin-left: 25px;
  background-color: #444;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  transition: background-color 0.3s ease;
  &:first-child {
    margin-left: 0px;
  }
  &:hover {
    cursor: pointer;
    background-color: #777;
  }
`;

const White = styled.div`
  width: 50px;
  height: 100%;
  border-right: 1px solid #444;
  transition: background-color 0.3s ease;
  &:nth-last-child(1) {
    border-right: none;
  }
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

export const MidiKeyboardController = ({play, stop}) => (
  <MidiWrapper>
    {keyboardValues.map((config, idx) => (
      <KeyGroup key={`kg-${idx}`} length={config.white.length}>
        <Keys>
          {config.black.map(key => {
            const note = `${key[0]}${key[1]}`;
            const octave = key[2];
            return (
              <Black
                key={key}
                onMouseUp={() => stop(note, octave)}
                onMouseDown={e => e.preventDefault() || play(note, octave)}
                onMouseLeave={e => e.buttons === 1 && stop(note, octave)}
                onMouseEnter={e => e.buttons === 1 && play(note, octave)}
              />
            );
          })}
        </Keys>
        <Keys>
          {config.white.map(key => {
            const note = key[0];
            const octave = key[1];
            return (
              <White
                key={key}
                onMouseUp={() => stop(note, octave)}
                onMouseDown={e => e.preventDefault() || play(note, octave)}
                onMouseLeave={e => e.buttons === 1 && stop(note, octave)}
                onMouseEnter={e => e.buttons === 1 && play(note, octave)}
              />
            );
          })}
        </Keys>
      </KeyGroup>
    ))}
  </MidiWrapper>
);
