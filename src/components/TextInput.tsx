import { Input, TextInput as Text } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

const TextInput = ({
  name,
  label,
  ...other
}: {
  name: string;
  label: string;
}) => {
  const { control } = useFormContext();

  return (
    <>
      <span className="text-sm font-bold mb-2">{label}</span>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input.Wrapper error={error?.message} className="mb-5">
            <Text {...field} {...other} className="mb-2" />
          </Input.Wrapper>
        )}
      />
    </>
  );
};

export default TextInput;
