import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Navigation() {
    return (
        <nav className='navigation'>
            <table>
                <tr>
                   <td><Link to="/explore">Explore</Link></td> 
                   <td><Link to="/problems">Problems</Link></td> 
                   <td><Link to="/interview">Interview</Link></td> 
                   <td><Link to="/contest">Contest</Link></td> 
                   <td><Link to="/discuss">Discuss</Link></td> 
                   <td><Link to="/store">Store</Link></td> 
                   <td><Link to="/signIn">Sign in</Link></td>
                   <td><Link to="/signup">Register</Link></td>
                </tr>
            </table>
        </nav>
    );
}

export default Navigation;