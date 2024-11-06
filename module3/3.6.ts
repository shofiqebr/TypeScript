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

        set deposite (amount: number) {
             this._balance =this._balance + amount
            //  return this._balance
        } 
        // addDeposite (amount: number) {
        //     this._balance = this._balance + amount
        //     return this._balance;
        // }

        get Balance () {
            return this._balance
        } 

        // getBalance () {
        //     return this._balance
        // }
    

    }



    const employeeAccount = new BankAccount ( 222, 'avid', 490)
    // const myBalance1 = employeeAccount.addDeposite(399)
    employeeAccount.deposite = 49
    const myBalance = employeeAccount.Balance
    console.log(myBalance)





}

