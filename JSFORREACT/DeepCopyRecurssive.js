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
                    subdepartments: []  // No further nesting here
                }
            ]
        },
        {
            name: "Human Resources",
            employees: [
                { name: "David", role: "Recruiter" },
                { name: "Eve", role: "Benefits Coordinator" }
            ],
            subdepartments: []  // No further nesting here
        }
    ]
};


function deepClone(obj) {
    for(let i = 0; i < obj.keys().length; i++){
        if(typeof obj[obj.keys()[i]] === 'object'){
            obj[obj.keys()[i]] = deepClone(obj[obj.keys()[i]]);}
            else{
                obj[obj.keys()[i]] = obj[obj.keys()[i]];
            }
    }
}




// let deepObj = JSON.parse(JSON.stringify(company))
// company["companies"] = ['Squbix', 'LDRexg']
// console.log(deepObj);
// console.log(company);

// Possible addition for recursive reference testing
company.departments.push(company.departments[0]);  // Intentional recursive link
