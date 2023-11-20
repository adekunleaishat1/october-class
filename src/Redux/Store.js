import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import Userslice  from "./Userslice";


export default configureStore({
   reducer:{
        counter,
        Userslice
   },
})