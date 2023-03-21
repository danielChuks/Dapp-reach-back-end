'reach 0.1';


const Player = {
    getHand: Fun([], Uint),
    seeOutCome: Fun([Uint], Null)
}

export const main = Reach.App(() => {
    const A = Participant('Alice', {
        ...Player,
        wager: Uint,
    });
    const B = Participant('Bob', {
        ...Player,
        acceptWager: Fun([Uint], Null )
    });
    init();

//steps made by only Alice or bob we used the only key word to know the steps that are used by each paticipants.....
    A.only(() => {
        const handA = declasify(interact.getHand())
        const wager = declasify(interact.wager);
    })
    A.publish(handA, wager)
    .pay(wager)
    commit();

  B.only(() => {
    const handB = declasify(interact.getHand())
    interact.acceptWager(wager);
  })
    B.publish(handB, acceptWager);;

    const outcome = (handA + (4 - handB)) % 3;
    commit();


    /// WE make sure each paticipant see what the out come in on the contaract

    each([A, b], () => {
        interact.seeOutCome(outcome);
    });

    // write your program here
    exit();
});


