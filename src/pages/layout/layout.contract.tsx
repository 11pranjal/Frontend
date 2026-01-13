import {type Dispatch, type SetStateAction} from 'react'
export interface ILayoutData {
    pageTitle: string;
    subTitle: string;
    btnTxt: string;
    btnLink: string;
  }
  export interface IOutletContext {
    setLayoutData: Dispatch<SetStateAction<ILayoutData>>;
  }