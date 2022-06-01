import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteImage, fetchCats } from "../../store/features/catsSlice";
import styles from "./AllCats.module.css";
import favoriteImg from "../../assets/favorite.png";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cats.cats);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  console.log(currentPage);
  console.log(cats);

  const fetchMoreData = () => {
    dispatch(fetchCats(currentPage + 1));
  };

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  const handleFavorite = (id, url) => {
    dispatch(addFavoriteImage({ id, url }));
  };

  return (
    <section className={styles.main}>
      <InfiniteScroll
        dataLength={cats.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={styles.main__body}>
          {cats.map((item) => {
            return (
              <div className={styles.main__card}>
                <img src={item.url} key={item.id} alt={item.id} />
                <div className={styles.card__favorite}>
                  <img
                    onClick={(e) => handleFavorite(item.id, item.url)}
                    src={favoriteImg}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default Main;
