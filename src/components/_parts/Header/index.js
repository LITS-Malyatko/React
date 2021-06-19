import style from './Header.module.scss';
import Clock from "../Clock";
import logo from "../../_assets/main_logo.svg";
import logoCustomer from "../../_assets/userLogo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
      <div className={style["page_header"]}>
        <div className={style["page_header_content"]}>
          <Link to="/">
            <img className = {style["logo header_logo"]} src= {logo} alt="logo" />
          </Link>
          <span className={style["doc_time"]}><Clock/></span>
          <div className={style["page_header_content_end"]}>
            <p>Вітаємо Оксана Дмитрівна</p>
            <img className ={style[ "page_header_content_end_parents_logo"]} src= {logoCustomer}  alt='logo'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
