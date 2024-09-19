import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6yS0DVo3PQwxRVWHaUJ9ejn6Dkgu0zcuA&usqp=CAU"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: '#f0f0f0',
};

const RestroCard = ({ resList }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resList.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt="biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: '234875',
      name: 'Adil Hotel',
      cloudinaryImageId: 'gp1ityra6utvzqn6ghnv',
      locality: 'Rautha Wada',
      areaName: 'Chhindwara Locality',
      costForTwo: '₹150 for two',
      cuisines: ['North Indian', 'Biryani', 'Tandoor'],
      avgRating: 4.3,
      parentId: '27123',
      avgRatingString: '4.3',
      totalRatingsString: '997',
      sla: {
        deliveryTime: 59,
        lastMileTravel: 10.9,
        serviceability: 'SERVICEABLE',
        slaString: '55-60 mins',
        lastMileTravelString: '10.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹349',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '151656',
      name: 'Dev International',
      cloudinaryImageId: 'enj3srsnhbltbom2ovvh',
      locality: 'khajri road',
      areaName: 'Mohan Nagar',
      costForTwo: '₹100 for two',
      cuisines: ['North Indian', 'Chinese', 'Fast Food', 'Beverages'],
      avgRating: 4.3,
      parentId: '71556',
      avgRatingString: '4.3',
      totalRatingsString: '349',
      sla: {
        deliveryTime: 63,
        lastMileTravel: 11.7,
        serviceability: 'SERVICEABLE',
        slaString: '60-65 mins',
        lastMileTravelString: '11.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹100 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '151649',
      name: 'Hotel Sai Nath & Sai Restaurant',
      cloudinaryImageId: 'vkhcohhmqfczycw9vsar',
      locality: 'railway station',
      areaName: 'Chhindwara Locality',
      costForTwo: '₹200 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Chinese',
        'Beverages',
        'Fast Food',
        'Desserts',
      ],
      avgRating: 4.2,
      veg: true,
      parentId: '101802',
      avgRatingString: '4.2',
      totalRatingsString: '863',
      sla: {
        deliveryTime: 58,
        lastMileTravel: 11.3,
        serviceability: 'SERVICEABLE',
        slaString: '55-60 mins',
        lastMileTravelString: '11.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'FREE ITEM',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '658210',
      name: 'The Fusion Lounge',
      cloudinaryImageId: 'fa4944f0cfdcbca2bec1f3ab8e3db3f7',
      locality: 'Triloki nagar',
      areaName: 'Railway Station',
      costForTwo: '₹300 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Chinese',
        'Beverages',
        'Fast Food',
        'Desserts',
      ],
      avgRating: 4.1,
      parentId: '395453',
      avgRatingString: '4.1',
      totalRatingsString: '260',
      sla: {
        deliveryTime: 62,
        lastMileTravel: 9.9,
        serviceability: 'SERVICEABLE',
        slaString: '60-65 mins',
        lastMileTravelString: '9.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'UPTO ₹40',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '151518',
      name: 'Bakery World',
      cloudinaryImageId: 'mt2aggiscfl3yviatwng',
      locality: 'Parasia Road',
      areaName: 'Parasia Road',
      costForTwo: '₹250 for two',
      cuisines: ['Bakery', 'Ice Cream', 'Snacks', 'Beverages'],
      avgRating: 4.3,
      veg: true,
      parentId: '40363',
      avgRatingString: '4.3',
      totalRatingsString: '235',
      sla: {
        deliveryTime: 54,
        lastMileTravel: 12.3,
        serviceability: 'SERVICEABLE',
        slaString: '50-55 mins',
        lastMileTravelString: '12.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '257428',
      name: 'Raajbagh Restaurant ',
      cloudinaryImageId: 'xvyrclhxftulsglktaek',
      locality: 'Seoni Road',
      areaName: 'Chhindwara Locality',
      costForTwo: '₹150 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Indian',
        'Chinese',
        'Fast Food',
        'Beverages',
      ],
      avgRating: 3.7,
      veg: true,
      parentId: '164019',
      avgRatingString: '3.7',
      totalRatingsString: '957',
      sla: {
        deliveryTime: 76,
        lastMileTravel: 10.5,
        serviceability: 'SERVICEABLE',
        slaString: '75-80 mins',
        lastMileTravelString: '10.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹110',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/raajbagh-restaurant-seoni-road-chhindwara-locality-rest257428',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '531441',
      name: 'Gourmet Ice Cream Cakes by Baskin Robbins',
      cloudinaryImageId: 'd679c532ca07a6f3fd6d89d603861412',
      locality: 'Satkar Square',
      areaName: 'Mohan Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Ice Cream Cakes', 'Desserts', 'Ice Cream', 'Bakery'],
      avgRating: 5,
      veg: true,
      parentId: '21932',
      avgRatingString: '5.0',
      totalRatingsString: '3',
      sla: {
        deliveryTime: 67,
        lastMileTravel: 13.4,
        serviceability: 'SERVICEABLE',
        slaString: '65-70 mins',
        lastMileTravelString: '13.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-rest531441',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '150591',
      name: 'Satkar Restaurant',
      cloudinaryImageId: 'rvxp5xbniat84r6efku2',
      locality: 'Sinchai Colony',
      areaName: 'Satkar Chowk',
      costForTwo: '₹250 for two',
      cuisines: [
        'North Indian',
        'South Indian',
        'Indian',
        'Salads',
        'Desserts',
      ],
      avgRating: 4.4,
      veg: true,
      parentId: '21553',
      avgRatingString: '4.4',
      totalRatingsString: '2.1K+',
      sla: {
        deliveryTime: 60,
        lastMileTravel: 11.1,
        serviceability: 'SERVICEABLE',
        slaString: '55-60 mins',
        lastMileTravelString: '11.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '385824',
      name: 'The Belgian Waffle Co.',
      cloudinaryImageId: '5116a385bac0548e06c33c08350fbf11',
      locality: 'Sinchai Colony',
      areaName: 'Mohan Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Waffle', 'Desserts', 'Ice Cream', 'Beverages'],
      avgRating: 4.6,
      veg: true,
      parentId: '2233',
      avgRatingString: '4.6',
      totalRatingsString: '277',
      sla: {
        deliveryTime: 62,
        lastMileTravel: 11.2,
        serviceability: 'SERVICEABLE',
        slaString: '60-65 mins',
        lastMileTravelString: '11.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '150597',
      name: 'Scoops Fast Food And Ice Cream',
      cloudinaryImageId: 'fm3rs3g6z7ibfhesmxnu',
      locality: 'Irrigation Colony',
      areaName: 'Khajri Road',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Ice Cream', 'Snacks', 'Beverages'],
      avgRating: 4.1,
      veg: true,
      parentId: '179482',
      avgRatingString: '4.1',
      totalRatingsString: '382',
      sla: {
        deliveryTime: 67,
        lastMileTravel: 11.4,
        serviceability: 'SERVICEABLE',
        slaString: '65-70 mins',
        lastMileTravelString: '11.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-rest150597',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '531439',
      name: 'Baskin Robbins - Ice Cream Desserts',
      cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
      locality: 'satkar square Prasia Road',
      areaName: 'Chhindwara',
      costForTwo: '₹250 for two',
      cuisines: ['Desserts', 'Ice Cream'],
      avgRating: 4.9,
      veg: true,
      parentId: '5588',
      avgRatingString: '4.9',
      totalRatingsString: '36',
      sla: {
        deliveryTime: 69,
        lastMileTravel: 13.4,
        serviceability: 'SERVICEABLE',
        slaString: '65-70 mins',
        lastMileTravelString: '13.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/baskin-robbins-ice-cream-desserts-satkar-square-prasia-road-chhindwara-rest531439',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '295131',
      name: 'Burger club point',
      cloudinaryImageId: 'fnh4ljobb3vayrvtbxxl',
      locality: 'Irrigation Colony',
      areaName: 'Chhindwara Locality',
      costForTwo: '₹200 for two',
      cuisines: ['Burgers', 'Pizzas', 'Fast Food', 'Beverages'],
      avgRating: 4.4,
      veg: true,
      parentId: '51258',
      avgRatingString: '4.4',
      totalRatingsString: '115',
      sla: {
        deliveryTime: 61,
        lastMileTravel: 11.3,
        serviceability: 'SERVICEABLE',
        slaString: '60-65 mins',
        lastMileTravelString: '11.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-09-19 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹349',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--',
        },
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/city/chhindwara/burger-club-point-irrigation-colony-chhindwara-locality-rest295131',
      type: 'WEBLINK',
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resObj.map((res) => (
          <RestroCard key={res.info.id} resList={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
