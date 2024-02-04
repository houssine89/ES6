async function summarizeAge(users){
  try{
   const totalMalesAge = users.reduce((sum, {gender,age})=>{
    if(gender === "male"){
      return sum + age;
    } return sum;
   },0);
   return totalMalesAge;
  }catch{
    console.error("error",error.message);
  }
}

summarizeAge();