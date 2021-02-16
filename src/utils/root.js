
var root;
if (typeof window !== 'undefined') {
  root = window;
} else {
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM();
  root = dom.window
}

export default root;