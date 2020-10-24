import * as React from 'react';

import { MUSICAL_NOTE, EQUAL_TEMPERED_SCALE, CHROMATIC_SCALE } from './AudioConstants';

import AudioNode from './AudioNode';


import { Song } from '../data/SoundData';

export interface SoundKeysProps { }

// 'SoundKeysProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class SoundKeys extends React.Component<SoundKeysProps, {}> {

  engine: AudioNode;
  song: Song;

  constructor (props: SoundKeysProps) {
    super(props);

    this.engine = new AudioNode();
    this.song = new Song();
  }

  addNoteHandler = () => {
    console.log('adding note'); 
  }

  playNoteHandler = () => {
    const audioNode = new AudioNode();
    audioNode.play(MUSICAL_NOTE.A4, 1000);
  }

  playSongHandler = () => {
    this.song.play(this.engine);
  }

  render() {
    return (<>
      <h1>SoundKeys</h1>
      <button onClick={this.addNoteHandler}>Add new note</button>
      <button onClick={this.playSongHandler}>Play song</button>
    </>);
  }
}