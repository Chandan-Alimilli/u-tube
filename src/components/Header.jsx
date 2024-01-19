import Search from "./head/Search"


function Header() {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-purpel">
      <div className="flex col-span-1">
        <img alt="menu" className="h-11" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>

        <img alt="logo" className="h-12" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"/>
      </div>

      {/* <Search className="col-span-10"/> */}

    <div className="col-span-10 px-20 flex">
      <input type="text" placeholder="seacrh" className="w-1/2  p-2 border border-gray-400 rounded-l-full"/>
      <button className="  p-2 border border-gray-400 rounded-r-full bg-gray-100">
         {/* <img className="h-5" src="https://banner2.cleanpng.com/20180623/rxj/kisspng-computer-icons-desktop-wallpaper-search-box-materi-verification-5b2e87fc57ea79.6293592815297761243601.jpg" alt="sarch-logo" /> */}
         search
      </button>
      <img src="https://icon2.cleanpng.com/20180705/gey/kisspng-microphone-computer-icons-icon-design-voice-icon-5b3e5f5eb07eb0.3351359715308143027229.jpg"
      className="rounded-full  h-11 p-2  bg-gray-100"
      />
    </div>


      <div className="col-span-1 flex" justify between>
        <img 
        className="h-10 p-1"
        alt="notifications" src="https://ongpng.com/wp-content/uploads/2023/10/bell-icon-with-one-notification-1.png"/>
      <img alt="user" className="h-10  " src="https://imechinstitute.com/wp-content/uploads/2022/06/vector.jpeg"/>
      </div>
      
    </div>
  )
}


export default Header
