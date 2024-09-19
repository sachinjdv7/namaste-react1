import resObj from '../utils/mockData';
import { RestaurantCards } from '../components';
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resObj.map((res) => (
          <RestaurantCards key={res.info.id} resList={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
