**Climate-Action-Pledge**
*Climate Action Pledge Microsite*

This project is a single-page responsive website that allows users to take a Climate Action Pledge, receive a personalized digital certificate, and view all pledges on a public pledge wall. The goal is to motivate individuals to adopt climate-positive habits and inspire others to take part.

**Project Overview**

The website demonstrates how individual actions can create a collective impact. It is designed with simplicity, clarity, and motivation in mind, while maintaining a professional and visually clean layout.

**Features Hero Section**

Includes a motivational banner with a background image or video. Contains a “Take the Pledge” button that smoothly scrolls to the pledge form.

*Live KPIs*

Displays total pledges, number of students, and professionals who have pledged. The data is stored using localStorage, so values remain after refreshing the page.

*Pledge Form*

Collects user information such as Name, Email, Mobile Number (limited to 10 digits), State, and Profile Type. Allows users to select eco-friendly commitments using checkboxes. Validates the mobile number to ensure it is exactly 10 digits.

*Certificate Generator*

Displays a personalized certificate after form submission with the user’s name and a star rating based on commitments chosen. Provides a Download Certificate button powered by the html2canvas library.

*Public Pledge Wall*

Shows all pledge entries in a table including ID, Name, Date, State, Profile, and Star Rating. Data is stored permanently in localStorage and remains visible even after refreshing the page.

**Responsive Design**

The website is fully responsive and works smoothly on desktop, tablet, and mobile devices. Uses a clean, nature-themed design with readable fonts and clear layout.

Privacy Note Clearly mentions that email and mobile number are used only for verification and are not displayed publicly.

**Technologies Used**

HTML5 for webpage structure CSS3 for design and responsiveness JavaScript (DOM manipulation and LocalStorage) for interactivity and data storage html2canvas library for generating downloadable certificates.

How to Run the Project Download or clone this repository to your system. Open the project folder in any code editor (for example, VS Code). Open the index.html file in your browser. The website will load, and you can take the pledge, view the certificate, and see the pledge wall in action.

**Deployment Options**

You can host this website easily using any of the following: Netlify – drag and drop your project folder. Vercel – connect your GitHub repository for automatic deployment. GitHub Pages – enable free hosting directly from your GitHub repository settings.

Folder Structure climate-pledge/ 
│ 
├── index.html → Main web page
├── style.css → Contains all styling and responsive layout 
├── script.js → JavaScript logic and LocalStorage handling 
└── README.md → Project documentation

*Developer Information*

Name: Sai Ganesh Tadi 
Role: Web Developer Intern 
Applicant Task: Chennai – Web Developer Internship Task
Developer Information

Name: Sai Ganesh Tadi Role: Web Developer Intern Applicant Task: Chennai – Web Developer Internship Task
