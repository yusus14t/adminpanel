import React, { Component } from 'react'
import Navbar from '../components/Navbar'


export default class Login extends Component {
                 constructor(props) {
                   super(props);
                   this.state = { userName: "", password: "" };
                   
                 }
               
                 render() {
                  const handleLogin = () => {
                    if(this.state.userName && this.state.password && this.state.password === this.state.userName){
                      localStorage.setItem("userName",JSON.stringify(this.state.userName))
                      
                      alert("login")
                      window.location.replace("/");
                    }
                    else{
                      alert("enter valid credential");
                    }
                    console.log(this.state);
                  };
                   return (
                     <>
                       {/* <Navbar/> */}
                       <div style={{ backgroundColor: "#4e657a" }}>
                         <div class="container mt-6 ">
                           <div class="row">
                             <div class="col-12 mx-auto mt-8  loginContainer">
                               <div class=" h-auto kk ">
                                 <div class="row">
                                   <div class="col-12 w-75 text-center">
                                     <h2 class="text-light logintitle  mb-4">
                                       Welcome to Dashboard, Login
                                     </h2>
                                   </div>
                                 </div>
                                 <div class="row mt-2">
                                   <div class="col-12">
                                     <div
                                       action="index.html"
                                       method="post"
                                       class="tm-login-form"
                                     >
                                       <div class="form-group">
                                         <label for="username">Username</label>
                                         <input
                                           name="username"
                                           type="text"
                                           class="form-control validate"
                                           id="username"
                                           required=""
                                           onBlur={(e) => {
                                             this.setState({
                                               userName: e.target.value,
                                               password:this.state.password
                                             });
                                           }}
                                         />
                                       </div>
                                       <div class="form-group mt-3">
                                         <label for="password">Password</label>
                                         <input
                                           name="password"
                                           type="password"
                                           class="form-control  validate"
                                           id="password"
                                           required
                                           onBlur={(e) => {
                                             this.setState({
                                               password: e.target.value,
                                               userName: this.state.userName
                                             });
                                           }}
                                         />
                                       </div>
                                       <div class="form-group mt-4">
                                         <button
                                           type="submit"
                                           class="btn btn-primary btn-block text-uppercase"
                                           onClick={handleLogin}
                                         >
                                           Login
                                         </button>
                                       </div>
                                       
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </>
                   );
                 }
               }
