import { Link } from "react-router-dom"
const NavBar = () => {
  
  return (

  <div>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link  className="navbar-brand logo text-danger" to='/'>Netfelx</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex" role="search">
        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active text-info" aria-current="page" to='/Home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-info" to='/Register'>Register</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-info" to='/Login'>Login</Link>
        </li>
        <li className="nav-item">
          <span  className="btn  btn-outline-danger ">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</nav>







  </div>
  )
}

export default NavBar
