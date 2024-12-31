// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Stefano",
  middleName: "",
  lastName: "Biasutti",
  message: "Senior developer, Architect, mentor, crypto enthusiast",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/stefanobiasu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/stefano-biasutti-31164326/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/stefanobiasutti.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/stefanobiasutti.png"),
  imageSize: 375,
  message:
    "My name is Stefano Biasutti... TODO",
  resume: "https://www.dropbox.com/scl/fi/6qa4wqd7lqe5lyfa4l9uc/CV-Stefano-Biasutti.pdf?rlkey=9455kecj8ohktpgfqy3bbno8e&dl=0",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "stefanobiasu",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/stefanobiasutti.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/stefanobiasutti.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Objective-C", value: 85 },
    { name: "Swift", value: 75 },
    { name: "C#", value: 75 },
    { name: "Ruby", value: 55 },
    { name: "ReactJS", value: 40 },
    { name: "HTML/CSS", value: 40 },
    { name: "Python", value: 45 },
    { name: "Rust", value: 45 },
  ],
  technologies: [
    { name: "Azure", value: 75 },
    { name: "ElasticSearch", value: 80 },
    { name: "PostgreSQL", value: 80 },
    { name: "Docker", value: 70 },
    { name: "Hazelcast Jet", value: 70 },
    { name: "Spring", value: 65 },
    { name: "fastlane", value: 60 },
    { name: "QGIS", value: 50 },
    { name: "MSGraph", value: 70 },
    { name: "OData", value: 50 },
    { name: "OpenID Connect", value: 80 },
    { name: "SAML", value: 60 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to email me at",
  email: "stefano.biasu@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer II',// Here Add Company Name
      companylogo: require('../assets/img/Microsoft.webp'),
      description: "Handling federation space in Microsoft authentication (identity) team, covering the full stack of federated authentication service through several protocols. Among the most relevant, OIDC and SAML. Also, MSGraph reviewer and mentor for the team.",
      date: 'July 2022 – Present',
    },
    {
      role: 'Senior Software Developer / Architect',
      companylogo: require('../assets/img/investcloud.jpg'),
      description: "iOS framework products for customer iOS applications and Java frameworks for Java back-end applications. Finance sector",
      date: 'July 2016 – July 2022',
    },
    {
      role: 'Senior Software Developer',
      companylogo: require('../assets/img/lynx.jpg'),
      description: "Java and iOS Software Developer. Multiple iOS, Android, and Java (back-end) applications created and maintained",
      date: 'May 2015 – July 2016',
    },
    {
      role: 'Software Developer',
      companylogo: require('../assets/img/sysdata.jpeg'),
      description: "Java and iOS Software Developer. Multiple iOS and Java applications created and maintained",
      date: 'May 2010 – May 2015',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
