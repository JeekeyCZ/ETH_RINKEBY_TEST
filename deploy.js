const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// jaky account chceme unlock, jaky API/node chceme pripojit 
const provider = new HDWalletProvider(
  'spot habit only arrange reduce visa drift describe force raise enter canyon',
  'https://rinkeby.infura.io/v3/66ff84f47753407bbd92b415a21a71a0'  
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  
  console.log('Attempting to deploy from account', accounts[0]);
  
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
// zabraneni zaveseni    
  provider.engine.stop();
  console.log('Contract deployed to', result.options.address);
};
deploy();