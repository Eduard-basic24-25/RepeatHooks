import { useContext } from 'react';
import { LangContext} from '../useContext'

function Button () {
    const theme = useContext(LangContext);
    console.log(LangContext)
    return (
        <button 
            type='submit'
            style={{ background: theme.background, color: theme.color }}
            >submit 
        </button>
    )
}


export default Button;