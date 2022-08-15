import React, {FC} from "react";
import Pagination from "../../Utilits/Pagination/Pagination";
import User, {onlyUser, UserType} from "./User";

interface Users extends UserType {
    allItems: []
    countItems: number
    currentPage: number
    onCangedPage: (page: number) => void
    pozitionSize: number
    users: onlyUser[]
}

const Users:FC<Users> = ({
                             allItems,
                             countItems,
                             currentPage,
                             onCangedPage,
                             isProcessingArr,
                             unfollow,
                             follow,
                             users,
                             pozitionSize, ...props}) => {

    return <div>
        <Pagination allItems={allItems}
                    countItems={countItems}
                    currentPage={currentPage}
                    onCangedPage={onCangedPage}
                    pozitionSize={pozitionSize}/>
        {users.map(u => <User key={u.id}
                              user={u}
                              follow={follow}
                              unfollow={unfollow}
                              isProcessingArr={isProcessingArr}/>)
        }
    </div>
}


export default Users;
