import {noteFreq} from './util';

export class AudioHandler {
  constructor() {
    this.oscList = [];
    this.masterGainNode = null;
    this.playTone = this.playTone.bind(this);
    this.stopTone = this.stopTone.bind(this);
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.masterGainNode = this.audioContext.createGain();
    this.masterGainNode.connect(this.audioContext.destination);
    this.masterGainNode.gain.value = 0.5;
  }

  playTone(note, octave) {
    this.oscList[`${note}${octave}`] = this.audioContext.createOscillator();
    this.oscList[`${note}${octave}`].frequency.value = noteFreq[note][octave];
    this.oscList[`${note}${octave}`].connect(this.masterGainNode);
    this.oscList[`${note}${octave}`].type = 'square';
    this.oscList[`${note}${octave}`].start();
  }

  stopTone(note, octave) {
    this.oscList[`${note}${octave}`].stop();
    this.oscList[`${note}${octave}`] = undefined;
  }
}
