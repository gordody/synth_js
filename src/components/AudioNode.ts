import { MUSICAL_NOTE, EQUAL_TEMPERED_SCALE } from './AudioConstants';

export default class AudioNode {
  audioContext: AudioContext;
  oscillator: OscillatorNode;

  constructor() {
    this.audioContext = null;
    this.oscillator = null;
  }

  private init() {
    if (this.audioContext) return;

    try {
      this.audioContext = new AudioContext();
      this.oscillator = this.audioContext.createOscillator();
    } catch (error) {
      console.error('Init error:', error);
    }
  }

  play(note: MUSICAL_NOTE, lengthMs: number) {
    this.init();

    const frequency = EQUAL_TEMPERED_SCALE[note];
    if (!frequency) {
      console.warn('Note not found');
      return;
    }
    this.oscillator.frequency.value = frequency;

    this.oscillator.connect(this.audioContext.destination);
    this.oscillator.start();
    this.oscillator.stop(this.audioContext.currentTime + lengthMs / 1000);
  }
}