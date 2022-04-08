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
  forall(UInt, cardsElena => (assert(isResults(winner(cardsKlaus, cardsElena))))));


forall(UInt, (cards) => assert(winner(cards, cards) == DRAW))

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
     const _cardsKlaus = interact.getCard();
     const [_commitKlaus, _saltKlaus] = makeCommitment(interact, _cardsKlaus);
     const commitKlaus = declassify(_commitKlaus)
  });

  //pubilsing the wager and the card klaus picks
Klaus.publish(wager, commitKlaus)
    .pay(wager)
      commit();

  //This code ensures every atempt by Elena to know Bobs hand would be rejected.
  unknowable(Elena, Klaus(_cardsKlaus, _saltKlaus));
  //this line of code stipulate only what bob would do. 
Elena.only(() => {
    interact.acceptWager(wager)
    const cardsElena = declassify(interact.getCard())  
});
Elena.publish(cardsElena)
    .pay(wager);
    commit();

//here we are publishig klaus hand and the  salt.
Klaus.only(() => {
    const saltKlaus = declassify(_saltKlaus);
    const cardsKlaus =declassify(_cardsKlaus);
});
Klaus.publish(saltKlaus, cardsKlaus);

checkCommitment(commitKlaus, saltKlaus, cardsKlaus)

      const result =  winner(cardsKlaus, cardsElena);
      const         [forKlaus, forElena] =
      result == KLAUS_WIN ? [       2,      0,] :
      result == ELENA_WIN ? [       0,      2] :
     /* tie      */ [       1,      1];
     
    transfer(forKlaus * wager).to(Klaus);
    transfer(forElena * wager).to(Elena);
    commit();

  each([Klaus, Elena], () => {
    interact.viewResult(result);
  });
  exit();
});

