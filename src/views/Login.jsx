import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../my_context.js";
import { loginUser } from "../services/authService.js";
import logo from "../arteviva_logo.png";
import { validateField, validateForm } from "../utils/validationUtils.js";

const Login = () => {
  const { setIsLoggedIn, setLoggedUser } = useContext(MyContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    const error = validateField(name, value, formData);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);

      console.log("Iniciando sesión con Google");
    } catch (err) {
      setErrors({
        general:
          "Error al iniciar sesión con Google. Por favor, intenta de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setIsLoading(true);
      setErrors({});
      const {
        data: { token, user },
      } = await loginUser(formData);

      if (token) {
        localStorage.setItem("token", token);
        console.log(user);
        console.log(token);
        setIsLoggedIn(true);
        setLoggedUser(user);
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            setErrors({
              general:
                "Datos de inicio de sesión inválidos. Por favor, verifica tu información.",
            });
            break;
          case 401:
            setErrors({
              general:
                "Credenciales incorrectas. Por favor, verifica tu email y contraseña.",
            });
            break;
          case 429:
            setErrors({
              general:
                "Demasiados intentos de inicio de sesión. Por favor, intenta de nuevo más tarde.",
            });
            break;
          default:
            setErrors({
              general:
                "Error en el servidor. Por favor, intenta de nuevo más tarde.",
            });
        }
      } else if (err.request) {
        setErrors({
          general: "Error de red. Por favor, verifica tu conexión a internet.",
        });
      } else {
        setErrors({
          general: "Ocurrió un error inesperado. Por favor, intenta de nuevo.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-50 pt-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center">
          <img
            src={logo}
            alt="Logo de Arte Viva"
            className="max-w-full max-h-64 object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Inicio de sesión
          </h1>
          {errors.general && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{errors.general}</span>
            </div>
          )}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full mb-4 flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Iniciar sesión con Google"
          >
            <img
              src="/api/placeholder/20/20"
              alt="Logo de Google"
              className="w-5 h-5 mr-2"
            />
            Continuar con Google
          </button>
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">o</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tucorreo@correo.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-describedby="password-error"
              />
              {errors.password && (
                <p id="password-error" className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                aria-label={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {/* SVG icons for show/hide password */}
              </button>
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-5/12 bg-pink-800 text-white rounded-lg py-2 px-4 font-medium hover:bg-pink-900 transition-colors disabled:opacity-50"
                aria-live="polite"
              >
                {isLoading ? "Cargando..." : "Iniciar sesión"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/register")}
                disabled={isLoading}
                className="w-5/12 bg-gray-200 text-gray-800 rounded-lg py-2 px-4 font-medium hover:bg-gray-300 transition-colors disabled:opacity-50"
              >
                Crear cuenta
              </button>
            </div>
          </form>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Al iniciar sesión, aceptas los Términos de Uso, la Política de
            Privacidad y la Política de Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
