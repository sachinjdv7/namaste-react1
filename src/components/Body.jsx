import { RestaurantCards, withOpenStatus } from '../components';
import useBody from '../utils/useBody';
import useOnlineStatus from '../utils/useOnlineStatus';
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
  const { onlineStatus } = useOnlineStatus();

  const ResWithOpenStatus = withOpenStatus(RestaurantCards);

  if (onlineStatus === false)
    return <h1>Looks like your internet connection is not online👾</h1>;
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="px-4 py-2 ml-1 mt-2  bg-green-400 border rounded"
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
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg ml-10"
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
      </div>
      <div className="flex flex-wrap ">
        {filteredList.map((res) => (
          <Link key={res.info.id} to={'/restraurant/' + res.info.id}>
            {res.info.isOpen ? (
              <ResWithOpenStatus resList={res} />
            ) : (
              <RestaurantCards resList={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
