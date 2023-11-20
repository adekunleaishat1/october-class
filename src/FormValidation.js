import React ,{useEffect,useState}from "react";
import { useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";
import axios from "axios";
import { fetchsuccessful, fetchfailed,fetching } from "./Redux/Userslice";
import { useDispatch,useSelector } from "react-redux";

const FormValidation = () => {
  const dispath = useDispatch()
  //  const value = useSelector((state)=>state.Userslice.alluser)
   const {isfetching, alluser, fetcherror} = useSelector((state)=> state.Userslice)
   console.log(isfetching);
   console.log(alluser);
   console.log(fetcherror);
  //  console.log(value);
    const [data, setdata] = useState([])
    useEffect(() => {
       dispath(fetching())
      axios.get("http://localhost:5678/post") 
      .then((res)=>{
        console.log(res);
        dispath(fetchsuccessful(res.data))
        setdata(res.data)
        console.log(data);
      }).catch((err)=>{
        console.log(err);
        dispath(fetchfailed(err))
      })
    }, [])

    
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .min(8, "Username is too short")
        .required("Username cannot be empty"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email cannot be empty"),
      password: yup
        .string()
        .min(5, "Password is too short")
        .required("password cannot be empty"),
    }),
    onSubmit: (value) => {
       console.log(value);
       const user = data.find(some=> some.email == value.email)
       console.log(user);
       if (user) {
         alert("User already exist")
       }else{
        axios.post("http://localhost:5678/post", value)
        .then((res)=>{
         console.log(res.data);
        }).catch((err)=>{
         console.log(err);
        })
              }
      
      
    },
  });
  console.log(formik);
  console.log(formik.errors);
  console.log(formik.touched);
  return (
    <div>
      <form className="w-50 p-5" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className={formik.touched.username && formik.errors.username ? "form-control is-invalid" : "form-control"}
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          {formik.touched.username? <p className="text-danger">{formik.errors.username}</p> : ""}
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
          {formik.touched.email? <p className="text-danger">{formik.errors.email}</p>: ""}
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
          {formik.touched.password? <p className="text-danger">{formik.errors.password}</p> : ""}

        </div>
        <div className="mt-3 text-center" >
            <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default FormValidation;
