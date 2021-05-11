//imporing Login Page Css
import './LoginPage.css'

//Creating Login page
function login()
{
    return(
        <>
       <form  action="" method="GET">
           <div className="root-tag">
            
<img className="user" src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"></img>
<h1>Username</h1>
<input type="email" name="email" placeholder="Enter email..." required ></input>
<h1>Password</h1>
<input  type="password" name="password" placeholder="*******" required></input>
<br></br><br></br>
<input id="asub" type="submit" value="Login"></input>
<br></br><br></br>
<a className="an" href="ForgotPassword.html">ForgotPassword</a>
<br></br>
<br></br>
<a className="an" id="signUp" href="Signin.html">New User?</a>
</div>
</form>
        </>
    )
}
export default login;