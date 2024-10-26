import React from "react";
import { Link } from "react-router-dom";
import '../style/Home.css';

const Home = () =>{
    return (
        <div className="container">
            <div className="box">
            <h1 className="heading">Quiz Application</h1>
            <ol className="list">
                <li>You will asked 10 questions one after another</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one option</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>
            <div className="button-div">
                <Link className="button" to={"/questions"}>Start Quiz</Link>
            </div>
            </div>
        </div>
    )
}

export default Home;