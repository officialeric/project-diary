import x from '../utils/x2.jpg'
import github from '../utils/github.png'
const Home = () => {
  return (
      <div className="container">
        <div className="main">
        <p className="header">
           <span className="create">Create</span>.<span className="preview">Preview</span>.<span className="keep">Keep</span>
        </p>
        <div className="details">
        <p className="header__details">
            Showcase your Ideas and let <span>Project Diary </span>
             properly manage them by Providing you greatest 
             and trusted platform for creating , keeping and tracking 
             your progress untill you achieve your Goals!
        </p>
        </div>
        <div className="header__btns">
            <button className='get-started'>Get Started</button>
            <button className='learn-more'>Learn More</button>
        </div>
        
        </div>
      </div>
    )
}

export default Home