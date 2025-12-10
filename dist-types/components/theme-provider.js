import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
const ThemeProviderContext = React.createContext(undefined);
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "campfire-ui-theme", ...props }) {
    const [theme, setThemeState] = React.useState(() => localStorage.getItem(storageKey) || defaultTheme);
    const [systemTheme, setSystemTheme] = React.useState(() => {
        if (typeof window === "undefined")
            return "light";
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });
    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        if (theme === "system") {
            root.classList.add(systemTheme);
        }
        else {
            root.classList.add(theme);
        }
    }, [theme, systemTheme]);
    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            setSystemTheme(e.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    const value = React.useMemo(() => ({
        theme,
        setTheme: (newTheme) => {
            localStorage.setItem(storageKey, newTheme);
            setThemeState(newTheme);
        },
        systemTheme,
    }), [theme, systemTheme, storageKey]);
    return (_jsx(ThemeProviderContext.Provider, { ...props, value: value, children: children }));
}
export function useTheme() {
    const context = React.useContext(ThemeProviderContext);
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}
/**
 * Get the current resolved theme (light or dark).
 * This resolves "system" to the actual system preference.
 */
export function useResolvedTheme() {
    const { theme, systemTheme } = useTheme();
    return theme === "system" ? systemTheme : theme;
}
/**
 * Toggle between light and dark theme.
 * If current theme is "system", it will switch to the opposite of the system preference.
 */
export function useThemeToggle() {
    const { theme, systemTheme, setTheme } = useTheme();
    const toggle = React.useCallback(() => {
        const resolvedTheme = theme === "system" ? systemTheme : theme;
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    }, [theme, systemTheme, setTheme]);
    return toggle;
}
