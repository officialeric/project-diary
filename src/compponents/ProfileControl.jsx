import {MdOutlineAttachEmail} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
const ProfileControl = () => {
  return (
    <>
    <div className='profile-img'>
      <img src="https://th.bing.com/th/id/OIP.EBl4kEbDKBcCw2n1xapAyAHaJ4?w=182&h=243&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Your profile" />
    </div>
    <div className="profile-info">
      <p>@DearMom</p>
      <ul>
        <li>
          <div className="icon">
            <MdOutlineAttachEmail />
          </div>
          <div className="value">
            officialdearmom@gmail.com
          </div>
        </li>
        <li>
          <div className="icon">
            <MdOutlineAttachEmail />
          </div>
          <div className="value">
            EryLab
          </div>
        </li>
        <li>
          <div className="icon">
            <AiFillGithub />
          </div>
          <div className="value">
           <a href="github.com/officialeric">officialeric</a> 
          </div>
        </li>
      </ul>
      <div className="profile-btn">
        <button>Edit Profile</button>
      </div>
    </div>
    </>
    
  )
}

export default ProfileControl