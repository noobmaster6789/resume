import Image from "next/image";

export const Projects = [
    {
        image:<Image src="/images/company.png"
                     alt="Description of image"
                     width="200" height="48"
                     priority
        /> ,
    name: 'Company Sale Site',
    shortDetail: 'Website that help user can sell/ buy company in Japan',
    detail: 'Integrated APIs using .NET Core to enable seamless communication between the front- end and server. , Created basic SQL Server queries for data retrieval and storage, supporting essential business functionalities. , Developed UI for all pages to ensure compatibility across different roles and SEO using Next.js and implemented responsive design.',
    tech: ['Material UI', 'React JS', 'context API','TypeScript', 'Docker', 'Storybook', 'RestfulAPI', 'postman', 'yarn', 'NextJS', 'SASS/SCSS']
    },
    {
        image:<Image src="/images/comrex-logo.png"
                     alt="project image"
                     width="200" height="48"
                     priority
        /> ,
        name: 'Meeting room website',
        shortDetail: 'Developed a website that help people can create a meeting room instantly',
        detail: 'Developed a safe driving application for IOS/ANDROID to enhance user safety on the road., Implement in-app rewards so the user can getting the reward point by watching ads by using Google AdMob. Additionally, integrate in-app purchases (IAP) to enable users to buy points directly., Generate APK file and publish on Google play store / App store for IOS ',
        tech:['WebRTC API' ,'ReactJS', 'context API','TypeScript', 'RestfulAPI', 'postman', 'git', 'yarn', 'SASS/SCSS']
    },
    {
        image:<Image src="/images/plumber.png"
                     alt="project image"
                     width="200" height="48"
                     priority
        /> ,
        name: 'Website for Searching household repair-er ',
        shortDetail: 'Developed a platform for customers to find and hire repair professionals for various household tasks. ' +
            ' ',
        detail: 'Developed a platform for customers to find and hire repair professionals for various household tasks. , Developed a user-friendly and responsive interface for both desktop and mobile,enhancing the experience using Next.js for SEO optimization. , The website covers multiple stages from searching for repairers to service payments, featuring real-time chat to facilitate communication. Integrated multiple payment methods to streamline the checkout process, ensuring a seamless and efficient user experience.',
        tech: [ 'Socket.io',' React Stripe', 'Material UI', 'React JS', 'context API','TypeScript', 'Docker', 'Storybook', 'RestfulAPI', 'postman', 'yarn', 'NextJS', 'SASS/SCSS']
    },
    {
        image:<Image src="/images/dating-app.png"
                     alt="project image"
                     width="200" height="48"
                     priority
        /> ,
        name: 'Dating App ',
        shortDetail: 'Developed a mobile app connecting users through location-based matching, real-time messaging, and customizable profiles. ' +
            ' ',
        detail: 'Built a responsive React-native interface for both iOS and Android platforms, ensuring seamless user experience. , Integrated Socket.IO for instant messaging and notifications, enhancing user engagement. ',
        tech: [ 'React Native', 'Redux','TypeScript', 'Storybook', 'RestfulAPI', 'postman', 'yarn', 'SASS/SCSS']
    },
    {
        image:<Image src="/images/mdh.png"
                     alt="project image"
                     width="200" height="48"
                     priority
        /> ,
        name: 'Safe driving application\n',
        shortDetail: 'Developed a safe driving application for IOS/ANDROID to enhance user safety on the road',
        detail: 'Implement in-app rewards so the user can getting the reward point by watching ads by using Google AdMob. Additionally, integrate in-app purchases (IAP) to enable users to buy points directly, Generate APK file and publish on Google play store / App store for IOS',
        tech: ['React Native', 'Redux', 'Redux saga','TypeScript', 'RestfulAPI', 'postman', 'git', 'yarn', 'SASS/SCSS']
    },
    {
        image:<Image src="/images/well-tab.png"
                     alt="project image"
                     width="200" height="48"
                     priority
        /> ,
        name: 'Health care application\n',
        shortDetail: 'Developed an application that enables doctors in client hospitals to assist employees through video calls and using tablet only\n' +
            '\n',
        detail: 'Migration and optimize code because this is old product from client\n, Build a local server using Ngrok and integrate it with the client API source code.\n',
        tech: ['React Native', 'Android 4.0', 'Redux', 'Redux saga', 'git', 'SCSS/SASS', 'postman', 'npm', 'RestfulAPI', 'Javascript', 'Java']
    }
]
export const Experiments = [
    {
        date: 'Nov 2016 - Nov 2020',
        title: 'Student of Viet Hung University',
        detail: 'Grand IT developer license in Viet Hung University',
    },
    {
        date: 'Jan 2021 - Oct 2024',
        title: 'Front-end Developer in React Plus Group, Hanoi',
        detail: 'Develop and maintain websites, mobile applications and systems.',
    }
]
