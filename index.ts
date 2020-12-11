let fruitName = "Banana"

let fruit = {
  name: "Banana",
  color: "yellow",
  sweetness: 80,
  isRipe: true,
};

// let person: {
//     name: string;
//     color: string;
//     sweetness: number;
//     isRipe: boolean;
// }


// Parameters

function alternateUppercase(name: string, index: number) {
  if (index % 2 === 0) {
    return name.toUpperCase();
  }
  return name;
}