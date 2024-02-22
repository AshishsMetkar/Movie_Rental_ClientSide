import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, getAllMovies, getByMovieId, updateMovie } from "../actions/moviesActionCreator";
import { getAllGenres } from "../actions/genreActionCreator";

const schema = yup.object().shape({
  title: yup.string().min(5).max(50).required(),
  dailyRentalRate: yup.number().min(0).required(),
  numberInStock: yup.number().min(0).required(),
  genre_id: yup.string().required(),
  liked:yup.boolean()
});


const Moviesnew = () => {
  const params = useParams();
  const moviesId = params.id
  const genres = useSelector(state=>state.genreReducer.genres)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema),
  });
  const movieById = useSelector((state) => state.movieReducer.currentMovie);

  const navigate =useNavigate()
  const dispatch =useDispatch()
 
  useEffect(()=>{
    dispatch(getAllMovies());
    dispatch(getAllGenres())
    if(!moviesId)return;
    // const movie = movies.find((g)=>g._id===moviesId) 
      dispatch(getByMovieId(moviesId))
    if(!movieById) return;
    setValue("_id",movieById?._id);
    setValue("title",movieById.title)
    setValue("dailyRentalRate",movieById.dailyRentalRate)
    setValue("numberInStock",movieById.numberInStock)
    setValue("genre_id",movieById.genre?._id)
    setValue("liked",movieById.liked)

  },[movieById?._id,setValue,dispatch])

  const onSubmitHandler = (data) => {
    if (data._id) {
      dispatch(updateMovie(data))
    } else {
      dispatch(addMovie(data));
    }
     navigate("/movies")
     console.log(data);
    
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Add Movie</h3>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-group">
                  <label htmlFor="exampleInputTitle">Title</label>
                  <input
                    {...register("title")}
                    type="text"
                    className={"form-control"}
                    id="exampleInputTitle"
                    placeholder="Title"
                  />
                 <p>{errors.title?.message}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputDRR">Daily Rental Rate</label>
                  <input
                    {...register("dailyRentalRate")}
                    type="text"
                    inputMode="decimal"
                    className={"form-control"}
                    id="exampleInputDRR"
                    pattern="[0-9]*[.,]?[0-9]*"
                    placeholder="2.6"
                    step={0.1}
                  />
                <p>{errors.dailyRentalRate?.message}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputNIS">Number In Stock</label>
                  <input
                    {...register("numberInStock")}
                    type="number"
                    className={"form-control"}
                    id="exampleInputNIS"
                    placeholder="16"
                    min={0}
                  />
                 <p>{errors.numberInStock?.message}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="genre">Select the genre</label>
                  <select
                    className="form-control"
                    name="selectgenre"
                    id="genre_id"
                    {...register("genre_id")}
                  >
                    {genres.map((genre) => (
                      <option key={genre._id} value={genre._id}>
                        {genre.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkLiked"
                    {...register("liked")}
                  />
                  <label className="form-check-label" htmlFor="checkLiked">
                    Liked
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-info  text-white mt-3">
                    Sumbit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviesnew;
