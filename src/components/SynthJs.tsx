import * as React from 'react';
import AudioEngine from './AudioEngine';

export interface SynthJsProps { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class SynthJs extends React.Component<SynthJsProps, {}> {

  audioEngine: AudioEngine;
  constructor (props: SynthJsProps) {
    super(props);
    this.audioEngine = new AudioEngine();
  }

  clickHandler = () => {
    this.audioEngine.play();
  }

  render() {
    return (<>
      <h1>SynthJs</h1>
      <button onClick={this.clickHandler}>Make sound</button>
    </>);
  }
}