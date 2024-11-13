import { CDN_URL } from '../utils/constants';

const RestaurantCards = ({ resList }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resList.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withOpenStatus = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white m-2 p-3 rounded-lg">
          Open
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
