import React, { useEffect, useState } from "react";
import HomeCard from "../../components/modules/HomeCard";
import db from "../../data/db.json";

function Home() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const newHome = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHome);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price":
        setHomes((home) => [...home].sort((a, b) => a.price - b.price));
        break;
      case "roomCount":
        setHomes((home) => [...home].sort((a, b) => a.roomCount - b.roomCount));
        break;
      case "address":
        setHomes((home) => [...home].sort((a, b) => a.address - b.address));
        break;
      case "meterage":
        setHomes((home) => [...home].sort((a, b) => a.meterage - b.meterage));
        break;
      default:
        setHomes([...db.homes]);
    }
  }, [sort]);

  const paginateHandler = (e, page) => {
    e.preventDefault();
    const endIndex = page * 3;
    const startIndex = endIndex - 3;
    setHomes(db.homes.slice(startIndex, endIndex));
  };

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select name="" id="" onChange={(e) => setSort(e.target.value)}>
            <option value="-1" selected>
              انتخاب کنید
            </option>
            <option value="price">بر اساس قیمت</option>
            <option value="roomCount">بر اساس تعداد اتاق</option>
            <option value="address">بر اساس ادرس</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div className="homes">
        {homes.slice(0, 3).map((home) => (
          <HomeCard key={home.id} {...home} />
        ))}
      </div>
      <ul className="pagination__list">
        {Array.from({ length: Math.ceil(db.homes.length) / 3 }).map(
          (item, index) => (
            <li
              key={index + 1}
              className="pagination__item"
              onClick={(e) => paginateHandler(e, index + 1)}
            >
              <a href="#" className="">
                {index + 1}
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default Home;
