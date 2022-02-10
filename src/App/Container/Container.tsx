import { IFormValues, IProps } from "../../Model/Model";
import { useState } from "react";
import *as yup from 'yup';
import { useFormik } from "formik";
import { Calculate } from "./Calculate/Calculate";

export function Container() {

    const [area, setArea] = useState(0);

    const initial_values = {
        width: 0,
        height: 0
    } as IFormValues;

    const validation_schema = yup.object().shape({
        width: yup.number().min(0).required(),
        height: yup.number().min(0).required()
    });

    const submit_handler = (values: IFormValues) => {
        setArea(Calculate(values.width, values.height));
        validation_schema.isValid(values).then((Isvalid) => console.log(Isvalid));
    };

    const formik = useFormik({
        validationSchema: validation_schema,
        onSubmit: submit_handler,
        initialValues: initial_values
    });

    return {
        area,
        action_submit: formik.handleSubmit,
        handlechange: formik.handleChange,
        form_errors: formik.errors,
        form_data: formik.values
    } as IProps;
};