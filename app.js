class Transaction {
    constructor(fromClient,toClient,amount,commission){
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;
        this.commission = commission;
    }
    calculateComission(){
        this.commission = this.commission*this.amount;
    }
}
let user = new Transaction("Mehemmed", "Kerim", 200, 0.05);
user.calculateComission();
console.log(user);

