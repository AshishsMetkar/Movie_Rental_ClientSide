import React from 'react'     
import { deleteMovie } from '../actions/moviesActionCreator';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TableHeader from './tableHeader';
const MovieTable = (props) => {
  const {movies, onSort ,sortColumn} =props
  const dispatch =useDispatch()

  const columns =[
     {path:"title",  header:"Title"},
     {path:"genre.name",header:"Genre"},
     {path:"dailyRentalRate", header:"Rate"},
     {path:"numberInStock", header:"Stock"},
     {key:"like"},
     {key:"delete"}

  ]
    return (
        <table className="table table-striped table-hover">
            <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  
                  <td>
                    <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                  </td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.dailyRentalRate.toFixed(1)}</td>
                  <td>{movie.numberInStock}</td>
                  <td>
                    {movie.liked ? (
                      <i className="bi bi-heart-fill"></i>
                    ) : (
                      <i className="bi bi-heart"></i>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteMovie(movie._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      );
}
 
export default MovieTable;