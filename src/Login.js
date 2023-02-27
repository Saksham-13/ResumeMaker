import './login.css';

function get(u,p) {

  
}
function res(u,p){

}
function Login() {
    return (
      <>
      <div class="container">
			<form action=""> 
				<div class="inner"> 
          <div class='fields'>
          <label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
            </div>
            <div class='fields'>
            <label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
			
            </div>
            <div class='fields'>
            <button type="submit">Login</button>
            
            </div>

          
				
					
				
        </div>  
			</form>
		</div>
    <div class="gray asap m-l3">
  <form class="">
    <div class="flex flex-column md-flex-row max-w-90pc mx-auto">
      <input type="email" class="input m-2" placeholder="Email address"/>
      <input type="password" class="input m-2" placeholder="Password"/>
      <button type="submit" class="button m-2">Submit</button>
    </div>
  </form>
</div>
      </>
    );
  }
  
  export default Login;
  