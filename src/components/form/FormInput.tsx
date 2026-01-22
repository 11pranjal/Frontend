import {
  Controller,
  useController,
  type FieldValues
} from "react-hook-form";
import {type IInputProps, type IFormInputProps, type IGeneralInput, type ISelectProps, type ISingleListItem, type IFileInputProps,  } from "./form.contract";
import type { BaseSyntheticEvent } from "react";

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

export const SelectInput = <T extends FieldValues>({
  name,
  control,
  options,
  errMsg = "",
}: Readonly<ISelectProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <select
        {...field}
        className={`w-full p-2 rounded-lg border 
          ${errMsg ? `border-red-500` : " border-gray-600"}
       `}
      >
      <option value="">-- Select any one --</option>
      {
        options && options.map((row:ISingleListItem)=>(
          <option value={row.value} key={row.value}>{row.label}</option>
        ))
      }

      </select>
      <span className="mt-1 text-sm text-red-500"> {errMsg} </span>
    </>
  );
};

export const FileInput = <T extends FieldValues>({
  name,
  control,
  errMsg = "",
  isMultiple = false,
}: Readonly<IFileInputProps<T>>) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <input
        type={'file'}
        multiple={isMultiple}
       onChange={(e:BaseSyntheticEvent)=>{
        const files=Object.values(e.target.files);
       if (isMultiple){
        field.onChange(files);
       }else{
        field.onChange(files[0]);
       }
       }}
        className={`w-full p-2 rounded-lg border 
          ${errMsg ? `border-red-500` : " border-gray-600"}
       `}
      />
      <span className="mt-1 text-sm text-red-500"> {errMsg} </span>
    </>
  );
};