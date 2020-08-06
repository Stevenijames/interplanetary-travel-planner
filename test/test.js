const { expect } = require("chai");
const { awesomeAdd } = require("../server");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      expect([1, 2, 3].indexOf(5)).to.equal(-1);
    });
  });
});

describe("Functions", function () {
  describe("awesomeAdd()", function () {
    it("should awesomely add values!", function () {
      expect(awesomeAdd(1, 5)).to.equal(6);
    });
  });
});