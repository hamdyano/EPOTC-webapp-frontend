import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"


const Header = () => {
    return(

        
        <div className=" bg-[#2f4052]  py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to='/'
                    className="flex items-center text-3xl font-bold tracking-tight text-[#f1f3f5]"
                >
                    EPOTC
                  
                </Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>

        </div>
    )

}


export default Header

/*   <img 
                        src="/src/assets/lightlogo.png" 
                        alt="Logo" 
                        className="w-11 h-11 ml-2" 
                    />*/