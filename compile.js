// require('./contracts/Inbox.sol'); neni dobry napad, protoze kdyz potrebujeme file do node projektu
// node engine ho chce spustit jako javascript kod, proto musime vytvorit cestu

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//velice zajimavy prehled kontraktu v logu, muzeme se podivat na strukturu
//console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Inbox'];