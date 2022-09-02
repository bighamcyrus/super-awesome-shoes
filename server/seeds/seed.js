const db = require('../config/connection');
const Product = require('../models/product');



db.once('open', async () => {
  try {
    
    await Product.deleteMany({});
    
    await Product.insertMany([
        
            {
            category: 'Yeezy',
            image: '/images/YeezyBlackR.png',
            title: "Adidas Yeezy Boost 350 V2",
            price: 330
             },
          {
            category: 'Yeezy',
            image: "/images/YeezySlidesR.png",
            title: "Adidas Yeezy Slides",
            price: 124
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyFoamR.png",
            title: "Adidas Yeezy Foam Runner",
            price: 227.00
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyWaveR.png",
            title: "Adidas Yezzy Boost 700 Wave",
            price: 410.00
          },
          {
            category: 'Yeezy',
            image: "/images/YeezyZebraR.png",
            title: "Adidas Yeezy Boost 350 V2 Zebra",
            price: 348.00
          },
          {
            category: 'Jordans',
            image: '/images/RedOctoberR.png',
            title: 'Nike Air Yeezy 2 SP Red October',
            price: 23250.00
          },
          
          {
            category: 'Jordans',
            image: '/images/JordanRetroR.png',
            title: 'Jordan 1 Retro High OG',
            price: 186.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan3R.png',
            title: 'Jordan 3 Retro',
            price: 263.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan11R.png',
            title: 'Jordan 11 Retro',
            price: 266.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan4R.png',
            title: 'Jordan 4 Retro Red Thunder (PS)',
            price: 110.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan11PlayoffsR.png',
            title: 'Jordan 11 Retro',
            price: 335.00
          },
          {
            category: 'Jordans',
            image: '/images/Jordan6TravisScottR.png',
            title: 'Jordan 6 Retro - Travis Scott British Khaki',
            price: 388.00
          },
          
          {
            category: 'Airforce',
            image: '/images/AirForceWhiteR.png',
            title: 'Nike Air Force 1 Low 07 White',
            price: 121.00,
          },
          {
            category: 'Airforce',
            image: '/images/AirForceBlackR.png',
            title: 'Nike Air Force 1 Low 07 Black',
            price: 115.00
          },
          {
            category: 'Airforce',
            image: '/images/AFMidR.png',
            title: 'Nike Air Force 1 Mid',
            price: 110.00
          },
          {
            category: 'Airforce',
            image: '/images/AFMidNHR.png',
            title: 'Nike Air Force 1 Mid NH',
            price: 134.00
          },
          {
            category: 'Airforce',
            image: '/images/AFLowShadowR.png',
            title: 'Nike Air Force 1 Low Shadow',
            price: 121.00
          },
          {
            category: 'Airforce',
            image: '/images/AFHighR.png',
            title: 'Nike Air Force 1 High',
            price: 177.00
          },
          
          {
            category: 'Designer',
            image: '/images/BalTrackR.png',
            title: 'Balenciaga Track',
            price: 782.00
          },
          {
            category: 'Designer',
            image: '/images/GucciR.png',
            title: 'Gucci Rhyton - Vintage Logo',
            price: 675.00
          },
          {
            category: 'Designer',
            image: '/images/BalSpeedR.png',
            title: 'Balenciaga Speed Graffiti Trainers',
            price: 600.00
          },
          {
            category: 'Designer',
            image: '/images/DiorR.png',
            title: 'Dior B22',
            price: 1262.00
          },
          {
            category: 'Designer',
            image: '/images/LVR.png',
            title: 'Louis Vuitton Trainer Sneaker Boot',
            price: 2522.00
          },
          {
            category: 'Designer',
            image: '/images/OffWhiteR.png',
            title: 'OFF-WHITE Vulc Low',
            price: 256.00
          },
          {
            category: 'Designer',
            image: '/images/McQueenR.png',
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