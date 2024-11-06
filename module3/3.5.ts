{
    class BankAccount {
      protected  name : string;
       public readonly id : number;
       private _balance : number;
    
        constructor (id : number , name : string , _balance : number) {
            this.id = id;
            this.name = name ;
            this._balance = _balance; 
        }
        addDeposite (amount: number) {
            this._balance = this._balance + amount
            return this._balance;
        }

        getBalance () {
            return this._balance
        }
    

    }

    class studentAccount extends BankAccount {
        test(){
            this.name
        }
    }

    const employeeAccount = new BankAccount ( 222, 'avid', 49)
    const myBalance1 = employeeAccount.addDeposite(399)
    const myBalance = employeeAccount.getBalance()
    console.log(myBalance, myBalance1)





}

