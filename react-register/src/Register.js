import React from "react";

class Register extends React.Component {
   render() {
      return (
         <div>
            <div class="row col-11 ms-5">
               <section class="col-5"></section>
               <section class=" col-5 pt-md-5 pb-md-5 mt-4 p-4 container-fluid bg-shadow">
                  <div class="text-center mb-4">
                     <h5>Create an account!</h5>
                  </div>
                  <div class=" input-group mb-2">
                     <input type="text" class=" rounded-pill form-control m-2" placeholder="First Name"></input>
                     <input type="text" class="rounded-pill form-control m-2" placeholder="Last Name"></input>
                  </div>
                  <div class="input-group mb-2">
                     <input type="text" class="rounded-pill form-control m-2" placeholder="Email"></input>
                  </div>
                  <div class=" input-group mb-2">
                     <input type="password" class=" rounded-pill form-control m-2" placeholder="Password"></input>
                     <input type="password" class="rounded-pill form-control m-2" placeholder="Repeat Password"></input>
                  </div>
                  <div class=" input-group text-center row pe-2 ms-1">
                     <p>Topik yang di minati</p>
                     <select class="form-select form-control rounded-pill">
                        <option value="">Pengembangan Dan Teknologi</option>
                        <option value="">Go Green</option>
                        <option value="">Sosial Dan Kemanusiaan </option>
                     </select>
                  </div>
                  <div class="input-group justify-content-center mt-3 col-4 line-p">
                     <button class="input-group-text  rounded-pill text-center mb-3 text-white bg-secondary" id="btn-color">
                        Register Account
                     </button>
                  </div>
                  <div class="input-group justify-content-center col-3 m-2">
                     <button class="input-group-text mt-2 me-1 rounded-pill text-center text-white bg-danger" id="btn-color">
                        <a href="" target="_blank" class="text-white">
                           <i class="bi-google me-1"></i> Register With Google
                        </a>
                     </button>
                     <button class="input-group-text  mt-2 rounded-pill text-center text-white  bg-primary " id="btn-color">
                        <a href="" target="_blank" class="text-white">
                           <i class="bi-facebook me-1"></i> Register With Facebook
                        </a>
                     </button>
                  </div>
                  <div class="text-center row me-2 ms-2 mt-3 line-p2">
                     <a href="" class="mt-2" target="_blank">
                        Forgot password?
                     </a>
                     <a href="" target="_blank">
                        already have account? login!
                     </a>
                  </div>
               </section>
            </div>
         </div>
      );
   }
}

export default Register;
