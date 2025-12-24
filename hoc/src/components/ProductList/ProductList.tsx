
type ProductListTypes = {
    products: string[];
}

const ProductList = ({ products }: ProductListTypes) => {
    return (
        <div className="flex flex-col items-center p-10">
            <div className="w-100 flex flex-col items-center">
                <h2 className="text-[30px] font-bold mb-5">Products</h2>
                <ul className="flex flex-col gap-2.5 w-full">
                    {products.map((product) => (
                        <li className="p-3 bg-gray-400 rounded-lg" key={product}>{product}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductList