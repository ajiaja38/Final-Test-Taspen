const printPattern = (length: number): void => {
  if (length % 2 === 0) {
    console.log("Invalid!, please enter an odd number");
    return;
  }

  for (let i: number = 0; i < length; i++) {
    let pattern: string = "";

    const midPattern: number = Math.floor(length / 2);

    for (let j: number = 0; j < length; j++) {
      if (j === 0 || j === length - 1) {
        pattern += "*";
      } else if (i === midPattern) {
        pattern += "*";
      } else {
        pattern += "=";
      }
    }

    console.log(pattern);
  }
};

printPattern(5);
