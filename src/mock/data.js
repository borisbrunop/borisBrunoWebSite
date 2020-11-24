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
    img: 'CORMINECO.png',
    title: 'Cormineco website',
    info: 'the main page of a minning company well know in Venezuela ',
    info2: '',
    url: '',
    repo: 'https://github.com/borisbrunop/cormineco-frontend', // if no repo, the button will not show up
    repoB: '',
  },
  {
    id: nanoid(),
    img: 'ludotopy.png',
    title: 'Ludotopy',
    info: 'this is a webapp develop for you to bet with your friends, the next red social for bets',
    info2: '',
    url: '',
    repo: 'https://github.com/ivanotello/project-ludotopia-frontend/tree/develop', // if no repo, the button will not show up
    repoB: 'https://github.com/ivanotello/project-ludotopia-backend/tree/develop',
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
