/* eslint-disable no-unsafe-optional-chaining */
// 699597
import { useEffect, useState } from "react";
import { REST_DETAIL_URI } from "../utils/FoodAPI";
import { FoodImage } from "../utils/FoodImg";
import { useParams } from "react-router-dom";

export const ResturantDetail = () => {
  const [resDetail, setResDetail] = useState(null);
  const {resId}=useParams();
  console.log(resId);
  

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const response = await fetch(REST_DETAIL_URI+resId, {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
          "User-Agent": navigator.userAgent,
          "Accept-Encoding": "gzip, deflate, br",
        },
        cache: "no-store",
        mode: "cors",
        credentials: "omit",
      });
      const result = await response.json();
      console.log(result);
      setResDetail(result);
    } catch (error) {
      console.log("Error In Fetching Restaurant Detail ", error);
    }
  };
  if (!resDetail?.data?.cards?.[2]?.card?.card?.info) {
    return <div>Loading...</div>;
  }

  const {
    name,
    id,
    areaName,
    totalRatings,
    costForTwoMessage,
    cuisines,
    avgRating,
    cloudinaryImageId,
  } = resDetail.data.cards[2].card.card.info;
  const RecItems =
    resDetail?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  console.log("item Cards", RecItems);
  console.log(resDetail?.data?.cards[2]?.card?.card?.info?.name);

  return (
    <div className="rest_detail">
      <div className="res_detail_section">
        <div className="res_detail_list">
            <h1>{name}</h1>
          <li>⭐{avgRating}({totalRatings})       ▪️   {costForTwoMessage} </li>
          <li>{areaName}</li>
          <li>{cuisines}</li>
        </div>
        <div className="rest_logo">
          <img src={FoodImage + cloudinaryImageId}></img>
        </div>
      </div>
      {RecItems && RecItems.length > 0 ?(

          RecItems?.map((res,index) => (
              <div className="detail_cards" key={index}>
              <div className="card_section">
              <p>{res.card.info.name}</p>
              <p>{res.card.info.description|| <span style={{ visibility: 'hidden' }}>.</span>}</p>
            <p> Rs:
            {res.card.info.defaultPrice / 100 || res.card.info.price / 100}/-
            </p>
            </div>
            <div className="Logo">
            <img src={FoodImage + res.card.info.imageId}></img>
            <button>ADD</button>
            </div>
            </div>
        ))
    ) : (
        <p>No Recommended Items For This Restaurant</p>
    )}
    </div>
  );
};
