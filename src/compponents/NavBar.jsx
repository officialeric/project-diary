import {BsList} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NavBar = ({showSidebar}) => {
  return (
   <div className="nav-bar__container">
    <div className="nav-bar__left">
        <div className="left__menu">
            <BsList onClick={showSidebar}/>
        </div>
        <div className="left__logo">
            <p>Project Diary</p>
        </div>
    </div>
    <div className="nav-bar__middle">
        <p>FlowSpace / <span>project-diary</span></p>
    </div>
    <div className="nav-bar__right">
        <Link to='/login'>
        <div className="add">
            <FiLogOut/>
        </div>
        </Link>
    </div>
   </div>
  )
}

export default NavBar