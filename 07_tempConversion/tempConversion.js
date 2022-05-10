const ftoc = function(temp) {
  let result = (temp -32) * 5 / 9;
  result *=10;
  return (Math.round(result)/10);
};

const ctof = function(temp) {
  let result = (temp * 9 / 5) +32;
  result *=10;
  return (Math.round(result)/10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
