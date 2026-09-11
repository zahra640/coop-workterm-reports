// Work term 01 — Vehikl, Summer 2026.

import type { ReportContent } from "./types";

const summer2026: ReportContent = {
    eyebrow: "Work term 01",
    title: "Software Developer @ Vehikl",

    facts: [
        { label: "Term", value: "01 of 05" },
        { label: "Employer", value: "Vehikl" },
        { label: "Program", value: "SE Co-op" },
        { label: "Dates", value: "May–Aug 2026" },
    ],

    sections: [
        {
            title: "Introduction",
            paragraphs: [
                "My first co-op work term at Vehikl gave me the opportunity to experience working as a software developer in a professional environment. Throughout my four-month work term, I contributed to client projects, worked with different technologies, and learned how it is designed, tested, reviewed, and maintained in a production environment. I also had opportunities to attend Laracon US and share my own knowledge through company Lightning Talks and Growth Sessions. This co-op experience gave me a deeper understanding of software development and helped shape the way I approach problems, learn new technologies, and contribute as a developer.",
            ],
        },
        {
            title: "The Employer",
            paragraphs: [
                "Vehikl is a software consultancy company that designs, develops, and maintains software for clients across different industries. As a consultancy, developers have the opportunity to work on a variety of projects and technology stacks. One of the most distinctive parts of vehicle culture is its use of Mob Programming, allowing team members to work collaboratively on tasks, discuss implementation decisions, and learn from one another throughout the process. Vehikl also places a strong emphasis on continuous learning and knowledge sharing through daily growth sessions, monthly lightning talks, book clubs, and other opportunities for professional development. These practices allowed me to build my technical  skills as well as collaborative and problem solving skills that are important in a professional software engineering environment.",
            ],
        },
        {
            title: "Goals",
            paragraphs: [
                "Going into my first co-op, I wanted to set goals that would help me bridge the gap between the software development I had experienced through university and the expectations of working on production software. My goals were closely connected to the work I expected to be doing at Vehikl. I wanted to become comfortable contributing to a Laravel codebase, strengthen my testing and software craftsmanship skills, and learn how to work effectively with AI coding tools. I also wanted to become a more confident contributor on a client team by improving my problem-solving, collaboration, and communication skills.",

                "Beyond my day-to-day development work, I wanted to build habits that would continue to benefit me throughout my degree and future career. I set goals around continuous learning, technical communication, and deployment and DevOps. In particular, I wanted to learn through technical books and structured courses, practice sharing what I learned through tech talks and growth sessions, and gain hands-on experience taking an application from development to production. I chose these areas because they would complement my technical development and give me skills that I could carry into future co-op terms, regardless of the technologies I work with.",

                "By the end of the term, I had made meaningful progress across all five areas. I became much more comfortable with Laravel and production development, developed stronger testing habits, and gained experience working with both Laravel/PHP and C#/.NET. I also became more confident contributing to client work and communicating technical ideas through presentations and growth sessions. My continuous-learning goal was successful through book clubs, Laracasts walkthroughs, and hands-on design pattern exercises. I also gained practical deployment experience by deploying a Laravel application using Laravel Cloud and helping set up deployment for another project.",

                "The main part of my goals that remains in progress is CI/CD. Although I developed a stronger understanding of deployment and DevOps and gained hands-on experience with hosting and deployment, I did not complete a full CI/CD pipeline from scratch as I had originally planned. This is an area where I established a foundation but still have room to develop. Overall, the goals gave me direction throughout the term while allowing me to identify areas I want to continue working on in future co-op experiences.",
            ],
            goals: [
                {
                    //goal 1
                    status: "Met",
                    met: "met",
                    title: "Building Production-Ready Laravel Skills",
                    teaser: "Deepening my Laravel and testing skills through client work, while learning to collaborate critically with AI coding agents.",
                    goal: "Deepen my Laravel and TDD skills through hands-on client work, while also building strong habits for working effectively with AI coding agents, knowing when to trust them, when to push back, and how to critically review AI-generated code.",
                    actions: "Actively participate in mob and pair programming sessions when working on Laravel features. Practice writing tests first by default. Push into Laravel concepts I haven't used much yet, queues, events, policies, advanced Eloquent relationships, and performance considerations. When using AI coding tools (Claude Code, Cursor, Copilot, etc.), treat AI-generated code with the same scrutiny as a PR from a teammate, review it carefully, question design decisions, and rewrite anything that doesn't fit the codebase or my understanding. Build the habit of understanding AI-generated code rather than just accepting it.",
                    measure: "Comfortable driving in mob sessions on Laravel work. Can complete tickets independently by the end of the 4 month term. Writing tests first feels natural. Can explain every line of AI-generated code I commit. Positive feedback in code reviews on both my hand-written and AI-assisted work.",
                    reflection: "Throughout this work term, I became much more comfortable working with Laravel and contributing to a production codebase. I had many opportunities to apply Laravel concepts through client work while learning from experienced developers during pair and mob programming sessions. I also developed stronger testing habits by writing tests earlier in the development process, which helped me better understand the expected behaviour of the code and catch issues sooner. By treating AI generated code as a starting point rather than a final solution, I made a conscious effort to understand and review any AI generated code before incorporating it into my work. Overall, these experiences strengthened both my Laravel knowledge and my confidence as a developer.   ",
                },
                {
                    //goal 2
                    status: "Met",
                    met: "met",
                    title: "Becoming a Trusted Contributor",
                    teaser: "Growing my craftsmanship, problem-solving, and independence to contribute meaningfully to production software.",
                    goal: "Become a trusted contributor on a client team by developing the technical skills, problem-solving ability, and independence needed to contribute to production software.",
                    actions: "Continue strengthening my software craftsmanship skills through field trips and client work. Apply feedback from mentors to improve both my technical skills and collaboration. Demonstrate reliability, initiative, and clear communication to earn opportunities to graduate and join a team.",
                    measure: "Transition from field trips to joining a team and graduating from the welcome wagon. Receive positive feedback from teammates and mentors on my technical contributions and collaboration.",
                    reflection: "Throughout this work term, I became much more confident contributing to client work and collaborating with my team. As I gained experience with the codebase and development practices, I was able to take on more responsibility and contribute more meaningfully during mob programming sessions, while also completing smaller tasks independently when appropriate. My three week field trip to a different client team also allowed me to adapt to a new project and learn from a different group of developers. Although I have not graduated from the welcome wagon yet, I have developed stronger technical skills, collaboration skills, and confidence working on production software.",
                },
                {
                    //goal 3
                    status: "Met",
                    met: "met",
                    title: "Building a Continuous-Learning Habit",
                    teaser: "Building a sustainable habit of reading, courses, and book-club discussion, and applying what I learn directly to my work.",
                    goal: "Build a sustainable continuous-learning habit through reading and structured courses.",
                    actions: "Read at least one technical book during the term in addition to apprenticeship patterns. Join the Vehikl book club and actively discuss anything I have learned. Complete at least one structured online course relevant to my work (e.g. Anthropic Academy, a Laracasts series, or similar). Take notes I can refer back to and apply patterns from what I read in actual work.",
                    measure: "1 book completed with notes. At least 1 course completed. Active participation in book club discussions. Can point to specific patterns I've applied from what I read.",
                    reflection: "Throughout this work term, I made continuous learning a regular part of my routine. I completed 'Apprenticeship Patterns' through the Welcome Wagon book club, worked through several Laracasts walkthroughs to strengthen my Laravel knowledge, and am currently reading 'Head First Design Patterns' with the company-wide book club. As part of the book club, we also implement each design pattern, allowing me to apply the concepts in practice rather than just reading about them. These experiences reinforced the importance of continuous learning and helped me develop skills that I could immediately apply to my everyday work.",
                },
                {
                    //goal 4
                    status: "Met",
                    met: "met",
                    title: "Public Speaking & Knowledge Sharing",
                    teaser: "Developing my public speaking and knowledge-sharing skills by hosting a tech talk and leading collaborative growth sessions.",
                    goal: "Develop public speaking and knowledge-sharing skills by hosting a tech talk about a project, then leading follow-up growth sessions where the team can contribute ideas, learn the technical concepts behind it, and help shape new features.",
                    actions: "Prepare and deliver a tech talk at Vehikl introducing the project, the problem it solves, the approach, the tech stack, and the AI integration work I'm exploring. Follow up the talk by hosting growth sessions where interested team members can explore the project and recreate it while mobbing.",
                    measure: "At least 1 tech talk delivered to the Vehikl team. At least 2-3 follow-up growth sessions hosted during the term. New features or improvements added to the project as a result of session discussions. Positive feedback from attendees. Comfortable presenting and facilitating discussion.",
                    reflection: "Throughout this work term, I had several opportunities to share my knowledge with others. I presented a lightning talk on my PosturePal project and later hosted growth sessions where we rebuilt the application together through mob programming. I also hosted a variety of other growth sessions, including collaborative mob programming sessions for our co-op project and watch parties focused on technical topics. These experiences strengthened my confidence communicating technical concepts, leading collaborative discussions, and creating an environment where others could learn alongside me. They also reinforced the value of fostering a collaborative learning culture within a development team.",
                },
                {
                    //goal 5
                    status: "Met",
                    met: "met",
                    title: "Deployment & DevOps Foundations",
                    teaser: "Strengthening my understanding of CI/CD, Docker, and hosting through hands-on deployment work.",
                    goal: "Strengthen my understanding of deployment and DevOps. Build a complete CI/CD pipeline from scratch and deepen my knowledge of Docker and hosting.",
                    actions: "Learn the fundamentals and set up a CI/CD pipeline from scratch on a personal project using GitHub Actions, configured entirely by me rather than from a template. Set up Docker myself, write my own Dockerfile, and run the project in a container. Learn the deployment workflow on Vehikl projects and asking questions when I don't understand something.",
                    measure: "Can take an app from local to production deployed and explain how it works. CI/CD set up on a personal project end-to-end.",
                    reflection: "Throughout this work term, I strengthened my understanding of deployment and DevOps by gaining hands-on experience with deployment workflows and hosting. I successfully deployed a Laravel project using Laravel Cloud and also contributed to setting up the deployment process for our 'Mob Planner' application. While there is still more to learn, particularly around implementing a complete CI/CD pipeline, these experiences gave me a much stronger understanding of how applications go from development to production and provided a solid foundation to continue building on.",
                },
            ],
        },
        {
            title: "Job description",
            paragraphs: [
                "As a Software Developer Co-op at Vehikl, I worked as part of client development teams contributing to production software. The main client project I worked on involved a web application built with PHP and Laravel, where I worked across both backend and user-facing functionality. My work included implementing new features, fixing bugs, improving existing workflows, writing and reviewing tests, working with REST APIs, database queries and migrations, background jobs, and integrations with third-party services.",
                "A significant part of my work involved improving the performance and reliability of existing systems. For example, I worked on optimizing messaging workflows that interacted with a third-party messaging service. By reducing redundant API calls and improving how jobs were processed, the number of third-party API calls was reduced by approximately 75%. I also worked on synchronization and migration processes involving thousands of production records, which required careful consideration of data consistency between integrated systems. These experiences introduced me to performance and data integrity concerns that are difficult to replicate in university projects, where applications typically operate at a much smaller scale.",
                "I also contributed to larger features that required changes across multiple parts of the application. This included building reporting functionality, bulk operations, filtering and pagination, REST API endpoints, and database-related changes. One project involved redesigning a workflow so that functionality shared between two different parts of the application could be generalized and reused. This required me to think about the structure of the existing code and how new functionality could be introduced without unnecessarily duplicating logic. I also gained experience investigating database performance, including identifying redundant queries and reducing repeated database work in application pages.",
                "Another important part of my work was deployment and production development. I regularly worked with GitHub workflows to test and deploy changes, monitored production behaviour after releases, and investigated issues using application logs and monitoring tools. Later in the term, I helped set up an automated production deployment workflow that runs tests before deploying changes merged into the main branch. This gave me a better understanding of how development practices such as testing and version control connect to the deployment process.",
                "During my work term, I also spent a few weeks working with a different client team on a healthcare application. This project used C#, .NET, React, REST APIs, and SQL. The application supported workflows involving hospital billing and insurance information. I worked on both UI and API functionality, including bulk actions, filtering, reporting, and account-related workflows.",
                "Moving between these two client environments was one of the most valuable aspects of my work term. Although the technology stacks were different, the software engineering principles I had learned through my Laravel work continued to apply. I had to understand unfamiliar code, investigate existing behaviour, write tests, work with version control, and consider how my changes would fit into the larger application. This experience helped me become more comfortable adapting to technologies that I had not previously used.",
                "One of the most unique aspects of my role at Vehikl was the emphasis on mob programming. Most of my development work was completed collaboratively, with developers working together on the same task and discussing implementation decisions as they went. This meant that I was constantly exposed to different approaches to debugging, system design, testing, and problem solving. It also gave me the opportunity to learn directly from experienced developers while contributing to real production software.",
                "The skills required for my role came from a combination of my university coursework and learning on the job. My courses gave me a foundation in programming, data structures, databases, software design, and software engineering principles. However, many of the skills I relied on most heavily were developed through hands-on experience at Vehikl. These included navigating large existing codebases, understanding unfamiliar frameworks, writing tests as part of development, optimizing production systems, working with real production data, using professional Git workflows, reviewing pull requests, and collaborating through mob programming.",
                "The biggest difference between my coursework and professional development was the need to work within an existing system. In school projects, I am usually responsible for deciding how an application will be structured. At Vehikl, I had to first understand why an existing system was structured the way it was and then determine how to make changes that fit within it. This taught me to think beyond whether my code worked and consider maintainability, performance, testing, data consistency, and how my changes would interact with the rest of the application.",
            ],
        },
        {
            title: "Tech stack",
            paragraphs: ["What I actually touched, and how deep I got with each."],
            table: {
                columns: ["Tool", "Where I used it", "Depth"],
                rows: [
                    ["Laravel", "Core backend, REST endpoints, queued jobs", "Daily"],
                    ["Vue 3", "Frontend inside an existing design system", "Weekly"],
                    ["Pest", "Test-first on nearly every ticket", "Daily"],
                    ["MySQL", "Eloquent, migrations, a few raw queries", "Weekly"],
                ],
            },
        },
        {
            title: "Conclusion",
            paragraphs: [
                "My first co-op gave me a broad understanding of what it means to be a software developer. I entered the term focused primarily on improving my technical skills, but I gained a stronger understanding of the importance of collaboration, communication, adaptability, and continuous learning alongside writing good code. Working on production applications, adapting to different technology stacks, and learning through mob programming challenged me to approach problems differently and become more comfortable working in unfamiliar environments.",
                "One of the biggest takeaways from this experience was that becoming a better developer is not about knowing everything. It is about being willing to learn, asking questions, understanding the decisions behind the code, and being able to contribute effectively as part of a team. I gained confidence in my technical abilities while also developing a better understanding of the kind of developer I want to become. I hope this work term is ultimately remembered as the experience where I began making that transition from learning software development as a student to practicing it as a professional.",
            ],
        },
        {
            title: "Acknowledgements",
            paragraphs: [
                "I am grateful to Vehikl for giving me the opportunity to begin my software development career as a co-op student and for creating an environment where I could learn from experienced developers while contributing to real client work. I appreciate all the developers and mentors who took the time to answer my questions, provide feedback, and include me in technical discussions throughout the term. They were always happy to help and share their knowledge, which has had a significant impact on my growth as a developer.",
                "Vehikl has also provided opportunities to learn beyond my day-to-day work, including attending Laracon US in Boston, participating in book clubs and growth sessions, and working with different teams throughout the term. These experiences have allowed me to explore areas beyond my assigned tasks and become more involved in the broader development community.",
                "I am looking forward to continuing my time at Vehikl and building on what I have learned during my first work term. I appreciate everyone who has supported me so far and helped make my first co-op such a valuable experience.",
            ],
        },
    ],
};

export default summer2026;
