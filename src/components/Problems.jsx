import React from "react";
import { useState } from 'react'
import Navigation from "./navigation";

const problems1= [
    {
        title: "1. Two Sum",
        acceptance: "50%",
        difficulty: "Easy",
    },
    {
        title: "2. Add Two Numbers",
        acceptance: "40.6%",
        difficulty: "Medium",
    },
    {
        title: "3. Longest Substring Without Repeating Characters",
        acceptance: "33.8%",
        difficulty: "Medium",
    },
    {
        title: "4. Median of Two Sorted Arrays",
        acceptance: "36.5%",
        difficulty: "Hard",
    },
    {
        title: "9. Palindrome Number",
        acceptance: "53.8%",
        difficulty: "Easy",
    },
  ];
  
  const problems2 = [
    {
        title: "43. Multiply Strings",
        acceptance: "39.3%",
        difficulty: "Medium",
    },
    {
        title: "44. Wildcard Matching",
        acceptance: "27.0%",
        difficulty: "Hard",
    },
    {
        title: "45. Jump Game II",
        acceptance: "39.9%",
        difficulty: "Medium",
    },
    {
        title: "46. Permutations",
        acceptance: "76.0%",
        difficulty: "Medium",
    },
    {
        title: "47. Permutations II",
        acceptance: "57.5%",
        difficulty: "Medium",
    },
    {
        title: "48. Rotate Image",
        acceptance: "71.4%",
        difficulty: "Medium",
    },
    {
        title: "49. Group Anagrams",
        acceptance: "66.8%",
        difficulty: "Medium",
    },
    {
        title: "50. Pow(x, n)",
        acceptance: "33.2%",
        difficulty: "Medium",
    },
  ];


  function Problems() {

    const [problems, setProblems] = useState(problems1);
  
    return (
      <>
      <Navigation/>
  
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>acceptance</th>
              <th>Difficulty</th>
            </tr>
          </thead>

          <tbody>
            {problems.map(problem => <ProblemStatement
                {...problem}
             />)}
          </tbody>
        </table>
      </div>
      
      <div id="page-buttons">
          <button onClick={() => {
              setProblems(problems => problems1);
          }}>1</button>
          <button onClick={() => {
            setProblems(problems => problems2);
          }}>2</button>
      </div>
      
      </>
    )
  }
  
  function ProblemStatement({title, acceptance, difficulty})
  {
    return (
      <>
        <tr>
          <td>{title}</td>
          <td>{acceptance}</td>
          <td style={{color: difficulty==="Hard"? "rgba(255,55,95,1)": (difficulty==="Easy"? "rgb(0, 184, 163)": "rgb(255, 192, 30)")}}>{difficulty}</td>
        </tr>
      </>
    )
  }
  
export default Problems;