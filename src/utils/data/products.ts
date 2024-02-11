const MENU = [
  {
    title: "Snack of the day",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 5.0,
        description:
          "A hamburger so beautiful that it made me hungry while I was making this layout for the project...",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Brioche bread;",
          "2x 80g smash meats (house blend);",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce;",
        ],
      },
    ],
  },
  {
    title: "Promotions",
    data: [
      {
        id: "2",
        title: "X-JavaScript",
        price: 7.0,
        description:
          "The ingredients of this burger change every week, so you'll always be in for a surprise...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Brioche bread;",
          "2x 80g smash meats (house blend);",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce",
        ],
      },
      {
        id: "3",
        title: "X-Cobol",
        price: 6.6,
        description:
          "That burger that we can't take off the menu because of the burger shop's older customers...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Brioche bread;",
          "2x 80g smash meats (house blend);",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 6.04,
        description:
          "The kind you don't like at first, but then you get hooked and can't let go...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Brioche bread;",
          "2x 80g smash meats (house blend);",
          "Cheddar cheese;",
          "Lettuce;",
          "Tomato;",
          "Pickles;",
          "Onion;",
          "House sauce",
        ],
      },
    ],
  },
  {
    title: "Dessert",
    data: [
      {
        id: "5",
        title: "Ice cream with Brownie",
        price: 3.82,
        description:
          "A delicious dessert to enjoy. Choose the ice cream and syrup you want...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x scoop of ice cream of your choice",
          "Choose your syrup;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 4.62,
        description:
          "A delicious cupcake to sweeten things up. Choose the flavor you like...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Choose your flavor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Drinks",
    data: [
      {
        id: "7",
        title: "Coke",
        price: 1.39,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "A super cold coke to go with your super snack...",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
