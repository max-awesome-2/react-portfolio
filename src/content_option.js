import myImage from "/src/assets/images/max_picture_3.png";

const logotext = "Max Gelinas";
const my_email = "mgelinas101@rogers.com";
const meta = {
    title: "Max Gelinas",
    description: "I'm Max Gelinas Game Designer _ Generalist Game Programmer",
};

const introdata = {
    title: "I’m Max.",
    animated: {
        first: "I code games!",
        second: "I design games!",
    },
    description: "Game Designer / Generalist Game Programmer based in Oakville, Ontario.",
    blurb: "I'm currently looking for an internship for Summer 2027!",
    your_img_url: myImage,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        projectID: "default",
        projectName: "Default",
        headerImg: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

];

const contactConfig = {
    YOUR_EMAIL: "mgelinas101@rogers.com",
    YOUR_FONE: "(555)123-4567",
    description: "Feel free to reach out to me by email! I'll get back to you as soon as possible.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    linkedin: "https://linkedin.com/in/maxgelinas"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    my_email
};