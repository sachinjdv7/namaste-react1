import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // console.log(resInfo.cards[2].card.card.info.name);

  const { resId } = useParams();

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
  return { resInfo };
};

export default useRestaurantMenu;
