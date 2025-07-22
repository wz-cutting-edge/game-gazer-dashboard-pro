import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <div>
      <nav>
        <Link>
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout