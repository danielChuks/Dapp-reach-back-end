'reach 0.1';

const Player = {
  getCard: Fun([], UInt),
  viewResult: Fun([UInt], Null),
}
export const main = Reach.App(() => {
  const Klaus = Participant('Klaus', {
    ...Player,
    wager: UInt,
  });
  const Elena = Participant('Elena', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();
  
//this line of code stipulate only what alice would do.
Klaus.only(() => {
     const wager = declassify(interact.wager)
     const cardsKlaus = declassify(interact.getCard());
  });

  //pubilsing the wager and the card klaus picks
Klaus.publish(wager, cardsKlaus)
.pay(wager)
  commit();

  //this code ensures every atempt by Elena to know Bobs hand would be rejected.
unknowable(Elena, Klaus(cardsKlaus));
  //this line of code stipulate only what bob would do. 
Elena.only(() => {
  interact.acceptWager(wager)
    const cardsElena = declassify(interact.getCard())
    
})
  Elena.publish(cardsElena)
  .pay(wager);
      const result = (cardsKlaus + (4 - cardsElena)) % 3;
  const               [forKlaus, forElena] =
      result == 2 ? [       2,      0] :
      result == 0 ? [       0,      2] :
     /* tie      */ [       1,      1];
     
    transfer(forKlaus * wager).to(Klaus);
    transfer(forElena * wager).to(Elena);
  commit();

  each([Klaus, Elena], () => {
    interact.viewResult(result);
  });
  exit();
});

