const Search = () => {
  return (
    <div className="col-span-10 px-20  ml=18 flex">
      <input
        type="text"
        placeholder="seacrh..."
        className="w-1/2  p-2 border border-gray-400 rounded-l-full"
      />
      <button className="  p-2 border border-gray-400 rounded-r-full bg-gray-100">
        <img
          className="h-5"
          src="https://banner2.cleanpng.com/20180623/rxj/kisspng-computer-icons-desktop-wallpaper-search-box-materi-verification-5b2e87fc57ea79.6293592815297761243601.jpg"
          alt="sarch-logo"
        />
        {/* search */}
      </button>
      <img
        alt="mic"
        src="https://icon2.cleanpng.com/20180705/gey/kisspng-microphone-computer-icons-icon-design-voice-icon-5b3e5f5eb07eb0.3351359715308143027229.jpg"
        className="rounded-full  h-11 p-2  bg-gray-100"
      />
    </div>
  );
};
export default Search;
