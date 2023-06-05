import React, {useState} from 'react'
import Card from './Card'
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';

const CardList = ({ loading, error, cards }) => {

  const [currentPage, setCurrentPage] = useState(localStorage.getItem('currentPage') || 1);
  const [cardsPerPage] = useState(10);

  // Get current Cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    localStorage.setItem("currentPage", pageNumber);
  };


  return loading ? (
      <Loading />
  ) : error ? (
      <ErrorMessage error={error} />
  ) : (
      <>
        <div className="card-list">
            {currentCards.map((card) => (
                <div className="card-list__item" key={card.id}>
                    <Card {...card} />
                </div>
            ))}
        </div>

        <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={cards.length}
            paginate={paginate}
            currentPage={currentPage}
        />
      </>
  );
}

export default CardList