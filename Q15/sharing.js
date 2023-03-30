const calculateTotalCost = (cart) => {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      totalCost += item.unitPrice * item.quantity;
    }
    return totalCost;
  };

  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 20, quantity: 1 },
  ];
  
  const totalCost = calculateTotalCost(cart);
  
  console.log(totalCost); // Output: 55
  