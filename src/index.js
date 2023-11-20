import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Landing from './Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from './Notfound';
import User from './User';
import Todo from './props/Todo';
import Useparam from './Useparam';
import Oneproduct from './Oneproduct';
import Profile from './Profile';
import Notification from './Notification';
import Fetch from './HTTPMetod/Fetch';
import ViewProduct from './HTTPMetod/ViewProduct';
import Server from './Server';
import FormValidation from './FormValidation';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Count from './Count';
import Form from './Form';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <Routes>
         <Route path='/app' element={<App/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/*' element={<Notfound/>}/>
         {/* <Route path='/land/:id' element={<Landing/>}/> */}
         <Route path='/user' element={<User/>}>
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/notify' element={<Notification/>}/>
         </Route>
         <Route path='/todo' element={<Todo/>}/>
         <Route path='/param' element={<Useparam/>} />
         <Route path='/one/:i' element={<Oneproduct/>}/>
         <Route path='/fetch' element={<Fetch/>}/>
         <Route path='/view/:id' element={<ViewProduct/>}/>
         <Route path='/server' element={<Server/>}/>
         <Route path='/form' element={<FormValidation/>}/>
         <Route path='/count' element={<Count/>}/>
         <Route path='/for' element={<Form/>}/>



      
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
