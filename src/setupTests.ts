import '@testing-library/jest-dom';

// Add TextEncoder/TextDecoder for react-router-dom in jsdom environment
if (typeof TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { TextEncoder, TextDecoder } = require('util');
  globalThis.TextEncoder = TextEncoder;
  globalThis.TextDecoder = TextDecoder;
}
