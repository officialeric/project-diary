import {BsList} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const NavBar = () => {
  return (
   <div className="nav-bar__container">
    <div className="nav-bar__left">
        <div className="left__menu">
            <BsList />
        </div>
        <div className="left__logo">
            <p>Project Diary</p>
        </div>
    </div>
    <div className="nav-bar__middle">
        <p>FlowSpace / <span>project-diary</span></p>
    </div>
    <div className="nav-bar__right">
        <div className="add">
            <AiOutlinePlusCircle/>
        </div>
    </div>
   </div>
  )
}

export default NavBar