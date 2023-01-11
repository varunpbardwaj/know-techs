import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Generic = () => {
  const schema = yup
    .object({
      username: yup.string().required("Please enter the first name"),
      age: yup
        .string()
        .required("Please enter the age")
        .test("age", "Age should be 18+", (age) => Number(age) >= 18),
      phoneNumber: yup
        .string()
        .min(10, "Please enter the 10 digit number")
        .max(10, "Please enter the 10 digit number"),
      address: yup.string().required("Please enter the address"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setValues(data);
  };

  const [values, setValues] = useState({});

  return (
    <>
      <form
        className="bg-slate-100 flex justify-center p-5"
        onSubmit={handleSubmit(onSubmit)}
        onReset={reset}
      >
        <div className="bg-white p-5 w-1/2 h-fit flex flex-col mr-5">
          <span className="text-xl font-bold mb-8 text-center">
            Tailwind CSS Form
          </span>
          <>
            <span className="text-sm font-bold mb-2">Username</span>
            <input
              {...register("username")}
              type="text"
              className="px-2 py-1 border border-slate-200 placeholder-slate-300 text-slate-600 rounded text-sm outline-none focus:outline-none focus:border-slate-400 mb-2"
            />
            <span className="text-xs font-bold mb-5 text-red-500 h-2">
              {errors.firstName?.message
                ? errors.firstName.message.toString()
                : " "}
            </span>
          </>
          <>
            <span className="text-sm font-bold mb-2">Age</span>
            <input
              {...register("age")}
              type="number"
              className="px-2 py-1 border border-slate-200 placeholder-slate-300 text-slate-600 rounded text-sm outline-none focus:outline-none focus:border-slate-400 mb-2"
            />
            <span className="text-xs font-bold mb-5 text-red-500 h-2">
              {errors.age?.message ? errors.age.message.toString() : " "}
            </span>
          </>
          <>
            <span className="text-sm font-bold mb-2">Phone Number</span>
            <input
              {...register("phoneNumber")}
              type="tel"
              className="px-2 py-1 border border-slate-200 placeholder-slate-300 text-slate-600 rounded text-sm outline-none focus:outline-none focus:border-slate-400 mb-2"
            />
            <span className="text-xs font-bold mb-5 text-red-500 h-2">
              {errors.phoneNumber?.message
                ? errors.phoneNumber.message.toString()
                : " "}
            </span>
          </>
          <>
            <span className="text-sm font-bold mb-2">Address</span>
            <textarea
              {...register("address")}
              rows={5}
              className="px-2 py-1 border border-slate-200 placeholder-slate-300 text-slate-600 rounded text-sm outline-none focus:outline-none focus:border-slate-400 mb-2 resize-none"
            />
            <span className="text-xs font-bold mb-5 text-red-500 h-2">
              {errors.address?.message
                ? errors.address.message.toString()
                : " "}
            </span>
          </>
          <div className="flex justify-end">
            <input
              type="reset"
              className="px-4 py-2 my-5 ml-5 bg-slate-200 rounded cursor-pointer hover:bg-slate-300"
              value="Cancel"
            />
            <input
              type="submit"
              className="px-4 py-2 my-5 ml-5 bg-sky-200 rounded cursor-pointer hover:bg-sky-300"
            />
          </div>
        </div>
        <pre className="w-1/2 whitespace-pre-wrap break-all border border-slate-300 p-5 h-fit">
          {JSON.stringify(values, undefined, 4)}
        </pre>
      </form>
    </>
  );
};

export default Generic;
