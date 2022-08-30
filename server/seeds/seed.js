const db = require('../config/connection');
const Product = require('../models/product');



db.once('open', async () => {
  try {
    await Product.deleteMany({});
    
    await Product.insertMany([
        
            {
            category: 'Yeezy',
            image: '/images/YeezyBlack.png',
            title: "Adidas Yeezy Boost 350 V2",
            price: 330
             },
          {
            category: 'Yeezy',
            image: "/images/YeezySlides.png",
            title: "Adidas Yeezy Slides",
            price: 124
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyFoam.png",
            title: "Adidas Yeezy Foam Runner",
            price: 227.00
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyWave.png",
            title: "Adidas Yezzy Boost 700 Wave",
            price: 410.00
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyZebra.png",
            title: "Adidas Yeezy Boost 350 V2 Zebra",
            price: 348.00
          },
          {
            category: 'airforces',
            image: "RedOctober.png",
            title: "Nike Air Yeezy 2 SP Red October",
            price: 23
          },
          {
            category: 'airforces',
            image: "/images/JordanRetro.png",
            title: "Jordan 1 Retro High OG",
            price: 186.00
          },
          {
            category: 'Yeezy',
            image: '/images/YeezyBlack.png',
            title: 'Adidas Yeezy Boost 350 V2',
            price: 330.00
          },
          {
            category: 'Yeezy',
            image: '/images/YeezySlides.png',
            title: 'Adidas Yeezy Slides',
            price: 124.00
          },
          {
            category: 'Yeezy',
            image: '/images/YeezyFoam.png',
            title: 'Adidas Yeezy Foam Runner',
            price: 227.00
          },
          {
            category: 'Yeezy',
            image: '/images/YeezyWave.png',
            title: 'Adidas Yezzy Boost 700 Wave',
            price: 410.00
          },
          {
            category: 'Yeezy',
            image: '/images/YeezyZebra.png',
            title: 'Adidas Yeezy Boost 350 V2 Zebra',
            price: 348.00
          },
          {
            category: 'Jordans',
            image: '/images/RedOctober.png',
            title: 'Nike Air Yeezy 2 SP Red October',
            price: 23250.00
          },
          
          {
            category: 'Jordans',
            image: '/images/JordanRetro.png',
            title: 'Jordan 1 Retro High OG',
            price: 186.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan3.png',
            title: 'Jordan 3 Retro',
            price: 263.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan11.png',
            title: 'Jordan 11 Retro',
            price: 266.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan4.png',
            title: 'Jordan 4 Retro Red Thunder (PS)',
            price: 110.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan11Playoffs.png',
            title: 'Jordan 11 Retro',
            price: 335.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan6TravisScott.png',
            title: 'Jordan 6 Retro - Travis Scott British Khaki',
            price: 388.00
          },
          
          {
            category: 'Airforce',
            image: '/images/AirForceWhite.png',
            title: 'Nike Air Force 1 Low 07 White',
            price: 121.00,
          },
          {
            category: 'Airforce',
            image: '/images/AirForceBlack.png',
            title: 'Nike Air Force 1 Low 07 Black',
            price: 115.00
          },
          {
            category: 'Airforce',
            image: '/images/AFMid.png',
            title: 'Nike Air Force 1 Mid',
            price: 110.00
          },
          {
            category: 'Airforce',
            image: '/images/AFMidNH.png',
            title: 'Nike Air Force 1 Mid NH',
            price: 134.00
          },
          {
            category: 'Airforce',
            image: '/images/AFLowShadow.png',
            title: 'Nike Air Force 1 Low Shadow',
            price: 121.00
          },
          {
            category: 'Airforce',
            image: '/images/AFHigh.png',
            title: 'Nike Air Force 1 High',
            price: 177.00
          },
          
          {
            category: 'Designer',
            image: '/images/BalTrack.png',
            title: 'Balenciaga Track',
            price: 782.00
          },
          {
            category: 'Designer',
            image: '/images/Gucci.png',
            title: 'Gucci Rhyton - Vintage Logo',
            price: 675.00
          },
          {
            category: 'Designer',
            image: '/images/BalSpeed.png',
            title: 'Balenciaga Speed Graffiti Trainers',
            price: 600.00
          },
          {
            category: 'Designer',
            image: '/images/Dior.png',
            title: 'Dior B22',
            price: 1262.00
          },
          {
            category: 'Designer',
            image: '/images/LV.png',
            title: 'Louis Vuitton Trainer Sneaker Boot',
            price: 2522.00
          },
          {
            category: 'Designer',
            image: '/images/OffWhite.png',
            title: 'OFF-WHITE Vulc Low',
            price: 256.00
          },
          {
            category: 'Designer',
            image: '/images/McQueen.png',
            title: 'Alexander McQueen Tread Slick Lace Up Boot',
            price: 512.00
          },
        
    ])

   
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});