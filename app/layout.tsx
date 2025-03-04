'use client'
import React, {ReactNode} from 'react'
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";
const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {

    return (
      <html lang="en">
      <body>
      <CustomCursor />
      <header>
          {/*<div className={'w-full flex justify-end flex-row gap-2 p-2'}>*/}
          {/*    <img onClick={() => window.open('https://www.facebook.com/profile.php?id=100008644694077', '_blank')}*/}
          {/*         src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png'}*/}
          {/*         alt={'facebook'}*/}
          {/*         width={20}*/}
          {/*         height={20}*/}
          {/*         style={{cursor: 'pointer'}}*/}
          {/*    />*/}
          {/*    <img onClick={() => window.open('https://github.com/noobmaster6789', '_blank')}*/}
          {/*         src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}*/}
          {/*         alt={'facebook'}*/}
          {/*         width={20}*/}
          {/*         height={20}*/}
          {/*         style={{cursor: 'pointer'}}*/}
          {/*    />*/}
          {/*</div>*/}
      </header>
      <main>
          {children}
      </main>
      {/*<footer className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">*/}
      {/*        <div className="container mx-auto px-6">*/}
      {/*            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>*/}
      {/*            <p className="text-xl mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>*/}
      {/*            <a href="mailto:it.tuannt@gmail.com" className="bg-white text-teal-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-teal-500 hover:text-white transition duration-300">*/}
      {/*                Email Me*/}
      {/*            </a>*/}
      {/*        </div>*/}
      {/*</footer>*/}
      </body>
      </html>
  );
}
export default RootLayout
