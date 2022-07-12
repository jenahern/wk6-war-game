var expect = chai.expect;

describe("WarTest", function () {
  describe("#Game.displayWinner", function () {
    it("should alert Congratulations! Player 1 Wins!", function () {
      
      var x = Game.displayWinner(12, 9);
      expect(x).to.equal(`Congratulations! Player 1 Wins!`);
    });

    it("should alert Congratulations! Player 2 Wins!", function () {
      var x = Game.displayWinner(9, 12);
      expect(x).to.equal(`Congratulations! Player 2 Wins!`);
    });
  });
});
