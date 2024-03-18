import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
    const projects = [
        { name: "Project 1", dateModified: "2022-01-01" },
        { name: "Project 2", dateModified: "2022-01-02" },
        { name: "Project 3", dateModified: "2022-01-03" },
    ];

    return (
        <div className="container mx-auto p-4">
            <nav className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
                    <h1 className="text-2xl font-bold">Website Builder</h1>
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Search" className="mr-2 p-2 border rounded" />
                    <Link to="/account" className="text-blue-500">Account</Link>
                </div>
            </nav>
            <h1 className="text-2xl font-bold mb-4">My Projects</h1>
            <ul className="space-y-2">
                {projects.map((project, index) => (
                    <li key={index} className="border rounded p-2">
                        <Link to={`/projects/${index}`}>
                            <div className="flex justify-between items-center">
                                <span className="font-bold">{project.name}</span>
                                <span className="text-sm text-gray-500"></span>
                                    {project.dateModified}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
