import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

async function registerForms(finalData) {
  if (Object.entries(finalData).length === 0) {
    return {
      success: false,
      message: "Invalid data",
    };
  }

  const teamData = {
    registeredFor: finalData.registeredFor,
    email: finalData.email,
    players: finalData.players,
  };

  try {
    // Upload player images and update their URLs
    const uploadedPlayers = await Promise.all(
      teamData.players.map(async (player) => {
        if (!player.IdImage) {
          throw new Error("Player image is missing");
        }

        const file = player.IdImage;
        const storageRef = ref(storage, `idImages/${Date.now()}_${file.name}`);

        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log("Image uploaded:", downloadURL);

        return { ...player, IdImage: downloadURL }; // Return updated player
      })
    );

    // Update teamData with uploaded image URLs
    teamData.players = uploadedPlayers;

    // Log the final data to be uploaded
    console.log("teamData to be uploaded:", JSON.stringify(teamData, null, 2));

    // Save data to Firestore
    await addDoc(collection(db, "teams"), teamData);
    console.log("Team data saved successfully!");

    return {
      success: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message: "Could not submit your form, please try again",
    };
  }
}

export default registerForms;