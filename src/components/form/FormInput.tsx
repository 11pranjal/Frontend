import {
  Controller,
  useController,
  type FieldValues
} from "react-hook-form";
import {type IInputProps, type IFormInputProps, type IGeneralInput,  } from "./form.contract";

export const FormInputControl = <T extends FieldValues>({
  name,
  type,
  placeholder,
  control,
  errMsg = "",
}: Readonly<IInputProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...field}
        className={`w-full p-2 rounded-lg border 
          ${errMsg ? `border-red-500` : " border-gray-600"}
       `}
      />
      <span className="mt-1 text-sm text-red-500"> {errMsg} </span>
    </>
  );
};



export const FormInput = ({
  name,
  type,
  placeholder,
  handler,
}: Readonly<IFormInputProps>) => {
  return (
    <>
      <input
        type={type}
        // id={name}
        {...handler(name)}
        placeholder={placeholder}
        className="w-full p-2 rounded-lg border border-gray-600 "
      />
    </>
  );
};

export const FormInputControl1 = ({
  name,
  type,
  placeholder,
  handler,
}: Readonly<IFormInputProps>) => {
  const { field } = useController({
    name: name,
    control: handler,
  });
  return (
    <>
      <input
        type={type}
        // id={name}
        placeholder={placeholder}
        {...field}
        className="w-full p-2 rounded-lg border border-gray-600 "
      />
    </>
  );
};

export const EmailInput = ({
  name,
  placeholder,
  handler,
}: Readonly<IGeneralInput>) => {
  return (
    <>
      <input
        type="email"
        id={name}
        {...handler(name)}
        placeholder={placeholder}
        className="w-full p-2 rounded-lg border border-gray-600 "
      />
    </>
  );
};

export const EmailInputControl = ({
  name,
  placeholder,
  handler,
}: Readonly<IGeneralInput>) => {
  return (
    <>
      <Controller
        name={name}
        control={handler}
        render={({ field }) => {
          return (
            <>
              <input
                type="email"
                {...field}
                placeholder={placeholder}
                className="w-full p-2 rounded-lg border border-gray-600 "
              />
            </>
          );
        }}
      ></Controller>
    </>
  );
};
