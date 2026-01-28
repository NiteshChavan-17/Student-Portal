const student = {
    Name:"Nitesh Chavan",
    Roll_no: 102,
    Year: "Third Year",
    Branch:"Computer Engineering",
    Attendance: "90%",
    Courses:[
        {id:1, title:"Design and Analysis of Algorithm", credits:3, 
            description:`Learn algorithm design techniques like divide & conquer, greedy, dynamic programming, 
            and analyze time/space complexity for efficient problem solving.`},
        {id:2, title:"Operating System", credits:3, 
            description:`Study core OS concepts such as processes, scheduling, memory management, 
            deadlocks, file systems, and how the system manages hardware resources.`},
        {id:3, title:"UI UX", credits:4, 
            description:`Understand user-centered design, wireframing, prototyping, 
            and usability principles to build clean, accessible, and interactive interfaces.`},
        {id:4, title:"Cloud Computing", credits:4,
            description:`Explore cloud services, deployment models, virtualization, and concepts like scalability, 
            storage, and cloud security used in modern web applications.`}
    ]
};

export default student;