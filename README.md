# A Blockchain Example in Typescript

This is a basic example of how the blockchain works. It uses a crypto currency (simpleCoin) as a use case to demonstrate:

1. A Transaction
2. A Block
3. How Blocks are chained
    * Proof of Work
    * Mining Transactions and Rewards

Limitations:

As already stated this is just a basic example. A fully working and operational blockchain would require much more functionality such as:

1. A P2P Network with Transaction Verification
2. Blockchain Data Storage to Disk
3. Public / Private Keys to secure transactions
4. A Wallet

To run this you require the following:

## Pre-Requesites
1. npm
2. Typescript
3. gulp

Please see this [Typescript Quick Start Guide](https://github.com/jafuller88/guides/blob/master/typescript.md) for some instructions.

## Compilng and running
At a terminal prompt browse to your source directory
```
$ cd blockchain
```
Compile and build the js file using gulp
```
$ gulp
```
This will create a new file in the dist/ folder called blockchain.js.

Run this using node
```
$ node dist/blockchain.js
```

This will run the test code found in test.ts.

For a full tutorial of how this works please visit my tech blog [fullertech.co.uk](http://www.fullertech.co.uk/crypto/2018/04/22/an-example-blockchain-in-typescript.html)

Enjoy!