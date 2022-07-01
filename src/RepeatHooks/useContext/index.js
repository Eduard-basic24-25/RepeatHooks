import { createContext } from "react"

const theme = {
    dark: {
        color:'white',
        background:'black'
    },
    light:{
        color:'black',
        background:'gray',
    }
}

const LangContext = createContext(theme.light);

export {theme, LangContext};