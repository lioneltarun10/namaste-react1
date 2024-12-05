import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *  - RestaurantCard
 *    - Img
 *    - Name of Restaurant,star rating , cuisine,delivery time ,etc
 * Footer
 * - CopyRight
 * - Contact
 * -Links
 * - Address
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
             <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
               <ul>
                   <li>Home</li>
                   <li>About Us</li>
                   <li>Contact Us</li>
                   <li>Cart</li>
               </ul>
            </div>
        </div>
    )
}

// const styleCard = 

const RestaurantCard = (props) => {
    
    const {resData} = props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla} = resData?.info
    const {deliveryTime} = sla

    return (
        <div className="res-card" style={{
            backgroundColor : "#f0f0f0"
        }}>
          <img
          className="res-logo" 
          alt="res-logo" 
          src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,h_550/" + cloudinaryImageId} />
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating}</h4>
           <h4>{costForTwo}</h4>
           <h4>{deliveryTime}</h4>

        </div>
    )
}

const resObj = [
    {
      "info": {
        "id": "489129",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Anand Nagar",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "61955",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.8K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/chinese-wok-anand-nagar-marathahalli-rest489129",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10866",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/a12922f7-3ef7-4df7-921b-ed6e343a234e_10866.jpg",
        "locality": "Munnekolalu Village",
        "areaName": "Marathahalli",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "28K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 1,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "1.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pizza-hut-munnekolalu-village-marathahalli-rest10866",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "108422",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/b8438402-e703-451d-912e-900b8f7e00fd_108422.jpg",
        "locality": "Munekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "5.4K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-munekollal-marathahalli-rest108422",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23688",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5468a4dd-8d44-45b1-8753-bd27ddebfc80_23688.jpg",
        "locality": "Whitefield",
        "areaName": "Brookefield",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "84K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-05 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "7.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-whitefield-brookefield-rest23688",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "707063",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/1fcbcc3c-6163-4e79-955d-32fe510c1eee_707063.JPG",
        "locality": "Ramagondanahalli",
        "areaName": "Varthur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.8K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-ramagondanahalli-varthur-rest707063",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "48220",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "fnphik68t2jswzlsejfx",
        "locality": "Bellandur Main Rd",
        "areaName": "Bellandur New",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "4700",
        "avgRatingString": "4.6",
        "totalRatingsString": "8.9K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 7.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-05 23:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-bellandur-main-rd-bellandur-new-rest48220",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "795395",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/420d4f9b-ee72-46dd-a01c-99d593a4ceff_795395.jpg",
        "locality": "AECS layout",
        "areaName": "Star Residency Apartment",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "11633",
        "avgRatingString": "4.2",
        "totalRatingsString": "967",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-aecs-layout-star-residency-apartment-rest795395",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "709164",
        "name": "Cheesecake & Co.",
        "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
        "locality": "ITPL Road",
        "areaName": "Marathahalli",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "387417",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-05 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-itpl-road-marathahalli-rest709164",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "390065",
        "name": "NH1 Bowls - Highway To North",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/5442c3da-0fcb-4cc2-87a3-539afb064e3d_390065.jpg",
        "locality": "Munekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Home Food"
        ],
        "avgRating": 4.6,
        "parentId": "22452",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.0K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-munekollal-marathahalli-rest390065",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "681447",
        "name": "LeanCrust Pizza- ThinCrust Experts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/a0a1c9b5-ff46-4a86-bf6b-e6a59ef5acfe_681447.jpg",
        "locality": "Munnekolalu",
        "areaName": "Marathahalli",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "11216",
        "avgRatingString": "4.4",
        "totalRatingsString": "418",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-munnekolalu-marathahalli-rest681447",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "750233",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750233.JPG",
        "locality": "Munnekolalu",
        "areaName": "Spice Garden Layout",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "444382",
        "avgRatingString": "4.4",
        "totalRatingsString": "513",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-munnekolalu-spice-garden-layout-rest750233",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "622038",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/5a4a17bf-c085-44d5-8923-64a5df052858_622038.JPG",
        "locality": "Spice Garden Layout",
        "areaName": "Chinnapanna Halli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "11329",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-spice-garden-layout-chinnapanna-halli-rest622038",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "643673",
        "name": "WeFit - Protein Bowls, Salads & Sandwiches",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/dd2672e1-314d-4e88-b5e2-f62fd3460f20_643673.JPG",
        "locality": "Silver Spring layout",
        "areaName": "Munnnekolala",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto",
          "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "355285",
        "avgRatingString": "4.4",
        "totalRatingsString": "276",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-silver-spring-layout-munnnekolala-rest643673",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "391013",
        "name": "ZAZA Mughal Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/55804cf3-d049-4aa8-a57b-5b3f2c5f79d4_391013.jpg",
        "locality": "Munekollal",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Awadhi"
        ],
        "avgRating": 4.3,
        "parentId": "22473",
        "avgRatingString": "4.3",
        "totalRatingsString": "527",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-25 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-munekollal-marathahalli-rest391013",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "21668",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/4517a020-944b-4dff-b069-7cf79de0085d_21668.JPG",
        "locality": "ITPL Main Road",
        "areaName": "NS Complex",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "33K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-itpl-main-road-ns-complex-rest21668",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "113317",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/14c159d4-5535-46b0-b601-8739aa7af99e_113317.JPG",
        "locality": "Brookefield",
        "areaName": "Bengaluru Urban",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.5,
        "parentId": "3818",
        "avgRatingString": "4.5",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/bakingo-brookefield-bengaluru-urban-rest113317",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "18772",
        "name": "California Burrito",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/05c0a215-79be-4b04-b543-18d25ba0fcee_18772.jpg",
        "locality": "Bellandur",
        "areaName": "Bellandur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Mexican",
          "American",
          "Salads",
          "Continental",
          "Keto",
          "Healthy Food",
          "Beverages",
          "Snacks",
          "Desserts",
          "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "1252",
        "avgRatingString": "4.6",
        "totalRatingsString": "13K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "1.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/california-burrito-bellandur-rest18772",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "789070",
        "name": "CakeZone Patisserie",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/23/e86ea164-95c6-4e15-a6a8-ddc893b572e6_789070.JPG",
        "locality": "AECS LAYOUT",
        "areaName": "BROOKFIELD",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Ice Cream",
          "Sweets",
          "Juices",
          "Bengali"
        ],
        "avgRating": 4.3,
        "parentId": "7003",
        "avgRatingString": "4.3",
        "totalRatingsString": "464",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cakezone-patisserie-aecs-layout-brookfield-rest789070",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10896",
        "name": "Taco Bell",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/488c80f0-f478-497e-b228-f998d41c3838_10896.JPG",
        "locality": "Brookfiled Mall",
        "areaName": "Brookefield",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Mexican",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "1557",
        "avgRatingString": "4.2",
        "totalRatingsString": "33K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-06 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/taco-bell-brookfiled-mall-brookefield-rest10896",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "362238",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/11/edc80d3c-12b3-4c65-adf2-3404de377a22_362238.JPG",
        "locality": "Tulasi Theater Road",
        "areaName": "Marathahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "2093",
        "avgRatingString": "4.7",
        "totalRatingsString": "3.1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-12-05 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2a9ef681-6447-4172-9ba3-1565f92a8f8e"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-tulasi-theater-road-marathahalli-rest362238",
        "type": "WEBLINK"
      }
    }
  ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               <RestaurantCard 
               resData = {resObj[0]}
               />
            { 
              
            resObj.map(restaurant => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))

            }
               
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
           <Header />
           <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
