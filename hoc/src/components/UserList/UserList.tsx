
type UserListTypes = {
    users: string[];
}

const UserList = ({ users }: UserListTypes) => {
    return (
        <div className="flex flex-col items-center mb-5 p-10">
            <div className="w-100 flex flex-col items-center">
                <h2 className="text-[30px] font-bold mb-5">Users</h2>
                <ul className="flex flex-col gap-2.5 w-full">
                    {users.map((user) => (
                        <li className="p-3 bg-gray-400 rounded-lg" key={user}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UserList