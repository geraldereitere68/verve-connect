Here's an example of a complex JavaScript code that meets the given requirements. The file is named "sophisticated_program.js" and it implements a simplified version of a banking system with multiple accounts, transactions, and account management functionalities.

```javascript
/**
 * sophisticated_program.js
 * Description: A simplified banking system with multiple accounts, transactions, and account management functionalities.
 */

// Account class representing a bank account
class Account {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: 'Deposit', amount: amount });
      console.log(`Deposited $${amount} into Account #${this.accountNumber}`);
    } else {
      console.log('Invalid amount for deposit.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount: amount });
      console.log(`Withdrawn $${amount} from Account #${this.accountNumber}`);
    } else {
      console.log('Insufficient balance or invalid amount for withdrawal.');
    }
  }
}

// Bank class representing a bank with multiple accounts
class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(balance) {
    const accountNumber = this.accounts.length + 1;
    const account = new Account(accountNumber, balance);
    this.accounts.push(account);
    console.log(`Created Account #${accountNumber} with initial balance $${balance}`);
  }

  getAccount(accountNumber) {
    const account = this.accounts.find(account => account.accountNumber === accountNumber);
    if (account) {
      console.log(`Account #${accountNumber} found.`);
      return account;
    } else {
      console.log(`Account #${accountNumber} not found.`);
    }
  }

  closeAccount(accountNumber) {
    const accountIndex = this.accounts.findIndex(account => account.accountNumber === accountNumber);
    if (accountIndex !== -1) {
      this.accounts.splice(accountIndex, 1);
      console.log(`Closed Account #${accountNumber}`);
    } else {
      console.log(`Account #${accountNumber} not found.`);
    }
  }
}

// Usage example
const bank = new Bank();
bank.createAccount(1000);
bank.createAccount(500);

const account1 = bank.getAccount(1);
account1.deposit(200);
account1.withdraw(100);

const account2 = bank.getAccount(2);
account2.deposit(1000);
account2.withdraw(200);

bank.closeAccount(1);

console.log(bank);

// ... More code and functionality can be added here
```

Note: The above code is just a demonstration and not intended to be a complete and production-ready banking system. It showcases the structure, classes, and basic functionalities that can be expanded upon to build a full-fledged banking application.