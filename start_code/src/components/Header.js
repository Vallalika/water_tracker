import UserContext from "../context/UserContext";
import { useContext } from "react";

const Header = () => {
    
    const {name} = useContext(UserContext);

    return (
        <>
            <h2> Hello { name }👋 </h2>
        </>
    )
}

export default Header;
