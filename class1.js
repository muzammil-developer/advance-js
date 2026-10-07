// const increment = () => {
//   let counter = document.getElementById("counter");
//   counter.innerHTML = Number(counter.innerHTML) + 1;
// };

// const multiplication = (x = 1, y = 1) => {
//     console.log(x * y)
// };

// multiplication(5)

// let, const, var
// template literals
// array methods in advance js

// let name = "Muhazzib";
// if (true) {
//   let name = "muhazzib";
// };
// let student = 'Bilal';

// if(true) {
//   var studenta = 'Ali';
// }
// function login(params) {
//   var studenta = 'Ali';
// }

// console.log(student);

// console.log(studenta, "student===");

// const student = 'muhazzib';

// student = 'Ali'

// console.log(student, "student===");
// const userName = 'Muhazzib';
// const greeting = '<h1>'+'Good Morning' + ' ' + userName + '!' + '</h1>';
// const greeting2 = `<h1>Good Morning ${userName}!</h1>`;

const shoes = [
  {
    id: 1,
    name: "Air Runner",
    brand: "Adidas",
    category: "Running",
    color: "Black",
    size: 42,
    price: 120,
    inStock: true,
  },
  {
    id: 2,
    name: "Ultraboost 24",
    brand: "Adidas",
    category: "Running",
    color: "White",
    size: 43,
    price: 180,
    inStock: true,
  },
  {
    id: 3,
    name: "Classic Leather",
    brand: "Adidas",
    category: "Casual",
    color: "Brown",
    size: 41,
    price: 90,
    inStock: false,
  },
  {
    id: 4,
    name: "Old Skool",
    brand: "Vans",
    category: "Sneakers",
    color: "Black/White",
    size: 40,
    price: 75,
    inStock: true,
  },
  {
    id: 5,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    category: "Casual",
    color: "Red",
    size: 42,
    price: 65,
    inStock: true,
  },
];

// const filteredShoes = shoes.find((shoe) => {
//   if()
// });

const ulElement = document.getElementById("list");

const onFilter = (e) => {
  ulElement.innerHTML = "";
  const filterValue = e.target.value;
  const filteredShoes = shoes.filter((shoe) => shoe.brand === filterValue);

  if (filterValue === "all") {
    renderShoes(shoes);
  } else {
    renderShoes(filteredShoes);
  }
};

const renderShoes = (shoesToRender) => {
  for (var i = 0; i < shoesToRender.length; i++) {
    ulElement.innerHTML += `<li>${shoesToRender[i].name}</li>`;
  }
};

renderShoes(shoes);
// console.log(shoes)

// console.log(filteredShoes)
