var percentageEscapeChar = function(c) {
  return '%' + c.charCodeAt(0).toString(16);
}

module.exports = percentageEscapeChar;
