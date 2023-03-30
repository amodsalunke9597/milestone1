// Define a customer object
const customer = {
    name: "John",
    balance: 1000,
  };
  
  // Function to deposit money
  const deposit = (amount) => {
    customer.balance += amount;
    console.log(`Deposited $${amount}. New balance is $${customer.balance}.`);
  };
  
  // Function to withdraw money
  const withdraw = (amount) => {
    if (amount > customer.balance) {
      console.log("Insufficient balance.");
    } else {
      customer.balance -= amount;
      console.log(`Withdrew $${amount}. New balance is $${customer.balance}.`);
    }
  };

deposit(500); // Deposited $500. New balance is $1500.
withdraw(200); // Withdrew $200. New balance is $1300.
withdraw(1500); // Insufficient balance.

  