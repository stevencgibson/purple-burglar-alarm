const log = require("../../src/utils/log");

describe("log", () => {
  it('returns "The burglar alarm is purple." when passed "purple"', () => {
    expect(log("purple")).toEqual("The burglar alarm is purple.");
  });

  it('returns "What colour is the burglar alarm?" when passed nothing', () => {
    expect(log()).toEqual("What colour is the burglar alarm?");
  });

  it('returns "What colour is the burglar alarm?" when passed an empty string', () => {
    expect(log("")).toEqual("What colour is the burglar alarm?");
  });
});
