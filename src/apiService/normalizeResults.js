const posterUrl = "https://image.tmdb.org/t/p/w500";
const defaultAvatar =
  "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png";
const defaultPoster =
  "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_960_720.png";

function createPoster(obj) {
  return obj.poster_path ? posterUrl + obj.poster_path : defaultPoster;
}
function createActorAvatar(obj) {
  return obj.profile_path ? posterUrl + obj.profile_path : defaultAvatar;
}
function createReviewAvatar(obj) {
  const initialAvatar = obj.author_details.avatar_path;
  console.log(`initialAvatar`, initialAvatar);
  if (!initialAvatar) {
    return defaultAvatar;
  }
  if (initialAvatar.includes("http")) {
    return initialAvatar.slice(1, initialAvatar.length - 1);
  }
  return posterUrl + initialAvatar;
}

export { createPoster, createActorAvatar, createReviewAvatar };
