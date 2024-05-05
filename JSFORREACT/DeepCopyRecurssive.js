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



function deepClone(obj, seen = new Map()) {

    //For Simple Primitvie Data type
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const newArray = [];
        seen.set(obj, newArray);
        for (const item of obj) {
            newArray.push(deepClone(item, seen));
        }
        return newArray;
    }

    if (obj instanceof Object) {
        if (seen.has(obj)) {
            return seen.get(obj);
        }

        const newObj = {};
        seen.set(obj, newObj);
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key], seen);
            }
        }
        return newObj;
    }

    return obj;
}



// Add recursive reference
company.departments.push(company.departments[0]);

const clonedCompany = deepClone(company);

// Verify the deep clone
console.log(clonedCompany);
console.log(clonedCompany.departments[0] === clonedCompany.departments[1]); // should be true
console.log(clonedCompany.departments[0] === company.departments[0]); // should be false




// let deepObj = JSON.parse(JSON.stringify(company))
// company["companies"] = ['Squbix', 'LDRexg']
// console.log(deepObj);
// console.log(company);

// Possible addition for recursive reference testing
company.departments.push(company.departments[0]);  // Intentional recursive link
