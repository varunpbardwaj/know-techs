import { useState } from "react";
import { MantineProvider, Input, TextInput, Textarea } from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Library = () => {
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

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      age: "",
      phoneNumber: "",
      address: "",
    },
  });

  const onFormSubmit = (data: any) => {
    setValues(data);
  };

  const onFormReset = () => {
    reset();
  };

  const [values, setValues] = useState({});

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <form
        className="bg-slate-100 flex justify-center p-5"
        onSubmit={handleSubmit(onFormSubmit)}
        onReset={onFormReset}
        noValidate
      >
        <div className="bg-white p-5 w-1/2 h-fit flex flex-col mr-5">
          <span className="text-xl font-bold mb-8 text-center">
            Mantine Form
          </span>
          <>
            <span className="text-sm font-bold mb-2">Username</span>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input.Wrapper
                  error={errors.username?.message}
                  className="mb-5"
                >
                  <TextInput {...field} className="mb-2" />
                </Input.Wrapper>
              )}
            />
          </>
          <>
            <span className="text-sm font-bold mb-2">Age</span>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <Input.Wrapper error={errors.age?.message} className="mb-5">
                  <TextInput {...field} className="mb-2" />
                </Input.Wrapper>
              )}
            />
          </>
          <>
            <span className="text-sm font-bold mb-2">Phone Number</span>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input.Wrapper
                  error={errors.phoneNumber?.message}
                  className="mb-5"
                >
                  <TextInput {...field} className="mb-2" />
                </Input.Wrapper>
              )}
            />
          </>
          <>
            <span className="text-sm font-bold mb-2">Address</span>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input.Wrapper error={errors.address?.message} className="mb-5">
                  <Textarea {...field} minRows={5} className="mb-2" />
                </Input.Wrapper>
              )}
            />
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
    </MantineProvider>
  );
};

export default Library;
