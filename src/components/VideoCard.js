function VideoCard({ cards }) {
  if (!cards || !cards.snippet || !cards.statistics) {
    return <div>Error: Invalid card data</div>;
  }

  const { statistics, snippet } = cards;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" shadow-lg  w-80 p-5 ml-5 h-80   ">
      <img
        className="rounded-xl  w-full "
        src={thumbnails.medium.url}
        alt="img"
      />
      <ul className="h-2/5">
        <li className="font-bold p-1 line-clamp-2">{title}</li>
        <li> ⚡{channelTitle} </li>
        <li>
          {statistics.viewCount} Views • {statistics.likeCount} Likes
        </li>
      </ul>
    </div>
  );
}

export default VideoCard;
