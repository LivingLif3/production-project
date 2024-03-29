import {FC, useState, useMemo} from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface Props {
    children?: React.ReactNode,
    initialTheme?: Theme
}

const ThemeProvider = (props: Props) => {
    const {
        initialTheme,
        children
    } = props

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
