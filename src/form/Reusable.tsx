import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

const Reusable = () => {
  const schema = yup
    .object({
      username: yup.string().required("Please enter the username"),
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

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      age: "",
      phoneNumber: "",
      address: "",
    },
  });

  const onFormSubmit = (data: any) => {
    alert();
    setValues(data);
  };

  const onFormReset = () => {
    alert();
    methods.reset();
  };

  const [values, setValues] = useState({});

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <FormProvider {...methods}>
        <form
          className="bg-slate-100 flex justify-center p-5"
          onSubmit={methods.handleSubmit(onFormSubmit)}
          onReset={onFormReset}
          noValidate
        >
          <div className="bg-white p-5 w-1/2 h-fit flex flex-col mr-5">
            <span className="text-xl font-bold mb-8 text-center">
              Reusable Form
            </span>
            <TextInput label="Username" name="username" />
            <TextInput label="Age" name="age" />
            <TextInput label="Phone Number" name="phoneNumber" />
            <TextArea label="Address" name="address" />
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
      </FormProvider>
    </MantineProvider>
  );
};

export default Reusable;
