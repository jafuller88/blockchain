/// test ///
import { BlockChain } from './blockchain';
import { Transaction } from "./transaction";

// Create a new Block Chain
let simpleCoin = new BlockChain();

// Set some example public wallet addresses
const address1:string = "1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y";
const address2:string = "2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y";
const address3:string = "3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y";

// // Create some blocks on the chain by giving some coins out
simpleCoin.createTransaction(new Transaction(null, "1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y", 10));
simpleCoin.createTransaction(new Transaction(null, "2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y", 10));

// spend coins
simpleCoin.createTransaction(new Transaction("1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y", 
                                             "2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y", 10));
                                             
simpleCoin.createTransaction(new Transaction("2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",
                                             "1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y", 2));
// Mine Pending Transactions
simpleCoin.minePendingTransactions("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y");

// spend coins
simpleCoin.createTransaction(new Transaction("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y",
                                             "2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y", 20));

// Mine Pending Transactions
simpleCoin.minePendingTransactions("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y");
simpleCoin.minePendingTransactions("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y");

// Print out the blockchain
console.log(JSON.stringify(simpleCoin, null, 4) + "\n");

// Get the balances
console.log("address1 balance = " + simpleCoin.getBalance("1kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y"));
console.log("address2 balance = " + simpleCoin.getBalance("2kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y"));
console.log("address3 balance = " + simpleCoin.getBalance("3kGd6q2f6Fx4D63nRbxF7o7JTjJna7kc6Bkme1WrCmDMPKoXL7QLZh49bqHsNS2AY3Zd66BWELv2Y7HXkwNnDF4Go97hx45Y"));

// Check integrity of the block chain
console.log("Blockchain valid = " + simpleCoin.isChainValid());
