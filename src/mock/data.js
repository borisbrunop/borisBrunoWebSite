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
  paragraphOne: 'My search of the one thing that likes me to do in my life has been puttin me in so many places and situations, i tried with profesional sports, trading stocks, all sort of things, but the one thing started arround 2017, me getting interested on computers, laptops, cellphones, all that hardware side of the technology, watching youtube videos and with self learning i acomplished a very good level of knowledge.',
  paragraphTwo: 'But there was something in my mind that always told me that i had to learn to program that it will be the future. I had to try once again and then i take the step to get more into this world started searching courses to learn programing and a very good academy came out, 4Geeks Academy located in Miami, Madrid, Panama, Caracas, Costa Rica, with an outstanding history of reviews, i said this is the time with cero knowledge in software i take the 6 month course and now, after finished, i am searching for jobs on the one thing that i know always liked me ',
  paragraphThree: 'For more info here in the resume button is my CV in pdf format, thank you for reading',
  resume: cvPdf, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CORMINECO.png',
    title: 'Cormineco website',
    info: 'the main page of an minning company well know in Venezuela ',
    info2: '',
    url: '',
    repo: 'https://github.com/borisbrunop/cormineco-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ludotopy.png',
    title: 'Ludotopy',
    info: 'this is a webapp develop for you to bet with your friends, the next red social for bets',
    info2: '',
    url: '',
    repo: 'https://github.com/ivanotello/project-ludotopia-backend/tree/develop', // if no repo, the button will not show up
  },
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
