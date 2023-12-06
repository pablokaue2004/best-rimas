import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido :(")
      .required("É preciso digitar um email"),
    password: Yup.string().required("É preciso digitar uma senha"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/home");
      console.log(values);
    },
  });

  return (
    <div className="tw-w-full">
      <form
        className="tw-rounded tw-px-8 tw-pt-6 tw-pb-8 tw-mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="tw-mb-4">
          <label
            className="tw-block tw-text-yellow-500 tw-text-sm tw-font-bold tw-mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Username"
            {...formik.getFieldProps("email")}
            className={`tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-100 tw-bg-gray-700 tw-leading-tight focus:tw-border-yellow-500 focus:tw-outline-none focus:tw-shadow-outline ${
              formik.touched.email && formik.errors.email
                ? "tw-border-red-500"
                : ""
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="tw-text-red-500 tw-mt-2 tw-text-xs">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="tw-mb-6">
          <label
            className="tw-block tw-text-yellow-500 tw-text-sm tw-font-bold tw-mb-2"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="******************"
            {...formik.getFieldProps("password")}
            className={`tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-100 focus:tw-border-yellow-500  tw-bg-gray-700 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline ${
              formik.touched.password && formik.errors.password
                ? "tw-border-red-500"
                : ""
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="tw-text-red-500 tw-text-xs">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="tw-flex tw-items-center tw-justify-between">
          <button
            className="tw-bg-yellow-500 hover:tw-bg-yellow-600 tw-text-gray-800 tw-duration-300 tw-font-bold tw-py-2 tw-px-4 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
            type="submit"
          >
            Entrar
          </button>
          <a
            className="tw-inline-block tw-align-baseline tw-font-bold tw-text-sm tw-text-yellow-500 hover:tw-text-yellow-800"
            href="#"
          >
            Esqueceu sua senha?
          </a>
        </div>
      </form>
      <p className="tw-text-center tw-text-gray-500 tw-text-xs">
        &copy; Bets rima {new Date().getFullYear()}. Todos os direitos
        reservados.
      </p>
    </div>
  );
};

export default Login;
