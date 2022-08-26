import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function TitlebarBelowImageList() {
  return (
//     <ImageList sx={{ width: 630, height: 500, border: '3px solid black', margin:'100px', padding:'150px' }} cols={6} gap={50} rowHeight={164}>
//       {itemData.map((item, index) => (
//         <ImageListItem key={index}>
//           <img
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={<span>Price: {item.price}</span>}
//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
<ImageList sx={{ width: 630, height: 500 }}>
      <ImageListItem key="Subheader" cols={6} gap={20} rowHeight={164}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


const itemData = [
  // Yeezy
  {
    img: '/images/YeezyBlack.png',
    title: 'Adidas Yeezy Boost 350 V2',
    price: '$330.00',
  },
  {
    img: '/images/YeezySlides.png',
    title: 'Adidas Yeezy Slides',
    price: '$124.00',
  },
  {
    img: '/images/YeezyFoam.png',
    title: 'Adidas Yeezy Foam Runner',
    price: '$227.00',
  },
  {
    img: '/images/YeezyWave.png',
    title: 'Adidas Yezzy Boost 700 Wave',
    price: '$410.00',
  },
  {
    img: '/images/YeezyZebra.png',
    title: 'Adidas Yeezy Boost 350 V2 Zebra',
    price: '$348.00',
  },
  {
    img: '/images/RedOctober.png',
    title: 'Nike Air Yeezy 2 SP Red October',
    price: '$23,250.00',
  },
  // Jordans
  {
    img: '/images/JordanRetro.png',
    title: 'Jordan 1 Retro High OG',
    price: '$186.00',
  },
  {
    img: '/images/Jordan3.png',
    title: 'Jordan 3 Retro',
    subtitle: 'Dark Iris',
    price: '$263.00',
  },
  {
    img: '/images/Jordan11.png',
    title: 'Jordan 11 Retro',
    subtitle: 'Jubilee 25th Anniversary',
    price: '$266.00',
  },
  {
    img: '/images/Jordan4.png',
    title: 'Jordan 4 Retro',
    subtitle: 'Red Thunder (PS)',
    price: '$110.00',
  },
  {
    img: '/images/Jordan11Playoffs.png',
    title: 'Jordan 11 Retro',
    subtitle: 'Playoffs Bred (2019)',
    price: '$335.00',
  },
  {
    img: '/images/Jordan6TravisScott.png',
    title: 'Jordan 6 Retro',
    subtitle: 'Travis Scott British Khaki',
    price: '$388.00',
  },
  // Air Force
  {
    img: '/images/AirForceWhite.png',
    title: 'Nike Air Force 1 Low 07 White',
    price: '$121.00',
  },
  {
    img: '/images/AirForceBlack.png',
    title: 'Nike Air Force 1 Low 07 Black',
    price: '$115.00',
  },
  {
    img: '/images/AFMid.png',
    title: 'Nike Air Force 1 Mid',
    price: '$110.00',
  },
  {
    img: '/images/AFMidNH.png',
    title: 'Nike Air Force 1 Mid NH',
    price: '$134.00',
  },
  {
    img: '/images/AFLowShadow.png',
    title: 'Nike Air Force 1 Low Shadow',
    price: '$121.00',
  },
  {
    img: '/images/AFHigh.png',
    title: 'Nike Air Force 1 High',
    price: '$177.00',
  },
];