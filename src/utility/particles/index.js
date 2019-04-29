import 'particles.js';

import './particles.json'
const CONFIG_RELATIVE_PATH = './utility/particles/particles.json';

export default function(tagId) {
  particlesJS.load(tagId, CONFIG_RELATIVE_PATH, () => {
    console.log('Particles config loaded.');
  });
}