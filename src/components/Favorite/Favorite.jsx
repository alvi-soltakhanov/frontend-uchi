import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../AllCats/AllCats.module.css";
import favoriteImg from "../../assets/favorite.png";
import { deleteFavoriteImage } from "../../store/features/catsSlice";

const Page = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.cats.favorite);

  const handleFavorite = (id) => {
    dispatch(deleteFavoriteImage(id));
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__body}>
        {favorite.map((item) => {
          return (
            <div className={styles.main__card}>
              <img src={item.url} key={item.id} alt={item.id} />
              <div className={styles.card__favorite}>
                <img
                  onClick={() => handleFavorite(item.id)}
                  src={favoriteImg}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
