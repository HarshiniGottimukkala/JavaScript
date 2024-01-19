/* Given an array of objects representing users, update the age of a user with a specific ID.
      const users = [
           { id: 1, name: "A", age: 25 },
           { id: 2, name: "B", age: 30 },
           { id: 3, name: "C", age: 22 }
     ]; */
const users = [
        { id: 1, name: "A", age: 25 },
        { id: 2, name: "B", age: 30 },
        { id: 3, name: "C", age: 22 }
  ];

  users[0].age = 40;

/*   console.log(users);
 */
  let updateAge = (users, userid, newAge) =>{
     return users.map((user) =>{
        if(user.id === userid){
            return {...user, age : newAge}
        }
        return user;
     })
  }
let update = updateAge(users, 1, 100)
console.log(update);

