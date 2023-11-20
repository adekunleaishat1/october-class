import React from 'react'
import { useFormik } from 'formik'
import *  as yup from 'yup'

const Form = () => {
    const formik = useFormik({
        initialValues:{
            username: "",
            email: "",
            password: "",
        },
        validationSchema:yup.object({
            username:yup.string().min(6, "username is too short").required("username is required"),
            email:yup.string().email().required("email is required"),
            password:yup.string().min(5, "password is too short").required("password is required")
        }),
        onSubmit:(value) =>{
          console.log(value);
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
  return (
    <div>
         <form className="w-50 p-5" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.touched.username ? <p>{formik.errors.username}</p> : ""}
          
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
        {formik.touched.email ? <p>{formik.errors.email}</p> : ""}
         
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            name="password"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
            type="password"
          />
          {formik.touched.password ? <p>{formik.errors.password}</p> : ""}
         

        </div>
        <div className="mt-3 text-center" >
            <button type='submit' className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Form