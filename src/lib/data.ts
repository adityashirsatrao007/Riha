export interface Dress {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string; 
  images: string[];
  category: {
    style: 'Lehenga' | 'Saree' | 'Gown' | 'Anarkali' | 'Sharara';
    color: string; 
    fabric: string; 
  };
  materials: string[];
  featured?: boolean;
  slug: string;
  aiHint: string; 
}

export const dresses: Dress[] = [
  {
    id: '1',
    name: 'Crimson Royale Lehenga',
    slug: 'crimson-royale-lehenga',
    description: 'A majestic crimson lehenga with intricate gold embroidery, perfect for a royal bridal look.',
    longDescription: 'This stunning crimson lehenga is crafted from luxurious velvet and features detailed zardozi and pearl embroidery. The ensemble includes a matching choli and a net dupatta with embellished borders. Ideal for traditional wedding ceremonies, it exudes grandeur and elegance.',
    price: 'Price on Request',
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    category: {
      style: 'Lehenga',
      color: 'Red',
      fabric: 'Velvet',
    },
    materials: ['Velvet', 'Net', 'Zardozi', 'Pearls'],
    featured: true,
    aiHint: 'red lehenga',
  },
  {
    id: '2',
    name: 'Pastel Dream Saree',
    slug: 'pastel-dream-saree',
    description: 'Elegant pastel pink saree in georgette with delicate floral work, ideal for receptions.',
    longDescription: 'Embrace subtlety with this beautiful pastel pink georgette saree. It is adorned with fine floral threadwork and sequin highlights, paired with a designer blouse. Lightweight and graceful, this saree is perfect for daytime events or evening receptions.',
    price: '₹75,000',
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    category: {
      style: 'Saree',
      color: 'Pink',
      fabric: 'Georgette',
    },
    materials: ['Georgette', 'Threadwork', 'Sequins'],
    featured: true,
    aiHint: 'pink saree',
  },
  {
    id: '3',
    name: 'Emerald Enchantment Gown',
    slug: 'emerald-enchantment-gown',
    description: 'A breathtaking emerald green gown with a modern silhouette and traditional motifs.',
    longDescription: 'This fusion gown in a rich emerald green silk features contemporary cuts blended with traditional Indian embroidery. The bodice is intricately embellished, flowing into a voluminous skirt. A perfect choice for cocktail parties or sangeet ceremonies.',
    price: '₹1,20,000',
    images: [
      'https://placehold.co/600x800.png',
    ],
    category: {
      style: 'Gown',
      color: 'Green',
      fabric: 'Silk',
    },
    materials: ['Silk', 'Embroidery', 'Crystals'],
    aiHint: 'green gown',
  },
  {
    id: '4',
    name: 'Golden Weave Anarkali',
    slug: 'golden-weave-anarkali',
    description: 'Classic golden beige Anarkali suit in Banarasi silk, exuding timeless charm.',
    longDescription: 'A regal Anarkali suit in golden beige Banarasi silk, featuring intricate weaving patterns. This floor-length Anarkali is paired with a churidar and a matching dupatta. It\'s an excellent choice for pre-wedding festivities or as a guest outfit.',
    price: '₹90,000',
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    category: {
      style: 'Anarkali',
      color: 'Gold',
      fabric: 'Banarasi Silk',
    },
    materials: ['Banarasi Silk', 'Woven Zari'],
    featured: true,
    aiHint: 'gold anarkali',
  },
  {
    id: '5',
    name: 'Sapphire Sharara Set',
    slug: 'sapphire-sharara-set',
    description: 'A vibrant sapphire blue Sharara set with mirror work, perfect for mehendi or sangeet.',
    longDescription: 'Make a statement with this stunning sapphire blue Sharara set. The kurti is heavily embellished with mirror work and gota patti, paired with flared sharara pants and a net dupatta. Fun, festive, and fashionable for any joyful occasion.',
    price: '₹82,500',
    images: [
      'https://placehold.co/600x800.png',
    ],
    category: {
      style: 'Sharara',
      color: 'Blue',
      fabric: 'Crepe',
    },
    materials: ['Crepe', 'Mirror Work', 'Gota Patti', 'Net'],
    aiHint: 'blue sharara',
  },
  {
    id: '6',
    name: 'Ivory Grace Lehenga',
    slug: 'ivory-grace-lehenga',
    description: 'An ethereal ivory lehenga with chikankari work, embodying pure elegance.',
    longDescription: 'This exquisite ivory lehenga showcases delicate chikankari embroidery on fine georgette fabric. Paired with a matching blouse and a soft net dupatta with pearl detailing, this ensemble is perfect for a sophisticated bride or for daytime weddings.',
    price: 'Price on Request',
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    category: {
      style: 'Lehenga',
      color: 'White',
      fabric: 'Georgette',
    },
    materials: ['Georgette', 'Chikankari', 'Pearls', 'Net'],
    aiHint: 'ivory lehenga',
  }
];

export const dressCategories = {
  style: ['Lehenga', 'Saree', 'Gown', 'Anarkali', 'Sharara'],
  color: ['Red', 'Pink', 'Green', 'Gold', 'Blue', 'White', 'Purple', 'Orange', 'Yellow'],
  fabric: ['Velvet', 'Georgette', 'Silk', 'Banarasi Silk', 'Crepe', 'Net', 'Chiffon', 'Cotton'],
};

export const bodyTypes = ['Pear', 'Apple', 'Hourglass', 'Rectangle', 'Inverted Triangle'];
export const eventThemes = ['Traditional Wedding', 'Modern Reception', 'Sangeet Night', 'Mehendi Ceremony', 'Cocktail Party', 'Day Function'];
