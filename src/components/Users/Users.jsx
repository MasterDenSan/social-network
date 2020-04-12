import React from "react";
import Pagination from "../../Utilits/Pagination/Pagination";
import User from "./User";


const Users = ({allItems, countItems, currentPage, onCangedPage, isProcessingArr, unfollow, follow, users, ...props}) => {

    return <div>
        <Pagination allItems={allItems}
                    countItems={countItems}
                    currentPage={currentPage}
                    onCangedPage={onCangedPage}/>
        {users.map(u => <User key={u.id}
                              user={u}
                              follow={follow}
                              unfollow={unfollow}
                              isProcessingArr={isProcessingArr}/>)
        }
    </div>
}


export default Users;
