import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resInfo } = useRestaurantMenu();

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p>Rating: {resInfo?.cards[2]?.card?.card?.info?.avgRating}</p>
      <p>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(',')} -{' '}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Idali</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
