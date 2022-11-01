import Profile from "./pages/profile";
import {
  Route, Routes, useNavigate, useLocation, Navigate,
} from 'react-router-dom';
import Menu from "./pages/menu";
import MenuDetails from "./pages/menuDetails";
import Cart from "./components/Cart";
import {useSelector} from "react-redux";
import Payment from "./pages/payment";
import OrderDetails from "./pages/order_details";
import Order from "./pages/order";
import Home from "./pages/home";
import Games from "./pages/games";
import Login from "./pages/login";
import { useEffect } from "react";
import Cookies from 'js-cookie';

function App() {
  const showCart = useSelector((state) => state.cartUiState.cartIsVisible);
  return (
    <div className="App">
      {showCart && <Cart></Cart>}
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/menu" element={<Menu></Menu>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />

        <Route
          index
          path="/profile"
          element={(
            <RequireAuth redirectTo="/login">
              <Profile></Profile>
            </RequireAuth>
          )}
        />

        <Route
          index
          path="/menu/:id"
          element={(
            <RequireAuth redirectTo="/login">
              <MenuDetails/>
            </RequireAuth>
          )}
        />

        <Route
          index
          path="/payment"
          element={(
            <RequireAuth redirectTo="/login">
              <Payment></Payment>
            </RequireAuth>
          )}
        />

        <Route
          index
          path="/order/:id"
          element={(
            <RequireAuth redirectTo="/login">
              <OrderDetails/>
            </RequireAuth>
          )}
        />

        <Route
          index
          path="/order"
          element={(
            <RequireAuth redirectTo="/login">
              <Order/>
            </RequireAuth>
          )}
        />

        <Route
          index
          path="/game"
          element={(
            <RequireAuth redirectTo="/login">
              <Games/>
            </RequireAuth>
          )}
        />
      </Routes>
    </div>
  );
}

const RequireAuth = ({ redirectTo, children }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  useEffect(() => {
    const id = Cookies.get('token');
    if (!id) {
      navigate(redirectTo, { replace: true, state: { from: loc.pathname } });
    }
  }, []);
  return children;
};

export default App;
