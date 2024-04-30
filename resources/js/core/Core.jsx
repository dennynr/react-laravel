import React from "react";
import ReactDOM from "react-dom/client";
import Input from "../Pages/Input";
import Login from "../Pages/Login";

function Core() {
    return (
        <div className="container mx-auto">

            <Input />
            <Login />
        </div>
    );
}

export default Core;

if (document.getElementById("core")) {
    const Index = ReactDOM.createRoot(document.getElementById("core"));

    Index.render(
        <React.StrictMode>
            <Core />
        </React.StrictMode>
    );
}
