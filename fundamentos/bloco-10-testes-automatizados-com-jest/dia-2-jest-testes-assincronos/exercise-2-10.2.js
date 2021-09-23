const users = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Paul' },
  ];
  
  const findUserById = (id) => new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id); // looking for the id passed as a parameter inside users
  
    if (result) { // if user is true
      return resolve(result); // return result
    }
  // if user is false, return reject
    return reject(new Error(`User with ${id} not found.`));
  });
  
  const getUserName = (userId) => findUserById(userId).then((user) => user.name);
// console.log(getUserName(1));
  module.exports = getUserName;