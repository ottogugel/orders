const MENU = [
  {
    title: "Snack of the day",
    data: [
      {
        id: "1",
        title: "X-React",
        price: 5.00,
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
        price: 7.00,
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
        price: 6.60,
        description:
          "Aquele hambúrguer que não podemos tirar do cardápio devido aos clientes mais antigos da hamburgueria...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
      {
        id: "4",
        title: "X-Tailwind",
        price: 6.04,
        description:
          "Aquele que você não gosta de primeira, mas depois fica viciado e não consegue mais largar...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche;",
          "2x carnes smash (blend da casa) de 80g;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Picles;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Dessert",
    data: [
      {
        id: "5",
        title: "Sorvete com Brownie",
        price: 3.82,
        description:
          "Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 4.62,
        description:
          "Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Drinks",
    data: [
      {
        id: "7",
        title: "Hmmm, coquinha!",
        price: 1.39,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
