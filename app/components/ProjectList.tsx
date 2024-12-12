// app/components/ProjectList.tsx (Client Component)
"use client";

import React, { useState } from "react";
import {TProjectType} from "@/type/project";

type ProjectListProps = {
    projects: TProjectType[];
};

export default function ProjectList({ projects }: ProjectListProps) {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    const toggleProject = (id: string) => {
        setExpandedProject((prev) => (prev === id ? null : id)); // Toggle project
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6" >
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className={`p-6 bg-white shadow-md rounded-lg transition-all duration-1000 ease-in-out ${
                        expandedProject === idx.toString()
                            ? "col-span-3 sm:col-span-3 lg:col-span-3 transform scale-105"
                            : "transform scale-100 hover:scale-102 "
                    }`}
                >
                    <h3 className="text-xl font-semibold text-gray-800"> {expandedProject === idx.toString()
                        ? project.name
                        : `${project.name.slice(0, 20)}...`}</h3>
                    <p className="text-gray-600 mt-2">
                        {expandedProject === idx.toString()
                            ? project.description
                            : `${project.description.slice(0, 50)}...`}
                    </p>
                    {expandedProject === idx.toString() && (
                        <ul className="mt-4 list-disc list-inside text-gray-700">
                            {project.detail.split('.').map((detail, index) => (
                                <li className={'text-left'} key={index}>{detail}</li>
                            ))}
                        </ul>
                    )}
                    <button
                        className="text-teal-500 mt-4 inline-block hover:underline"
                        onClick={() => toggleProject(idx.toString())}
                    >
                        {expandedProject === idx.toString() ? "Hide Details" : "View Details"}
                    </button>
                </div>
            ))}
        </div>
    );
}
