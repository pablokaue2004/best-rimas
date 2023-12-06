import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    nome: Yup.string().required("É necessário de um nome"),
    email: Yup.string()
      .email("Email inválido :(")
      .required("É preciso digitar um email"),
    senha: Yup.string().required("É preciso digitar uma senha"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
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
            htmlFor="nome"
          >
            Nome
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Ex: Pablo Kauê"
            {...formik.getFieldProps("nome")}
            className={`tw-shadow focus:tw-border-yellow-500 tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-100 tw-bg-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline ${
              formik.touched.nome && formik.errors.nome
                ? "tw-border-red-500"
                : ""
            }`}
          />
          {formik.touched.nome && formik.errors.nome && (
            <div className="tw-text-red-500 tw-text-xs tw-mt-2">
              {formik.errors.nome}
            </div>
          )}
        </div>
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
            placeholder="Ex: betsrimas@bets.com"
            {...formik.getFieldProps("email")}
            className={`tw-shadow focus:tw-border-yellow-500 tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-100 tw-bg-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline ${
              formik.touched.email && formik.errors.email
                ? "tw-border-red-500"
                : ""
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="tw-text-red-500 tw-text-xs tw-mt-2">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="tw-mb-6">
          <label
            className="tw-block tw-text-yellow-500 tw-text-sm tw-font-bold tw-mb-2"
            htmlFor="senha"
          >
            Senha
          </label>
          <input
            type="password"
            id="senha"
            placeholder="******************"
            {...formik.getFieldProps("senha")}
            className={`tw-shadow focus:tw-border-yellow-500 tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-100 tw-bg-gray-700  tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline ${
              formik.touched.senha && formik.errors.senha
                ? "tw-border-red-500"
                : ""
            }`}
          />
          {formik.touched.senha && formik.errors.senha && (
            <div className="tw-text-red-500 tw-text-xs">
              {formik.errors.senha}
            </div>
          )}
        </div>
        <div className="tw-flex tw-items-center tw-justify-between">
          <button
            className="tw-bg-yellow-500 hover:tw-bg-yellow-600 tw-text-gray-800 tw-duration-300 tw-font-bold tw-py-2 tw-px-4 tw-rounded focus:tw-outline-none focus:tw-shadow-outline"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <p className="tw-text-center tw-text-gray-500 tw-text-xs">
        &copy; Bets rima {new Date().getFullYear()}. Todos os direitos
        reservados.
      </p>
    </div>
  );
};

export default Register;
