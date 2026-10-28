export const categories = [
  { id: 'all', name: 'Semua Koleksi' },
  { id: 'Coat', name: 'Coats & Trench' },
  { id: 'Blazer', name: 'Blazer & Jaket' },
  { id: 'Knitwear', name: 'Knitwear & Vest' },
  { id: 'Tops', name: 'Tops & Blouse' },
  { id: 'Outerwear', name: 'Outerwear' },
];

export const products = [
  {
    id: "MV001",
    name: "Noir Élégance Cardigan",
    category: "Knitwear",
    subtitle: "Cardigan rajut kashmir lembut dengan siluet Parisian chic",
    description: "Cardigan rajut lembut berwarna abu-abu bersih, memberi sentuhan klasik nan anggun. Ditenun dari perpaduan wol kashmir pilihan yang nyaman untuk iklim tropis maupun sejuk. Cocok dipadukan dengan gaun sutra atau celana high-waist.",
    fabric: "70% Fine Merino Wool, 30% Cashmere",
    price: 299000,
    originalPrice: 389000,
    image: "/assets/images/products/product1.jpg",
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "White", hex: "#F3F4F6" },
      { name: "Gray", hex: "#6B7280" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 38
  },
  {
    id: "MV002",
    name: "Belle Vie Crop Top",
    category: "Tops",
    subtitle: "Crop top minimalis dengan siluet kontemporer",
    description: "Crop top minimalis dengan potongan modern yang memberi kesan segar dan elegan. Memiliki potongan leher struktural yang mempertegas siluet leher dan bahu dengan sempurna.",
    fabric: "95% Organic Cotton, 5% Elastane",
    price: 399000,
    originalPrice: null,
    image: "/assets/images/products/product2.jpg",
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Gray", hex: "#6B7280" },
      { name: "White", hex: "#F3F4F6" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "New Arrival",
    rating: 4.8,
    reviewsCount: 24
  },
  {
    id: "MV003",
    name: "Velour Luxe Blazer",
    category: "Blazer",
    subtitle: "Blazer berbahan velvet eksklusif dengan aksen lapel tajam",
    description: "Blazer berbahan velvet premium dengan kilau mewah yang memikat. Memberikan statement berkelas untuk acara malam spesial, gala dinner, maupun pertemuan bergengsi.",
    fabric: "100% Silk Velvet dengan Lapisan Cupro Mewah",
    price: 599000,
    originalPrice: 799000,
    image: "/assets/images/products/product3.jpg",
    colors: [
      { name: "Midnight Black", hex: "#0A0A0A" }
    ],
    sizes: ["S", "M", "L"],
    badge: "Haute Choice",
    rating: 5.0,
    reviewsCount: 52
  },
  {
    id: "MV004",
    name: "Céleste Crop Jacket",
    category: "Outerwear",
    subtitle: "Jaket crop berstruktur dengan sentuhan Parisian couture",
    description: "Jaket crop dengan potongan modern, memberi sentuhan trendy yang cocok untuk gaya hidup urban tanpa meninggalkan esensi kemewahan klasik.",
    fabric: "Structured Wool Blend & Satin Lining",
    price: 599000,
    originalPrice: null,
    image: "/assets/images/products/product4.jpg",
    colors: [
      { name: "Off White", hex: "#FAFAFA" },
      { name: "Black", hex: "#111111" },
      { name: "Navy", hex: "#1E3A5F" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Limited Edition",
    rating: 4.9,
    reviewsCount: 31
  },
  {
    id: "MV005",
    name: "Lumière Beige Trench Coat",
    category: "Coat",
    subtitle: "Trench coat klasik berpotongan jatuh ala Rue Saint-Honoré",
    description: "Trench coat ringan berwarna beige elegan dengan siluet Parisian look. Dilengkapi sabuk pinggang berlapis dan kancing tanduk alami, sangat cocok untuk perjalanan atau acara semi-formal.",
    fabric: "100% Water-resistant Gabardine Cotton",
    price: 1299000,
    originalPrice: 1599000,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    colors: [
      { name: "Beige", hex: "#D8C7B5" },
      { name: "Black", hex: "#111111" },
      { name: "Navy", hex: "#1E3A5F" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Iconic Piece",
    rating: 4.9,
    reviewsCount: 64
  },
  {
    id: "MV006",
    name: "Aria Minimal Sweater Vest",
    category: "Knitwear",
    subtitle: "Vest rajut esensial dengan cutting clean untuk layering",
    description: "Vest tanpa lengan dengan desain minimalis dan cutting clean. Menggunakan rajutan gauge medium yang seimbang, membuat layering kemeja atau kaus terasa modern dan stylish.",
    fabric: "80% Lambswool, 20% Mulberry Silk",
    price: 950000,
    originalPrice: null,
    image: "/assets/images/products/product6.jpg",
    colors: [
      { name: "Oatmeal Gray", hex: "#9CA3AF" },
      { name: "Warm Brown", hex: "#78350F" },
      { name: "Black", hex: "#111111" }
    ],
    sizes: ["M", "L", "XL"],
    badge: null,
    rating: 4.7,
    reviewsCount: 19
  },
  {
    id: "MV007",
    name: "Soleil d’Été Outer Kimono",
    category: "Outerwear",
    subtitle: "Outer flowy terinspirasi nuansa pesisir French Riviera",
    description: "Outer bergaya kimono dengan potongan flowy dan palet warna lembut. Jatuh di tubuh dengan anggun untuk suasana santai resor maupun sore hari di perkotaan.",
    fabric: "100% Pure Crinkled Linen",
    price: 1199000,
    originalPrice: 1450000,
    image: "/assets/images/products/product7.jpg",
    colors: [
      { name: "Soft Sand", hex: "#E5E2DC" },
      { name: "Umber Brown", hex: "#5D4037" },
      { name: "Black", hex: "#111111" }
    ],
    sizes: ["M", "L", "XL"],
    badge: "Summer Capsule",
    rating: 4.8,
    reviewsCount: 27
  },
  {
    id: "MV008",
    name: "Nocturne Womens Cape Coat",
    category: "Coat",
    subtitle: "Cape coat dramatis dengan drape memukau dan siluet tegas",
    description: "Cape coat elegan dengan siluet jatuh yang memberi kesan dramatis sekaligus anggun. Desain tanpa lengan dengan potongan longgar membuatnya ideal sebagai statement piece untuk acara malam.",
    fabric: "Double-faced Melton Wool",
    price: 999000,
    originalPrice: 1290000,
    image: "/assets/images/products/product8.jpg",
    colors: [
      { name: "Charcoal Black", hex: "#1A1A1A" },
      { name: "Dark Taupe", hex: "#4B443B" }
    ],
    sizes: ["M", "L", "XL"],
    badge: "Signature Collection",
    rating: 5.0,
    reviewsCount: 45
  }
];

export const editorialModels = [
  {
    id: "model-1",
    name: "Baek Song Min",
    role: "Haute Couture Muse",
    quote: "Koleksi Maison Velouré mendefinisikan kembali arti keanggunan tanpa usaha (effortless grace). Detail jahitannya adalah standar busana Paris sejati.",
    image: "/assets/images/models/model1.jpg"
  },
  {
    id: "model-2",
    name: "Kim Ji-Soo",
    role: "Editorial Fashion Model",
    quote: "Setiap helai kain berbicara tentang dedikasi pada kualitas material kelas dunia. Mengenakannya memberikan rasa percaya diri yang tenang dan mewah.",
    image: "/assets/images/models/model2.jpg"
  },
  {
    id: "model-3",
    name: "Park Ji-Hyo",
    role: "Modern Lifestyle Icon",
    quote: "Perpaduan sempurna antara kenyamanan busana kontemporer dengan siluet klasik Prancis yang abadi melintasi musim.",
    image: "/assets/images/models/model3.jpg"
  }
];
