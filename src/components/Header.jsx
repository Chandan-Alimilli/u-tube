import Icons from "./head/Icons"
import Logo from "./head/Logo"
import Search from "./head/Search"


function Header() {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-purpel">
     <Logo/>
     <Search/>
     <Icons/>
    </div>
  )
}


export default Header
