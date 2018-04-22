import { Block } from './block';
import { Transaction } from "./transaction";

export class BlockChain {
    public chain:Block[];
    private difficulty:number;
    private pendingTransactions:Transaction[];
    private miningReward:number;

    ///////////////////
    /// Constructor ///
    ///////////////////
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.miningReward = 100;
        this.pendingTransactions = [];
    }

    //////////////////////////////////////////////
    /// Ahoy! Welcome to the very first block. ///
    /// This is known as the Genesis Block     ///
    //////////////////////////////////////////////
    createGenesisBlock() {
        let blockDate:Date = new Date();
        blockDate.getUTCDate();
        let genesisTransaction:Transaction[] = [
            new Transaction(null, "Genesis Block", 0)
        ];
        return new Block(blockDate, genesisTransaction);
    }

    ///////////////////////////////////////
    /// Get the last block in the chain ///
    ///////////////////////////////////////
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    ////////////////////////////////////////////////////////////
    /// Create a new transaction.                            ///
    /// This will be added to the pending transactions array ///
    ////////////////////////////////////////////////////////////
    createTransaction(transaction:Transaction) {
        this.pendingTransactions.push(transaction);
    }

    ////////////////////////////////////////////
    /// Mine all of the Pending Transactions ///
    ////////////////////////////////////////////
    minePendingTransactions(minerRewardAddress) {
        // Create a New Block
        let blockDate:Date = new Date();
        blockDate.getUTCDate();
        let block = new Block(blockDate, this.pendingTransactions);
        block.previousHash = this.getLatestBlock().hash;
        // Mine the Block
        block.mineBlock(this.difficulty);
        // Add the new Block to the Chain
        this.chain.push(block);
        // Reset the pending transaction array and reward the miner
        this.pendingTransactions = [
            new Transaction(null, minerRewardAddress, this.miningReward)
        ];
    }

    //////////////////////////////////////////////////
    /// Get the Balance for a given wallet address ///
    //////////////////////////////////////////////////
    getBalance(address) {
        let balance:number = 0;

        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress == address) {
                    // We need to subtract from the balance
                    balance-= trans.amount;
                }
                if (trans.toAddress == address) {
                    // We need to add to the balance
                    balance+= trans.amount;
                }
            }
        }
        return balance;
    }

    ////////////////////////////////////////
    /// Check the integrity of the chain ///
    ////////////////////////////////////////
    isChainValid() {
        // Loop through all of the blocks in the chain
        for(let i:number=1; i < this.chain.length; i++) {
            // Get the current block
            const currentBlock = this.chain[i];
            // Get the previous block
            const previousBlock = this.chain[i - 1];

            // Check the current blocks hash is valid
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // Check the previous hash of the current block is valid
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}