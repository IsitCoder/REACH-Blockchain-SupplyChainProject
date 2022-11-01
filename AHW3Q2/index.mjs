import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const READ = ['Good', 'Bad']
const OUTCOME = ['Accept', 'Reject']

const Player = (Who) => ({
    informTimeout: () => {
        console.log(`${Who} observed a timeout`)
    }
})

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        outcome: (read) => {
            console.log(`Alice observed a ${READ[read]} read`)
            return read == 0 ? Math.random() >= 0.25 ? 0 : 1 : Math.random() >= 0.75 ? 0 : 1
        },
        wager: stdlib.parseCurrency(10),
        deadline: 10,
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
        read: () => {
            return Math.random() >= 0.8 ? 0 : 1
        },
        acceptWager: (amt) => {
            console.log(`Bob accepted a payment of ${fmt(amt)}`)
            return amt
        }
    }),
])

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}`);