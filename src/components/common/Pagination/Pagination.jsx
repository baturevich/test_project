import React, { useState } from 'react';
import s from './Pagination.module.css'

const Pagination = React.memo(props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        if (i > 0) {
            pages.push(i)
        }
    }
    let [portionNumber, setPortionNumber] = useState(1)
    let portionsCount = Math.ceil(pagesCount / (props.portionSize || 10))
    let leftPotionPageNumber = (portionNumber - 1) * props.portionSize
    let rightPortionPageNumber = portionNumber * props.portionSize
    const onChangePage = (p) => {
        let page_number = p;
        props.onChangePage(page_number, props.pageSize)
    }
    return (
        <ul className={s.pagination}>
            {portionNumber > 1 &&
                <span onClick={() => setPortionNumber(portionNumber - 1)}>
                    <i className="fa fa-angle-left"></i>
                </span>
            }
            {
             pages.filter(p => p >= leftPotionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <li key={Math.random(0 * 20)} className={props.currentPage === p && s.selected}
                        onClick={() => onChangePage(p)}>{p}</li>
                })
            }
            {portionsCount > portionNumber &&
                <span onClick={() => setPortionNumber(portionNumber + 1)}>
                    <i className="fa fa-angle-right"></i>
                </span>
            }
        </ul>
    )
})
export default Pagination;