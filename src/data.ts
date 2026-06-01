/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, SpecialOffer, Review, GalleryImage } from './types';

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Pan-Seared Hokkaido Scallops',
    description: 'Crisped giant scallops served over a velvet parsnip purée, drizzled with black truffle butter & decorated with microgreens and golden dust.',
    price: 32,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1532636875304-0c8fe119cb9e?auto=format&fit=crop&q=80&w=800',
    tags: ["Chef's Signature", "Gluten-Free"],
    calories: 340
  },
  {
    id: 's2',
    name: 'A5 Wagyu Carpaccio',
    description: 'Ultra-thin ribbon-sliced Miyazaki A5 Wagyu, infused with cold-pressed truffle oil, shaved pecorino, fried capers & a touch of hand-harvested sea salt.',
    price: 39,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ["Exclusive", "Raw Masterpiece"],
    calories: 420
  },
  {
    id: 's3',
    name: 'Burrata Con Tartufo',
    description: 'Creamy Italian burrata centered on heirloom baby tomatoes, drizzled with 25-year aged balsamic of Modena, fresh basil oil, and generous black truffle shavings.',
    price: 26,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800',
    tags: ["Vegetarian"],
    calories: 380
  },
  {
    id: 's4',
    name: 'Gilded Caviar Tartlet',
    description: 'Crisp pastry shell filled with lemon-scented crème fraîche, topped with fine Imperial Osetra caviar and finished with delicate 24k edible gold leaf.',
    price: 48,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    tags: ["Chef's Signature", "Prestige"],
    calories: 210
  },

  // Mains
  {
    id: 'm1',
    name: 'Smoked Prime Tomahawk',
    description: '45-day dry-aged wagyu tomahawk steak, charred to charcoal-perfection, served table-side under a smoking hickory glass dome with roasted bone marrow sauce.',
    price: 135,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ["For Two", "Gluten-Free", "Chef's Signature"],
    calories: 1450
  },
  {
    id: 'm2',
    name: 'Grand Imperial Lobster Thermidor',
    description: 'Entire Maine lobster deshelled, sautéed with rich cognac-infused wild mushrooms & wild leeks, filled into shell, baked under a golden Gruyère crisp.',
    price: 89,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1559742811-82410b451b9b?auto=format&fit=crop&q=80&w=800',
    tags: ["Prestige", "Seafood Masterpiece"],
    calories: 890
  },
  {
    id: 'm3',
    name: 'Herb-Crusted Australian Lamb Rack',
    description: 'Pistachio and fresh rosemary crusted sovereign lamb, slow-roasted, accompanied by honey-glazed baby parsnips and an exquisite ruby port reduction.',
    price: 64,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ["Gluten-Free"],
    calories: 780
  },
  {
    id: 'm4',
    name: 'Saffron Chilean Sea Bass',
    description: 'Pan- roasted fillet of sea bass nested on butter-poached asparagus, served in a rich, pool of Kashmiri saffron and wild clam reductions with golden foam.',
    price: 58,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    tags: ["Gluten-Free", "Light Essence"],
    calories: 510
  },
  {
    id: 'm5',
    name: 'Wild Forest Truffle Gnocchi',
    description: 'Hand-rolled potato gnocchi tossed with organic porcini mushrooms, baby sage, and a luxurious cloud-like parmesan white truffle emulsion.',
    price: 45,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1621996346565-e3bb64d85257?auto=format&fit=crop&q=80&w=800',
    tags: ["Vegetarian", "Chef's Signature"],
    calories: 620
  },

  // Desserts
  {
    id: 'd1',
    name: 'The Golden Crest Sphere',
    description: 'A dark chocolate dome gilded with edible gold. Poured table-side with warm Madagascar espresso caramel sauce to melt and reveal vanilla bean semifreddo inside.',
    price: 24,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    tags: ["Chef's Signature", "Interactive Experience"],
    calories: 580
  },
  {
    id: 'd2',
    name: 'Saffron-Infused Cardamom Crème Brûlée',
    description: 'Silky rich egg custard steeped in saffron strands and cardamom pods, finished beneath a shattered pane of hot caramelized sugar and dark berries.',
    price: 18,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&q=80&w=800',
    tags: ["Vegetarian", "Gluten-Free"],
    calories: 420
  },
  {
    id: 'd3',
    name: 'Deconstructed Pistachio Baklava Rose',
    description: 'Layers of crispy gossamer phyllo pastry, toasted wild pistachios, layered with a light organic rosewater cloud cream and single-estate honey drizzle.',
    price: 20,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    tags: ["Vegetarian"],
    calories: 520
  },

  // Drinks
  {
    id: 'dr1',
    name: 'The Royal Spice Smoked Old Fashioned',
    description: 'A powerful pairing of double-casked high rye bourbon, aromatic bitters, orange oils, and sweet saffron syrup. Bathed in applewood hickory smoke.',
    price: 28,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    tags: ["Smoked Ritual", "Signature Cocktail"],
    calories: 180
  },
  {
    id: 'dr2',
    name: 'Imperial Gilded Negroni',
    description: 'Artisanal dry gin, sweet vermouth, and Campari macerated with wild botanicals, beautifully stirred and garnished with floating 24k gold flakes.',
    price: 26,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    tags: ["Gluten-Free", "Craft"],
    calories: 160
  },
  {
    id: 'dr3',
    name: 'Saffron & Elderflower Elixir (Mocktail)',
    description: 'Organic elderflower tonic, botanical seedlip extract, freshly muddled cucumber, fresh lime juice & premium Kashmiri saffron thread swirl.',
    price: 19,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800',
    tags: ["Non-Alcoholic", "Vegetarian", "Refreshing"],
    calories: 90
  }
];

export const specialOffers: SpecialOffer[] = [
  {
    id: 'o1',
    title: 'The Sovereign Dining Experience',
    subtitle: 'Epicurean Tasting Menu for Two',
    description: 'Immerse yourselves in a meticulously curated 7-course tasting trip featuring our most exclusive signature dishes, including our premier A5 Wagyu and Smoked Scallops, rounded out by customized wine pairings chosen by our Lead Sommelier.',
    code: 'SOVEREIGN7',
    discount: '15% OFF',
    badge: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
    expiryTime: 'Limited Time Only'
  },
  {
    id: 'o2',
    title: 'Midweek Gourmet Escape',
    subtitle: 'Complimentary Master Sommelier Pairing',
    description: 'Enhance your dining experience from Tuesday through Thursday. Book a reservation for our Signature Main course and receive a handcrafted pairing of premium vintage wines selected specifically to augment the complex spices of your meal.',
    code: 'SOMMPAIR',
    discount: 'FREE WINE TASTING',
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200',
    expiryTime: 'Every Tue-Thu'
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Victoria Vance-Montgomerie',
    role: 'Gastronomy Critic, Elite Living',
    comment: 'Royal Spice doesn’t merely serve food; they orchestrate a complete sensory masterwork. The Smoked Tomahawk possessed complex notes I’ve never found elsewhere, and the service was elegantly choreography-like, anticipatory but never intrusive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    date: 'May 12, 2026'
  },
  {
    id: 'r2',
    name: 'Marcus Sterling',
    role: 'Connoisseur & Tech Investor',
    comment: 'The absolute pinnacle of luxury fine dining in the city. The contrast of the dark sleek atmosphere with the shimmering gold details creates an immersive feel. The Gilded Caviar Tartlet and the Smoked Old Fashioned are absolute essentials.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: 'April 28, 2026'
  },
  {
    id: 'r3',
    name: 'Elena Rostova',
    role: 'International Travel & Food Writer',
    comment: 'Unbelievable attention to detail. Every dish arrives as a striking canvas. The melting Golden Crest Sphere is standard-setting, and our table near the window felt perfectly secluded. Truly a luxurious 5-star standard.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    date: 'May 20, 2026'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
    caption: 'Our elegant Main Hall arranged with velvet chairs and candlelight.',
    category: 'ambiance'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1559742811-82410b451b9b?auto=format&fit=crop&q=80&w=800',
    caption: 'Master Chef Marcus Vance garnishing a signature lobster thermidor.',
    category: 'chef'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    caption: 'Our highly praised A5 Wagyu steak prepared under applewood fire.',
    category: 'dishes'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    caption: 'A smoked old-fashioned ritual served dynamically at your table side.',
    category: 'dishes'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    caption: 'The VIP Obsidian Vault, accommodating micro-parties of up to 8.',
    category: 'ambiance'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    caption: 'The Melting Chocolate Orb, finalized dynamically with hot fudge.',
    category: 'dishes'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    caption: 'Our team of world-class culinary artisans plating the tasting menu.',
    category: 'chef'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    caption: 'A panoramic view of the Royal Spice glass-front wine cellar selection.',
    category: 'ambiance'
  }
];
