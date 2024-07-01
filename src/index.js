import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <>
      <Skeleton />
    </>
  );
}

function Skeleton() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-white w-[480px] max-w-[90%] min-h-[700px] rounded-lg p-4 flex flex-col gap-4 items-center">
        <MainImage />
        <UserInfo
          name="Dhruv Mehta"
          information="Full-stack web developer and teacher at
Udemy. When not coding or preparing a
course, I like to play board games, to
cook (and eat), or to just enjoy the
Portuguese sun at the beach."
        />
        <div className="flex flex-wrap p-4 gap-2">
          <UserSkills skill="HTML + CSS" emoji="💪" color="bg-red-600" />
          <UserSkills skill="JavaScript" emoji="💪" color="bg-blue-600" />
          <UserSkills skill="Web Design" emoji="💪" color="bg-green-600" />
          <UserSkills skill="Git and GitHub" emoji="👍" color="bg-yellow-600" />
          <UserSkills skill="Svelte" emoji="🐣" color="bg-purple-600" />
        </div>
      </div>
    </div>
  );
}
function UserInfo(props) {
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-center">{props.name}</h1>
      <p className="text-center">{props.information}</p>
    </div>
  );
}

function UserSkills(props) {
  return (
    <button className={`mt-4 ${props.color} px-4 rounded-md py-4 text-white`}>
      {props.skill} {props.emoji}
    </button>
  );
}

function MainImage() {
  return (
    <div className=" flex justify-center">
      <img
        className="max-h-40 rounded-full"
        src="https://avatars.githubusercontent.com/u/99068087?v=4"
        alt="Dhruv"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
