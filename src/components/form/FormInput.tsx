export const FormInput = ({
  name,
  type,
  placeholder,
  handler,
}: Readonly<{
  name: string;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line
  handler: any
}>) => {
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

export const EmailInput = ({
  name,
  placeholder,
  handler,
}: Readonly<{
  name: string;
  placeholder?: string;
  handler: any
}>) => {
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