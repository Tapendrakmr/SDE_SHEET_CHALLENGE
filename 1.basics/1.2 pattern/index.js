// Patter 1
const pattern1 = () => {
  for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < 4; j++) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern2 = () => {
  for (let i = 0; i < 4; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern3 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += j + 1;
    }
    console.log(str);
  }
};
const pattern4 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += i + 1;
    }
    console.log(str);
  }
};
const pattern5 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 5 - i; j > 0; j--) {
      str += "*";
    }
    console.log(str);
  }
};
const pattern6 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 5 - i; j > 0; j--) {
      str += j;
    }
    console.log(str.split("").reverse().join(""));
  }
};
const pattern7 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 5 - (i + 1); j > 0; j--) {
      str += " ";
    }

    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    for (let j = 5 - (i + 1); j > 0; j--) {
      str += " ";
    }
    console.log(str);
  }
};
const pattern8 = () => {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 5 - (i + 1); j > 0; j--) {
      str += "*";
    }

    for (let j = 0; j < i + 1; j++) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let j = 5 - (i + 1); j > 0; j--) {
      str += "*";
    }
    console.log(str);
  }
};
pattern8();
