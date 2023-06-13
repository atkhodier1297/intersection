const intersection = (a, b) => {
    const result = [];
    for (let item of b) {
      if (a.includes(item)) {
        result.push(item);
      }
    }
    return result;
  };

  console.log(intersection([4,2,1,6], [3,6,9,2,10]))