// pristup do knihoven
const assert = require('assert');
const ganache = require('ganache-cli');
// constracter, jen proc je tam male web3 a velke Web3
const Web3 = require('web3');
// instance
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
//const INITIAL_STRING = 'Hi there!';

beforeEach (async () => {
// zobrazi vsechny ucty
  accounts = await web3.eth.getAccounts();
// pouzijeme jeden z uctu na kontrakt
// array pro dalsi argumenty
// rikame jake ma metody, deploy - novou kopii kontraktu, 
// send - posilame transakci vytvarejici kontrakt
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    . send({ from: accounts[0], gas:'1000000' })
});

describe ('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);  
//    console.log(inbox);
  });
  
  it('has a default mesage', async () => {
    const message = await inbox.methods.message().call(); 
    assert.equal(message, 'Hi there!'); 
  });
// send - kdo plati za zmenu  
  it('can cahnge the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});

// testovani fungovani mocha v githubu npm run test
/*class Car {
  park() {
    return 'stopped';
  }
  
  drive() {
    return 'brrrm';
  }
}

let car;

beforeEach (() => {
  car = new Car();
});

describe('Car', () => {
  it('can park', () =>{
    assert.equal(car.park(), 'stopped');
  });
  
  it('can drive', () => {
    assert.equal(car.drive(), 'brrrm');
  });
});*/