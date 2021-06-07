
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['qW1Fd2hBMLybisJpo5hnqi'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  