import React from 'react';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            <ul className="pagination__list">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className="pagination__item"
                        onClick={() => {
                            paginate(number);
                        }}
                        style={
                            (number === currentPage || number == localStorage.getItem('currentPage'))
                                ? { backgroundColor: 'silver', color: '#ffffff' }
                                : {}
                        }>
                        <span className="pagination__link">{number}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
