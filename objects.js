// they take in keys and values

var people ={
    name:20,
    country:"Kenya"
};
console.log(people["country"]);
console.log(people.country);

var person = new Object(people);
console.log(person.name);
person["age"]=35;
console.log(person);

for ([key, values]of Object.entries(person))
    console.log('${key}: ${values}');

    Object.freeze(person)
    person["school"] ="AkiraChix"
    Object.seal(person)
    person.name="Anita"
    person["Hobby"]="Dancing"

    // methods ia an object property whose value is a function
    var student={
        name:"Anita",
        country:"Kenya",
        hobby:function(){
            console.log('My name is ${name} and my hobby is cooking');
            return"My favouritr hobby is baking";
        }
    }
    console.log(student.country);
    console.log(student.hobby());
    console.log(student.friends.hobby.play())


    
