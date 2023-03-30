const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  const originalPrice = 50;
  const discountedPrice = 40;
  
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  
  console.log(`${discountPercentage}% off`); // Output: 20.00% off
    