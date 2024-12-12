"use client";

import React, { useState } from "react";

type ProjectCardProps = {
    project: {
        id: string;
        name: string;
        describle: string;
        detail: string[];
        teamSite: string;
        tech: string;
    };
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.describle}</p>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-teal-500 mt-4 inline-block hover:underline"
            >
                {isOpen ? "Hide Details" : "View Details"}
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-700">
                    <ul className="list-disc pl-4">
                        {project.detail.map((d, index) => (
                            <li key={index}>{d}</li>
                        ))}
                    </ul>
                    <a
                        href={project.teamSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Project Site
                    </a>
                </div>
            )}
        </div>
    );
};
