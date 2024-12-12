import Section from "@/app/components/Section";
import {apiFetch} from "@/app/ultis/api";
import React from "react";
import {TProjectType} from "@/type/project";
import ProjectList from "@/app/components/ProjectList";
import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from "react-icons/fa";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaDownload} from "react-icons/fa";

async function fetchProjects() {
    return  await apiFetch('/get-profile',{cache: 'no-store', method: 'GET'})
}

export default async function Home() {
    const projects = await fetchProjects();
    console.log(projects);

    return (
      <div className="bg-gray-50">
          {/* Hero Section */}
          <div className="hero">
              <div className="overlay"></div>
              <div className="content">
                  {/* Profile Image */}
                  <div>
                      <img src="/images/pro.jpg" alt="Profile" />
                  </div>

                  {/* Introduction Info */}
                  <div className="intro p-10">
                      <h1>Hi, I'm {projects.data.name}</h1>
                      <p className='text-slate-400 text-sm font-thin leading-normal'>
                          I'm a passionate web developer focused on delivering innovative solutions that help businesses grow. I have experience with modern web technologies like React, React Native and more.
                      </p>
                      <div className={'mt-10 gap-2 flex flex-col'}>
                          <div className={'flex gap-1 flex-row items-center'}>
                              <FaPhone /> <p className={'text-black'}>Phone:</p> <p className={'m-0 font-bold'}>+0886360387</p>
                          </div>
                          <div className={'flex gap-1 flex-row items-center'}>
                              <FaEnvelope /> <p className={'text-black'}>Email:</p> <p className={'m-0 font-bold'}>{projects.data.email}</p>
                          </div>
                          <div className={'flex gap-1 flex-row items-center'}>
                              <FaMapMarkerAlt /> <p className={'text-black'}>Address:</p> <p className={'m-0 font-bold'}>Phong Phú, Bình Chánh, HCM</p>
                          </div>

                      </div>
                      <a href="/cv.pdf" className="button" download>
                         <div className={'flex gap-1 flex-row items-center'}> Download CV <FaDownload /></div>
                      </a>
                  </div>
              </div>
          </div>

          <Section title={'My Skills'}>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {projects.data?.skills.map((skill) => (
                      <div
                          key={skill.name}
                          className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg transform hover:scale-105 transition duration-300"
                      >

                          <img src={skill.icon} alt="logo skill" className="w-20 h-20" />
                          <span className="mt-4 font-medium text-gray-700">{skill.name}</span>
                      </div>
                  ))}
              </div>
          </Section>

           {/*Projects Section*/}
          <Section title={"My Projects"}>
              <ProjectList projects={projects.data.projects as TProjectType[]} />
          </Section>
      </div>
  );
}
