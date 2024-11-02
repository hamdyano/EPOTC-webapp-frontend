import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const{ loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? 
            (<UsernameMenu/>) : ( 
       <Button 
      
        className="font-bold bg-[#52646d] hover:text-white hover:bg-[#0e1e29]"
        onClick={async ()=> await loginWithRedirect()}>
          Sign up or Log In and fill your profile
       </Button>
 )}
        </span>
    
)}


export default MainNav