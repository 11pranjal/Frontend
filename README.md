# React state and props
## Hook
 - special function in a react application that gives us the feature of react
 - hook funtion starts with `use` keyword
 - hooks can only be called inside the component

 ### State Vs Effect hook
 - State hook
    - to create a data inside the component we need to use state hook
    - if any state of component gets updated/set/changed the component will remount/rerender

    ```jsx
      import {useState} from "react";

      function Todo(){
        const [data,setData]=useState<DataType>(<defaultValue>)

        return(<>jsx</>)
      }
    ```
  - Effect Hook
   - also known as sideEffect hook
   - this hook is reloaded/called/mounted on any state update/change depending on usages
# Frontend
