import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { PRIVATE_PATH, PUBLIC_PATH } from './constants/path';
import Home from './pages/home/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return (
      <Navigate to={PUBLIC_PATH.LOGIN} state={{ from: location }} replace />
    );
  }

  return children;
}

function UnRequireAuth() {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user) {
    return (
      <Navigate to={PRIVATE_PATH.HOME} state={{ from: location }} replace />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export const Router = () => {
  return (
    <Routes>
      <Route element={<UnRequireAuth />}>
        <Route path={PUBLIC_PATH.LOGIN} element={<Login />} />
        <Route path={PUBLIC_PATH.REGISTER} element={<Register />} />
      </Route>
      <Route
        path={PRIVATE_PATH.HOME}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
