{
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        BankAccount.prototype.addDeposite = function (amount) {
            this.balance = this.balance + amount;
        };
        return BankAccount;
    }());
    var employeeAccount = new BankAccount(222, 'avid', 49);
    var myBalance = employeeAccount.addDeposite(399);
    console.log(myBalance);
}
