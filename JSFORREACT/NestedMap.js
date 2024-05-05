//map method to generate an array of all employee names across all departments and subdepartments of the company object
const company = {
    name: "Tech Solutions",
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "Alice", role: "Software Engineer" },
                { name: "Bob", role: "DevOps Engineer" }
            ],
            subdepartments: [
                {
                    name: "Quality Assurance",
                    employees: [
                        { name: "Charlie", role: "QA Engineer" }
                    ],
                    subdepartments: []
                }
            ]
        },
        {
            name: "Human Resources",
            employees: [
                { name: "David", role: "Recruiter" },
                { name: "Eve", role: "Benefits Coordinator" }
            ],
            subdepartments: []
        }
    ]
};


function getAllEmployeeNames(departments){
    return departments.map(department => {
        let names = department.employees.map(employee => employee.name);
        if (department.subdepartments && department.subdepartments.length > 0) {
            department.subdepartments.forEach(subdepartment => {
                names = names.concat(getAllEmployeeNames([subdepartment]));
            });
        }
        return names;
    }).flat();
}

let mappedarr = company.departments.flatMap(item => { 
    let totalItem = [...item.employees.map(item => item.name),...item.subdepartments.flatMap(item => item.employees.map(item => item.name))]
    return totalItem
})



const employeeNames = getAllEmployeeNames(company.departments);
console.log(employeeNames);
console.log("mappedarr==>",mappedarr)