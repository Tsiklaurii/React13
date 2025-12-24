import { useEffect, useState } from "react";
import UserList from "../UserList/UserList"
import WithLoading from "../WithLoading/WithLoading"
import ProductList from "../ProductList/ProductList";

const UserListWithLoading = WithLoading(UserList);
const ProductListWithLoading = WithLoading(ProductList);

const UseWithLoading = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);
    const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];

    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    const products = ['Laptop - $999', 'Mouse - $25', 'Keyboard - $75', 'Monitor - $299'];

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingUsers(false);
        }, 3000);

        setTimeout(() => {
            setIsLoadingProducts(false);
        }, 5000);
    }, [])

    return (
        <div>
            <UserListWithLoading isLoading={isLoadingUsers} users={users} />
            <ProductListWithLoading isLoading={isLoadingProducts} products={products} />
        </div>
    )
}

export default UseWithLoading