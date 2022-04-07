'reach 0.1';

const [isCards, WITCH, GHOST, MOUSE, PAWN] = makeEnum(4);

const [isResults, KLAUS_WIN, DRAW, ELENA_WIN] = makeEnum(3);

const winner = (cardsKlaus, cardsElena) => 
  ((cardsKlaus + (4 - cardsElena)) % 3 );

assert(winner(GHOST, WITCH) == ELENA_WIN);
assert(winner(WITCH, GHOST) == KLAUS_WIN);
assert(winner(GHOST, MOUSE) == ELENA_WIN);
assert(winner(MOUSE, GHOST) == KLAUS_WIN);
assert(winner(GHOST, PAWN)  == ELENA_WIN);
assert(winner(PAWN,  GHOST) == KLAUS_WIN);
assert(winner(GHOST, GHOST) == DRAW);

forall(UInt, cardsKlaus =>
  forall(UInt, cardsElena =>
    (assert(isResults(winner(cardsKlaus, cardsElena))))));


forall(UInt, (cards) => assert(winner(cards, cards)== DRAW))

// the are trying to specify that each users have access to random number.
// the ...hasRandom is used to generate random numbers to protect the hand of the first player which is Klaus.
const Player = {
  ...hasRandom,
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
Klaus.publish(wager)
.pay(wager)
  commit();

  //this code ensures every atempt by Elena to know Bobs hand would be rejected.
unknowable(Elena, Klaus(cardsKlaus));
  //this line of code stipulate only what bob would do. 
Elena.only(() => {
  interact.acceptWager(wager)
    const cardsElena = declassify(interact.getCard())
    
});

Klaus.publish(cardsKlaus);
commit();
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

