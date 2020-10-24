// note {length / beats, pitch}
// rest {length / beats}
// measure -- {* notes}
// time signature: beats / bar; note length (3/4 --> 3 beats per bar + quarter (1/4) notes)
// song - time signature, {* measures}
import AudioNode from '../Components/AudioNode';
import { MUSICAL_NOTE, EQUAL_TEMPERED_SCALE, CHROMATIC_SCALE } from '../components/AudioConstants';

export interface Beat {
  length: number;

  play(engine: AudioNode) : void;
}

export class Note implements Beat {
  length: number;       // MS
  // pitch: number;
  value: MUSICAL_NOTE;

  constructor(value: MUSICAL_NOTE, length: number) {
    this.value = value;
    this.length = length;
  }

  play(engine: AudioNode) : void {
    engine.play(this.value, length);
  };
}

export class Rest implements Beat {
  length: number;

  play(engine: AudioNode) : void {

  };
}

export class Measure {
  length: number;
  notes: Array<Beat>;

  addNote() : void {
  }

  play(engine: AudioNode) : void {
    this.notes.forEach(note => note.play(engine));
  };
}

// time signature: beats / bar; note length (3/4 --> 3 beats per bar + quarter (1/4) notes)
export class TimeSignature {
  numberOfBeats: number;
  noteLength: number;
}

export class Line {
  timeSignature: TimeSignature;
  measures: Array<Measure>;

  addMeasure() : void {
    const measure = new Measure();
    this.measures.push(measure);
  }

  play(engine: AudioNode) : void {
    this.measures.forEach(measure => measure.play(engine));
  };
}

export class Song {
  lines: Array<Line>;

  addLine() : void {
    const line = new Line();
    this.lines.push(line);
  }

  play(engine: AudioNode) : void {
    this.lines.forEach(line => line.play(engine));
  };
}