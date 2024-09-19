import { CDN_URL } from '../utils/constants';

const RestaurantCards = ({ resList }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resList.info;

  const styleCard = {
    backgroundColor: '#f0f0f0',
  };

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCards;
