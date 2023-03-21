import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccounts(startingBalance);
const accBob = await stdlib.newTestAccounts(startingBalance);

// we formart the currency to be of four decimal place.
const fmt = (x) => stdlib.formatCurrency(x, 4);

//formarting the balance of the paticipant to have just 4 decemals...
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

//getting the balance of the paticipants before the game starts
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');

// defining what the outcome would be with respect to the back end. Hand & Outcome.
const HAND = ['Rock, Paper, Scissors'];
const OUTCOME = ['Alice win', 'Bob wins', 'Draw'];

const Player = (Who) => ({
    getHand: () => {
        const hand = Math.floor(Math.random() * HAND.length);
        console.log(`${Who} played: ${HAND[hand]}`);
        return hand;
    },

    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome: ${OUTCOME[outcome]}`);
    },
});



await Promise.all([
    backend.Alice(ctcAlice, {
        ...stdlib.hasRandom,
        // implement Alice's interact object here
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
    }),
    backend.Bob(ctcBob, {
        ...stdlib.hasRandom,
        // implement Bob's interact object here
        ...Player('Bob'),
        acceptWager: (amt) => {
            console.log(`Bob accepts your wager ${fmt(amt)}`);
        },
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice Moved from: ${beforeAlice} to ${afterAlice}`);
console.log(`Bob Moved from: ${beforeBob} to ${afterBob}`);

console.log('Goodbye, Alice and Bob!');
