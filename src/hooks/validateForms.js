import participantsNum from "../constants/participantsNum.constants";

const validateFormDetails=(details={},eventName='')=>{

  const memberNames=[];
  const memberPhones=[];
  const memberImages=[];
  const memberEmail=[];
  const requiredParticipantsNum=participantsNum[eventName];
  
  Object.entries(details).forEach(([key,value])=>{
    if(key.includes("name")){
      memberNames.push(value);
    }
    else if(key.includes("phone")){
      memberPhones.push(value);
    }
    else if(key.includes("image")){
      memberImages.push(value);
    }
  });

  if(requiredParticipantsNum==null){
    return {
        success:false,
        message:"Event does not exist"
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

  if(memberEmail[0]=="" || !memberEmail.length==0){
    return {
        success:false,
        message:"At least one email is required!"
    };
  }




    return {
        success:true,
        message:"Form Details are valid!"
    };
}

export default validateFormDetails;
