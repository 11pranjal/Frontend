export const FormInput=({name,type,placeholder}:Readonly<{name:string,type?:string,placeholder?:string}>)=> {
return(
    <>
    <input 
         type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 rounded-lg border border-gray-600 "
                         />
    </>
)
}

export const EmailInput=({name,placeholder}:Readonly<{name:string,placeholder?:string}>)=> {
return(
    <>
    <input 
                     type="email"
                      id={name}
                      name={name}
                       placeholder={placeholder}
                        className="w-full p-2 rounded-lg border border-gray-600 "
                         />
    </>
)
}