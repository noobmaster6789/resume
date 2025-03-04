"use client";

import React, {useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import {FbIcon} from "@/public/images/icons/FbIcon";
import {GitIcon} from "@/public/images/icons/GitIcon";

const sections = ["about", "experience", "projects"];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries
                    .filter((entry) => entry.isIntersecting)
                    .forEach((entry) => setActiveSection(entry.target.id));
            },
            observerOptions
        );


        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div>
            <div className={'hidden lg:block'}>
                <nav className="flex flex-col">
                    {sections.map((section, index) => (
                        <div className={'flex flex-row p-2  items-center'} key={index}>
                            <div
                                className={clsx(
                                    "nav-indicator",
                                    activeSection === section && "nav-indicator-active"
                                )}
                            />
                            <Link
                                key={section}
                                href={`#${section}`}
                                className={clsx(
                                    "text-gray-500 transition-colors",
                                    activeSection === section && "text-teal-300 font-bold"
                                )}
                            >
                                {section.toUpperCase()}
                            </Link>
                        </div>

                    ))}
                </nav>
            </div>
            <div className={'flex flex-row gap-5 pt-8'}>
                <a href="https://www.linkedin.com/in/tuan-nguyen-a13bb814a/" target={'_blank'}>
                    <FbIcon
                        className="hover:text-white"
                        size={24}/>
                </a>
                <a href="https://github.com/noobmaster6789" target={'_blank'}>
                    <GitIcon
                        className="hover:text-white"
                        size={24}/>
                </a>
            </div>
        </div>
    );
}
