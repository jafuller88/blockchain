export class Transaction {
    public fromAddress:string;
    public toAddress:string;
    public amount:number;

    constructor(fromAddress:string, toAddress:string, amount:number) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
