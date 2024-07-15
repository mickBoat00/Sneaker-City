
const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    model: "Pacer Future Sneaker",
    price: "150 ",
    brand: "Puma",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Oct 01, 2024", 
    sizesAvailable: []
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    model: "Waffle One Sneaker",
    price: "200",
    brand: "Nike",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Aug 03, 2024", 
    sizesAvailable: []
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    brand: "Nike",
    model: "Air Monarch IV",
    price: "200",
    company: "Nike",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Jul 16, 2024", 
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    model: "Unisex-Adult Super",
    price: "150",
    brand: "Puma",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Jul 03, 2024", 
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    model: "Unisex Low-Top",
    price: "100",
    brand: "Vans",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "May 01, 2024", 
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    model: "Pacer Future Doubleknit",
    price: "150",
    brand: "Puma",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "May 01, 2024",  
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    model: "Fusion Evo Golf Shoe",
    price: "100",
    brand: "Puma",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Feb 29, 2024",  
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    model: "Rainbow Chex Skate",
    price: "100",
    brand: "Vans",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Jan 10, 2024",  
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    model: "Classic Bandana Sneakers",
    price: "50",
    brand: "Vans",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Jan 05, 2024",  
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    model: "Roma Basic Sneaker",
    price: "150",
    brand: "Puma",
    description: "The Sneaker comes equipped with a fresh mix of colors and textures. Dimpled textile overlays pop against a crisp White synthetic leather upper, plus Terra Blush microfiber accents add depth. Crafted to the '98 specs as designed by Tinker Hatfield, it includes the original holographic green eye and a paw-inspired outsole to honor MJ's alter ego.",
    releaseDate: "Jan 01, 2024",  
    sizesAvailable: [
      {id: 1, size: "M 9.5 / W 11", quantityLeft: 5},
      {id: 2, size: "M 9 / W 10.5", quantityLeft: 7},
      {id: 3, size: "M 8.5 / W 10", quantityLeft: 2},
      {id: 4, size: "M 8 / W 9.5", quantityLeft: 4},
      {id: 5, size: "M 7.5 / W 9", quantityLeft: 6},
      {id: 6, size: "M 7 / W 8.5", quantityLeft: 1},
    ]
  },
  
];

export default data;
