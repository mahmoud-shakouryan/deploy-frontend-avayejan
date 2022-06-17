import { useState } from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileMenu from "../components/MobileMenu";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Topbar = () => {

    const [active,setActive] = useState(false);
    const showMenu = () => {
        setActive(!active)
    }



  return (
    <div className="z-10 fixed w-full h-10 flex justify-between items-center bg-dark text-theWhite">
      <div className="basis-1/10 text-sm font-semibold text-left pl-2 ">
        <Link to='/' className="font-firstFont font-thin hover:text-orange">آوای جان</Link>
      </div>
      <div className="fixed right-1/2 translate-x-1/2 flex items-center rounded">
        <ShoppingCartOutlinedIcon className="hover:text-orange cursor-pointer"/>
      </div>

      <nav className="h-full basis-9/10 flex items-center">
        
        <div className="md:hidden text-right pr-2 flex justify-end gap-4">
          <MenuOutlinedIcon
            onClick={showMenu}
            className="cursor-pointer scale-150 sm:hover:text-orange"
          />
        </div>

        <ul className="hidden h-full bg-dark md:flex md:items-center md:justify-around md:gap-5 font-secondFont text-xs pr-2">
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/contact" className=" h-full flex items-center justify-center">تماس با ما</Link>
          </li>
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/about" className=" h-full flex items-center justify-center">درباره‌ی ما</Link>
          </li>
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/signup" className=" h-full flex items-center justify-center">ثبت نام</Link>
          </li>
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/signin" className=" h-full flex items-center justify-center">ورود</Link>
          </li>
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/videos" className=" h-full flex items-center justify-center">ویدیوهای آموزشی</Link>
          </li>
          <li className="h-full hover:text-orange cursor-pointer">
            <Link to="/" className=" h-full flex items-center justify-center">صفحه اصلی</Link>
          </li>
        </ul>

        <MobileMenu showMenu={showMenu} active={active}/>
        
      </nav>
    </div>
  );
};

export default Topbar;
