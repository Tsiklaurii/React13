
type WithThemeTypes = {
    theme: 'dark' | 'light';
    [key: string]: any;
}

function WithTheme(Component: any) {
    return function ThemedComponent({ theme, ...props }: WithThemeTypes) {
        const bgColor = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';

        return (
            <div className={bgColor}>
                <Component {...props} />
            </div>
        )
    }
}

export default WithTheme