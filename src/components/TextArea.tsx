import { Input, Textarea } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

const TextArea = ({
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
            <Textarea {...field} minRows={5} className="mb-2" />
          </Input.Wrapper>
        )}
      />
    </>
  );
};

export default TextArea;
