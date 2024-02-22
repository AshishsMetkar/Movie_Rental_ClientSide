import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteSelectedGenre,
  getAllGenres,
  getTotalNumberOfGenres,
} from "../actions/genreActionCreator";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./common/Pagination";

function GenresFunc() {
  const dispatch = useDispatch();
  const totalGenres = useSelector((state) => state.genreReducer.totalGenres);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const genres = useSelector((state) => state.genreReducer.genres);

  useEffect(() => {
    dispatch(getAllGenres({ currentPage, pageSize }));
  }, []);

  useEffect(() => {
    dispatch(getTotalNumberOfGenres());
  }, [genres]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(getAllGenres({ currentPage: page, pageSize }));
  };

  const handlePreviousChange =()=>{
    if (currentPage>1){
      handlePageChange(currentPage-1)
    }
  }

  const handleNextChange =() =>{

  const totalPages = Math.ceil(totalGenres / pageSize);

    if(currentPage<totalPages){
      handlePageChange(currentPage+1)

    }
  }
  return (
    <div className="container">
      <h3 className="text-center my-4">Genre List</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Genre Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => (
            <tr key={genre._id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/genres/${genre._id}`}>{genre.name}</Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deleteSelectedGenre(genre._id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPage={totalGenres}
        pageSize={pageSize}
        onChangePage={handlePageChange}
        onPreviousChange={handlePreviousChange}
        onNextChange ={handleNextChange}
        currentPage={currentPage}
      />

      <div className="d-flex justify-content-center">
        <Link to="/genres/newform">
          <button className="btn btn-success">Add Genres</button>
        </Link>
      </div>
    </div>
  );
}

export default GenresFunc;
