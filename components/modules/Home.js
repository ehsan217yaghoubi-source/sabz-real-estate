import Link from "next/link";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function Home({ id, title, img, roomCount, meterage, price }) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <svg className="card__like">
        <LocationOnIcon />
      </svg>
      <div className="card__details">
        <svg className="card__icon">
          <LocationOnIcon />
        </svg>
        <p className="card__text">مالدیو</p>

        <svg className="card__icon">
          {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
          <PersonIcon />
        </svg>
        <p className="card__text">{roomCount} اتاق</p>

        <svg className="card__icon">
          <OpenInFullIcon />
        </svg>
        <p className="card__text">{meterage} متر مربع</p>

        <svg className="card__icon">
          <VpnKeyIcon />
        </svg>
        <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
      </div>

      <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
        مشاهده ملک
      </Link>
    </div>
  );
}

export default Home;
