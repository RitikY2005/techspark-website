import participantsNum from "../constants/participantsNum.constants";

const validateFormDetails = (details = {}, eventName = "") => {
  const memberNames = [];
  const memberPhones = [];
  const memberImages = [];
  const memberEmail = [];

  const requiredParticipantsNum = participantsNum[eventName];

  Object.entries(details).forEach(([key, value]) => {
    if (key.includes("name") && value != null && value !== "") {
      memberNames.push(value);
    } else if (key.includes("phone") && value != null && value !== "") {
      memberPhones.push(value);
    } else if (key.includes("IdImage") && value != null && value !== "") {
      memberImages.push(value);
    } else if (key.includes("email") && value != null && value !== "") {
      memberEmail.push(value);
    }
  });



  if (requiredParticipantsNum == null) {
    return {
      success: false,
      message: "Event does not exist",
    };
  }

  // name alert 

  if(memberNames.length<memberPhones.length){
    return {
      success: false,
      message: "Every participant should have a name",
    };
  }

  // phone alert 
  if(memberPhones.length<memberImages.length){
    return {
      success: false,
      message: "Every participant should have a phone number",
    };
  }

  // image alert 
  if(memberImages.length<memberNames.length){
    return {
      success: false,
      message: "Every participants ID image should be uploaded",
    };
  }

  // a generalized error if any feild is missing

   if (
     memberNames.length !== memberPhones.length ||
     memberPhones.length !== memberImages.length
   ) {
    
     return {
       success: false,
       message: "You have not filled all the required details!",
     };
   }

  if (
    memberNames.length < requiredParticipantsNum.min ||
    memberNames.length > requiredParticipantsNum.max
  ) {
    return {
      success: false,
      message:
        "There should be min " +
        requiredParticipantsNum.min +
        " and max " +
        requiredParticipantsNum.max +
        " participants",
    };
  }

  // if (
  //   memberPhones.length < requiredParticipantsNum.min ||
  //   memberPhones.length > requiredParticipantsNum.max
  // ) {
  //   return {
  //     success: false,
  //     message:
  //       "There should be min " +
  //       requiredParticipantsNum.min +
  //       " and max " +
  //       requiredParticipantsNum.max +
  //       " participants",
  //   };
  // }

  // if (
  //   memberImages.length < requiredParticipantsNum.min ||
  //   memberImages.length > requiredParticipantsNum.max
  // ) {
  //   return {
  //     success: false,
  //     message:
  //       "There should be min " +
  //       requiredParticipantsNum.min +
  //       " and max " +
  //       requiredParticipantsNum.max +
  //       " participants",
  //   };
  // }


  if (memberEmail[0] == "" || memberEmail.length == 0) {
    return {
      success: false,
      message: "Email is required!",
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
    success: true,
    message: "Form Details are valid!",
    finalData,
  };
};

export default validateFormDetails;
