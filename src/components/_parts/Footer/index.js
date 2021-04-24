import style from './Footer.module.scss';
import logo from "../../_assets/logo.svg";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className={style["page_footer"]}>
      <div className={style["page_footer_content"]}>
        <Link to='/'>
          <img className={style["page_footer_logo"]} src={logo} height="100%" alt='logo'/>
        </Link>
        <div className={style["page_footer_content_wrapper"]}>
          <div className={style["page_footer_content_wrapper_terms"]}><a href="javascript:void(0)">умови користування сайтом</a></div>
          <div className={style["page_footer_content_wrapper_rules"]}><a href="javascript:void(0)">правила публікацій та розсилок</a></div>
          <div className={style["page_footer_content_wrapper_policy"]}><a href="javascript:void(0)">політика конфіденційності</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
