import Section from "@/app/components/Section";
// import {apiFetch} from "@/app/ultis/api";
import React from "react";
import NavBar from "@/app/components/NavBar";
import {NewTabIcon} from "@/public/images/icons/NewTabIcon";
import {Experiments, Projects} from "@/public/masterData";

// async function fetchProjects() {
//     return  await apiFetch('/get-profile',{cache: 'no-store', method: 'GET'})
// }

export default async function Home() {
    // const projects = await fetchProjects();

    return (
      <div className="bgMain lg:flex lg:justify-between lg:gap-4 lg:px-20" >
          {/*left content*/}
          <div className={'p-6 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'}>
              <h1 className={'lg:text-4xl font-bold tracking-tight text-slate-200 text-2xl'}>Nguyễn Trọng Tuân</h1>
              <h2 className={'mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'}>Developer</h2>
              <p className='mt-4 max-w-xs leading-normal'>
                  I'm a passionate web developer focused on delivering innovative solutions that help businesses grow. I have experience with modern web technologies like React, React Native and more.
              </p>
              <NavBar />
          </div>
          {/*right content*/}
          <div>
              <Section title={''}>
                  <div id={'about'}>
                      <div className={'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'}>
                          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                      </div>
                      <p className={'mb-4'}>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
                      <p className={'mb-4'}>Currently, I'm a Senior Front-End Engineer at Ho Chi Minh, specializing in accessibility. I contribute to the creation and maintenance of UI components that power of frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.</p>
                      <p className={'mb-4'}>In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app</p>
                  </div>
              </Section>
              <Section title={''}>
                  <div id={'experience'}>
                      <div
                          className={'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'}>
                          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experiment</h2>
                      </div>
                      {Experiments.map((item, index) => (
                          <div key={index}
                              className={'group relative flex mb-12 grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 project'}>
                              <div
                                  className="group card-project absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                                  style={{zIndex: 1}}>
                              </div>

                              <div
                                  className={'z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'}>
                                  <p className={'z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'}>
                                      {item.date}
                                  </p>
                              </div>
                              <div className={'z-10 sm:col-span-6 justify-self-start'}>
                                  <div className={'flex flex-row items-center'}>
                                      <p className={'font-medium leading-snug text-slate-200 justify-self-start project-title'}>{item.title}</p>
                                      <NewTabIcon
                                          className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-thinGreen"
                                          size={18}/>
                                  </div>

                                  <p className={'mt-2 text-sm leading-normal'} style={{textAlign: 'left'}}>
                                      {item.detail}
                                  </p>
                                  <ul className={'mt-2 flex flex-wrap'}>
                                      <li className={'mr-1.5 mt-2'}>
                                          <div
                                              className={'flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '}>
                                              Javascript
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      ))}

                  </div>
              </Section>
              <div id={'projects'}>
                  <Section title={""}>
                      <div id={'projects'}>
                          <div
                              className={'sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'}>
                              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                          </div>
                          {Projects.map((item, index) => (
                              <div key={index}
                                  className={'group relative flex mb-12 grid sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 project'}>
                                  <div
                                      className="group card-project absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                                      style={{zIndex: 1}}>
                                  </div>

                                  <div
                                      className={'z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'}>
                                      {item.image}
                                  </div>
                                  <div className={'z-10 sm:col-span-6 justify-self-start'}>
                                      <div className={'flex flex-row items-center'}>
                                          <p className={'font-medium leading-snug text-slate-200 justify-self-start project-title'}>{item.name}</p>
                                          <NewTabIcon
                                              className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-thinGreen"
                                              size={18}/>
                                      </div>

                                      <p className={'mt-2 text-sm leading-normal'} style={{textAlign: 'left'}}>
                                          {item.detail}
                                      </p>
                                      <ul className={'mt-2 flex flex-wrap'}>
                                          {item.tech.map((ite, index) => (
                                              <li className={'mr-1.5 mt-2'} key={index}>
                                                  <div
                                                      className={'flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '}>
                                                      {ite}
                                                  </div>
                                              </li>
                                          ))}

                                      </ul>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </Section>
              </div>

          </div>
      </div>
  );
}
