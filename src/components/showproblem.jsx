import React from "react";
import "../App.css";
import {BiLike} from "react-icons/bi";
import {BiDislike} from "react-icons/bi";
import {BiBookmarkPlus} from "react-icons/bi";
import {BsBookmarkCheckFill} from "react-icons/bi";

function Showproblem() {
    return (
        <>
            {/* <div className="problem">
                <h1>Problem</h1>
                <p>Problem statement</p>
                <p>Input</p>
                <p>Output</p>
                <p>Constraints</p>
                <p>Sample Input</p>
                <p>Sample Output</p>
                <p>Explanation</p>
            </div> */}

            {/* make a table of above div */}
            <div className="problem">
                <table>
                    <thead>
                        <th>
                            <th>Problem</th>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td> difficulty</td>
                            <td><BiLike/></td>
                            <td><BiDislike/></td>
                            <td><BiBookmarkPlus/></td>
                            <td><BsBookmarkCheckFill/></td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showproblem;