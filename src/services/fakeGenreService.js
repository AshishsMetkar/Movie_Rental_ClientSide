export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
];

export function getGenres() {
  return genres.filter(g => g);
}

export function addGenres(genre) {
  let addgenre = genres.find(g => g._id === genre._id) || {};
  addgenre.name = genre.name;
  
  return addgenre;
}