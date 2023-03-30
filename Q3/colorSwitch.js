function mixColors(color1, color2) {
    let result;
    switch(`${color1}${color2}`) {
      case 'redblue':
      case 'bluered':
        result = 'purple';
        break;
      case 'redyellow':
      case 'yellowred':
        result = 'orange';
        break;
      case 'blueyellow':
      case 'yellowblue':
        result = 'green';
        break;
      default:
        result = 'Invalid color combination';
        break;
    }
    console.log(`Mixing ${color1} and ${color2} produces ${result}`);
  }
  
 

mixColors('red', 'yellow');