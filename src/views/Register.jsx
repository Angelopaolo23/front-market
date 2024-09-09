import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../my_context.js";
import { register } from "../services/authService.js";
import logo from "../arteviva_logo.png";
import { validateField, validateForm } from "../utils/validationUtils.js";

const Register = () => {
  const { setIsLoggedIn, setLoggedUser } = useContext(MyContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value, formData);
    setErrors((prev) => ({ ...prev, [name]: error }));
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
      const {
        data: { token, user },
      } = await register(formData);
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
                "Datos de registro inválidos. Por favor, verifica tu información.",
            });
            break;
          case 409:
            setErrors({
              email: "Este correo electrónico ya está registrado.",
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
            Registro
          </h1>
          {errors.general && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{errors.general}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Nombre de usuario
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Nombre de usuario"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-describedby="username-error"
              />
              {errors.username && (
                <p id="username-error" className="text-red-500 text-sm mt-1">
                  {errors.username}
                </p>
              )}
            </div>
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
                placeholder="correo@ejemplo.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
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
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirmar Contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-describedby="confirmPassword-error"
              />
              {errors.confirmPassword && (
                <p
                  id="confirmPassword-error"
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-pink-800 text-white rounded-lg py-2 px-4 font-medium hover:bg-pink-900 transition-colors disabled:opacity-50"
                aria-live="polite"
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-pink-800 hover:underline focus:outline-none"
            >
              Inicia sesión
            </button>
          </p>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Al registrarte, aceptas los Términos de Uso, la Política de
            Privacidad y la Política de Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
