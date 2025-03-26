const roverFront =
  'data:image/png;base64,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';

const roverBack =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAAAXNSR0IArs4c6QAABVVJREFUeJzt3T+IHUUcB/CLWFoEUqQRlJyF1Z2QcAQs7LRSCIiNRQr/FWKdKpWCWKcLWqQVK60sLQQJkXghoIUJGmxSCBb2sZO8yd2bLHu7M7vfz6d79+7eze3Nl99vdnfe29kBAAAAAADW6lTtG/bO7T+aYyDHuXP/sDrGbcrx9/Z6a9f7/HlmroFAjwSAaAJAtGfLL5Q92+kzZ+cbzRH2dqbt4TlZS5s/KgDRBIBoAkC0J/ppPTJrZg0AjxEAogkA0Z64DlC6cP5gjnEc69bPN7c+f3jvl5lGwlH2d1/Z+nzv80cFIJoAEE0AiFZdA/z+x59zjOOp1Xr+1w7eGPX6P9z8ftTP9+6kj0/5/yjXBL3Nn5IKQDQBIJoAEK26BnjpxRfmGMf/yvO2ZY9Z62HH9vBTv/7UWh+f2ppg7usCt/5+uPV5FYBoAkA0ASBadQ0wtVrPXyrXJB98/vGJjqfskWv3uvSmt+PT25qgpAIQTQCIJgBEa74GGOvu7Qejfv7i7v4JjaRPjs92KgDRBIBoAkC0xe0H+Orr6xuP33vnw+I73hz0emWPfO3K1Y3HS9tzvLTj03p+qQBEEwCiCQDRmu8HqN2vXVPveYdZWs9f0/vxaT2/VACiCQDRBIBoi78XqFT2vHObev/A2B689fHpjQpANAEgmgAQbXVrgKkN3QO7tt+/NioA0QSAaAJAtMXtB5ha7z127ff3Pv5S6/mlAhBNAIgmAERb/H6Ascqeubceeaiha4TWf2/r+aUCEE0AiCYARIu7F6i3HnhutffrTzseKgDRBIBoAkA0ASCaABBNAIgmAERb/X6Asee5n7u8+V6a/94Y9r46X37z3aDvn9r7b29+PkDr6wKt55cKQDQBIJoAEC1+P0Cp7Pk/u3516/O1NUHZc7Op9fxSAYgmAEQTAKLF7QcY6sbDX0f9fO/XAdKpAEQTAKIJANGsAQrlef2x9wLpufumAhBNAIgmAERb/X6AsYb2/CXXAbZrPb9UAKIJANEEgGj2A0yst567N63nlwpANAEgmgAQLe5eoPT3wy/VPld47VQAogkA0QSAaHFrgE+++HTjcdqaoPx7y+Nx7crm+yCtnQpANAEgmgAQLW4/wF8//rbxuLYmKPW+RqiNv/x7W2s9v1QAogkA0QSAaKvfD1D7DKxLO+9uPK71yK3XCCfd45fn/ede47SeXyoA0QSAaAJAtLh7gcYau0aY+vczjApANAEgmgAQLW4NMPS6wPOvvjzo9Xvv0Vuf9++NCkA0ASCaABAtbj9AqbYm2Pl28+Glt8atEaZW29PbW8/fen6pAEQTAKIJANFWvx9gqFqP3HqNsLQev6b1/FIBiCYARBMAonV3L9BP9w43Hl/c3W80kqONXSNM/fsZRgUgmgAQTQCI1t0a4O7tB1uf721NUNKjL4sKQDQBIJoAEK37/QC1NcFHr1+eaSQcZeyap/X8UgGIJgBEEwCiNd8PsFO8fnm/e/k+O2XP3/v78Kxd7XOWy+cvnD+YfEyPsx8AthAAogkA0QSAaAJANAEgmgAQrbv9AOV54tp1Adoq/x+tz/sPpQIQTQCIJgBE634/AMvW+/xRAYgmAEQTAKK13w9QUd7P7bpAX2qfV9Db/CmpAEQTAKIJANFOlV/YO7f/qMVAntad+4cbY+59vGu3tP9HOV4VgGgCQDQBIFr1OsDpM2fnGMex/qmcxy17OvrS+/xRAYgmAEQTAKJV1wC1Hgq26X3+qABEEwCiCQDRFn8dgL71Pn9UAKIJANEEgGjV+2ha39/tXp9l633+qABEEwCiCQAAAAAAAAAAAACL9x+9zL8xM4hAHgAAAABJRU5ErkJggg==';

const roverLeft =
  'data:image/png;base64,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';

const roverRight =
  'data:image/png;base64,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';

const flag =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAAAXNSR0IArs4c6QAAA1dJREFUeJzt3UtS21AQQFGTykpgHrP/VQTmYStkrlC4FH2epHvONBVjPrdajZ7N7QYAAAAAAFzV09IH+PV8/1zy/98/3hY/B/hfP0Y/ARhJAKQJgDQBkCYA0gRAmgBIW/138I/uC/i9P0diApAmANIEQJoASBMAaQIgTQCk/Rz9BJa+nmDKfQbmMAFIEwBpAiBt97NAS739+f3tv99fXrf88P+wcywz+uyYCUCaAEgTAGnD7wOsbesdYfr495fXTXeeqbPtHFvvhEuZAKQJgDQBkHa5HWBvj3aOqaU7yNGvqae+2JkGPZOvmQCkCYA0AZBmBziZuTvH1Nr3Qc7OBCBNAKQJgLTT7QCPrmGvdo3KtkwA0gRAmgBIG74DrH2WZuuzJtPHt3OcmwlAmgBIEwBpu+8Ao6+Z1z5Lc7Tz7Ucz977N3l9PE4A0AZAmANKG3weoGX2ef6mrvZ7ABCBNAKQJgDQ7QMzZd5C1mQCkCYA0AZAmANIEQJoASBMAacPvA1zt98qciwlAmgBIEwBpu+8AW58nH/2+Qcwz+vthApAmANIEQNrw+wBrW7ojzH38uY83+pp3tKN9/iYAaQIgTQCkXW4H2Nvaf99ga3t//NHv/fmICUCaAEgTAGl2gJMZ/b4+R3tvz6VMANIEQJoASDvdDjD3b07Bd0wA0gRAmgBIG74DrH2WZuuzJtPHt3OcmwlAmgBIEwBpu+8Ao6+Z1z5Lc7Tz7Ucz977N3l9PE4A0AZAmANKG3weoGX2ef6mrvZ7ABCBNAKQJgDQ7QMzZd5C1mQCkCYA0AZA2fAe42jUl52ICkCYA0gRA2vC/E/z+8fa05uP/er5/zvn4jDX6+2ECkCYA0gRA2qrX37fb42vwta/5R3v0+R7N0c4Cjf55MAFIEwBpAiDNDnAyZ9s5jv79NgFIEwBpAiBt+OsBmOfo19RnYwKQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBECaAEgTAGkCIE0ApAmANAGQJgDSBAAAAAAAAAAAAAAAAMCp/AXxBJwR5Nkf5wAAAABJRU5ErkJggg==';

const rock =
  'data:image/png;base64,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:image/png;base64,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';

const check = 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';

const checkSquare = 'M0 0h24v24H0z';

const checkCircle =
  'M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z';

const lock =
  'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z';

const arrow = 'M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8';

const deploy =
  'M305.44954,462.59c7.39157,7.29792,6.18829,20.09661-3.00038,25.00356-77.713,41.80281-176.72559,29.9105-242.34331-35.7082C-5.49624,386.28227-17.404,287.362,24.41381,209.554c4.89125-9.095,17.68975-10.29834,25.00318-3.00043L166.22872,323.36708l27.39411-27.39452c-.68759-2.60974-1.594-5.00071-1.594-7.81361a32.00407,32.00407,0,1,1,32.00407,32.00455c-2.79723,0-5.20378-.89075-7.79786-1.594l-27.40974,27.41015ZM511.9758,303.06732a16.10336,16.10336,0,0,1-16.002,17.00242H463.86031a15.96956,15.96956,0,0,1-15.89265-15.00213C440.46671,175.5492,336.45348,70.53427,207.03078,63.53328a15.84486,15.84486,0,0,1-15.00191-15.90852V16.02652A16.09389,16.09389,0,0,1,209.031.02425C372.25491,8.61922,503.47472,139.841,511.9758,303.06732Zm-96.01221-.29692a16.21093,16.21093,0,0,1-16.11142,17.29934H367.645a16.06862,16.06862,0,0,1-15.89265-14.70522c-6.90712-77.01094-68.118-138.91037-144.92467-145.22376a15.94,15.94,0,0,1-14.79876-15.89289V112.13393a16.134,16.134,0,0,1,17.29908-16.096C319.45132,104.5391,407.55627,192.64538,415.96359,302.7704Z';

const reset =
  'M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z';

const stop = 'M0 0h24v24H0z';

const skipBackward = 'M6 6h2v12H6zm3.5 6l8.5 6V6z';

const play = 'M8 5v14l11-7z';

const skipForward = 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z';

const functionList01 =
  'M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z';
const functionList02 =
  'M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z';
const functionList03 =
  'M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z';

export const imagesData = {
  roverFront: roverFront,
  roverBack: roverBack,
  roverLeft: roverLeft,
  roverRight: roverRight,
  flag: flag,
  rock: rock,
  check: check,
  checkSquare: checkSquare,
  checkCircle: checkCircle,
  lock: lock,
  arrow: arrow,
  deploy: deploy,
  reset: reset,
  stop: stop,
  skipBackward: skipBackward,
  play: play,
  skipForward: skipForward,
  functionList01: functionList01,
  functionList02: functionList02,
  functionList03: functionList03,
};
