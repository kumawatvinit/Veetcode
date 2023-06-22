import React from "react";

function SignIn() {
    return (
        <>
            <h1>Sign In</h1>
            
            <div id="sign-in">
                <table>
                  <tr>
                    <td><input type="email" placeholder="Username or E-mail" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="password" /></td>
                  </tr>
                  <tr>
                    <td id="sign-in-button"><button onclick="fn()">Sign in</button></td>
                  </tr>
                </table>
            </div>
        </>
    );
}

export default SignIn;