import {useState} from 'react';

function HackathonRegistration(){
  const [userInput, setUserInput] = useState({
    name1: "", phone1: "", IdImage1: "",
    name2: "", phone2: "", IdImage2: "",
    name3: "", phone3: "", IdImage3: "",
    name4: "", phone4: "", IdImage4: "",
    email: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null, IdImage2: null, IdImage3: null, IdImage4: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      setUserInput((prev) => ({ ...prev, [name]: file }));
      setImagePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name1, phone1, IdImage1, name2, phone2, name3, phone3 } = userInput;

    if (!name1 || !phone1 || !IdImage1) {
      alert("Captain's details are required!");
      return;
    }
    if (!name2 || !phone2 || (!name3 && !phone3)) {
      alert("At least one more player is required!");
      return;
    }
    
    console.log("Form Submitted:", userInput);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Hackathon Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Captain Details */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Captain</h3>
          <div className="w-full"> 
              <div className="flex items-center justify-center gap-2"> 
<input type="text" name="name1" value={userInput.name1} onChange={handleChange} placeholder="Captain Name" className="w-1/2 p-2 border rounded mb-2" required />
          <input type="tel" name="phone1" value={userInput.phone1} onChange={handleChange} placeholder="Captain Phone" className="w-1/2 p-2 border rounded mb-2" required />
              </div>

           <div className="flex items-center justify-center gap-2"> 
                    {  /* Email */}
        <input type="email" name="email" value={userInput.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
          <input type="file" name="IdImage1" onChange={handleImageChange} className="w-full p-2 border rounded" required />
              </div>

          </div>
          
       
       
          {imagePreviews.IdImage1 && <img src={imagePreviews.IdImage1} alt="ID Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
        </div>

        {/* Player 1 */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full flex justify-center items-center gap-2"> 
             <input type="text" name="name2" value={userInput.name2} onChange={handleChange} placeholder="Player 1 Name" className="w-1/2 p-2 border rounded mb-2" required />
          <input type="tel" name="phone2" value={userInput.phone2} onChange={handleChange} placeholder="Player 1 Phone" className="w-1/2 p-2 border rounded mb-2" required />
           </div>
          <input type="file" name="IdImage2" onChange={handleImageChange} className="w-full p-2 border rounded" />
          {imagePreviews.IdImage2 && <img src={imagePreviews.IdImage2} alt="ID Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
        </div>

        {/* Player 2 */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2"> 
          <input type="text" name="name3" value={userInput.name3} onChange={handleChange} placeholder="Player 2 Name" className="w-1/2 p-2 border rounded mb-2" />
          <input type="tel" name="phone3" value={userInput.phone3} onChange={handleChange} placeholder="Player 2 Phone" className="w-1/2 p-2 border rounded mb-2" />
          </div>
          <input type="file" name="IdImage3" onChange={handleImageChange} className="w-full p-2 border rounded" />
          {imagePreviews.IdImage3 && <img src={imagePreviews.IdImage3} alt="ID Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
        </div>

        {/* Player 3 (Optional) */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3 (Optional)</h3>
          <div className="w-full flex justify-center items-center gap-2"> 
          <input type="text" name="name4" value={userInput.name4} onChange={handleChange} placeholder="Player 3 Name" className="w-1/2 p-2 border rounded mb-2" />
          <input type="tel" name="phone4" value={userInput.phone4} onChange={handleChange} placeholder="Player 3 Phone" className="w-1/2 p-2 border rounded mb-2" />
          </div>
          <input type="file" name="IdImage4" onChange={handleImageChange} className="w-full p-2 border rounded" />
          {imagePreviews.IdImage4 && <img src={imagePreviews.IdImage4} alt="ID Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
        </div>

        

        {/* Submit Button */}
        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
          Register Team
        </button>
      </form>
    </div>
  );
};






function CodeNReplicaRegistration(){

	return <> 
        <form> 
          CodeNReplicaRegistration
        </form>
	</>
}

function EscapeRoomRegistration(){

	return <> 
        <form> 
          EscapeRoomRegistration
        </form>
	</>
}

export {
	HackathonRegistration,
	CodeNReplicaRegistration,
	EscapeRoomRegistration
}

/* <form className="space-y-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-2 bg-black text-white border border-cyber-blue/30 rounded-lg"
   />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 bg-black text-white border border-cyber-blue/30 rounded-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="px-4 py-2 bg-black text-white border border-cyber-blue/30 rounded-lg"
              />
            </div>
  
            <motion.button
              className="w-full px-6 py-3 bg-cyber-blue text-black font-bold rounded-lg
                         border border-cyber-blue/30 hover:border-white
                         hover:shadow-[0_0,15px,rgba(0,243,255,0.3)]
                         transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              REGISTER
            </motion.button>
          </form>
          */