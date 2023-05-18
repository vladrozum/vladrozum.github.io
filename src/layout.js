import { Outlet, Link } from "react-router-dom";

export default function Layout(){
  return (
    <>
      <nav >
        <ul className="nav">
          <li>
            <Link to="/" className="urls">Тести</Link>
          </li>
          <li>
            <Link to="/ChatGPT" className="urls">Питання картам</Link>
          </li>
          <li>
            <Link to="/Store" className="urls">Магазинчик</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};