import React from "react";
import Navigation from "./navigation";

function SignIn() {
    return (
        <>
        <Navigation/>
            
            <div id="sign-in">
                <table>
                  <thead>
                    <th><h1>Sign In</h1></th>
                  </thead>
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