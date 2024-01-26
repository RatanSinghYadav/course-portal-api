


// The current database to use.
use('alemeno');

const courses = [
    {
        "courseName": "Web Development Fundamentals",
        "author": "John Doe",
        "description": "Learn the basics of web development.",
        "enrollStatus": "Open",
        "thumbnail": "web_dev_thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Mon, Wed, Fri 6:00 PM - 8:00 PM",
        "location": "Online",
        "preRequisites": ["Basic HTML", "Basic CSS"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to HTML", "content": "HTML basics and document structure." },
            { "week": 2, "topic": "Introduction to CSS", "content": "CSS basics and styling." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Data Science for Beginners",
        "author": "Jane Smith",
        "description": "Introduction to data science concepts and tools.",
        "enrollStatus": "Open",
        "thumbnail": "data_science_thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Tue, Thu 7:00 PM - 9:00 PM",
        "location": "Onsite",
        "preRequisites": ["Basic Python"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Data Science", "content": "Overview of data science and its applications." },
            { "week": 2, "topic": "Python for Data Science", "content": "Python programming for data analysis." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "JavaScript Masterclass",
        "author": "Alice Johnson",
        "description": "Comprehensive course on JavaScript programming.",
        "enrollStatus": "Open",
        "thumbnail": "javascript_masterclass_thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Mon, Wed 5:30 PM - 7:30 PM",
        "location": "Online",
        "preRequisites": ["Basic HTML", "Basic CSS"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to JavaScript", "content": "JavaScript basics and syntax." },
            { "week": 2, "topic": "DOM Manipulation", "content": "Interacting with the Document Object Model." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Graphic Design Essentials",
        "author": "Michael Williams",
        "description": "Learn the fundamentals of graphic design.",
        "enrollStatus": "Open",
        "thumbnail": "graphic_design_thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 6:00 PM - 8:00 PM",
        "location": "Onsite",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Principles of Design", "content": "Understanding design principles." },
            { "week": 2, "topic": "Introduction to Adobe Photoshop", "content": "Basic image editing and manipulation." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Mobile App Development with React Native",
        "author": "David Lee",
        "description": "Build cross-platform mobile apps using React Native.",
        "enrollStatus": "Open",
        "thumbnail": "react_native_thumbnail.jpg",
        "duration": "14 weeks",
        "schedule": "Mon, Wed, Fri 7:00 PM - 9:00 PM",
        "location": "Online",
        "preRequisites": ["JavaScript", "React Basics"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to React Native", "content": "Setting up the development environment." },
            { "week": 2, "topic": "Components and Navigation", "content": "Building UI components and navigation." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Machine Learning Foundations",
        "author": "Emily Rodriguez",
        "description": "Introduction to the basics of machine learning.",
        "enrollStatus": "Open",
        "thumbnail": "machine_learning_thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Online",
        "preRequisites": ["Python", "Basic Statistics"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Machine Learning", "content": "Overview of machine learning concepts." },
            { "week": 2, "topic": "Supervised Learning", "content": "Understanding supervised learning algorithms." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Introduction to Cybersecurity",
        "author": "Daniel Brown",
        "description": "Explore the fundamentals of cybersecurity.",
        "enrollStatus": "Open",
        "thumbnail": "cybersecurity_thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Mon, Wed 7:00 PM - 9:00 PM",
        "location": "Onsite",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Cybersecurity Basics", "content": "Introduction to cybersecurity principles." },
            { "week": 2, "topic": "Network Security", "content": "Securing computer networks." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Digital Marketing Strategies",
        "author": "Sophia Johnson",
        "description": "Learn effective digital marketing techniques.",
        "enrollStatus": "Open",
        "thumbnail": "digital_marketing_thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 7:30 PM - 9:30 PM",
        "location": "Online",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Digital Marketing", "content": "Overview of digital marketing channels." },
            { "week": 2, "topic": "Social Media Marketing", "content": "Strategies for effective social media marketing." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Game Development with Unity",
        "author": "Alex Turner",
        "description": "Create games using the Unity game development engine.",
        "enrollStatus": "Open",
        "thumbnail": "unity_game_dev_thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Mon, Wed 6:00 PM - 8:00 PM",
        "location": "Online",
        "preRequisites": ["C# Basics", "Basic Programming Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Unity", "content": "Setting up the development environment." },
            { "week": 2, "topic": "Game Physics and Interactivity", "content": "Understanding game physics and creating interactive elements." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Python for Data Analysis",
        "author": "Eva Martinez",
        "description": "Learn Python for data analysis and manipulation.",
        "enrollStatus": "Open",
        "thumbnail": "python_data_analysis_thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:00 PM - 8:00 PM",
        "location": "Online",
        "preRequisites": ["Basic Python"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Python for Data Analysis", "content": "Overview of Python libraries for data analysis." },
            { "week": 2, "topic": "Data Cleaning and Preprocessing", "content": "Techniques for cleaning and preprocessing data." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Advanced JavaScript Frameworks",
        "author": "Carlos Rodriguez",
        "description": "Explore advanced JavaScript frameworks like Vue and Angular.",
        "enrollStatus": "Open",
        "thumbnail": "advanced_js_frameworks_thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 7:30 PM - 9:30 PM",
        "location": "Online",
        "preRequisites": ["JavaScript", "Basic HTML", "Basic CSS"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Vue.js", "content": "Building web applications with Vue.js." },
            { "week": 2, "topic": "Advanced Angular Concepts", "content": "Deep dive into advanced Angular features." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "iOS App Development with Swift",
        "author": "Isabella Taylor",
        "description": "Create iOS apps using the Swift programming language.",
        "enrollStatus": "Open",
        "thumbnail": "ios_app_dev_thumbnail.jpg",
        "duration": "12 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Online",
        "preRequisites": ["Swift Programming Basics"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to iOS App Development", "content": "Setting up the Xcode environment." },
            { "week": 2, "topic": "Building User Interfaces with SwiftUI", "content": "Creating interactive user interfaces with SwiftUI." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Cloud Computing Essentials",
        "author": "Ryan White",
        "description": "Introduction to cloud computing concepts and services.",
        "enrollStatus": "Open",
        "thumbnail": "cloud_computing_thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Mon, Wed 6:30 PM - 8:30 PM",
        "location": "Online",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Overview of Cloud Computing", "content": "Understanding the fundamentals of cloud computing." },
            { "week": 2, "topic": "Popular Cloud Services", "content": "Exploring services like AWS, Azure, and Google Cloud." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "DevOps for Beginners",
        "author": "Olivia Brown",
        "description": "Introduction to DevOps principles and practices.",
        "enrollStatus": "Open",
        "thumbnail": "devops_for_beginners_thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Tue, Thu 7:00 PM - 9:00 PM",
        "location": "Online",
        "preRequisites": ["Basic Linux Commands"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to DevOps", "content": "Understanding the principles of DevOps." },
            { "week": 2, "topic": "Continuous Integration and Deployment", "content": "Implementing CI/CD pipelines." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Blockchain Fundamentals",
        "author": "Liam Turner",
        "description": "Explore the basics of blockchain technology.",
        "enrollStatus": "Open",
        "thumbnail": "blockchain_fundamentals_thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 6:00 PM - 8:00 PM",
        "location": "Online",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Blockchain", "content": "Overview of blockchain technology." },
            { "week": 2, "topic": "Smart Contracts", "content": "Understanding and creating smart contracts." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "UX/UI Design Principles",
        "author": "Sophie Garcia",
        "description": "Learn the principles of user experience and user interface design.",
        "enrollStatus": "Open",
        "thumbnail": "ux_ui_design_thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Online",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Understanding User Experience", "content": "Basics of UX design principles." },
            { "week": 2, "topic": "Creating User Interfaces", "content": "Designing effective user interfaces." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "IoT Programming with Arduino",
        "author": "Noah Martinez",
        "description": "Programming for the Internet of Things using Arduino.",
        "enrollStatus": "Open",
        "thumbnail": "iot_programming_thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Mon, Wed 7:30 PM - 9:30 PM",
        "location": "Online",
        "preRequisites": ["Basic Programming Knowledge"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to IoT", "content": "Overview of the Internet of Things." },
            { "week": 2, "topic": "Programming Arduino", "content": "Coding for Arduino boards." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Artificial Intelligence Basics",
        "author": "Emma Davis",
        "description": "Introduction to the fundamentals of artificial intelligence.",
        "enrollStatus": "Open",
        "thumbnail": "ai_basics_thumbnail.jpg",
        "duration": "8 weeks",
        "schedule": "Tue, Thu 7:00 PM - 9:00 PM",
        "location": "Online",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Overview of Artificial Intelligence", "content": "Introduction to AI concepts." },
            { "week": 2, "topic": "Machine Learning Basics", "content": "Understanding the basics of machine learning." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Mobile App Security",
        "author": "William Turner",
        "description": "Explore security practices for mobile applications.",
        "enrollStatus": "Open",
        "thumbnail": "mobile_app_security_thumbnail.jpg",
        "duration": "6 weeks",
        "schedule": "Mon, Wed 6:00 PM - 8:00 PM",
        "location": "Online",
        "preRequisites": ["None"],
        "syllabus": [
            { "week": 1, "topic": "Mobile App Security Fundamentals", "content": "Introduction to mobile app security." },
            { "week": 2, "topic": "Secure Coding Practices", "content": "Implementing secure coding practices." },
            // ... more weeks
        ],
        "students": []
    },
    {
        "courseName": "Ethical Hacking and Penetration Testing",
        "author": "Gabriel Adams",
        "description": "Learn ethical hacking and penetration testing techniques.",
        "enrollStatus": "Open",
        "thumbnail": "ethical_hacking_thumbnail.jpg",
        "duration": "10 weeks",
        "schedule": "Tue, Thu 6:30 PM - 8:30 PM",
        "location": "Online",
        "preRequisites": ["Basic Networking", "Linux Basics"],
        "syllabus": [
            { "week": 1, "topic": "Introduction to Ethical Hacking", "content": "Understanding the principles of ethical hacking." },
            { "week": 2, "topic": "Network Scanning and Enumeration", "content": "Scanning networks for vulnerabilities." },
            // ... more weeks
        ],
        "students": []
    }
]

db.getCollection('courses').insertMany(courses);
