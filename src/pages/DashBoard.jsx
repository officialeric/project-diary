import logo from '../utils/PD-logo2.png'

const DashBoard = () => {
  return (
    <>
    <div className='nav-bar w-full'>
      <div className="nav__container">
       <div className="nav-bar__left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
       </div>
       <div className="nav-bar__right text-blue-500">
        Profile
       </div>
       </div>
    </div>
    <div className="workplace w-full">
      <div className="container">
        Workplace
      </div>
    </div>
    </>
  )
}

export default DashBoard