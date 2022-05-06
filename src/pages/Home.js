import {useState} from "react";

import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import dessert from "../assets/dessert.png"
import hamburger from "../assets/hamburger.png"
import royalSushiHouse from "../assets/royal-sushi-house.png"
import burgersAndPizza from "../assets/burgers-and-pizza.png"
import ninjaSushi from "../assets/ninja-sushi.png"

import SearchIcon from "../icons/Search";
import BasketIcon from "../icons/Basket";
import PizzaIcon from "../icons/Pizza";
import BurgerIcon from "../icons/Burger";
import BBQIcon from "../icons/BBQ";
import SushiIcon from "../icons/Sushi";
import VeganIcon from "../icons/Vegan";
import DessertIcon from "../icons/Dessert";
import ClockIcon from "../icons/Clock";
import MenuIcon from "../icons/Menu";

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

const nearbyRestaurants = [
    {
        id: 0,
        title: "Royal Sushi House",
        image: royalSushiHouse,
        minimumTime: "30-40",
        minimumSum: 32,
        order: 0,
        featured: true,
        tags: [
            {
                title: "Sushi",
                icon: <SushiIcon/>
            }
        ]
    },
    {
        id: 1,
        title: "Burgers & Pizza",
        image: burgersAndPizza,
        minimumTime: "40-60",
        minimumSum: 24,
        order: 2,
        featured: true,
        tags: [
            {
                title: "Burger",
                icon: <BurgerIcon/>
            },
            {
                title: "Pizza",
                icon: <PizzaIcon/>
            }
        ]
    },
    {
        id: 2,
        title: "Ninja Sushi",
        image: ninjaSushi,
        minimumTime: "20-40",
        minimumSum: 40,
        order: 0,
        featured: false,
        tags: [
            {
                title: "Sushi",
                icon: <SushiIcon/>
            }
        ]
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
            <nav className="h-20 flex items-center justify-between px-4 sm:px-64 border-b border-b-neutralGrayLightest">
                <div className="flex sm:gap-x-12">
                    <img src={logo} alt="Logo"/>

                    <div className="hidden sm:block sm:relative">
                        <input className="h-10 text-neutralBlack pl-3 pr-10 w-56 bg-neutralGrayLightest rounded-lg focus:outline-none focus:ring-0 focus:shadow transition-shadow placeholder:text-sm placeholder-neutralGray" placeholder="Search"/>

                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                            <SearchIcon/>
                        </span>
                    </div>
                </div>

                <div className="flex gap-x-5 items-center">
                    <div className="hidden sm:flex gap-x-7 pr-5 py-1 border-r border-r-neutralGrayLightest">
                        <a href="/" className="text-neutralBlack font-semibold hover:text-neutralGrayDark transition-colors">Restaurants</a>
                        <a href="/" className="text-neutralBlack font-semibold hover:text-neutralGrayDark transition-colors">Deals</a>
                    </div>

                    <div className="flex items-center">
                        <a href="/" className="hidden sm:block text-neutralBlack font-semibold hover:text-neutralGrayDark transition-colors mr-7">My orders</a>

                        <a href="/" className="h-12 w-12 relative flex items-center justify-center bg-primaryLight rounded-2xl hover:bg-neutralGrayLightest transition-colors mr-4">
                            <BasketIcon filled={true}/>

                            <span className="absolute -inset-y-2 right-0 text-white h-5 w-5 flex items-center justify-center text-xs font-semibold bg-primary rounded-lg">4</span>
                        </a>

                        <a href="/" className="h-12 w-12 flex p-px items-center justify-center border-2 border-neutralGrayLightest rounded-2xl hover:opacity-90 transition-opacity mr-4 sm:mr-0">
                            <img src={avatar} alt="Avatar"/>
                        </a>

                        <span className="block sm:hidden h-8 w-px bg-neutralGrayLightest mr-4"/>

                        <div className="block sm:hidden h-12 w-12 flex items-center justify-center bg-primaryLight rounded-2xl hover:bg-neutralGrayLightest transition-colors">
                            <MenuIcon/>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="px-4 sm:px-64">
                <header className="sm:h-64 py-5">
                    <div className="h-full flex flex-col sm:flex-row items-center gap-x-8 gap-y-8 sm:gap-y-0">
                        <div className="h-80 sm:h-full flex flex-col-reverse sm:flex-row w-full sm:w-1/2 group overflow-hidden gap-x-4 sm:pr-8 bg-primaryLight rounded-2xl cursor-pointer hover:shadow transition-shadow">
                            <img className="group-hover:scale-105 transition-transform" src={dessert} alt="All deserts"/>

                            <div className="hidden sm:flex flex-col pt-6 pb-4">
                                <h5 className="text-xl font-bold text-neutralBlack mb-3">All deserts</h5>

                                <h1 className="text-5xl font-extrabold text-primary uppercase">20% Off</h1>

                                <h6 className="text-neutralGray mt-auto">Deserty</h6>
                            </div>

                            <div className="flex sm:hidden justify-between pl-4">
                                <div className="flex flex-col">
                                    <h5 className="text-xl font-bold text-neutralBlack mb-3">All deserts</h5>

                                    <h1 className="text-5xl font-extrabold text-primary uppercase">20% Off</h1>
                                </div>

                                <h6 className="text-neutralGray pr-4">Deserty</h6>
                            </div>
                        </div>

                        <div className="h-80 sm:h-full flex flex-col-reverse sm:flex-row w-full sm:w-1/2 group overflow-hidden gap-x-4 sm:pr-8 bg-secondaryLight rounded-2xl cursor-pointer hover:shadow transition-shadow">
                            <img className="group-hover:scale-105 transition-transform" src={hamburger} alt="Big Burgers"/>

                            <div className="hidden sm:flex flex-col pt-6 pb-4">
                                <h5 className="text-xl font-bold text-neutralBlack mb-3">Big Burgers</h5>

                                <h1 className="text-5xl font-extrabold text-secondary uppercase">50% Off</h1>

                                <h6 className="text-neutralGray mt-auto">Fooddies</h6>
                            </div>

                            <div className="flex sm:hidden justify-between pl-4">
                                <div className="flex flex-col">
                                    <h5 className="text-xl font-bold text-neutralBlack mb-3">Big Burgers</h5>

                                    <h1 className="text-5xl font-extrabold text-secondary uppercase">50% Off</h1>
                                </div>

                                <h6 className="text-neutralGray pr-4">Fooddies</h6>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex items-center justify-between flex-wrap py-5 gap-y-6">
                    {categories.map(category => (
                        <div key={category.id} onClick={() => {
                            if (isSelectedCategory(category.id)){
                                removeSelectedCategory(category.id)

                                return
                            }

                            addSelectedCategory(category.id)
                        }} className={`h-24 w-24 sm:w-48 flex flex-col items-center justify-center gap-y-3 rounded-2xl cursor-pointer transition-colors ${isSelectedCategory(category.id) ? "bg-primaryLight border-2 border-primary hover:bg-primaryLightest hover:border-primaryHover" : "border border-neutralGrayLightest hover:bg-primaryLightest hover:border-primaryHover"}`}>
                            {category.icon}

                            <h5 className={`text-sm font-bold ${isSelectedCategory(category.id) ? "text-primary" : "text-neutralGrayDark"}`}>{category.title}</h5>
                        </div>
                    ))}
                </div>

                <div className="mt-8 space-y-4 pb-6 sm:pb-0">
                    <h1 className="text-xl font-semibold text-neutralBlack">Nearby restaurants</h1>

                    <div className="flex flex-wrap gap-y-8 items-center justify-between">
                        {nearbyRestaurants.map(restaurant => (
                            <a href="/" key={restaurant.id} className="w-[27rem] relative flex flex-col border border-neutralGrayLightest rounded-2xl overflow-hidden hover:shadow transition-shadow group">
                                {restaurant.featured && (
                                    <span className="absolute z-10 right-0 px-5 py-2 bg-primary text-xs font-semibold text-white rounded-bl-2xl uppercase">Featured</span>
                                )}

                                <img className="rounded-t-2xl group-hover:scale-105 transition-transform" src={restaurant.image} alt={restaurant.title}/>

                                <div className="flex flex-col p-4 gap-y-2">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-bold text-neutralBlack">{restaurant.title}</h2>

                                        {restaurant.order === 0 && (
                                            <BasketIcon/>
                                        )}

                                        {restaurant.order !== 0 && (
                                            <div className="relative mr-2">
                                                <BasketIcon filled={true}/>

                                                <span className="absolute -inset-y-2 left-3 text-white h-5 w-5 flex items-center justify-center text-xs font-semibold bg-primary border border-white rounded-lg">{restaurant.order}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-x-2">
                                        <ClockIcon/>

                                        <h5 className="text-sm font-medium text-neutralGray">{restaurant.minimumTime} min</h5>

                                        <span className="text-primary text-xs">•</span>

                                        <h5 className="text-sm font-medium text-neutralGray">${restaurant.minimumSum} min sum</h5>
                                    </div>

                                    <div className="mt-2 flex items-center gap-x-2">
                                        {restaurant.tags.map(tag => (
                                            <span className="flex items-center gap-x-1 bg-neutralGrayLightest rounded-2xl px-3 py-1 text-sm font-semibold text-neutralGrayDark">
                                                <div className="scale-75">
                                                    {tag.icon}
                                                </div>

                                                {tag.title}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;