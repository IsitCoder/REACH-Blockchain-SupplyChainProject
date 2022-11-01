import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
    `Are you Alice?`,
    ask.yesno
)
  
const who = isAlice ? 'Alice' : 'Bob';

console.log(`Fortune telling as ${who}`);

let acc = null
const createAcc = await ask.ask(
  `Do you want to create an account? (only possible on devnet)`,
  ask.yesno
)

if(createAcc){
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(
  `What is your acount secret?`,
  (x => x)
  )
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if(isAlice){
  ctc = acc.contract(backend)
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);})
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  )
  ctc = acc.contract(backend, info)
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom};

interact.informTImeout = () => {
  console.log(`There was a timeout`);
  ProcessingInstruction.exit(1);
}

if(isAlice){
    const amt = await ask.ask(
        `How much do you want to wager?`,
        stdlib.parseCurrency
    )
    interact.wager = amt;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];
    } else {
    interact.acceptWager = async (amt) => {
        const accepted = await ask.ask(
        `Do you accept the wager of ${fmt(amt)}?`,
        ask.yesno
        )
        if (!accepted) {
        process.exit(0)
        }
    }
}

const READ = ['Good', 'Bad'];
const READS = {
  'Good': 0, 'G': 0, 'g': 0,
  'Bad': 1, 'B': 1, 'b': 1,
}

interact.read = async () => {
    const read = await ask.ask(`Fortune is ?`, (x) => {
      const read = READS[x];
      if (read === undefined){
        throw Error(`Not a valid read ${read}`)
      }
      return read;
    })
    console.log(`You fortune is ${READ[read]}`);
    return read;
  }

const OUTCOME = ['Accept', 'Reject'];
const OUTCOMES = {
    'Accept': 0, 'A': 0, 'a': 0,
    'Reject': 1, 'R': 1, 'r': 1,
}
interact.outcome = async (outcome) => {
  console.log(`The fortune is ${READ[outcome]}`);
  const out = await ask.ask(`Do you accept the fortune?`, (x) => {
    const out = OUTCOMES[x];
    if (out === undefined){
      throw Error(`Not a valid outcome ${OUTCOME[out]}`)
    }
    return out;
  })
  console.log(`I ${out ? 'reject' : 'accept'} the fortune`);
    return out;
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is ${after}`);

ask.done();