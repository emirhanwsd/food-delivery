import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"

import SearchIcon from "../icons/Search";
import BasketIcon from "../icons/Basket";

const Home = () => {

    return (
        <div className="h-full">
            <nav className="h-20 flex items-center justify-between px-36 border-b border-b-neutralGrayLightest">
                <div className="flex gap-x-12">
                    <img src={logo}/>

                    <div className="relative">
                        <input className="h-10 text-neutralBlack pl-3 pr-10 w-56 bg-neutralGrayLightest rounded-lg focus:outline-none focus:ring-0 focus:shadow transition-shadow placeholder:text-sm placeholder-neutralGray" placeholder="Search"/>

                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                            <SearchIcon/>
                        </span>
                    </div>
                </div>

                <div className="flex gap-x-5 items-center">
                    <div className="flex gap-x-7 pr-5 py-1 border-r border-r-neutralGrayLightest">
                        <a className="text-neutralBlack font-bold hover:text-neutralGrayDark transition-colors" href="#">Restaurants</a>
                        <a className="text-neutralBlack font-bold hover:text-neutralGrayDark transition-colors" href="#">Deals</a>
                    </div>

                    <div className="flex items-center">
                        <a className="text-neutralBlack font-bold hover:text-neutralGrayDark transition-colors mr-7" href="#">My orders</a>

                        <a href="#" className="h-12 w-12 relative flex items-center justify-center bg-primaryLight rounded-2xl hover:bg-neutralGrayLightest transition-colors mr-4">
                            <BasketIcon/>

                            <span className="absolute -inset-y-2 right-0 text-white h-5 w-5 flex items-center justify-center text-xs font-semibold bg-primary rounded-lg">4</span>
                        </a>

                        <a href="#" className="h-12 w-12 flex p-px items-center justify-center border-2 border-neutralGrayLightest rounded-2xl hover:opacity-90 transition-opacity">
                            <img src={avatar}/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Home;