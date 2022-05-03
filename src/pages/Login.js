import logo from "../assets/logo.png"
import login from "../assets/login.png"

import VisibilityIcon from "../icons/Visibility";
import {useState} from "react";

const Login = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className="h-full flex">
            <div className="w-full sm:w-2/5 px-4 sm:px-0">
                <div className="h-full w-full sm:w-96 mx-auto flex flex-col justify-between pt-5 pb-10">
                    <div>
                        <img src={logo}/>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-6xl text-neutralBlack font-bold mb-8">Login</h1>

                        <p className="text-neutralGrayDark mb-8">Sign in with your data that you entered during your registration.</p>

                        <form action="#" onSubmit={event => {
                            event.preventDefault()
                        }} className="mb-6">
                            <div className="mb-6">
                                <label htmlFor="email" className="text-sm text-neutralGrayDark font-semibold">
                                    Email
                                </label>

                                <div className="mt-1">
                                    <input type="email" name="email" className="w-full py-3 text-sm text-neutralBlack border-neutralGrayLight rounded-lg placeholder-neutralGray focus:ring-0 focus:border-neutralGray transition-colors" placeholder="name@example.com"/>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="text-sm text-neutralGrayDark font-semibold">
                                    Password
                                </label>

                                <div className="mt-1 relative select-none">
                                    <input type={visible ? "text" : "password"} name="password" className="w-full py-3 pr-10 text-sm text-neutralBlack border-neutralGrayLight rounded-lg placeholder-neutralGray focus:ring-0 focus:border-neutralGray transition-colors" placeholder="min. 8 characters"/>

                                    <span onClick={() => {
                                        setVisible(!visible)
                                    }} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                                        <VisibilityIcon visible={visible}/>
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-x-3 items-center mb-10">
                                <input type="checkbox" className="h-5 w-5 text-primary border-neutralGrayLight cursor-pointer rounded transition-colors focus:ring-0 focus:border-neutralGray focus:shadow-none"/>

                                <p className="text-neutralBlack">Keep me logged in</p>
                            </div>

                            <button type="submit" className="w-full h-11 rounded-lg text-white font-semibold bg-primary hover:bg-primaryHover shadow-xl transition-colors">Login</button>
                        </form>

                        <a href="#" className="text-center text-primaryHover font-bold hover:text-primary transition-colors">Forgot Password</a>
                    </div>

                    <p className="text-center text-neutralGrayDark">Don't have an account? <a href="#" className="text-primary font-bold hover:text-primaryHover transition-colors">Sign up</a></p>
                </div>
            </div>

            <div className="hidden sm:flex flex-1 bg-primaryHover flex-col items-center justify-between pt-8 pb-20">
                <img src={login}/>

                <div className="max-w-lg flex flex-col items-center gap-y-4">
                    <h1 className="text-3xl text-white font-bold">Leave reviews for all meals</h1>

                    <p className="text-sm text-white text-center">Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                </div>

                <div className="flex gap-x-2">
                    <span className="h-2 w-2 bg-neutralGrayLight rounded-full cursor-pointer"/>

                    <span className="h-2 w-2 bg-white rounded-full cursor-pointer"/>

                    <span className="h-2 w-2 bg-neutralGrayLight rounded-full cursor-pointer"/>

                    <span className="h-2 w-2 bg-neutralGrayLight rounded-full cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Login;