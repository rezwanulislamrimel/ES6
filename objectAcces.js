const complexObject = {
    id: 1,
    name: "Main Object",
    info: {
        description: "This is a complex nested object.",
        author: {
            firstName: "John",
            lastName: "Doe"
        }
    },
    data: {
        values: [10, 20, 30],
        settings: {
            isEnabled: true,
            maxItems: 5
        }
    }
};

// ! Name, Description,Last Name,Last Element OF Values,MaxItem

console.log(complexObject.name);
console.log(complexObject.info.description);
console.log(complexObject.info.author.lastName);
console.log(complexObject.data.values[1])
console.log(complexObject.data.values[complexObject.data.values.length - 1])
console.log(complexObject.data.settings.maxItems);

