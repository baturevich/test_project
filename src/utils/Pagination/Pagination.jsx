import React from 'react';
import s from './Pagination.module.css'

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        if (i > 0) {
            pages.push(i)
        }
    }
    const onChangePage = (p) => {
        let page_number = p;
        props.onChangePage(page_number, props.pageSize)
    }
    return (
        <ul className={s.pagination}>
            {pages.map(p => {
                    return <li className={props.currentPage === p && s.selected}
                        onClick={() => onChangePage(p)}>{p}</li>
                })}
        </ul>
    )
}
export default Pagination;