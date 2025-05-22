import { useEffect, useState } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState(() =>localStorage.getItem("theme") || "white");

    useEffect(() => {
        document.body.style.backgroundColor = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(c => c === "white" ? "black" : "white");
    }

    return [theme, toggleTheme];
}

export default useTheme;