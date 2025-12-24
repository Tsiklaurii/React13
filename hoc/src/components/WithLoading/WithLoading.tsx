
type WithLoadingTypes = {
    isLoading: boolean;
    [key: string]: any;
}

function WithLoading(Component: any) {
    return function LoadingComponent({ isLoading, ...props }: WithLoadingTypes) {
        if (isLoading) {
            return <div className="flex items-center justify-center p-20">
                <div className="animate-spin rounded-full h-20 w-20 border-b-5 border-blue-600"></div>
            </div>
        }
        return <Component {...props} />
    }
}

export default WithLoading