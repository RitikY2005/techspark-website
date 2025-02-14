import participantsNum from "../constants/participantsNum.constants";

const validateFormDetails=(details={},eventName='')=>{

  const memberNames=[];
  const memberPhones=[];
  const memberImages=[];
  const memberEmail=[];
  const requiredParticipantsNum=participantsNum[eventName];
  
  Object.entries(details).forEach(([key,value])=>{
    if(key.includes("name") && value!=null && value!==""){
      memberNames.push(value);
    }
    else if(key.includes("phone") && value!=null && value!==""){
      memberPhones.push(value);
    }
    else if(key.includes("IdImage") && value!=null && value!==""){
      memberImages.push(value);
    } else if(key.includes("email") && value!=null && value!==""){
        memberEmail.push(value);
    }
  });

  console.log("data structured->",memberNames,memberPhones,memberEmail,memberImages);

  if(requiredParticipantsNum==null){
    return {
        success:false,
        message:"Event does not exist"
    };
  }

  if (memberNames.length !== memberPhones.length || memberPhones.length !== memberImages.length) {
   console.log("lenght->>",memberNames,memberPhones,memberEmail,memberImages);
    return {
      success:false,
      message:"Data array should havve same lenght!"
    };
  }
  
  if(memberNames.length<requiredParticipantsNum.min || memberNames.length>requiredParticipantsNum.max){
    return {
        success:false,
        message:"There should be min "+requiredParticipantsNum.min+" and max "+requiredParticipantsNum.max+" participants"
    };
  }

  if(memberPhones.length<requiredParticipantsNum.min || memberPhones.length>requiredParticipantsNum.max){
    return {
        success:false,
        message:"There should be min "+requiredParticipantsNum.min+" and max "+requiredParticipantsNum.max+" participants"
    };
  }

  if(memberImages.length<requiredParticipantsNum.min || memberImages.length>requiredParticipantsNum.max){
    return {
        success:false,
        message:"There should be min "+requiredParticipantsNum.min+" and max "+requiredParticipantsNum.max+" participants"
    };
  }

  if(memberEmail[0]=="" || memberEmail.length==0){
    return {
        success:false,
        message:"At least one email is required!"
    };
  }




 
  
  const finalData = {
    registeredFor: eventName, 
    email: memberEmail[0], 
    players: memberNames.map((name, index) => ({
      name: name,
      phone: memberPhones[index],
      IdImage: memberImages[index],
    })),
  };





    return {
        success:true,
        message:"Form Details are valid!",
        finalData
    };
}

export default validateFormDetails;
