import {Outlet} from 'react-router-dom'
import Header from './Header.jsx'
import SideBar from './SideBar.jsx';
import './Layout.css'

export default function Layout() {
  return (
    <div className="app-container">
        <SideBar />

        <div className="right-column">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    </div>
  );
}
