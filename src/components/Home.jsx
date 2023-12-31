import React from "react";
import "../App.css";

import Navigation from "./navigation";
import Showproblem from "./showproblem";

const announcements = [
    {
        title: "Biweekly Contest 107",
        time: new Date("2023-06-24 20:00:00"),
    },
    {
        title: "Weekly Contest 351",
        time: new Date("2023-06-25 08:00:00"),
    }
];

const List = [
    {
        id: 124322,
        user: "t747",
        title: "From 1430 to Guardian (2239) - My One Year Journey!",
        time: new Date("2023-06-21 15:32:25"),
        content: `After 59 contests I have finally achieved my goal of becoming a Guardian on Leetcode! I have spent hundreds of hours on this platform practicing problems, and the feeling of achievement couldn't be greater. Here is an overview of my journey to Guardian.

        Discovering / Beginning Leetcode
        I discovered Leetcode in December of 2021, while I was taking an introduction to programming class. I tried out some easy problems, but really put the platform on hold until the summer started. During the summer, I decided I wanted to improve my algorithmic programming skills, and decided to try to complete the Blind 75 Leetcode problems. I tried to do one a day. During the first month and a half, I would try 1-2 hours before reading an editorial or watching a video on the problem. For the rest of the duration, I tried to complete the problem without any help, only giving up after multiple days. By the end of the summer, I could solve a good amount of medium problems in under an hour.
        
        My first Contest
        By the end of the summer, I was confident enough in my programming skills to set 2 goals: To do (almost) every daily problem without any help, and to achieve top 10% in contest rating. I participated in my first contest in August of 2022 and slowly solved 1 problem, achieving an initial rating of 1440.
        
        1400 - 1600
        My rating actually went down the next contest, mostly because I carelessly submitted and racked up penalty time on an easy problem. I knew I could do better, and on my third contest, solved 3 problems for the first time, placing in the 7000 and gaining rating for the first time. I had finished the Blind 75 by now, and my practice consisted of the daily problem and 1-3 easy/medium dynamic programming tagged problems a day. I felt I didn't really understand DP at all, so I committed to solving every medium DP problem on Leetcode. I got faster at solving problems in general, and was much more careful when submitting in contests so that I would only get 2-3 penalties per contest. Solving 2 problems relatively quickly and occasionally getting the 3rd one was enough to increase my rating to 1600 by mid September.
        
        1600 - 1800
        It was surprisingly easier for me to go from 1600 to 1800 than it was to go from 1400 to 1600. By October I was still doing DP problems every day but was much more confident in them, and began looking at medium graph problems as I still really didn't understand BFS. I learned basic graph topics like topological ordering and BFS, which might have been the missing piece for me to solve 3 problems consistently as I began to solve 3/4 problems more often than 2/4. I felt like medium graph problems were much easier to conceptually grasp than DP, which made the learning curve much quicker. By now I also achieved my goal of top 10% in contest rating, but I felt I could go farther!
        
        1800 - 2000
        Here it started to get hard again as I almost always had to solve 3 problems to even break even on rating in contests. By now I could solve most mediums in 30 minutes, and had begun to start trying out hard problems with a little success. I still could not solve them consistently or quickly, but I felt like I was at the level where I could at least comprehend the problem statements and techniques. I started practicing less on medium problems, and instead would spend a lot more time on hard problems. After about 2 months of practicing hard problems, I felt like I had a chance to solve some of them during contests. By good luck, I was able to solve 4/4 problems very quickly on a particular contest, gaining nearly 100 rating points to soar past 2000!
        
        2000-2100
        This rating range was probably my greatest struggle. It was now March of 2023, and I had to give more priority to studying for my final exams in May than Leetcode. I continued to do the daily problem, as well as an occasional hard problem as well as contests. But my full attention wasn't on programming, and it showed in my rating. While I usually had the idea for some problems, I had a hard time implementing them quickly as I just wasn't practicing programming much during this period. I came up with solutions slower and spent a long time debugging problems I used to be able to visualize quickly. My rating fluctuated between 2000 and 2100 during this period until my exams finished, allowing me to devote my full attention to programming again.
        
        2100 - 2200 (Guardian!)
        It took a few weeks to fully get my mind back into programming, but by the end of May I was feeling sharp again and could visualize problems properly again. I have been working on hard problems every day again and feel like I could solve at least 50% of them during contests. I have had my best performance ever in the past 2 weeks, having top 200 finishes 2 weeks in a row. Now I believe the sky is the limit, as there are less and less problems that I cannot solve.
        
        Final Thoughts
        This one year journey has been extremely rewarding and I am so much more confident in my programming skills now than I was one year ago. I believe that almost anyone with adequate dedication can reach Guardian. There will be plateaus and even periods of decline, but you will always continue to improve with meaningful practice. Whether you are passionate in competitive programming or simply trying to brush up on your algorithmic skills, I wish you good luck in your problem solving!`,
    },
    {
        id: 453233,
        user: "mayankr053",
        title: "Alphagrep securities",
        time: new Date("2023-06-22 20:07:25"),
        content: `Education :- M.Tech tier 1
        Prior Experience :- Intel
        Current comp :- 27 lakhs
        YOE :- 4
        Company :- Alphagrep securities
        Level :- Senior Analyst (c++ developer)
        Salary :- 50 lakhs + 10 lakhs guarenteed bonus + 5 lakhs joining`,
    },
    {
        id: 324535,
        user: "Anonymous User",
        title: "Saas labs SDE-1",
        time: new Date("2023-06-22 17:19:03"),
        content: `Education : BTech from tier 1 college
        Date of offer : September,2022
        Date of Joining: June,2023
        Type : On campus
        Experience: 0 years
        Company : Saas Labs
        Title: SDE-1
        Base : 15L
        Joining Bonus: 1.5L
        Retention Bonus: 3.5L
        ESOPS: 5L
        Total Compensation : 25L
        First Year Compensation : 16.5L
        Annual Bonus: Aditional to the Compensation
        Benefits :100% Remote,standard employee benefits`,
    },
    {
        id: 453233,
        user: "mayankr053",
        title: "Alphagrep securities",
        time: new Date("2023-06-22 20:07:25"),
        content: `Education :- M.Tech tier 1
        Prior Experience :- Intel
        Current comp :- 27 lakhs
        YOE :- 4
        Company :- Alphagrep securities
        Level :- Senior Analyst (c++ developer)
        Salary :- 50 lakhs + 10 lakhs guarenteed bonus + 5 lakhs joining`,
    },
    {
        id: 324535,
        user: "Anonymous User",
        title: "Saas labs SDE-1",
        time: new Date("2023-06-22 17:19:03"),
        content: `Education : BTech from tier 1 college
        Date of offer : September,2022
        Date of Joining: June,2023
        Type : On campus
        Experience: 0 years
        Company : Saas Labs
        Title: SDE-1
        Base : 15L
        Joining Bonus: 1.5L
        Retention Bonus: 3.5L
        ESOPS: 5L
        Total Compensation : 25L
        First Year Compensation : 16.5L
        Annual Bonus: Aditional to the Compensation
        Benefits :100% Remote,standard employee benefits`,
    },
    {
        id: 453233,
        user: "mayankr053",
        title: "Alphagrep securities",
        time: new Date("2023-06-22 20:07:25"),
        content: `Education :- M.Tech tier 1
        Prior Experience :- Intel
        Current comp :- 27 lakhs
        YOE :- 4
        Company :- Alphagrep securities
        Level :- Senior Analyst (c++ developer)
        Salary :- 50 lakhs + 10 lakhs guarenteed bonus + 5 lakhs joining`,
    },
    {
        id: 324535,
        user: "Anonymous User",
        title: "Saas labs SDE-1",
        time: new Date("2023-06-22 17:19:03"),
        content: `Education : BTech from tier 1 college
        Date of offer : September,2022
        Date of Joining: June,2023
        Type : On campus
        Experience: 0 years
        Company : Saas Labs
        Title: SDE-1
        Base : 15L
        Joining Bonus: 1.5L
        Retention Bonus: 3.5L
        ESOPS: 5L
        Total Compensation : 25L
        First Year Compensation : 16.5L
        Annual Bonus: Aditional to the Compensation
        Benefits :100% Remote,standard employee benefits`,
    },
    {
        id: 453233,
        user: "mayankr053",
        title: "Alphagrep securities",
        time: new Date("2023-06-22 20:07:25"),
        content: `Education :- M.Tech tier 1
        Prior Experience :- Intel
        Current comp :- 27 lakhs
        YOE :- 4
        Company :- Alphagrep securities
        Level :- Senior Analyst (c++ developer)
        Salary :- 50 lakhs + 10 lakhs guarenteed bonus + 5 lakhs joining`,
    },
    {
        id: 324535,
        user: "Anonymous User",
        title: "Saas labs SDE-1",
        time: new Date("2023-06-22 17:19:03"),
        content: `Education : BTech from tier 1 college
        Date of offer : September,2022
        Date of Joining: June,2023
        Type : On campus
        Experience: 0 years
        Company : Saas Labs
        Title: SDE-1
        Base : 15L
        Joining Bonus: 1.5L
        Retention Bonus: 3.5L
        ESOPS: 5L
        Total Compensation : 25L
        First Year Compensation : 16.5L
        Annual Bonus: Aditional to the Compensation
        Benefits :100% Remote,standard employee benefits`,
    },
]

function calculateTime(time) {
    const now = new Date();
    let diff = 0;
    if(now < time) {
        diff = time - now;
    } else {
        diff = now - time;
    }
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (now < time) {
        if (days > 0) {
            if(days === 1) 
                return "in a day";
            return "in " + days + " days";
        }
        if (hours > 0) {
            if(hours === 1)
                return "in an hour";
            return "in " + hours + " hours";
        }
        if (minutes > 0) {
            if(minutes === 1)
                return "in a minute";
            return "in " + minutes + " minutes";
        }
        return "in " + seconds + " seconds";
    }
    

    if (days > 0) {
        if(days === 1) 
            return "a day ago";
        return days + " days ago";
    } else if (hours > 0) {
        if(hours === 1)
            return "an hour ago";
        return hours + " hours ago";
    } else if (minutes > 0) {
        return minutes + " minutes ago";
    } else {
        return seconds + " seconds ago";
    }
}

function Announcement({title, time}) {
    return (
        <div className="item">
        <tr>
            <td>
                <p className="since">{calculateTime(time)}</p>
                <h5>Join our Contest <a href="http://localhost:5173/contest">{title}</a></h5>
            </td>
        </tr>
        </div>
    );
}

function Blogs({id, user, title, time, content}) {
    const words = content.split(' ');
    let description = words.slice(0, 30).join(' ');

    return (
        <div className="item">
        <tr>
            <td>
                <p className="since">{calculateTime(time) }</p>
                <h5>
                    <a href={"http://localhost:5173/"+user}>{user}</a>
                    {' '}Posted{' '}
                    <a href={"http://localhost:5173/discuss/topic/"+id}>{title}</a>
                </h5>
                <p>{description}...</p>
            </td>
        </tr>
        </div>
    )
}



function Home() {
    return (
        <>
        <Navigation/>
        <Showproblem/>
        <div className="home-blog-list">

            <h3><i>BE HAPPY:) you are HOME!</i></h3>
            <br></br>
            <table>
                <thead>
                    <th><h2>Announcements</h2></th>
                </thead>
                <tbody>
                    {announcements.map((announcement) => {
                        return (
                            <>
                                <Announcement{...announcement} />
                                <hr></hr>
                            </>
                        )
                    } )}
                    {List.map((blog) => {
                        return (
                            <>
                                <Blogs{...blog} />
                                <hr></hr>
                            </>
                        )
                    } )}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Home;