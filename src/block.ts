import SHA256 = require("crypto-js/sha256");
import { Transaction } from "./transaction";
    
export class Block {
    private timestamp:Date;
    public transactions:Transaction[];
    public previousHash:string;
    public hash:string;
    public nonce:number;

    //////////////////////////////////////
    /// Creating a new block will      ///
    /// construct the required values. ///
    //////////////////////////////////////
    constructor(timestamp:Date, transactions:Transaction[], previousHash?:string) {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    
    ///////////////////////////////////
    /// Calculate the hash from the ///
    /// set values.                 ///
    ///////////////////////////////////
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    ///////////////////////////////////////////////
    /// Mine Block. This will add all           ///
    /// of the pending transactions once mined. ///
    ///////////////////////////////////////////////
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash + "\n");
    }    
}