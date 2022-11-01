import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(1000)
const accBuyer = await stdlib.newTestAccount(startingBalance)
const accSeller = await stdlib.newTestAccount(startingBalance)

const ctcBuyer = accBuyer.deploy(backend)
const ctcSeller = accSeller.deploy(backend, ctcBuyer.getInfo())

const fmt = (x) => stdlib.formatCurrency(x, 3)
const getBalance = async (who) => fmt(await stdlib.getBalance(who))
const beforeBuyer = await accBuyer.getBalance(accBuyer)
const beforeSeller = await accSeller.getBalance(accSeller)

console.log(`Before: buyer=${beforeBuyer} seller=${beforeSeller}`)