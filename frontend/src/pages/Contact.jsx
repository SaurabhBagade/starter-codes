import { Link, useParams } from "react-router-dom"


function Contact() {
  const {no} = useParams()
    return (
      <div >
        You are dialing {no}
        <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
        </ul>
      </div>
    )
  }
  
  export default Contact
  