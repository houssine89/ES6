async function fetchUserData(){
  try{
    const data = await fetch("https://dummyjson.com/users");
    const result = await data.json();
    console.log("Result:", result);
    const processed = processUserData(users);
    const totalAge = summarizeAge(users);
    console.log(processed);
    console.log(totalAge);
  }catch{
    console.error("error", error.message);
  }
}
fetchUserData();
