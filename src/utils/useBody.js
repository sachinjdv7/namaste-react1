import { useEffect, useState } from 'react';

const useBody = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchResData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4087934&lng=76.5603828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchResData();
  }, []);

  return {
    restaurantList,
    setInputValue,
    setFilteredList,
    inputValue,
    filteredList,
  };
};

export default useBody;
