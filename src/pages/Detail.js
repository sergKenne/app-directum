import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchDetailProduct from '../redux/detail/action';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { loading, error, product: card } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);

  return loading ? (
    <Loading />
  ) : error ? (
    <ErrorMessage error={error} />
  ) : (
    <div className="container detail">
      <button className='detail__btn' onClick={() => navigate("/")}>Go Home</button>
      <div className="detail__card">
        <img src={card.url} alt={card.title} className="detail__img" />
        <div className="detail__body">
          <div className="detail__info">{card.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail