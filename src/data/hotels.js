const hotelImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85"
];

export const hotels = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 48,
    guests: 3,
    rating: 4.9,
    price: 85,
    available: 6,
    image: hotelImages[0],
    amenities: ["Wi-Fi", "Breakfast", "Parking"],
    description:
      "A luxurious hotel located close to the historic heart of Samarkand."
  },

  {
    id: 2,
    name: "Silk Road Hotel",
    location: "Bukhara, Uzbekistan",
    type: "Hotel",
    rooms: 35,
    guests: 2,
    rating: 4.8,
    price: 72,
    available: 4,
    image: hotelImages[1],
    amenities: ["Wi-Fi", "Restaurant", "Air conditioning"],
    description:
      "A stylish hotel inspired by the history of the ancient Silk Road."
  },

  {
    id: 3,
    name: "Samarkand Royal",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 62,
    guests: 4,
    rating: 4.7,
    price: 96,
    available: 8,
    image: hotelImages[2],
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
    description:
      "Elegant rooms, modern comfort and easy access to famous landmarks."
  },

  {
    id: 4,
    name: "Tashkent City Hotel",
    location: "Tashkent, Uzbekistan",
    type: "Hotel",
    rooms: 85,
    guests: 4,
    rating: 4.8,
    price: 110,
    available: 12,
    image: hotelImages[3],
    amenities: ["Wi-Fi", "Gym", "Restaurant"],
    description:
      "A modern city hotel designed for both business and leisure travelers."
  },

  {
    id: 5,
    name: "Registan Luxury Hotel",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 41,
    guests: 3,
    rating: 5.0,
    price: 135,
    available: 3,
    image: hotelImages[4],
    amenities: ["Wi-Fi", "Spa", "Breakfast"],
    description:
      "Premium accommodation with beautiful interiors and exceptional service."
  },

  {
    id: 6,
    name: "Mountain View Resort",
    location: "Chimgan, Uzbekistan",
    type: "Villa",
    rooms: 28,
    guests: 6,
    rating: 4.9,
    price: 145,
    available: 5,
    image: hotelImages[5],
    amenities: ["Mountain view", "Pool", "Parking"],
    description:
      "A peaceful mountain escape surrounded by spectacular natural scenery."
  },

  {
    id: 7,
    name: "Oasis Residence",
    location: "Tashkent, Uzbekistan",
    type: "House",
    rooms: 24,
    guests: 5,
    rating: 4.6,
    price: 68,
    available: 7,
    image: hotelImages[0],
    amenities: ["Wi-Fi", "Kitchen", "Parking"],
    description:
      "Comfortable private residence perfect for families and longer stays."
  },

  {
    id: 8,
    name: "Golden House",
    location: "Bukhara, Uzbekistan",
    type: "House",
    rooms: 12,
    guests: 4,
    rating: 4.7,
    price: 55,
    available: 3,
    image: hotelImages[1],
    amenities: ["Wi-Fi", "Breakfast", "Garden"],
    description:
      "Traditional architecture combined with modern guest comforts."
  },

  {
    id: 9,
    name: "Blue Sky Hotel",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 54,
    guests: 3,
    rating: 4.5,
    price: 79,
    available: 9,
    image: hotelImages[2],
    amenities: ["Wi-Fi", "Restaurant", "Parking"],
    description:
      "A bright and comfortable stay near Samarkand's main attractions."
  },

  {
    id: 10,
    name: "Navruz Hotel",
    location: "Khiva, Uzbekistan",
    type: "Hotel",
    rooms: 31,
    guests: 2,
    rating: 4.8,
    price: 65,
    available: 4,
    image: hotelImages[3],
    amenities: ["Wi-Fi", "Breakfast", "Terrace"],
    description:
      "A charming hotel with a peaceful atmosphere in historic Khiva."
  },

  {
    id: 11,
    name: "Royal Garden",
    location: "Tashkent, Uzbekistan",
    type: "Villa",
    rooms: 17,
    guests: 6,
    rating: 4.7,
    price: 125,
    available: 2,
    image: hotelImages[4],
    amenities: ["Garden", "Pool", "Wi-Fi"],
    description:
      "A private luxury villa with a beautiful garden and spacious rooms."
  },

  {
    id: 12,
    name: "Paradise Residence",
    location: "Samarkand, Uzbekistan",
    type: "House",
    rooms: 9,
    guests: 5,
    rating: 4.6,
    price: 58,
    available: 3,
    image: hotelImages[5],
    amenities: ["Kitchen", "Wi-Fi", "Parking"],
    description:
      "A cozy private residence for travelers who want a home-like stay."
  },

  {
    id: 13,
    name: "Central Plaza",
    location: "Tashkent, Uzbekistan",
    type: "Hotel",
    rooms: 92,
    guests: 4,
    rating: 4.8,
    price: 118,
    available: 14,
    image: hotelImages[0],
    amenities: ["Gym", "Restaurant", "Wi-Fi"],
    description:
      "A premium hotel in the center of Tashkent."
  },

  {
    id: 14,
    name: "Ancient City Hotel",
    location: "Bukhara, Uzbekistan",
    type: "Hotel",
    rooms: 27,
    guests: 3,
    rating: 4.9,
    price: 91,
    available: 5,
    image: hotelImages[1],
    amenities: ["Breakfast", "Wi-Fi", "Terrace"],
    description:
      "Experience Bukhara's ancient atmosphere from a beautifully restored hotel."
  },

  {
    id: 15,
    name: "Orient Palace",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 47,
    guests: 3,
    rating: 4.7,
    price: 102,
    available: 7,
    image: hotelImages[2],
    amenities: ["Spa", "Pool", "Breakfast"],
    description:
      "A sophisticated stay blending Central Asian character with modern luxury."
  },

  {
    id: 16,
    name: "Sunrise Resort",
    location: "Chimgan, Uzbekistan",
    type: "Villa",
    rooms: 21,
    guests: 6,
    rating: 4.9,
    price: 155,
    available: 4,
    image: hotelImages[3],
    amenities: ["Mountain view", "Pool", "Restaurant"],
    description:
      "Wake up to mountain views and enjoy a peaceful resort atmosphere."
  },

  {
    id: 17,
    name: "Emerald Hotel",
    location: "Tashkent, Uzbekistan",
    type: "Hotel",
    rooms: 66,
    guests: 4,
    rating: 4.6,
    price: 88,
    available: 10,
    image: hotelImages[4],
    amenities: ["Wi-Fi", "Gym", "Parking"],
    description:
      "A contemporary hotel with comfortable rooms and convenient facilities."
  },

  {
    id: 18,
    name: "Luxury Garden",
    location: "Bukhara, Uzbekistan",
    type: "Villa",
    rooms: 15,
    guests: 5,
    rating: 4.9,
    price: 128,
    available: 2,
    image: hotelImages[5],
    amenities: ["Garden", "Breakfast", "Wi-Fi"],
    description:
      "A private garden villa designed for relaxing family holidays."
  },

  {
    id: 19,
    name: "Family House",
    location: "Khiva, Uzbekistan",
    type: "House",
    rooms: 8,
    guests: 6,
    rating: 4.7,
    price: 49,
    available: 2,
    image: hotelImages[0],
    amenities: ["Kitchen", "Garden", "Wi-Fi"],
    description:
      "An affordable and welcoming house for families exploring Khiva."
  },

  {
    id: 20,
    name: "Desert Star Hotel",
    location: "Navoiy, Uzbekistan",
    type: "Hotel",
    rooms: 38,
    guests: 3,
    rating: 4.5,
    price: 61,
    available: 6,
    image: hotelImages[1],
    amenities: ["Wi-Fi", "Restaurant", "Parking"],
    description:
      "A comfortable base for discovering the landscapes of central Uzbekistan."
  },

  {
    id: 21,
    name: "Registan Boutique",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 19,
    guests: 2,
    rating: 4.9,
    price: 115,
    available: 3,
    image: hotelImages[2],
    amenities: ["Breakfast", "Wi-Fi", "Terrace"],
    description:
      "A boutique stay with refined rooms and a warm local atmosphere."
  },

  {
    id: 22,
    name: "Zarafshan Grand",
    location: "Samarkand, Uzbekistan",
    type: "Hotel",
    rooms: 73,
    guests: 4,
    rating: 4.8,
    price: 99,
    available: 11,
    image: hotelImages[3],
    amenities: ["Pool", "Restaurant", "Wi-Fi"],
    description:
      "Spacious rooms and polished hospitality for a memorable Samarkand stay."
  }
];