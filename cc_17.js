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




// ----------------------------------------------------------------------------------------------------------------------------------


// Task 2 - Create a SalesRep Class

// Creating a SalesRep class to have their names and the clients they worked with

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    addClient(customer) {
        this.clients.push(customer);
    }

    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);

        if (client) {
            return client.gettotalspent();
        } else {
            return `Client with name ${name} not found.`;
        }
    }
}

// Creating a new customer and give them transactions.

const customer2 = new Customer("Tobi Brown", "tobibrown@gmail.com");
customer2.addPurchase(30)
customer2.addPurchase(50);

// Creating a sales rep using the SalesRep Class and give them clients they worked with.

const salesRep = new SalesRep("Josh Parks");

salesRep.addClient(customer1);
salesRep.addClient(customer2);

// Console-logging the sales rep and the customers/clients and how much they spent.

console.log(`Sales Rep: ${SalesRep.name}`);
console.log("Clients:");
salesRep.clients.forEach(client => {
    console.log(`${client.name} (${client.email})`);
});

console.log(`Total spent by John Doe: $${salesRep.getClientTotal("John Doe")}`);
console.log(`Total spent by Tobi Brown: $${salesRep.getClientTotal("Tobi Brown")}`);



// ----------------------------------------------------------------------------------------------------------------------------------



// Task 3 - Create a VIPCustomer Class (extends Customer)

// Creating a VIP-class for certain customers so they are able to get specific bonuses/discounts

// The class, VIPCustomer, would get some attributes from the regular Customer class and add a viplevel to it

class VIPCustomer extends Customer {
    constructor(name, email, viplevel) {
        super(name, email);
        this.viplevel = viplevel;
    }

    gettotalspent() {
        const totalspent = super.gettotalspent();
        return totalspent * 1.1;
    }
}

// Creating an example case with a VIP Customer and give them a VIP Status, then console-logging the results.

const vipcustomer = new VIPCustomer("Amanda Willow", "amandawillow@gmail.com", "Gold");

vipcustomer.addPurchase(200);
vipcustomer.addPurchase(50);

console.log(`VIP Customer: ${vipcustomer.name}`);
console.log(`VIP Level: ${vipcustomer.viplevel}`);
console.log(`Total amount spent with bonus: $${vipcustomer.gettotalspent().toFixed(2)}`);