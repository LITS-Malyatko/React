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
          <div className={style["page_footer_content_wrapper_terms"]}><Link to='/'>умови користування сайтом</Link></div>
          <div className={style["page_footer_content_wrapper_rules"]}><Link to='/'>правила публікацій та розсилок</Link></div>
          <div className={style["page_footer_content_wrapper_policy"]}><Link to='/'>політика конфіденційності</Link></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
