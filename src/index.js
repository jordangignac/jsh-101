import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import {AudioHandler} from './web-audio';
import {PowerButton} from './components/buttons';
import {MidiKeyboardController} from './components/midi';

const audioIO = new AudioHandler();

const SynthWrapper = styled.div`
  color: #444;
  width: 750px;
  margin: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Abel', sans-serif;
  border: 1px solid #444;
  border-radius: 5px;
`;

const SynthDisplay = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #444;
  padding: 0px 20px;
`;

const SynthTitle = styled.h1`
  font-family: 'Bungee Shade', cursive;
  font-size: 50px;
`;

const Synth = () => (
  <SynthWrapper>
    <SynthDisplay>
      <PowerButton />
      <SynthTitle>JSH-101</SynthTitle>
    </SynthDisplay>
    <MidiKeyboardController play={audioIO.playTone} stop={audioIO.stopTone} />
  </SynthWrapper>
);

ReactDOM.render(<Synth />, document.getElementById('root'));
