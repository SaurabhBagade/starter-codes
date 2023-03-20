import { Link, Outlet } from "react-router-dom"


function Home() {
    return (
      <div >
        <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Outlet/>
      </div>
    )
  }
  
  export default Home
  