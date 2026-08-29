const sampleListings = [
    {
  title: "Tokyo Cherry Blossom Adventure",
  description:
    "Explore the vibrant streets of Tokyo, admire the beauty of cherry blossoms, visit ancient temples, and experience Japan's rich culture and modern attractions.",
  image: {
    filename: "listingimage",
    url:  "https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 4500,
  location: "Tokyo",
  country: "Japan",
},

{
  title: "Kyoto Heritage Escape",
  description:
    "Discover Kyoto's historic temples, peaceful bamboo forests, traditional tea houses, and stunning gardens for an unforgettable cultural journey.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1558870832-c8db4b5b47d1?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 4200,
  location: "Kyoto",
  country: "Japan",
},

{
  title: "Seoul City Explorer",
  description:
    "Experience the excitement of Seoul with royal palaces, vibrant shopping districts, delicious Korean cuisine, and a lively nightlife scene.",
  image: {
    filename: "listingimage",
      url: "https://images.unsplash.com/photo-1603852452515-2dc92bd9c6f1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 3900,
  location: "Seoul",
  country: "South Korea",
},

{
  title: "Busan Coastal Retreat",
  description:
    "Relax on Busan's beautiful beaches, visit colorful cultural villages, enjoy fresh seafood, and admire breathtaking ocean views.",
  image: { 
    filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1661885506276-e5196a134c77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 3700,
  location: "Busan",
  country: "South Korea",
},

{
  title: "Singapore Skyline Experience",
  description:
    "Visit Marina Bay Sands, Gardens by the Bay, Sentosa Island, and enjoy world-class shopping, dining, and entertainment.",
  image: { 
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1775306963755-8897be3967bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 4800,
  location: "Singapore",
  country: "Singapore",
},

{
  title: "Bangkok Cultural Journey",
  description:
    "Discover Bangkok's magnificent temples, floating markets, bustling streets, and authentic Thai cuisine in one unforgettable adventure.",
  image: { 
    filename: "listingimage",
     url:  "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 3200,
  location: "Bangkok",
  country: "Thailand",
},

{
  title: "Phuket Island Paradise",
  description:
    "Unwind on Phuket's tropical beaches, enjoy crystal-clear waters, island hopping, vibrant nightlife, and exciting water sports.",
  image: { 
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1686238349945-82074ce9f02f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 4100,
  location: "Phuket",
  country: "Thailand",
},

{
  title: "Dubai Luxury Escape",
  description:
    "Experience the glamour of Dubai with iconic skyscrapers, luxury shopping, desert safaris, and spectacular waterfront attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6500,
  location: "Dubai",
  country: "United Arab Emirates",
},

{
  title: "Maldives Tropical Getaway",
  description:
    "Relax in luxurious overwater villas, explore crystal-clear lagoons, enjoy snorkeling adventures, and experience breathtaking sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1574226780565-388f10f8121e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 8500,
  location: "Malé",
  country: "Maldives",
},

{
  title: "Interlaken Alpine Adventure",
  description:
    "Surrounded by majestic Swiss Alps, Interlaken offers scenic train rides, adventure sports, pristine lakes, and unforgettable mountain views.",
  image: {
    filename: "listingimage",
       url:  "https://images.unsplash.com/photo-1655056956524-f3765f2fbf01?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 7200,
  location: "Interlaken",
  country: "Switzerland",
},

 {
  title: "Zurich Lakeside Escape",
  description:
    "Experience the charm of Zurich with its picturesque lakeside views, luxury shopping streets, world-class museums, and breathtaking Swiss landscapes.",
  image: {
    filename: "listingimage",
      url:   "https://images.unsplash.com/photo-1664459937096-d395cd77f8b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6800,
  location: "Zurich",
  country: "Switzerland",
},

{
  title: "Paris Romantic Getaway",
  description:
    "Discover the magic of Paris by visiting the Eiffel Tower, Louvre Museum, Seine River, and charming cafés in the City of Light.",
  image: { 
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
  price: 7000,
  location: "Paris",
  country: "France",
},

{
  title: "French Riviera Retreat",
  description:
    "Enjoy the sunny beaches, luxury resorts, colorful streets, and Mediterranean charm of Nice on the beautiful French Riviera.",
  image:  {
    filename: "listingimage",
    url:  "https://images.unsplash.com/photo-1554149082-75d460afced3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6500,
  location: "Nice",
  country: "France",
},

{
  title: "Rome Historical Discovery",
  description:
    "Walk through ancient history by exploring the Colosseum, Roman Forum, Vatican City, and authentic Italian cuisine in Rome.",
  image: {
    filename: "listingimage",
     url:   "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
  price: 6700,
  location: "Rome",
  country: "Italy",
},

{
  title: "Venice Canal Experience",
  description:
    "Cruise through Venice's famous canals, admire historic architecture, visit St. Mark's Square, and enjoy unforgettable gondola rides.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6900,
  location: "Venice",
  country: "Italy",
},

{
  title: "London Royal Adventure",
  description:
    "Visit Buckingham Palace, Big Ben, Tower Bridge, the London Eye, and experience the vibrant culture of England's capital city.",
  image: {
    filename: "listingimage",
       url:   "https://plus.unsplash.com/premium_photo-1682799116921-de130f76c1d0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 7200,
  location: "London",
  country: "United Kingdom",
},

{
  title: "Sydney Harbour Explorer",
  description:
    "Explore Sydney's iconic Opera House, Harbour Bridge, Bondi Beach, and enjoy Australia's vibrant coastal lifestyle.",
  image: {
    filename: "listingimage",
     url:     "https://plus.unsplash.com/premium_photo-1697730247961-9066e1398257?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 7400,
  location: "Sydney",
  country: "Australia",
},

{
  title: "Melbourne City Discovery",
  description:
    "Experience Melbourne's artistic streets, world-class coffee culture, beautiful parks, and exciting sporting events throughout the city.",
  image: {
    filename: "listingimage",
      url:  "https://images.unsplash.com/photo-1612415491873-144fd5e03169?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6900,
  location: "Melbourne",
  country: "Australia",
},

{
  title: "Queenstown Adventure Escape",
  description:
    "Experience thrilling outdoor adventures, scenic mountains, crystal-clear lakes, and unforgettable landscapes in New Zealand's adventure capital.",
  image: {
    filename:"listingimage",
      url:    "https://plus.unsplash.com/premium_photo-1661962302792-4b05d3e08513?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 7600,
  location: "Queenstown",
  country: "New Zealand",
},

{
  title: "Toronto Urban Experience",
  description:
    "Visit the iconic CN Tower, vibrant waterfront, diverse neighborhoods, museums, and multicultural attractions in Canada's largest city.",
  image: {
    filename: "listingimage",
     url:   "https://plus.unsplash.com/premium_photo-1697730080024-1ba8d9f8ea53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6100,
  location: "Toronto",
  country: "Canada",
},

{
  title: "Santorini Sunset Escape",
  description:
    "Experience the beauty of Santorini with its whitewashed houses, crystal-clear waters, and unforgettable sunset views overlooking the Aegean Sea.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 5200,
  location: "Santorini",
  country: "Greece",
},

{
  title: "Istanbul Cultural Escape",
  description:
    "Discover the rich history of Istanbul by visiting the Hagia Sophia, Blue Mosque, Grand Bazaar, and enjoying a scenic Bosphorus cruise.",
  image: {
    filename: "listingimage",
   url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 4600,
  location: "Istanbul",
  country: "Turkey",
},

{
  title: "Vienna Imperial Experience",
  description:
    "Explore Vienna's magnificent palaces, classical music heritage, charming cafés, and elegant architecture in Austria's capital.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1586018216369-dcc16c09416b?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     },
  price: 6400,
  location: "Vienna",
  country: "Austria",
},

{
  title: "Prague Fairytale Journey",
  description:
    "Walk through Prague's medieval streets, admire Prague Castle, Charles Bridge, and experience the city's magical atmosphere.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1637013919535-c0e49e46a26f?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 5500,
  location: "Prague",
  country: "Czech Republic",
},

{
  title: "Amsterdam Canal Adventure",
  description:
    "Cruise through Amsterdam's famous canals, explore museums, colorful neighborhoods, and enjoy the city's vibrant lifestyle.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6700,
  location: "Amsterdam",
  country: "Netherlands",
},

{
  title: "Lisbon Coastal Discovery",
  description:
    "Experience Lisbon's historic trams, stunning viewpoints, delicious seafood, and beautiful Atlantic coastline.",
  image: {
    filename: "listingimage",
      url:  "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 5900,
  location: "Lisbon",
  country: "Portugal",
},

{
  title: "Reykjavik Northern Lights Tour",
  description:
    "Witness the Northern Lights, relax in geothermal spas, and explore Iceland's breathtaking waterfalls and volcanic landscapes.",
  image: {
    filename: "listingimage",
        url:  "https://images.unsplash.com/photo-1639588458309-76ee6aaafaaf?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 8900,
  location: "Reykjavik",
  country: "Iceland",
},

{
  title: "Oslo Fjord Escape",
  description:
    "Enjoy Norway's spectacular fjords, modern museums, scenic cruises, and charming Scandinavian culture in Oslo.",
  image: {
    filename: "listingimage",
        url:  "https://images.unsplash.com/photo-1591082774583-88ac4b70c075?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 7300,
  location: "Oslo",
  country: "Norway",
},

{
  title: "Stockholm Island Explorer",
  description:
    "Discover Stockholm's historic Gamla Stan, royal palaces, waterfront cafés, and beautiful archipelago scenery.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1730653784025-2266f3baa0f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6900,
  location: "Stockholm",
  country: "Sweden",
},

{
  title: "Copenhagen City Break",
  description:
    "Explore Copenhagen's colorful Nyhavn Harbor, Tivoli Gardens, cycling culture, and modern Scandinavian design.",
  image: {
    filename: "listingimage",
       url:   "https://images.unsplash.com/photo-1577346895253-445f05a6670d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6800,
  location: "Copenhagen",
  country: "Denmark",
},

{
  title: "Brussels European Getaway",
  description:
    "Visit the Grand Place, Atomium, Belgian chocolate shops, and enjoy the unique blend of history and modern Europe.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1687735089553-10e086248f3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6100,
  location: "Brussels",
  country: "Belgium",
},

{
  title: "Dublin Irish Adventure",
  description:
    "Experience Dublin's lively pubs, historic castles, beautiful parks, and warm Irish hospitality.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1634499282463-274002e296a9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
  price: 6200,
  location: "Dublin",
  country: "Ireland",
},

{
  title: "Budapest River Escape",
  description:
    "Enjoy Budapest's thermal baths, Danube River cruises, historic castles, and vibrant nightlife.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1507622560124-621e26755fb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 5600,
  location: "Budapest",
  country: "Hungary",
},

{
  title: "Warsaw Heritage Tour",
  description:
    "Discover Warsaw's restored Old Town, royal palaces, museums, and modern city skyline.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1607078486875-a697a8a38e87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
  price: 5200,
  location: "Warsaw",
  country: "Poland",
},

{
  title: "Doha Desert Luxury",
  description:
    "Explore Doha's modern skyline, traditional souqs, luxury shopping, and unforgettable desert adventures.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1647252262017-582a7dbb73d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 6700,
  location: "Doha",
  country: "Qatar",
},

{
  title: "Muscat Coastal Escape",
  description:
    "Visit Muscat's stunning mosques, mountain landscapes, peaceful beaches, and traditional Arabian markets.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1596445145149-f0906e6b3dd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: 5400,
  },
  location: "Muscat",
  country: "Oman",
},

{
  title: "Cape Town Scenic Adventure",
  description:
    "Experience Table Mountain, beautiful beaches, wildlife, and world-famous vineyards in Cape Town.",
  image: {
    filename: "listingimage",
       url:   "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
  price: 6100,
  location: "Cape Town",
  country: "South Africa",
},

{
  title: "Marrakech Desert Discovery",
  description:
    "Explore colorful markets, magnificent palaces, desert landscapes, and traditional Moroccan culture.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=1224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 4900,
  location: "Marrakech",
  country: "Morocco",
},

{
  title: "Lima Coastal Experience",
  description:
    "Enjoy Peru's vibrant capital with its Pacific coastline, delicious cuisine, historic landmarks, and lively neighborhoods.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 5700,
  location: "Lima",
  country: "Peru",
},

{
  title: "Santiago Mountain Escape",
  description:
    "Explore Santiago's modern skyline, nearby Andes Mountains, wineries, and vibrant cultural attractions.",
  image: {
    filename: "listingimage",
        url:   "https://images.unsplash.com/photo-1593985437133-03d5e1435c03?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  price: 5800,
  location: "Santiago",
  country: "Chile",
},

{
  title: "Rio de Janeiro Beach Adventure",
  description:
    "Relax on Copacabana Beach, visit Christ the Redeemer, Sugarloaf Mountain, and experience Brazil's lively culture.",
  image: {
    filename: "listingimage",
      url:    "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1226&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
  price: 6500,
  location: "Rio de Janeiro",
  country: "Brazil",
},

];

module.exports = { data: sampleListings };