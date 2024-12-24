import React, {createContext, useState, useContext} from 'react'

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
}

const DarkModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return(
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
export default DarkModeProvider;
