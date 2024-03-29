import { nanoid } from 'nanoid';
import cvPdf from '../images/BorisBrunoCV.pdf';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Boris',
  subtitle: 'Im a Fullstack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My search of the one thing that really inspires has been puttin me in so many paths, places and situations, i tried with profesional sports, trading stocks, all sort of things, the one thing started around 2017, me getting interested on computers, laptops, cellphones, all that hardware side of the technology, watching youtube videos and with self learning i acomplished a very good level of knowledge.',
  paragraphTwo: 'But there was something on my mind, this is not all, always told myself that had to learn to program, that will be the future. I had to try once again and then i take the step to get more into this world started searching courses to learn programing and a very good academy came out, 4Geeks Academy located in Miami, Madrid, Panama, Caracas, Costa Rica, with an outstanding history of reviews, i said this is the time with cero knowledge in software i take the 6 month course and now, after finished, i am searching for jobs on the one thing that i know inspires me',
  paragraphThree: 'I would like to learn more about everything that it’s involved on this world, and hopefully still learning everyday and working on amazing projects. For more info here in the resume button is my CV in pdf format, thank you for reading',
  resume: cvPdf, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'phinxlab.jpg',
    title: 'Phinlab',
    info: 'Is a well known software company from Argentina where i worked for nearly one year as a fullstack web developer',
    info2: 'Node JS, PostgresQL, Typescript, React, Retool were the tools that i worked with. Manage several ecommerce as well as an administration app for those ecommerce and many other marketplaces currently based in Argentina where we can send reports, monitor orders, edit pishical aspects of the ecommerces, import orders from other marketplaces, manege the emails templates and when we sent them, etc. This are some of the challenges that i overcame in my daily life.',
    url: 'https://none.com',
    repo: '', // if no repo, the button will not show up
    repoB: '',
  },
  {
    id: nanoid(),
    img: 'CORMINECO.png',
    title: 'Cormineco website',
    info: 'the main page of a minning company well know in Venezuela ',
    info2: '',
    url: 'https://development.com',
    repo: 'https://github.com/borisbrunop/cormineco-frontend', // if no repo, the button will not show up
    repoB: 'https://github.com/borisbrunop/cormineco-backend',
  },
  {
    id: nanoid(),
    img: 'ludotopy.png',
    title: 'Ludotopy',
    info: 'this is a webapp develop for you to bet with your friends, the next red social for bets',
    info2: '',
    url: 'https://development.com',
    repo: 'https://github.com/ivanotello/project-ludotopia-frontend/tree/develop', // if no repo, the button will not show up
    repoB: 'https://github.com/ivanotello/project-ludotopia-backend/tree/develop',
  },
  {
    id: nanoid(),
    img: 'bestdoc.png',
    title: 'BestDoc',
    info: 'Worked on the develop of this new webapp for doctors, patients and clinics.',
    info2: 'Here you will be able to set an appointment, search for doctors, pay, receive results of appointments and much more, take a look of the progress on the button see live',
    url: 'https://bestdoc-front.herokuapp.com/',
    repo: 'https://github.com/brackets-it/bestdoc-front', // if no repo, the button will not show up
    repoB: '',
  },
  {
    id: nanoid(),
    img: 'malalaulart.PNG',
    title: 'Malalaulart',
    info: 'Web app from an illustration artist that transforms whatever photo you sent her into an illustration.',
    info2: 'The principal concept is a page with a form that immediately show you the cost of what you want and finally it sends the info to his whatsApp number, additionally I made her a homepage with a gallery of his illustrations',
    url: 'https://malalaulart.netlify.app/',
    repo: 'https://github.com/borisbrunop/malalaulart', // if no repo, the button will not show up
    repoB: '',
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'borisbruno88@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/boris-bruno-84a08b116/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/borisbrunop',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
