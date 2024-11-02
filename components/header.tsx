import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';  
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';   
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';     
import Logo from "../src/app/public/Color=Black.png";

export default function Header() {
    return (
        <div className="header">
            <div className="header-line">
                <Image className="logo" src={Logo} alt="Logo" width={100} height={50} />
                
                <div className="search-box">
                    <SearchIcon className="search-icon" />
                    <input type="search" placeholder="Search" className="search-input" />
                </div>
                
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li><FavoriteBorderIcon className="icon" /></li>  
                    <li><ShoppingCartOutlinedIcon className="icon" /></li>     
                    <li><PersonOutlineOutlinedIcon className="icon" /></li>    
                </ul>
            </div>
        </div>
    );
}
