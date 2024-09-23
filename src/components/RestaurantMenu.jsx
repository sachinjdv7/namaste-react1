import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // console.log(resInfo.cards[2].card.card.info.name);

  const { resId } = useParams();

  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4087934&lng=76.5603828&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
