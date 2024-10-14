import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeComponent = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    return(

        <div>Context API</div>

    )
}

export default ThemeComponent