import { NavLink } from "react-router-dom"
import './Sidebar.css'

export default function SideBar() {
  return (
    <aside className="sidebar-container">
      <h1 className="sidebar-title">Your Workspace</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlists" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Playlists
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
