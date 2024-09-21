import { useEffect, useState } from 'react';
import { RestaurantCards } from '../components';
import Shimmer from './Shimmer';
4;
const Body = () => {
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

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRes = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              setFilteredList(filteredRes);
              setInputValue('');
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <RestaurantCards key={res.info.id} resList={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
