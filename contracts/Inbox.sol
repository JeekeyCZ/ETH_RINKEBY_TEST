// urceni verze Solidity, jedna se nam o starsi verzi
// remix je vyborny da se na nem testovat jako na miniaturni fake siti
// Rinkeby test network, poslano pres faucets.chain.link/rinkeby 0.1 ETH
// metamask v chrome
pragma solidity ^0.4.17;
// definuje novy kontrakt
contract Inbox {
// public, bude pristupna pro vsechny, definuje vsechny instance
// existujici v kontraktu
// vytvori stejnou funkci jako getMessage - message
    string public message; 
// stejny nazev funkce jako kontrakt bude hned volana Inbox
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
// meni blockchain
    function setMessage(string newMessage) public {
        message = newMessage;
    }

 //   function getMessage() public view returns (string) {
 //       return message;
 //   }
 // cena GAS funce doMath, vysledna cena je 14gas = 4,200wei
 //pri cene gasPrice 300
 //function doMath(int a,int b){
 //    a+b;
 //    b-a;
 //    a*b;
 //    a==0;
 //}
}
