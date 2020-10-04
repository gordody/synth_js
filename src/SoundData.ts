// note {length / beats, pitch}
// rest {length / beats}
// measure -- {* notes}
// time signature: beats / bar; note length (3/4 --> 3 beats per bar + quarter (1/4) notes)
// song - time signature, {* measures}

interface Beat {
  length: number;

  play() : void;
}

class Note implements Beat {
  length: number;
  pitch: number;

  play() : void {

  };
}

class Rest implements Beat {
  length: number;

  play() : void {

  };
}

class Measure {
  notes: Array<Beat>;
}

class TimeSignature {
  numberOfBeats: number;
  noteLength: number;
}

class Line {
  measures: Array<Measure>;
}

class Song {
  lines: Array<Line>;
}