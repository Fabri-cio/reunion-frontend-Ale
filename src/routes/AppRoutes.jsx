import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import PublicLayout from "../components/layout/PublicLayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../components/layout/Dashboard";

//mostra si hay error
const errorPage = () => <div>Hubo un error al cargar la pagina</div>;
const loading = () => <div>Loading...</div>;

//login y demas
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const PasswordResetRequest = lazy(() =>
  import("../pages/auth/PasswordResetRequest")
);
const PasswordReset = lazy(() => import("../pages/auth/PasswordReset"));

//home
const Home = lazy(() => import("../pages/Home"));

//correspondencia
const CorrespondenciaList = lazy(() => import("../pages/CorrespondenciaList"));

const AppRoutes = () => {
  return (
    <ErrorBoundary FallbackComponent={errorPage}>
      <Suspense fallback={loading}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/request/password_reset"
              element={<PasswordResetRequest />}
            />
            <Route path="/password-reset/:token" element={<PasswordReset />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<Dashboard />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
