module.exports.multiply = (x, y) => x * y;
module.exports.summurize = () => 5 + 5;
module.exports.summurizeDelay = (a, b, cb) => {
  setTimeout(() => {
    cb(a * b);
  }, 2000);
};
