import mainMock from "./mainMockneck.webp";
import rm1 from "./rm1.webp";
import rm2 from "./rm2.webp";
import rm3 from "./rm3.webp";

import mainG from "./mainG.png";
import rg1 from "./rg1.png";
import rg2 from "./rg2.png";
import rg3 from "./rg3.png";

import mainO from "./mainO.png";
import ro1 from "./ro1.png";
import ro2 from "./ro2.png";
import ro3 from "./ro3.png";

import mainD from "./mainD.png";
import rd1 from "./rd1.png";
import rd2 from "./rd2.png";
import rd3 from "./rd3.png";

const products = [

    {
        id: 1,
        name: "Contour Mockneck Longsleeve",
        price: "499",
        sale: true,
        images: [mainMock, rm1, rm2, rm3],
        colors: ["Black", "White", "Beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "A sleek contour-fit mockneck longsleeve crafted for comfort and elegance.",
        details: "Material: 95% Cotton, 5% Elastane. Machine wash cold, tumble dry low."
    },
    {
        id: 2,
        name: "Generation Blazer",
        price: "510",
        sale: false,
        images: [mainG, rg1, rg2, rg3],
        colors: ["Black", "Navy", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        description: "A tailored blazer that combines sophistication with a modern silhouette.",
        details: "Material: 100% Wool. Dry clean only."
    },
    {
        id: 3,
        name: "Oversized Blazer",
        price: "375",
        sale: false,
        images: [mainO, ro1, ro2, ro3],
        colors: ["Beige", "Black"],
        sizes: ["XS", "S", "M", "L"],
        description: "Relaxed oversized blazer, designed for layering and comfort.",
        details: "Material: 80% Polyester, 20% Rayon. Dry clean recommended."
    },
    {
        id: 4,
        name: "Dazzle Bustier",
        price: "455",
        sale: false,
        images: [mainD, rd1, rd2, rd3],
        colors: ["Red", "Black"],
        sizes: ["XS", "S", "M"],
        description: "A dazzling bustier top with a structured fit and refined detailing.",
        details: "Material: Satin blend. Spot clean only."
    },

    {
        id: 5,
        name: "Contour Mockneck Longsleeve",
        price: "499",
        sale: true,
        images: [mainMock, rm1, rm2, rm3],
        colors: ["Black", "White", "Beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "A sleek contour-fit mockneck longsleeve crafted for comfort and elegance.",
        details: "Material: 95% Cotton, 5% Elastane. Machine wash cold, tumble dry low."
    },
    {
        id: 6,
        name: "Generation Blazer",
        price: "510",
        sale: false,
        images: [mainG, rg1, rg2, rg3],
        colors: ["Black", "Navy", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        description: "A tailored blazer that combines sophistication with a modern silhouette.",
        details: "Material: 100% Wool. Dry clean only."
    },
    {
        id: 7,
        name: "Oversized Blazer",
        price: "375",
        sale: false,
        images: [mainO, ro1, ro2, ro3],
        colors: ["Beige", "Black"],
        sizes: ["XS", "S", "M", "L"],
        description: "Relaxed oversized blazer, designed for layering and comfort.",
        details: "Material: 80% Polyester, 20% Rayon. Dry clean recommended."
    },
    {
        id: 8,
        name: "Dazzle Bustier",
        price: "455",
        sale: false,
        images: [mainD, rd1, rd2, rd3],
        colors: ["Red", "Black"],
        sizes: ["XS", "S", "M"],
        description: "A dazzling bustier top with a structured fit and refined detailing.",
        details: "Material: Satin blend. Spot clean only."
    },

    {
        id: 9,
        name: "Contour Mockneck Longsleeve",
        price: "499",
        sale: true,
        images: [mainMock, rm1, rm2, rm3],
        colors: ["Black", "White", "Beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "A sleek contour-fit mockneck longsleeve crafted for comfort and elegance.",
        details: "Material: 95% Cotton, 5% Elastane. Machine wash cold, tumble dry low."
    },
    {
        id: 10,
        name: "Generation Blazer",
        price: "510",
        sale: false,
        images: [mainG, rg1, rg2, rg3],
        colors: ["Black", "Navy", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        description: "A tailored blazer that combines sophistication with a modern silhouette.",
        details: "Material: 100% Wool. Dry clean only."
    },
    {
        id: 11,
        name: "Oversized Blazer",
        price: "375",
        sale: false,
        images: [mainO, ro1, ro2, ro3],
        colors: ["Beige", "Black"],
        sizes: ["XS", "S", "M", "L"],
        description: "Relaxed oversized blazer, designed for layering and comfort.",
        details: "Material: 80% Polyester, 20% Rayon. Dry clean recommended."
    },
    {
        id: 12,
        name: "Dazzle Bustier",
        price: "455",
        sale: false,
        images: [mainD, rd1, rd2, rd3],
        colors: ["Red", "Black"],
        sizes: ["XS", "S", "M"],
        description: "A dazzling bustier top with a structured fit and refined detailing.",
        details: "Material: Satin blend. Spot clean only."
    },
    {
        id: 13,
        name: "Contour Mockneck Longsleeve",
        price: "499",
        sale: true,
        images: [mainMock, rm1, rm2, rm3],
        colors: ["Black", "White", "Beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "A sleek contour-fit mockneck longsleeve crafted for comfort and elegance.",
        details: "Material: 95% Cotton, 5% Elastane. Machine wash cold, tumble dry low."
    },
    {
        id: 14,
        name: "Generation Blazer",
        price: "510",
        sale: false,
        images: [mainG, rg1, rg2, rg3],
        colors: ["Black", "Navy", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        description: "A tailored blazer that combines sophistication with a modern silhouette.",
        details: "Material: 100% Wool. Dry clean only."
    },
    {
        id: 15,
        name: "Oversized Blazer",
        price: "375",
        sale: false,
        images: [mainO, ro1, ro2, ro3],
        colors: ["Beige", "Black"],
        sizes: ["XS", "S", "M", "L"],
        description: "Relaxed oversized blazer, designed for layering and comfort.",
        details: "Material: 80% Polyester, 20% Rayon. Dry clean recommended."
    },
    {
        id: 16,
        name: "Dazzle Bustier",
        price: "455",
        sale: false,
        images: [mainD, rd1, rd2, rd3],
        colors: ["Red", "Black"],
        sizes: ["XS", "S", "M"],
        description: "A dazzling bustier top with a structured fit and refined detailing.",
        details: "Material: Satin blend. Spot clean only."
    },
    {
        id: 17,
        name: "Contour Mockneck Longsleeve",
        price: "499",
        sale: true,
        images: [mainMock, rm1, rm2, rm3],
        colors: ["Black", "White", "Beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "A sleek contour-fit mockneck longsleeve crafted for comfort and elegance.",
        details: "Material: 95% Cotton, 5% Elastane. Machine wash cold, tumble dry low."
    },
    {
        id: 18,
        name: "Generation Blazer",
        price: "510",
        sale: false,
        images: [mainG, rg1, rg2, rg3],
        colors: ["Black", "Navy", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        description: "A tailored blazer that combines sophistication with a modern silhouette.",
        details: "Material: 100% Wool. Dry clean only."
    },
    {
        id: 19,
        name: "Oversized Blazer",
        price: "375",
        sale: false,
        images: [mainO, ro1, ro2, ro3],
        colors: ["Beige", "Black"],
        sizes: ["XS", "S", "M", "L"],
        description: "Relaxed oversized blazer, designed for layering and comfort.",
        details: "Material: 80% Polyester, 20% Rayon. Dry clean recommended."
    },
    {
        id: 20,
        name: "Dazzle Bustier",
        price: "455",
        sale: false,
        images: [mainD, rd1, rd2, rd3],
        colors: ["Red", "Black"],
        sizes: ["XS", "S", "M"],
        description: "A dazzling bustier top with a structured fit and refined detailing.",
        details: "Material: Satin blend. Spot clean only."
    }
];


export default products;