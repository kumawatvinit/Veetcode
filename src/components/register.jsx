import React from "react";
import Navigation from "./navigation";

function register() {
    return (
        <>
            <Navigation/>
            <h1>LeetCode</h1>
            
            <div id="register">
                <table>
                  <tr>
                    <td><input type="text" placeholder="Username" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="Password" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="Confirm password" /></td>
                  </tr>
                  <tr>
                    <td><input type="email" placeholder="E-mail address" /></td>
                  </tr>
                  <tr>
                    <td id="register-button"><button onclick="fn()">Register</button></td>
                  </tr>
                </table>
            </div>
        </>
    );
}

function fn() {
    alert("Registration successful!");
}

export default register;