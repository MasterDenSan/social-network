import style from './Pagination.module.css';
import React, {FC, useState} from 'react';
// @ts-ignore
import cn from 'classnames';
import {PaginationI} from "./types";

export const Pagination: FC<PaginationI> = ({allItems, countItems, currentPage, onCangedPage, pozitionSize = 10}) => {
    let numberOfPages = Math.ceil(allItems / countItems);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }
    let pozitionCount = Math.ceil(numberOfPages / pozitionSize);
    let [pozitionNumber, setPozitionNumber] = useState(1);
    let startPozition = (pozitionNumber - 1) * pozitionSize + 1;
    let endPozition = pozitionNumber * pozitionSize
    return <div className={style.pagination}>
        {pozitionNumber > 1 && <button onClick={() => {
            setPozitionNumber(pozitionNumber - 1)
        }}>назад</button>}
        {pages
            .filter(p => p >= startPozition && p <= endPozition)
            .map(p => {
                return <span className={ cn({
                    [style.selectedPage]: currentPage === p},
                    style.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onCangedPage(p)
                             }}>{p}</span>
            })}
        {pozitionCount > pozitionNumber && <button onClick={() => {
            setPozitionNumber(pozitionNumber + 1)
        }}>вперед</button>}
    </div>
}
export default Pagination;
