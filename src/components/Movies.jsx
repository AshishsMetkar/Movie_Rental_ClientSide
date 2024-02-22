import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllMovies,
  getTotalNumberOfMovies,
} from "../actions/moviesActionCreator";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import { getAllGenres } from "../actions/genreActionCreator";
import MovieTable from "./MovieTable";

function MoviesFunc() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies);
  const totalMovies = useSelector((state) => state.movieReducer.totalMovies);
  const genres = useSelector((state) => state.genreReducer.genres);
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [genreName, setGenreName] = useState("");
 const [title, setTitleName]=useState("")
 const [sortColumn,setSortColumn] =useState({path:"title",order:1})
  useEffect(() => {
    let gName = "";
    if (genreName !== "All Genres") {
      gName = genreName;
    }
    dispatch(getAllMovies({ currentPage, pageSize, genreName: gName ,title,sortColumn}));
  }, []);

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  useEffect(() => {
    let gName = "";
    if (genreName !== "All Genres") {
      gName = genreName;
    }
    dispatch(getTotalNumberOfMovies(gName,title));
  }, [movies]);

  const handlePageChange = (page) => {
    let gName = "";
    if (genreName !== "All Genres") {
      gName = genreName;
    }
    setCurrentPage(page);
    dispatch(getAllMovies({ currentPage: page, pageSize, genreName: gName,title ,sortColumn}));
  };

  const handlePreviousChange = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextChange = () => {
    const totalPages = Math.ceil(totalMovies / pageSize);

    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleGenreClick = (name) => {
    console.log(name);

    setGenreName(name);
    let gName = "";
    if (name !== "All Genres") {
      gName = name;
    }
    dispatch(getAllMovies({ currentPage, pageSize, genreName: gName,title,sortColumn }));
  };

  const handleInputChange =(e)=>{
    const {value} = e.target;
    console.log(value);
    setTitleName(value)
    let gName = "";
    if (genreName !== "All Genres") {
      gName = genreName;
    }
    dispatch(getAllMovies({currentPage,pageSize,genreName:gName,title:value,sortColumn}))
  }

   const handleSort= (sortColumn)=>{
    setSortColumn(sortColumn)
    console.log("sorting",sortColumn);
    let gName = "";
    if (genreName !== "All Genres") {
      gName = genreName;
    }
    dispatch(getAllMovies({currentPage,pageSize,genreName:gName,title,sortColumn}))

   }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 mt-5">
          <div class="input-group flex-nowrap mb-2 ">
            <span class="input-group-text" id="addon-wrapping">
            <i class="bi bi-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Movie-Title"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={handleInputChange}
            />
          </div>
          <ListGroup
            items={[{ _id: "", name: "All Genres" }, ...genres]}
            onSelectItem={handleGenreClick}
            selectedItem={genreName}
          />
        </div>
        <div className="col-10">
          <h3 className="text-center my-4">Movie List</h3>
          {movies && movies.length >0 ?(
            <>
          
          <MovieTable movies={movies} onSort={handleSort} sortColumn={sortColumn}/> 
          <Pagination
          totalPage={totalMovies}
          pageSize={pageSize}
          onChangePage={handlePageChange}
          onPreviousChange={handlePreviousChange}
          onNextChange={handleNextChange}
          currentPage={currentPage}
        />
        </>
          ): (
            <p className="text-center">No Movies Found in the databse</p>
          )}
          

          <div className="d-flex justify-content-center">
            <Link to="/movies/newform">
              <button className="btn btn-success">Add Movie</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesFunc;
