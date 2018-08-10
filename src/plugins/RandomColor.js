const RandomColor = {};

RandomColor.install = function (Vue, options) {
  Vue.prototype.randomColor = () => {
    return Math.floor(Math.random() * (255 * 255 * 255)).toString(16);
  };
}

module.exports = RandomColor;
