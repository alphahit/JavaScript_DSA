const company = {
    name: "Tech Solutions",
    departments: [
        {
            name: "Engineering",
            primaryBenefit: {
                bonus: "10%",
                leaves: {
                    casual: 10,
                    sick: 5
                },
                foundingDay: new Date("2010-04-01")
            },
            employees: [
                { name: "Alice", role: "Software Engineer" },
                { name: "Bob", role: "DevOps Engineer" }
            ],
            subdepartments: [
                {
                    name: "Quality Assurance",
                    employees: [
                        { name: "Charlie", role: "QA Engineer" },
                        { name: "Josh", role: "Software Engineer" }
                    ],
                    subdepartments: [
                        {
                            name: "Automation Testing",
                            employees: [
                                { name: "Kim", role: "Automation Engineer" }
                            ],
                            subdepartments: []
                        },
                        {
                            name: "Manual Testing",
                            employees: [
                                { name: "Lara", role: "Manual Tester" }
                            ],
                            subdepartments: []
                        }
                    ]
                },
                {
                    name: "Development",
                    employees: [
                        { name: "Sara", role: "Backend Developer" },
                        { name: "Mike", role: "Frontend Developer" }
                    ],
                    subdepartments: [
                        {
                            name: "UI/UX",
                            employees: [
                                { name: "Anne", role: "UI Designer" },
                                { name: "Sam", role: "UX Researcher" }
                            ],
                            subdepartments: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Human Resources",
            primaryBenefit: {
                bonus: "12%",
                leaves: {
                    casual: 12,
                    sick: 6
                },
                foundingDay: new Date("2012-06-15")
            },
            employees: [
                { name: "David", role: "Recruiter" },
                { name: "Eve", role: "Benefits Coordinator" }
            ],
            subdepartments: [
                {
                    name: "Employee Relations",
                    employees: [
                        { name: "Tina", role: "Employee Relations Specialist" },
                        { name: "Rob", role: "Workplace Investigator" }
                    ],
                    subdepartments: []
                }
            ]
        },
        {
            name: "Marketing",
            primaryBenefit: {
                bonus: "15%",
                leaves: {
                    casual: 15,
                    sick: 7
                },
                foundingDay: new Date("2015-08-30")
            },
            employees: [
                { name: "Lucy", role: "Marketing Director" },
                { name: "Ethan", role: "Content Strategist" }
            ],
            subdepartments: [
                {
                    name: "Digital Marketing",
                    employees: [
                        { name: "Omar", role: "SEO Specialist" },
                        { name: "Jade", role: "Social Media Manager" }
                    ],
                    subdepartments: [
                        {
                            name: "Email Marketing",
                            employees: [
                                { name: "Vera", role: "Email Marketing Coordinator" },
                                { name: "Lara", role: "Software Engineer" }
                            ],
                            subdepartments: []
                        }
                    ]
                }
            ]
        }
    ]
};


// use the filter method to find all employees in the company object with a specific role, such as "Software Engineer"

function getAllSoftwareEngineerRoles(departments){
    return departments.map(department => {
        let names = department.employees.filter((employee) => employee.role === "Software Engineer").map(employee => employee.name);
        if (department.subdepartments && department.subdepartments.length > 0) {
            department.subdepartments.forEach(subdepartment => {
                names = names.concat(getAllSoftwareEngineerRoles([subdepartment]));
            })
        }
        return names;
    }).flat()
}

const employeeNamesSoftwareEngineer = getAllSoftwareEngineerRoles(company.departments);

console.log("employeeNamesSoftwareEngineer===>",employeeNamesSoftwareEngineer);


//Add a salary property to each employee

function addEmployeeSalary(departments){
    departments.forEach(department => {
        department.employees.forEach(employee => {
            employee.salary = ((Math.random() * (90000 - 50000 + 1)) + 50000).toFixed(2);
        })
        if (department.subdepartments) {
            addEmployeeSalary(department.subdepartments);
        }
    }
    
)}

addEmployeeSalary(company.departments);
console.log("company with salary property===>", JSON.stringify(company));

