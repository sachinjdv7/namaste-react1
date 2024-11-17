import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resInfo, categories } = useRestaurantMenu();
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        Rating: {resInfo?.cards[2]?.card?.card?.info?.avgRating}
      </p>
      <p className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(',')} -{' '}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      {categories.map((categorie, index) => (
        <RestaurantCategory
          key={categorie.card.card.itemsCard}
          data={categorie.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
