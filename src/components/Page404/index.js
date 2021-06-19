import React from "react";
import style from './Page404.module.scss';
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className={style["page404"]}>
      <div className={style["page404__header"]}>404</div>
      <div className={style["page404__description"]}>Ой, щось пішло не так</div>
      <Link to="/" className={style["page404__to-home-link"]}>на домашню сторінку</Link>
    </div>
  );
}

export default Page404;
