import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

// here we are trying to verify the user with 'ask'
const isKlaus = await ask.ask(
  `Are you klaus?`,
  ask.yesno
);
const who = isKlaus  ? 'Klaus' : 'Elena';

console.log(`Starting daemon unique number as ${who}`)

let acc = null;

const createAcc = await ask.ask(
  `would you like to create an account?`,
  ask.yesno
)

if(createAcc){
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000))
}else{
  const secret = await ask.ask(
    `what is you account secret?`,
    (x => x )
  );
  acc = await stdlib.newTestAccountFromSecret(secret)
}

let ctc = null;

if (isKlaus) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

//this helps in desplaying curency in up to 4 deecimal place.
const fmt = (x) => stdlib.formatCurrency(x, 4);

//we get the balance and the apply the fmt function to it also a helpful function for getting the balance of a participant and displaying it with up to 4 decimal places.
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeOut = () => {
  console.log(`There was a timeout`);
  process.exit(1);
};

if(isKlaus){
  const amt = await ask.ask(
    `How much do you want to wager ?`,
    stdlib.parseCurrency
  );
    interact.wager = amt;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000} [stdlib.connector];
}else{
    interact.acceptWager = async(amt) => {
      const accepted = await  ask.ask(
        `Do you accept the wager of ${fmt(amt)}?`)
        ask.yesno
    };
    if(!accepted){
      process.exit(0)
    }
};

const CARDS = ['ghost','witch', 'mouse', 'pawn']


interact.getCard = async () => {
    const cards =  await ask.ask (`What card will you play ?`, (x) => {
      const cards = CARDS[x];
      if(hand === undefined){
        throw Error(`Not  valid hand ${cards}`)
      }
    return cards;
  });

  console.log(`You played ${CARDS[cards]}`)
  informDraw: () => {
    console.log(`${who} saw outcome draw. Playing another round to determine winner.`);
    return cards
  }
}

console.log('Initializing Application Backend');

const RESULT = ['Klaus wins', 'Draw', 'Elena wins'];
interact.viewResult =async(result) => {
  console.log(`The result is: ${RESULT[result]}`);
};

const part = isKlaus ? ctc.p.Klaus : ctc.p.Elena;
await part(interact);

const after = await getBalance();
ask.done();
