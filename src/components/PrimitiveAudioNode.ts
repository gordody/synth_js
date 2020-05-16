const REAL_TIME_FREQUENCY = 440;    // frequency of A4
const ANGULAR_FREQUENCY = REAL_TIME_FREQUENCY * 2 * Math.PI;

export default class PrimitiveAudioNode {
  audioContext: AudioContext;
  audioBuffer: AudioBuffer;
  sampleBuffer: Float32Array;

  constructor() {
    this.audioContext = null;
    this.audioBuffer = null;
    this.sampleBuffer = null;
  }

  private generateSample(sampleNumber: number) {
    let sampleTime = sampleNumber / 44100;
    let sampleAngle = sampleTime * ANGULAR_FREQUENCY;
    return Math.sin(sampleAngle);
  }

  private init() {
    if (this.audioContext) return;

    try {
      this.audioContext = new AudioContext();
      this.audioBuffer = this.audioContext.createBuffer(1, 88200, 44100);
      this.sampleBuffer = this.audioBuffer.getChannelData(0);
      for (let sampleNumber = 0; sampleNumber < 88200; sampleNumber++) {
        this.sampleBuffer[sampleNumber] = this.generateSample(sampleNumber);
      }      
    } catch (error) {
      console.error('Init error:', error);
    }
  }

  play() {
    this.init();

    let src = this.audioContext.createBufferSource();
    src.buffer = this.audioBuffer;
    src.connect(this.audioContext.destination);
    src.start();
  }
}