import * as React from 'react';
import AudioEngine from './AudioEngine';

export interface SoundKeysProps { }

// 'SoundKeysProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class SoundKeys extends React.Component<SoundKeysProps, {}> {

  audioEngine: AudioEngine;
  constructor (props: SoundKeysProps) {
    super(props);
    this.audioEngine = new AudioEngine();
  }

  clickHandler = () => {
    this.audioEngine.play();
  }

  render() {
    return (<>
      <h1>SoundKeys</h1>
      <button onClick={this.clickHandler}>Make sound</button>
    </>);
  }
}