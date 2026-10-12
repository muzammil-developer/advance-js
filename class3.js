
const cartTotal = shoes.reduce((acc, curr) => {
  if(curr.category === 'Running') {
    return acc + curr.price;
  };

  return acc;
}, 0);

console.log(cartTotal)



const cartItems = shoes.reduce((acc, curr) => {
  if(curr.category === 'Running') {
    acc.total += curr.price;
    acc.items.push(curr);
    return acc;
  };

  return acc;
}, 
{
  total: 0,
  items: [],
},
);

console.log(cartItems)



const shoes = [
  {
  name: "Air Runner",
  },
  {
    name: "Ultraboost 24",
  },
  {
    name: "Classic Leather",
  },
  {
    name: "Old Skool",
  },
  {
    name: "Chuck Taylor All Star",
  },
];


const shoeWithPlaceHolder = [{ name: "Select Shoe", value: ""}, ...shoes];

console.log(shoeWithPlaceHolder);

// var name = shoe.name;
// var category = shoe.category;
// var brand 


const showCartItems = ({ cartItems = [], totalPrice = 0, ...rest }) => {
  console.log(cartItems )
}
