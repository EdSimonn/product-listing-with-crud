export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
};

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Chic Handbag",
    category: "bags",
    description: "A nice bag Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    price: 90,
    image: "https://i.imghippo.com/files/cO79w1725212809.png",
  },

  {
    id: "2",
    name: "Blue Back Pack",
    category: "bags",
    description: "Make a statement with our stylish Blue BackPack, the perfect accessory for any modern woman. Featuring a sleek design and ample storage, this bag is as functional as it is fashionable. The vibrant blue color adds a pop of color to your outfit, while the high-quality materials ensure durability. Whether you're heading to work or a night out, this bag is your go-to choice for carrying essentials in style.",
    price: 70,
    image: "https://i.imghippo.com/files/D5ACv1725348943.png",
  },

  {
    id: "3",
    name: "Black Heel",
    category: "shoes",
    description: "Elevate your footwear collection with our Black Leather Shoes, designed for the ladies. These shoes boast a classic silhouette, crafted from premium leather for a refined look. The versatile black color pairs effortlessly with any ensemble, making them a must-have for every occasion. Experience unmatched comfort and style with a durable construction that promises to stand the test of time.",
    price: 100,
    image: "https://i.imghippo.com/files/rBBaZ1725348914.png",
  },

  {
    id: "4",
    name: "Mild Slip-on Flats",
    category: "shoes",
    description: "Step into timeless elegance with our Mild Colored Leather Shoes, perfect for both casual and formal occasions. Crafted from high-quality leather, these shoes feature a sleek design that complements any outfit. The durable sole ensures long-lasting comfort, while the rich brown hue adds a touch of sophistication to your wardrobe. Ideal for the modern man seeking a blend of style and functionality.",
    price: 120,
    image: "https://i.imghippo.com/files/aMoKU1725348868.png",
  },

  {
    id: "5",
    name: "Green Chair with Wooden Legs",
    category: "furniture",
    description: "Add a touch of modern elegance to your living space with our Green Accent Chair. This chair combines comfort and style with its plush seating and contemporary design. The vibrant green upholstery brings a fresh, lively vibe to any room, making it a perfect addition to your home decor. Crafted with high-quality materials, this chair is built to last and provide a cozy spot for relaxation.",
    price: 150,
    image: "https://i.imghippo.com/files/e1Adq1725348970.png",
  },

  {
    id: "6",
    name: "Directors Chair",
    category: "furniture",
    description: "Bring a touch of Hollywood glamour to your space with our Directors Chair, a stylish blend of functionality and design. This chair features a classic foldable frame, making it perfect for both indoor and outdoor use. The sturdy construction ensures durability, while the comfortable seating provides the perfect spot for lounging or working. Ideal for adding a chic touch to your home office or patio.",
    price: 200,
    image: "https://i.imghippo.com/files/y77pC1725348999.png",
  },

  {
    id: "7",
    name: "White Flower vase",
    category: "decor",
    description: "Enhance your home decor with our elegant White Ceramic Vase, a timeless piece that suits any interior style. This vase features a smooth, minimalist design that allows your floral arrangements to take center stage. The crisp white finish adds a touch of sophistication, making it a versatile decor item for any room. Perfect for fresh flowers or as a standalone statement piece on a shelf or table.",
    price: 30,
    image: "https://i.imghippo.com/files/WAEPR1725349040.png",
  },

  {
    id: "8",
    name: 'Cool Brownish Vase',
    category: "decor",
    description: "Bring warmth and natural charm to your home with our Brown Ceramic Vase. This vase's earthy tones and organic design make it a perfect addition to any rustic or modern decor. Whether filled with flowers or displayed on its own, the rich brown color and textured finish create a cozy and inviting atmosphere. Ideal for adding a touch of nature-inspired elegance to your living space.",
    price: 80,
    image: "https://i.imghippo.com/files/8209V1725349062.png",
  },
];

export const getProducts = (): Product[] => {
  if (typeof window !== "undefined") {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
  }

  return initialProducts;
};

export const saveProducts = (products: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("products", JSON.stringify(products));
  }
};
