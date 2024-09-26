import { RestaurantCards } from '../components';
import useBody from '../utils/useBody';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
4;
const Body = () => {
  const {
    restaurantList,
    setInputValue,
    setFilteredList,
    inputValue,
    filteredList,
  } = useBody();
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
          <Link key={res.info.id} to={'/restraurant/' + res.info.id}>
            <RestaurantCards resList={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
