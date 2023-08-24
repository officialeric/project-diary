import { AiOutlineEdit} from 'react-icons/ai'
import { AiFillDelete} from 'react-icons/ai'

const FlowControl = () => {
  return (
    <div>
      <form className='flow-form'>
        <textarea name="" id="" 
              placeholder='Start flowing ...' autoFocus/>
        <button>Create Flow</button>
      </form>
      <div className="search-bar">
        <input type="search" placeholder='search flow..'/>
        <h3>Flows</h3>
      </div> 
      <div className="flow-list">
        <div className="flow">
          <div className="flow-content">
          <p>Note that the development build is not optimized.
            To create a production build, use npm run build.</p>
          </div>
          <div className="flow-footer">
            <div className="date">
              <p>01-01-2024 19:23 AM</p>
            </div>
            <div className="icons-box">
              <div className="edit-box">
              <AiOutlineEdit/>
              </div>
              <div className="erase-box">
                <AiFillDelete/>
              </div>
            </div>
          </div>
        </div>

        <div className="flow">
          <div className="flow-content">
          <p>Note that the development build is not optimized.
            To create a production build, use npm run build.</p>
          </div>
          <div className="flow-footer">
            <div className="date">
              <p>01-01-2024 19:23 AM</p>
            </div>
            <div className="icons-box">
              <div className="edit-box">
              <AiOutlineEdit/>
              </div>
              <div className="erase-box">
                <AiFillDelete/>
              </div>
            </div>
          </div>
        </div>


        <div className="flow">
          <div className="flow-content">
          <p>Note that the development build is not optimized.
            To create a production build, use npm run build.</p>
          </div>
          <div className="flow-footer">
            <div className="date">
              <p>01-01-2024 19:23 AM</p>
            </div>
            <div className="icons-box">
              <div className="edit-box">
              <AiOutlineEdit/>
              </div>
              <div className="erase-box">
                <AiFillDelete/>
              </div>
            </div>
          </div>
        </div>


        <div className="flow">
          <div className="flow-content">
          <p>Note that the development build is not optimized.
            To create a production build, use npm run build.</p>
          </div>
          <div className="flow-footer">
            <div className="date">
              <p>01-01-2024 19:23 AM</p>
            </div>
            <div className="icons-box">
              <div className="edit-box">
              <AiOutlineEdit/>
              </div>
              <div className="erase-box">
                <AiFillDelete/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowControl