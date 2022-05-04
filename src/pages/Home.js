import {useState} from "react";

import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import dessert from "../assets/dessert.png"
import hamburger from "../assets/hamburger.png"

import SearchIcon from "../icons/Search";
import BasketIcon from "../icons/Basket";
import PizzaIcon from "../icons/Pizza";
import BurgerIcon from "../icons/Burger";
import BBQIcon from "../icons/BBQ";
import SushiIcon from "../icons/Sushi";
import VeganIcon from "../icons/Vegan";
import DessertIcon from "../icons/Dessert";

const categories = [
    {
        id: 0,
        title: "Pizza",
        icon: <PizzaIcon/>
    },
    {
        id: 1,
        title: "Burger",
        icon: <BurgerIcon/>
    },
    {
        id: 2,
        title: "BBQ",
        icon: <BBQIcon/>
    },
    {
        id: 3,
        title: "Sushi",
        icon: <SushiIcon/>
    },
    {
        id: 4,
        title: "Vegan",
        icon: <VeganIcon/>
    },
    {
        id: 5,
        title: "Dessert",
        icon: <DessertIcon/>
    }
]

const Home = () => {

    const [selectedCategories, setSelectedCategories] = useState([])

    const isSelectedCategory = id => {
        return selectedCategories.includes(id)
    }

    const addSelectedCategory = id => {
        setSelectedCategories([...selectedCategories, id])
    }

    const removeSelectedCategory = id => {
        setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== id))
    }

    return (
        <div className="h-full">
            <nav className="h-20 flex items-center justify-between px-64 border-b border-b-neutralGrayLightest">
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
                        <a className="text-neutralBlack font-semibold hover:text-neutralGrayDark transition-colors" href="#">Restaurants</a>
                        <a className="text-neutralBlack font-semibold hover:text-neutralGrayDark transition-colors" href="#">Deals</a>
                    </div>

                    <div className="flex items-center">
                        <a className="text-neutralBlack font-semibold hover:text-neutralGrayDark transition-colors mr-7" href="#">My orders</a>

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

            <div className="px-64">
                <header className="h-64 py-5">
                    <div className="h-full flex items-center gap-x-8">
                        <div className="h-full flex w-1/2 group overflow-hidden gap-x-4 pr-8 bg-primaryLight rounded-2xl cursor-pointer hover:shadow transition-shadow">
                            <img className="group-hover:scale-105 transition-transform" src={dessert}/>

                            <div className="flex flex-col pt-6 pb-4">
                                <h5 className="text-xl font-bold text-neutralBlack mb-3">All deserts</h5>

                                <h1 className="text-5xl font-extrabold text-primary uppercase">20% Off</h1>

                                <h6 className="text-neutralGray mt-auto">Deserty</h6>
                            </div>
                        </div>

                        <div className="h-full flex-1 group overflow-hidden flex gap-x-4 pr-8 bg-secondaryLight rounded-2xl cursor-pointer hover:shadow transition-shadow">
                            <img className="group-hover:scale-105 transition-transform" src={hamburger}/>

                            <div className="flex flex-col pt-6 pb-4">
                                <h5 className="text-xl font-bold text-neutralBlack mb-3">Big Burgers</h5>

                                <h1 className="text-5xl font-extrabold text-secondary uppercase">50% Off</h1>

                                <h6 className="text-neutralGray mt-auto">Fooddies</h6>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex items-center justify-between py-5">
                    {categories.map(category => (
                        <div key={category.id} onClick={() => {
                            if (isSelectedCategory(category.id)){
                                removeSelectedCategory(category.id)

                                return
                            }

                            addSelectedCategory(category.id)
                        }} className={`h-24 w-48 flex flex-col items-center justify-center gap-y-3 rounded-2xl cursor-pointer transition-colors ${isSelectedCategory(category.id) ? "bg-primaryLight border-2 border-primary hover:bg-primaryLightest hover:border-primaryHover" : "border border-neutralGrayLight hover:bg-primaryLightest hover:border-primaryHover"}`}>
                            {category.icon}

                            <h5 className={`text-sm font-bold ${isSelectedCategory(category.id) ? "text-primary" : "text-neutralGrayDark"}`}>{category.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;