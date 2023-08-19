import logo from '../utils/PD-logo2.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <body>
      <div className="main">
        <div className="main__header">
            <img src={logo} 
                 alt="pd-logo" 
                 className='main__logo'/>
        </div>
        <div className="main__details">
            <p className='main__header'>Create.Keep.Ideas</p>
            <p className='main__desc'>With Project Diary By Maintaining Your Project Records!</p>
            <div className="btn">
                <Link to='/login'>
                <button class="bg-orange-500 text-orange-700 font-semibold text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                  Get Started
                </button> 
                </Link>           
           </div>
        </div>
      </div>
      
    </body>
    </>
  )
}

export default Home