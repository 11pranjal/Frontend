import { type FieldValues, type Path, type Control } from "react-hook-form";

export interface IInputProps<T extends FieldValues> {
    name: Path<T>;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    control: Control<T>;
    errMsg?: string;
  }

  export interface IFileInputProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errMsg?: string;
    isMultiple?: boolean;
  }

  export interface ISingleListItem{
  label:string,
  value :string
  }

export interface ISelectProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    errMsg?: string;
    options:Array<ISingleListItem>
  }


  export interface IGeneralInput {
    name: string;
    placeholder?: string;
    // eslint-disable-next-line
    handler: any;
  }
  export interface IFormInputProps extends IGeneralInput {
    type?: string;
  }