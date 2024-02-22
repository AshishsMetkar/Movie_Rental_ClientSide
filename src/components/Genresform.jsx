import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { addGenre ,getByGenreId,updateGenre} from "../actions/genreActionCreator";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
});

const GenresNew = () => {
  const params = useParams();
  const genreId = params.id;

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const genre = useSelector((state) => state.genreReducer.currentGenre);

  useEffect(() => {
    if (!genreId) return;
    // const genre = genres.find((g) => g._id === genreId);
    dispatch(getByGenreId(genreId))
    if (!genre) return;
    setValue("_id", genre?._id);
    setValue("name", genre.name);
  }, [genre?._id,dispatch,setValue]);


  const onSubmitHandler = (data) => {
    if (data._id) {
      dispatch(updateGenre(data));
    } else {
      // data._id = new Date().
      dispatch(addGenre(data));
    }
     navigate("/genres")

    console.log(data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg  rounded m-5 p-5">
            <h3 className="text-center">Add Genres</h3>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className={`form-control`}
                  id="exampleInputName"
                  placeholder="Name"
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="d-flex justify-content-center mt-2 mb-3">
                <button
                  type="submit"
                  className="btn btn-info px-4 text-white mt-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresNew;
