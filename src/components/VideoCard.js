// function VideoCard({ cards }) {
//   if (!cards || !cards.snippet || !cards.statistics) {
//     // Handle the case where cards, snippet, or statistics is undefined
//     // You can return some default content or handle it as needed
//     return <div>Error: Invalid card data</div>;
//   }

//   const { statistics, snippet } = cards;
//   const { channelTitle, title, thumbnails } = snippet;

//   return (
//     <div className="  ml-7 w-80 shadow-lg">
//       <img className="rounded-lg p-1" src={thumbnails.medium.url} alt="img" />
//       <ul>
//         <li className="font-bold p-1">{title}</li>
//         <li>{channelTitle}</li>
//         <li>{statistics.viewCount} viwes</li>
//       </ul>
//     </div>
//   );
// }

// export default VideoCard;

function VideoCard({ cards }) {
  if (!cards || !cards.snippet || !cards.statistics) {
    return <div>Error: Invalid card data</div>;
  }

  const { statistics, snippet } = cards;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="ml-5  w-80 h-80  shadow-inner overflow-hidden">
      <img className="rounded-xl  " src={thumbnails.medium.url} alt="img" />
      <ul className="h-2/5">
        <li className="font-bold p-1 line-clamp-2">{title}</li>
        <li>{channelTitle}</li>
        <li>
          {statistics.viewCount} Views • {statistics.likeCount} Likes
        </li>
      </ul>
    </div>
  );
}

export default VideoCard;
