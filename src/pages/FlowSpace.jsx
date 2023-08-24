import { NavBar , FlowControl , RecentControl , ProfileControl } from "../compponents"

const FlowSpace = () => {

  function showSidebar(){
    const sidebar = document.getElementById('side-bar');
    sidebar.classList.toggle("side-bar__active");
  }

  return (
   <>
   <div className="flowspace">
   <NavBar showSidebar={showSidebar}/>
    
    <div className="side-bar" id="side-bar">
      Side bar
    </div>

   <div className="flowspace__container">
     <div className="flowspace__content flow-control">
      <FlowControl />
     </div>
     <div className=" recent-control">
      <p className="top-header">Recent Activities</p>
      <div className="flowspace__content">
      <RecentControl />
      </div>
     </div>
     <div className=" profile-control">
     <p className="top-header">Your Profile</p>
      <div className="flowspace__content">
      <ProfileControl />
      </div>
     </div>
   </div>
   </div>
   </>
)
}

export default FlowSpace