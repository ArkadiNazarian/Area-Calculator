import { FormikErrors } from "formik";

export interface IProps {
    area: number;
    action_submit:()=>void,
    handlechange:()=>void,
    form_errors:FormikErrors<IFormValues>,
    form_data:IFormValues
}

export interface IFormValues {
    width: number;
    height: number;
}