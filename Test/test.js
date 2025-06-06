// const shoppingCart = [
//     {
//       "id": 101,
//       "name": "Stainless Steel Water Bottle",
//       "price": 19.99,
//       "description": "Durable and eco-friendly water bottle made from stainless steel. Keeps beverages cold for 24 hours and hot for 12 hours."
//     },
//     {
//       "id": 202,
//       "name": "Portable Power Bank",
//       "price": 29.99,
//       "description": "Compact power bank with high capacity for charging smartphones and other devices on the go. Includes multiple USB ports."
//     },
//     {
//       "id": 303,
//       "name": "Reusable Grocery Bags (Set of 3)",
//       "price": 12.49,
//       "description": "Environmentally friendly grocery bags made from recycled materials. Lightweight, durable, and machine washable."
//     },
//     {
//       "id": 404,
//       "name": "LED Desk Lamp with USB Charging Port",
//       "price": 34.99,
//       "description": "Modern LED desk lamp with adjustable brightness levels. Features a built-in USB charging port for convenience."
//     },
//     {
//       "id": 101,
//       "name": "Stainless Steel Water Bottle",
//       "price": 19.99,
//       "description": "Durable and eco-friendly water bottle made from stainless steel. Keeps beverages cold for 24 hours and hot for 12 hours."
//     },
//     {
//       "id": 303,
//       "name": "Reusable Grocery Bags (Set of 3)",
//       "price": 12.49,
//       "description": "Environmentally friendly grocery bags made from recycled materials. Lightweight, durable, and machine washable."
//     }
//   ];

//   function calculateUniqueItemPrices(cart) {
//     const idCount = {};
//     const idToPrice = {};

//     cart.forEach(item => {
//       if (idCount[item.id]) {
//         idCount[item.id]++;
//       } else {
//         idCount[item.id] = 1;
//         idToPrice[item.id] = item.price;
//       }
//     });

//     let sum = 0;
//     for (const id in idCount) {
//       if (idCount[id] === 1) {
//         sum += idToPrice[id];
//       }
//     }

//     return sum;
//   }

//   console.log(calculateUniqueItemPrices(shoppingCart));

const shoppingCart = [
  {
    id: 101,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    description:
      "Durable and eco-friendly water bottle made from stainless steel. Keeps beverages cold for 24 hours and hot for 12 hours.",
  },
  {
    id: 202,
    name: "Portable Power Bank",
    price: 29.99,
    description:
      "Compact power bank with high capacity for charging smartphones and other devices on the go. Includes multiple USB ports.",
  },
  {
    id: 303,
    name: "Reusable Grocery Bags (Set of 3)",
    price: 12.49,
    description:
      "Environmentally friendly grocery bags made from recycled materials. Lightweight, durable, and machine washable.",
  },
  {
    id: 404,
    name: "LED Desk Lamp with USB Charging Port",
    price: 34.99,
    description:
      "Modern LED desk lamp with adjustable brightness levels. Features a built-in USB charging port for convenience.",
  },
  {
    id: 101,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    description:
      "Durable and eco-friendly water bottle made from stainless steel. Keeps beverages cold for 24 hours and hot for 12 hours.",
  },
  {
    id: 303,
    name: "Reusable Grocery Bags (Set of 3)",
    price: 12.49,
    description:
      "Environmentally friendly grocery bags made from recycled materials. Lightweight, durable, and machine washable.",
  },
];

function calculateUniqueItemPrices(cart) {
  const idData = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].count += 1;
    } else {
      acc[item.id] = { count: 1, price: item.price };
    }
    return acc;
  }, {});

  const total = Object.values(idData).reduce((sum, { count, price }) => {
    if (count === 1) {
      return sum + price;
    }
    return sum;
  }, 0);

  return total;
}

console.log(calculateUniqueItemPrices(shoppingCart));

function fetchWithTimeout(url, timeout = 2000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error("Reuest Times Out"), timeout);
      })
    ),
  ]);
}

//Usage:

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000)
  .then((response) => response.json())
  .then((data) => console.log("Fetch", data))
  .catch((err) => console.log("Error:", err.message));

//--------------------------------------------------------

function fakeApi(url, delay, value) {
  //Simulates an API call with a delay

  return new Promise((resolve) => {
    setTimeout(() => resolve(`${url} responded with ${value}`), delay);
  });
}

Promise.race([
  fakeApi("https://server-a.com", 800, "A's Data"),
  fakeApi("https://server-b.com", 400, "B's Data"),
  fakeApi("https://server-c.com", 1000, "C's Data"),
]).then((result) => {
  console.log("Winner:", result);
});
