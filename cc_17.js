// Task 1 - Create a Customer Class

// Creating a class, Customer, to have the customer's name, email, and purchase history.

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchasehistory = [];
    }

    addPurchase(amount) {
        this.purchasehistory.push(amount);
    }

    gettotalspent() {
        return this.purchasehistory.reduce((total, amount) => total + amount, 0);
    }
}

// Making a Customer Class example with John Doe to have his name, email, and the amount he spent.

const customer1 = new Customer('John Doe', 'johndoe@example.com');

console.log(`New Customer Created: ${customer1.name}, ${customer1.email}`)

customer1.addPurchase(50);
customer1.addPurchase(25);
customer1.addPurchase(100);

// Console-logging the results.

console.log(`Total Spent by ${customer1.name}: $${customer1.gettotalspent()}`);