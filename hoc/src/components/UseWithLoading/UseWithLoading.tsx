import { useEffect, useState } from "react";
import UserList from "../UserList/UserList"
import WithLoading from "../WithLoading/WithLoading"
import ProductList from "../ProductList/ProductList";
import WithTheme from "../WithTheme/WithTheme";

const UserListWithLoading = WithLoading(UserList);
const ProductListWithLoading = WithLoading(ProductList);

const ThemedUserListWithLoading = WithTheme(UserListWithLoading);
const ThemedProductListWithLoading = WithTheme(ProductListWithLoading);

const UseWithLoading = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);
    const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const products = ['Laptop - $999', 'Mouse - $25', 'Keyboard - $75', 'Monitor - $299'];

    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingUsers(false);
        }, 3000);

        setTimeout(() => {
            setIsLoadingProducts(false);
        }, 5000);
    }, [])

    return (
        <div className="p-4 min-h-screen">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mb-4 p-2 bg-gray-400 cursor-pointer text-white rounded">Toggle Theme</button>

            <ThemedUserListWithLoading theme={theme} isLoading={isLoadingUsers} users={users} />
            <ThemedProductListWithLoading theme={theme} isLoading={isLoadingProducts} products={products} />
        </div>
    )
}

export default UseWithLoading