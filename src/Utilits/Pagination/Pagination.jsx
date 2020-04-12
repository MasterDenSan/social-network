import style from "./Pagination.module.css";
import React from "react";

 export const Pagination = ({allItems, countItems, currentPage, onCangedPage}) => {
    let numberOfPages = Math.ceil(allItems / countItems);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }
    return (<div>
        {pages.map(p => {
            return <span className={currentPage === p && style.selectedPage}
                         onClick={(e) => {
                             onCangedPage(p)
                         }}>{p}</span>
        })}
    </div>)
}
export default Pagination;
