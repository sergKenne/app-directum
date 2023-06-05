import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, url, id}) => {
  return (
      <div className="card">
          <div className="card__header">
              <img
                  src={url}
                  alt=""
                  className="card__img"
              />
          </div>
          <div className="card__body">
              <h2 className="card__title">
                  <Link to={`/detail/${id}`} className='card__title-link'>
                      {title}
                  </Link>
              </h2>
          </div>
      </div>
  );
}

export default Card