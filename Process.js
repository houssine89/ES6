async function processUserData(users){
  try{
    const filtredUsers = users.filter(({gender}) => gender ==="male");
    const formatteddUsers = filtredUsers.map(({name,age}) => `Name: ${name}, Age: ${age}`);
    return formatteddUsers;
  }catch(error){
    console.error("error", error.message);
    throw error;
  }
}
processUserData();