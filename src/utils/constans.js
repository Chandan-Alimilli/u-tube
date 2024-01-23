export const GOOGEL_API_KEY = "AIzaSyAOzGYxemkBocn6MNtiPH3WkV3m_3MVIAA";

export const YOUBUTE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key=" +
  GOOGEL_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const MOST_LIKED_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=" +
  GOOGEL_API_KEY;
