import resObj from '../utils/mockData';
import { useState } from 'react';
import { RestaurantCards } from '../components';
4;
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCards key={res.info.id} resList={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
