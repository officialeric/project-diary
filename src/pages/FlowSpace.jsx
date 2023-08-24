import { NavBar , FlowControl , RecentControl , ProfileControl } from "../compponents"

const FlowSpace = () => {
  return (
   <>
   <div className="flowspace">
   <NavBar />
    
    <div className="side-bar">
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
     <p className="top-header">Profile</p>
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