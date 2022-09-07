import background1 from "./images/background1.jpg";
import background2 from "./images/background2.jpg";
import background3 from "./images/background3.jpg";
import black_forest1 from "./images/black_forest1.jpeg";
import black_forest2 from "./images/black_forest2.jpeg";
import carrot1 from "./images/carrot1.jpeg";
import carrot2 from "./images/carrot2.jpeg";
import chocolate_oreo from "./images/chocolate_oreo.jpeg";
import chocolate_oreo2 from "./images/chocolate_oreo2.jpg";
import choc_mint from "./images/choc_mint.jpeg";
import choc_mint2 from "./images/choc_mint2.jpg";
import choc_mint_oreo from "./images/choc_mint_oreo.jpeg";
import choc_mint_oreo2 from "./images/choc_mint_oreo2.jpeg";
import zebra from "./images/zebra.jpeg";
import zebra2 from "./images/zebra2.jpg";
import blueberry from "./images/blueberry.jpeg";
import blueberry2 from "./images/blueberry2.jpg";
import chocolate from "./images/chocolate.jpeg";
import chocolate2 from "./images/chocolate2.jpg";
import coffee1 from "./images/coffee1.jpeg";
import coffee2 from "./images/coffee2.jpeg";
import extra1 from "./images/extra1.jpeg";
import extra2 from "./images/extra2.jpeg";
import extra3 from "./images/extra3.jpeg";
import extra4 from "./images/extra4.jpeg";
import extra5 from "./images/extra5.jpeg";
import extra6 from "./images/extra6.jpeg";
import extra7 from "./images/extra7.jpeg";
import extra8 from "./images/extra8.jpeg";
import extra9 from "./images/extra9.jpeg";
import extra10 from "./images/extra10.jpeg";
import extra11 from "./images/extra11.jpeg";
import extra12 from "./images/extra12.jpeg";
import extra13 from "./images/extra13.jpeg";
import extra14 from "./images/extra14.jpeg";
import extra16 from "./images/extra16.jpeg";
import extra17 from "./images/extra17.jpeg";
import extra18 from "./images/extra18.jpeg";
import extra19 from "./images/extra19.jpeg";
import extra20 from "./images/extra20.jpeg";
import extra21 from "./images/extra21.jpeg";
import extra22 from "./images/extra22.jpeg";
import logo1 from "./images/logo1.png";
import lemon from "./images/lemon.jpeg";
import lemon2 from "./images/lemon2.jpg";
import marble from "./images/marble.jpeg";
import marble2 from "./images/marble2.jpg";
import orange from "./images/orange.jpeg";
import orange2 from "./images/orange2.jpeg";
import passion from "./images/passion.jpeg";
import passion2 from "./images/passion2.jpg";
import redvelvet1 from "./images/redvelvet1.jpeg";
import redvelvet2 from "./images/redvelvet2.jpeg";
import strawberry1 from "./images/strawberry1.jpeg";
import strawberry2 from "./images/strawberry2.jpeg";
import vanilla_oreo from "./images/vanilla_oreo.jpeg";
import vanilla_oreo2 from "./images/vanilla_oreo2.jpg";
import vanilla from "./images/vanilla.jpeg";
import vanilla2 from "./images/vanilla2.jpg";
import white_forest1 from "./images/white_forest1.jpeg";
import white_forest2 from "./images/white_forest2.jpeg";


export const cakes = [
  {
    id: 1,
    name: "Vanilla",
    type: "classic",
    half_kg:800,
    one_kg:1600,
    two_kg:2400,
    three_kg:3200,
    four_kg:4000,
    popular: true,
    image: vanilla,
    more_images:[vanilla,vanilla2],
    eggs: true,
    milk: true,
  },
  {
    id: 2,
    name: "Vanilla Oreo",
    type: "classic",
    half_kg:850,
    one_kg:1700,
    two_kg:2500,
    three_kg:3300,
    four_kg:4100,
    popular: true,
    image: vanilla_oreo,
    more_images:[vanilla_oreo,vanilla_oreo2],
    eggs: false,
    milk: true,
  },
  {
    id: 3,
    name: "Marble",
    type: "classic",
    half_kg:800,
    one_kg:1600,
    two_kg:2400,
    three_kg:3200,
    four_kg:4000,
    popular: true,
    image: marble,
    more_images:[marble,marble2],
    eggs: true,
    milk: false,
  },
  {
    id: 4,
    name: "Red Velvet",
    type: "classic",
    half_kg:850,
    one_kg:1700,
    two_kg:2500,
    three_kg:3300,
    four_kg:4100,
    popular: true,
    image: redvelvet1,
    more_images:[redvelvet1 ,redvelvet2],
    eggs: false,
    milk: false,
  },
  {
    id: 5,
    name: "Coffee Cake",
    type: "classic",
    half_kg:850,
    one_kg:1700,
    two_kg:2500,
    three_kg:3300,
    four_kg:4100,
    popular: true,
    image: coffee1,
    more_images:[coffee1, coffee2],
    eggs: true,
    milk: true,
  },
  {
    id: 6,
    name: "White Forest",
    type: "Forests",
    half_kg:900,
    one_kg:1800,
    two_kg:2700,
    three_kg:3600,
    four_kg:4500,
    popular: true,
    image: white_forest1, 
    more_images:[white_forest1, white_forest2],
    eggs: true,
    milk: true,
  },
  {
    id: 7,
    name: "Black Forest",
    type: "Forests",
    half_kg:900,
    one_kg:1800,
    two_kg:2700,
    three_kg:3600,
    four_kg:4500,
    popular: true,
    image: black_forest1, 
    more_images:[black_forest1, black_forest2],
    eggs: true,
    milk: true,
  },
  {
    id: 8,
    name: "Passion Forest",
    type: "Forests",
    half_kg:900,
    one_kg:1800,
    two_kg:2700,
    three_kg:3600,
    four_kg:4500,
    popular: true,
    image: passion,
    more_images:[passion, passion2],
    eggs: true,
    milk: true,
  },
  {
    id: 9,
    name: "Zebra Forest",
    type: "Forests",
    half_kg:900,
    one_kg:1800,
    two_kg:2700,
    three_kg:3600,
    four_kg:4500,
    popular: true,
    image: zebra,
    more_images:[zebra, zebra2],
    eggs: true,
    milk: true,
  },
  {
    id: 10,
    name: "Orange Cake",
    type: "Fruity",
    half_kg:900,
    one_kg:1900,
    two_kg:2800,
    three_kg:3700,
    four_kg:4600,
    popular: true,
    image: orange,
    more_images:[orange, orange2],
    eggs: true,
    milk: true,
  },
  {
    id: 11,
    name: "Blueberry Cake",
    type: "Fruity",
    half_kg:1050,
    one_kg:2100,
    two_kg:3100,
    three_kg:4100,
    four_kg:5100,
    popular: true,
    image: blueberry,
    more_images:[blueberry, blueberry2],
    eggs: true,
    milk: true,
  },
  {
    id: 12,
    name: "Strawberry Cake",
    type: "Fruity",
    half_kg:1050,
    one_kg:2100,
    two_kg:3100,
    three_kg:4100,
    four_kg:5100,
    popular: true,
    image: strawberry1,
    more_images:[strawberry1, strawberry2],
    eggs: true,
    milk: true,
  },
  {
    id: 13,
    name: "Lemon Cake",
    type: "Fruity",
    half_kg:950,
    one_kg:1900,
    two_kg:2800,
    three_kg:3700,
    four_kg:4600,
    popular: true,
    image: lemon,
    more_images:[lemon, lemon2],
    eggs: true,
    milk: true,
  },
  {
    id: 14,
    name: "Carrot Cake",
    type: "Fruity",
    half_kg:950,
    one_kg:1900,
    two_kg:2800,
    three_kg:3700,
    four_kg:4600,
    popular: true,
    image: carrot1, 
    more_images: [carrot1, carrot2],
    eggs: true,
    milk: true,
  },
  {
    id: 15,
    name: "Chocolate Cake",
    type: "Chocolate",
    half_kg:900,
    one_kg:1800,
    two_kg:2700,
    three_kg:3600,
    four_kg:4500,
    popular: true,
    image: chocolate,
    more_images:[chocolate, chocolate2],
    eggs: true,
    milk: true,
  },
  {
    id: 16,
    name: "Chocolate Mint",
    type: "Chocolate",
    half_kg:950,
    one_kg:1900,
    two_kg:2800,
    three_kg:3700,
    four_kg:4600,
    popular: true,
    image: choc_mint,
    more_images:[choc_mint, choc_mint2],
    eggs: true,
    milk: true,
  },
  {
    id: 17,
    name: "Chocolate Mint Oreo",
    type: "Chocolate",
    half_kg:1000,
    one_kg:2000,
    two_kg:3000,
    three_kg:4000,
    four_kg:5000,
    popular: true,
    image: choc_mint_oreo,
    more_images:[choc_mint_oreo, choc_mint_oreo2],
    eggs: true,
    milk: true,
  },
  {
    id: 18,
    name: "Choc Oreo",
    type: "Chocolate",
    half_kg:950,
    one_kg:1900,
    two_kg:2800,
    three_kg:3700,
    four_kg:4600,
    popular: true,
    image: chocolate_oreo,
    more_images:[chocolate_oreo,chocolate_oreo2],
    eggs: true,
    milk: true,
  },
];
export const extra_images = [
  extra1,
  extra2,
  extra3,
  extra4,
  extra5,
  extra6,
  extra7,
  extra8,
  extra9,
  extra10,
  extra11,
  extra12,
  extra13,
  extra18,
  extra14,
  extra16,
  extra17,
  extra19,
  extra20,
  extra21,
  extra22,
  black_forest1,
  black_forest2,
  carrot1,
  carrot2,
  chocolate_oreo,
  chocolate_oreo2,
  choc_mint,
  choc_mint2,
  choc_mint_oreo,
  choc_mint_oreo2,
  zebra,
  zebra2,
  blueberry,
  blueberry2,
  chocolate,
  chocolate2,
  coffee1,
  coffee2,
  lemon,
  lemon2,
  marble,
  marble2,
  orange,
  orange2,
  passion,
  passion2,
  redvelvet1,
  redvelvet2,
  strawberry1,
  strawberry2,
  vanilla_oreo,
  vanilla_oreo2,
  vanilla,
  vanilla2,
  white_forest1,
  white_forest2

];
export const logos = [logo1];
export const background_images = [background1, background2, background3];
