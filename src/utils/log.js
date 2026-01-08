function log(colour = "") {
  return colour
    ? `The burglar alarm is ${colour}.`
    : "What colour is the burglar alarm?";
}

module.exports = log;
