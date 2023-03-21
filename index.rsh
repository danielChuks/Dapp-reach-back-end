'reach 0.1';

const Player = {
    getHand: Fun([], UInt),
    seeOutCome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
    const A = Participant('Alice', {
        ...Player,
        wager: UInt,
    });
    const B = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    //steps made by only Alice or bob we used the only key word to know the steps that are used by each paticipants.....
    A.only(() => {
        const wager = declassify(interact.wager);
        const handA = declassify(interact.getHand());
    });
    A.publish(wager, handA).pay(wager);
    commit();

    B.only(() => {
        interact.acceptWager(wager);
        const handB = declassify(interact.getHand());
    });
    B.publish(handB).pay(wager);

    const outcome = (handA + (4 - handB)) % 3;

    const [forA, forB] =
        outcome == 2 ? [2, 0] : outcome == 0 ? [0, 2] : [1, 1];

    transfer(forA * wager).to(A);
    transfer(forB * wager).to(B);
    commit();

    /// WE make sure each paticipant see what the out come in on the contaract
    each([A, B], () => {
        interact.seeOutCome(outcome);
    });

    // write your program here
   // exit();
});
