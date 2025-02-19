import React, { useState } from "react";
import validateFormDetails from "../hooks/validateForms";
import registerForms from "../hooks/registerForms";
import Loader from './Loader.js';
import { toast } from "react-toastify";



function PentApp({eventName}) {
  const [isLoading,setIsLoading]=useState(false);
  const [userInput, setUserInput] = useState({
    name1: "",
    phone1: "",
    IdImage1: "",
    name2: "",
    phone2: "",
    IdImage2: "",
    name3: "",
    phone3: "",
    IdImage3: "",
    name4: "",
    phone4: "",
    IdImage4: "",
    name5: "",
    phone5: "",
    IdImage5: "",
    email: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null,
    IdImage2: null,
    IdImage3: null,
    IdImage4: null,
    IdImage5: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(fileType)) {
      // toast.error('Please upload only PNG, JPG or JPEG images.');
      toast.error("Please upload only PNG, JPG or JPEG images.");
      setImagePreviews({ IdImage1: null });
      return;
    }

    // Check file size (5MB in this case, adjust as needed)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
    //  toast.error('File size must be less than 5MB.');
     toast.error("File size must be less than 5MB.")
     return;
    }

      setUserInput((prev) => ({ ...prev, [name]: file }));
      setImagePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
    else {
      //If no file is selected, set the state to null
    setUserInput((prev) => ({ ...prev, [name]: null }));
    setImagePreviews((prev) => ({ ...prev, [name]: null }));
    }
    e.target.value = null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const verify= validateFormDetails(userInput,eventName);
    if(verify.success && verify.success===true){
       console.log(userInput,eventName);
       console.log("User is ready for registration..");

       const formSubmitStatus=await registerForms(verify?.finalData);

       if(formSubmitStatus.success && formSubmitStatus.success===true){
          //  toast.error(formSubmitStatus.message);
           toast.success(formSubmitStatus.message);
           setUserInput({
            name1: "",
            phone1: "",
            IdImage1: "",
            name2: "",
            phone2: "",
            IdImage2: "",
            name3: "",
            phone3: "",
            IdImage3: "",
            name4: "",
            phone4: "",
            IdImage4: "",
            name5: "",
            phone5: "",
            IdImage5: "",
            email: "",
          });
      
          setImagePreviews({
            IdImage1: null,
          IdImage2: null,
          IdImage3: null,
          IdImage4: null,
          IdImage5: null
          });
           setIsLoading(false);
       } else{
          // toast.error(formSubmitStatus.message);
          toast.error(formSubmitStatus.message);
       }

    } else{
      // toast.error(verify.message);
      toast.error(verify.message);
    }
    

    
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-2 sm:p-6 bg-red shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-cyber-blue text-center mb-4">
        Registration 
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Captain Details */}
        <div className="p-2 sm:p-4 bg-black text-cyber-blue rounded-lg shadow-md">
        <p className="text-sm font-normal mb-2 text-cyber-pink"> 
          <ul style={{listStyleType:"circle"}}>
            <li>Upload Image in .png / .jpg / .jpeg format only</li>
            <li>Provide WhatsApp contact number</li>
          </ul> 
        </p>
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/[^A-Za-z ]/g.test(val)) {
                  // toast.error("Only alphabets are allowed!");
                  toast.error("Only alphabets are allowed!");
                  }
                  const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                  handleChange({ target: { name: "name1", value: val1 } });
                }}
                placeholder="Name"
                className="w-1/2 p-2 border bg-black rounded mb-2 "
                //style={{ borderWidth: '0.1px', borderColor: '#ccc' }}
                required
              />
              <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
                <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone1"
                  value={userInput.phone1}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone1", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      // toast.error("Phone number must be exactly 10 digits!");
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone1", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                onBlur={(e) => {
                  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (e.target.value && !emailPattern.test(e.target.value)) {
                  // toast.error("Please enter a valid email address!");
                  toast.error("Please enter a valid email address!");
                  setUserInput({ ...userInput, email: "" }); // Clear the input
                  }}}
                placeholder="Email"
                className="w-full sm:w-1/2 p-2 border bg-black rounded"
                required
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div class="w-full sm:w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="w-full flex no-wrap justify-center items-center cursor-pointer px-4 py-2 bg-grey text-black border-grey border rounded rounded-md   focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  onChange={handleImageChange}
                  accept="image/jpeg, image/png,image/jpg"
                  disabled={isLoading?true:false}
                />
              </div>
            </div>
          </div>

          {imagePreviews.IdImage1 && (
            <img
              src={imagePreviews.IdImage1}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 2 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name2", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
              <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone2"
                  value={userInput.phone2}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone2", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone2", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload2"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload2"
              name="IdImage2"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage2 && (
            <img
              src={imagePreviews.IdImage2}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 3 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name3"
              value={userInput.name3}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name3", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
              <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone3"
                  value={userInput.phone3}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone3", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone3", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage3"
            id="file_image"
            onChange={handleImageChange}
            className="w-full p-2 border rounded hidden"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload3"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload3"
              name="IdImage3"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage3 && (
            <img
              src={imagePreviews.IdImage3}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 4  */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 4 </h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name4"
              value={userInput.name4}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name4", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone4"
                  value={userInput.phone4}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone4", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone4", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage4"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload4"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload4"
              name="IdImage4"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage4 && (
            <img
              src={imagePreviews.IdImage4}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 5*/}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 5</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name5"
              value={userInput.name5}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name5", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
              <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone5"
                  value={userInput.phone5}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone5", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone5", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage3"
            id="file_image"
            onChange={handleImageChange}
            className="w-full p-2 border rounded hidden"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload5"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload5"
              name="IdImage5"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage5 && (
            <img
              src={imagePreviews.IdImage5}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading?true:false}
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md  "
        >
          {isLoading?<Loader width={"15px"} height={"15px"}/>:"Register Team"}
        </button>
      </form>
      
    </div>
  );
}

function DualApp({eventName}) {
  const [isLoading,setIsLoading]=useState(false);
  const [userInput, setUserInput] = useState({
    name1: "",
    phone1: "",
    IdImage1: "",
    name2: "",
    phone2: "",
    IdImage2: "",
    email:""
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null,
    IdImage2: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(fileType)) {
      toast.error('Please upload only PNG, JPG or JPEG images.');
      setImagePreviews({ IdImage1: null });
      return;
    }

    // Check file size (5MB in this case, adjust as needed)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
     toast.error('File size must be less than 5MB.');
     return;
    }

      setUserInput((prev) => ({ ...prev, [name]: file }));
      setImagePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
    else {
      //If no file is selected, set the state to null
    setUserInput((prev) => ({ ...prev, [name]: null }));
    setImagePreviews((prev) => ({ ...prev, [name]: null }));
    }
    e.target.value = null;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const verify= validateFormDetails(userInput,eventName);
    if(verify.success && verify.success===true){
       console.log(userInput,eventName);
       console.log("User is ready for registration..");

       const formSubmitStatus=await registerForms(verify?.finalData);

       if(formSubmitStatus.success && formSubmitStatus.success===true){
           toast.success(formSubmitStatus.message);
           setUserInput({
            name1: "",
            phone1: "",
            IdImage1: "",
            name2: "",
            phone2: "",
            IdImage2: "",
            email:""
          });
      
          setImagePreviews({
            IdImage1: null,
          IdImage2: null,
          });
           setIsLoading(false);
       } else{
          toast.error(formSubmitStatus.message);
       }

    } else{
      toast.error(verify.message);
    }
    

    
    setIsLoading(false);
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-black text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Player 1 */}
        <div className="p-4 rounded-lg shadow-md">
        <p className="text-sm font-normal mb-2 text-cyber-pink"> 
        <ul style={{listStyleType:"circle"}}>
            <li>Upload Image in .png / .jpg / .jpeg format only</li>
            <li>Provide WhatsApp contact number</li>
          </ul> 
        </p>
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/[^A-Za-z ]/g.test(val)) {
                  toast.error("Only alphabets are allowed!");
                  }
                  const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                  handleChange({ target: { name: "name1", value: val1 } });
                }}

                placeholder="Name"
                className="w-1/2 p-2 border bg-black rounded mb-2"
                required
              />
              <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
              <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone1"
                  value={userInput.phone1}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone1", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone1", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                onBlur={(e) => {
                  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (e.target.value && !emailPattern.test(e.target.value)) {
                  toast.error("Please enter a valid email address!");
                  setUserInput({ ...userInput, email: "" }); // Clear the input
                  }}}
                placeholder="Email"
                className="w-full sm:w-1/2 p-2 bg-black border rounded mb-2"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}

              <div class="w-full sm:w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="flex justify-center items-center cursor-pointer w-full px-4 py-2 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  onChange={handleImageChange}
                  accept="image/jpeg, image/png,image/jpg"
                  disabled={isLoading?true:false}
                />
              </div>
            </div>
          </div>

          {imagePreviews.IdImage1 && (
            <img
              src={imagePreviews.IdImage1}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 2 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name2", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone2"
                  value={userInput.phone2}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone2", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone2", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>
          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload2"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload2"
              name="IdImage2"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage2 && (
            <img
              src={imagePreviews.IdImage2}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
         disabled={isLoading?true:false}
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md  "
        >
        {isLoading?<Loader width={"15px"} height={"15px"}/>:"Register Team"}
        </button>
      </form>
    </div>
  );
}

function TrioApp({eventName}) {
  const [isLoading,setIsLoading]=useState(false);
  const [userInput, setUserInput] = useState({
    name1: "",
    phone1: "",
    IdImage1: "",
    name2: "",
    phone2: "",
    IdImage2: "",
    name3: "",
    phone3: "",
    IdImage3: "",
    email: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null,
    IdImage2: null,
    IdImage3: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(fileType)) {
      toast.error('Please upload only PNG, JPG or JPEG images.');
      setImagePreviews({ IdImage1: null });
      return;
    }

    // Check file size (5MB in this case, adjust as needed)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
     toast.error('File size must be less than 5MB.');
     return;
    }

      setUserInput((prev) => ({ ...prev, [name]: file }));
      setImagePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
    else {
      //If no file is selected, set the state to null
    setUserInput((prev) => ({ ...prev, [name]: null }));
    setImagePreviews((prev) => ({ ...prev, [name]: null }));
    }
    e.target.value = null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const verify= validateFormDetails(userInput,eventName);
    if(verify.success && verify.success===true){
       console.log(userInput,eventName);
       console.log("User is ready for registration..");

       const formSubmitStatus=await registerForms(verify?.finalData);

       if(formSubmitStatus.success && formSubmitStatus.success===true){
           toast.success(formSubmitStatus.message);
           setUserInput({
            name1: "",
          phone1: "",
          IdImage1: "",
          name2: "",
          phone2: "",
          IdImage2: "",
          name3: "",
          phone3: "",
          IdImage3: "",
          email: "",
          });
      
          setImagePreviews({
            IdImage1: null,
            IdImage2: null,
            IdImage3: null,
            IdImage4: null,
          });
           setIsLoading(false);
       } else{
          toast.error(formSubmitStatus.message);
       }

    } else{
      toast.error(verify.message);
    }
    

    
    setIsLoading(false);
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-black text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Player 1 Details */}
        <div className="p-4 bg-black rounded-lg shadow-md">
        <p className="text-sm font-normal mb-2 text-cyber-pink"> 
        <ul style={{listStyleType:"circle"}}>
            <li>Upload Image in .png / .jpg / .jpeg format only</li>
            <li>Provide WhatsApp contact number</li>
          </ul> 
        </p>
          <h3 className="text-lg font-medium mb-2">Player 1 </h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/[^A-Za-z ]/g.test(val)) {
                  toast.error("Only alphabets are allowed!");
                  }
                  const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                  handleChange({ target: { name: "name1", value: val1 } });
                }}

                placeholder="Name"
                className="w-1/2 p-2 border bg-black rounded mb-2"
                required
              />
              <div className="flex items-center border bg-black rounded mb-2 w-1/2 p-2">
                <span className="text-gray-400 mr-2">+91</span>
                <input
                  type="tel"
                  name="phone1"
                  value={userInput.phone1}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone1", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone1", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center space-x-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                onBlur={(e) => {
                  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (e.target.value && !emailPattern.test(e.target.value)) {
                  toast.error("Please enter a valid email address!");
                  setUserInput({ ...userInput, email: "" }); // Clear the input
                  }}}
                placeholder="Email"
                className="w-full sm:w-1/2 p-2 border bg-black rounded mb-2"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}

              <div class="w-full sm:w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload3"
                  class="w-full flex justify-center items-center cursor-pointer px-4 py-2 bg-grey text-black border-grey border rounded mb-2 rounded-md focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload3"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  onChange={handleImageChange}
                  accept="image/jpeg, image/png,image/jpg"
                  disabled={isLoading?true:false}
                />
              </div>
            </div>
          </div>

          {imagePreviews.IdImage1 && (
            <img
              src={imagePreviews.IdImage1}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 2 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name2", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone2"
                  value={userInput.phone2}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone2", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone2", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border bg-black rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload4"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload4"
              name="IdImage2"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage2 && (
            <img
              src={imagePreviews.IdImage2}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 3 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3 (Optional)</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name3"
              value={userInput.name3}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name3", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone3"
                  value={userInput.phone3}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone3", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone3", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage3"
            onChange={handleImageChange}
            className="w-full p-2 border bg-black rounded"
          /> */}
          <div class="flex items-center space-x-2">
            <label
              for="file_upload5"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload5"
              name="IdImage3"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage3 && (
            <img
              src={imagePreviews.IdImage3}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>
        {/* Submit Button */}
        <button
         disabled={isLoading?true:false}
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md  "
        >
        {isLoading?<Loader width={"15px"} height={"15px"}/>:"Register Team"}
        </button>
      </form>
    </div>
  );
}

function SoloApp({eventName}) {
  const [isLoading,setIsLoading]=useState(false);
  const [userInput, setUserInput] = useState({
    name1: "",
    phone1: "",
    IdImage1: "",
    email: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(fileType)) {
      toast.error('Please upload only PNG, JPG or JPEG images.');
      setImagePreviews({ IdImage1: null });
      return;
    }

    // Check file size (5MB in this case, adjust as needed)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
     toast.error('File size must be less than 5MB.');
     return;
    }

      setUserInput((prev) => ({ ...prev, [name]: file }));
      setImagePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
    else {
      //If no file is selected, set the state to null
    setUserInput((prev) => ({ ...prev, [name]: null }));
    setImagePreviews((prev) => ({ ...prev, [name]: null }));
    }
    e.target.value = null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const verify= validateFormDetails(userInput,eventName);
    if(verify.success && verify.success===true){
       console.log(userInput,eventName);
       console.log("User is ready for registration..");

       const formSubmitStatus=await registerForms(verify?.finalData);

       if(formSubmitStatus.success && formSubmitStatus.success===true){
           toast.success(formSubmitStatus.message);
           setUserInput({
            name1: "",
            phone1: "",
            IdImage1: "",
            email: "",
          });
      
          setImagePreviews({
            IdImage1: null,
          });
           setIsLoading(false);
       } else{
          toast.error(formSubmitStatus.message);
       }

    } else{
      toast.error(verify.message);
    }
    

    
    setIsLoading(false);
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-black text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Player Details */}
        <div className="p-4 bg-black rounded-lg shadow-md">
        <p className="text-sm font-normal mb-2 text-cyber-pink">
        <ul style={{listStyleType:"circle"}}>
            <li>Upload Image in .png / .jpg / .jpeg format only</li>
            <li>Provide WhatsApp contact number</li>
          </ul>
        </p>
          <h3 className="text-lg font-medium mb-2">Player</h3>
          <div className="w-full">
            <div className="flex items-center bg-black justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/[^A-Za-z ]/g.test(val)) {
                  toast.error("Only alphabets are allowed!");
                  }
                  const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                  handleChange({ target: { name: "name1", value: val1 } });
                }}
                placeholder="Name"
                className="w-1/2 p-2 border bg-black rounded mb-2"
                required
              />
              <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
              <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone1"
                  value={userInput.phone1}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone1", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone1", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center space-x-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                onBlur={(e) => {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (e.target.value && !emailPattern.test(e.target.value)) {
                toast.error("Please enter a valid email address!");
                setUserInput({ ...userInput, email: "" }); // Clear the input
                }}}
                placeholder="Email"
                className="w-full sm:w-1/2 p-2 border bg-black rounded mb-2"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div class="w-full sm:w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="flex justify-center items-center cursor-pointer w-full px-4 py-2 text-black bg-grey border border-grey rounded mb-2 rounded-md focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  onChange={handleImageChange}
                  accept="image/jpeg, image/png,image/jpg"
                  disabled={isLoading?true:false}
                />
              </div>
            </div>
          </div>

          {imagePreviews.IdImage1 && (
            <img
              src={imagePreviews.IdImage1}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
         disabled={isLoading?true:false}
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md  "
        >
           {isLoading?<Loader width={"15px"} height={"15px"}/>:"Register Team"}
        </button>
      </form>
    </div>
  );
}

function FootballApp({eventName}) {
  const [isLoading,setIsLoading]=useState(false);
  const [userInput, setUserInput] = useState({
    name1: "",
    phone1: "",
    IdImage1: "",
    name2: "",
    phone2: "",
    IdImage2: "",
    name3: "",
    phone3: "",
    IdImage3: "",
    name4: "",
    phone4: "",
    IdImage4: "",
    name5: "",
    phone5: "",
    IdImage5: "",
    name6: "",
    phone6: "",
    IdImage6: "",
    name7: "",
    phone7: "",
    IdImage7: "",
    email: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null,
    IdImage2: null,
    IdImage3: null,
    IdImage4: null,
    IdImage5: null,
    IdImage6: null,
    IdImage7: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(fileType)) {
      toast.error('Please upload only PNG, JPG or JPEG images.');
      setImagePreviews({ IdImage1: null });
      return;
    }

    // Check file size (5MB in this case, adjust as needed)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
     toast.error('File size must be less than 5MB.');
     return;
    }

      setUserInput((prev) => ({ ...prev, [name]: file }));
      setImagePreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    }
    else {
      //If no file is selected, set the state to null
    setUserInput((prev) => ({ ...prev, [name]: null }));
    setImagePreviews((prev) => ({ ...prev, [name]: null }));
    }
    e.target.value = null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const verify= validateFormDetails(userInput,eventName);
    if(verify.success && verify.success===true){
       console.log(userInput,eventName);
       console.log("User is ready for registration..");

       const formSubmitStatus=await registerForms(verify?.finalData);

       if(formSubmitStatus.success && formSubmitStatus.success===true){
           toast.success(formSubmitStatus.message);
           setUserInput({
            name1: "",
            phone1: "",
            IdImage1: "",
            name2: "",
            phone2: "",
            IdImage2: "",
            name3: "",
            phone3: "",
            IdImage3: "",
            name4: "",
            phone4: "",
            IdImage4: "",
            name5: "",
            phone5: "",
            IdImage5: "",
            name6: "",
            phone6: "",
            IdImage6: "",
            name7: "",
            phone7: "",
            IdImage7: "",
            email: "",
          });
          
      
          setImagePreviews({
            IdImage1: null,
            IdImage2: null,
            IdImage3: null,
            IdImage4: null,
          });
           setIsLoading(false);
       } else{
          toast.error(formSubmitStatus.message);
       }

    } else{
      toast.error(verify.message);
    }
    

   
    
    setIsLoading(false);
  };


  return (
    <div className="max-w-2xl mx-auto p-6 bg-black text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Captain Details */}
        <div className="p-4 bg-black rounded-lg shadow-md">
        <p className="text-sm font-normal mb-2 text-cyber-pink"> 
        <ul style={{listStyleType:"circle"}}>
            <li>Upload Image in .png / .jpg / .jpeg format only</li>
            <li>Provide WhatsApp contact number</li>
          </ul>
        </p>
          <h3 className="text-lg font-medium mb-2">Captain (Player 1)</h3>
          <div className="w-full">
            <div className="flex items-center bg-black justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/[^A-Za-z ]/g.test(val)) {
                  toast.error("Only alphabets are allowed!");
                  }
                  const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                  handleChange({ target: { name: "name1", value: val1 } });
                }}

                placeholder="Name"
                className="w-1/2 p-2 border bg-black rounded mb-2"
                required
              />
              <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
              <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone1"
                  value={userInput.phone1}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone1", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone1", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                onBlur={(e) => {
                  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (e.target.value && !emailPattern.test(e.target.value)) {
                  toast.error("Please enter a valid email address!");
                  setUserInput({ ...userInput, email: "" }); // Clear the input
                  }}}
                placeholder="Email"
                className="w-full sm:w-1/2 p-2 border bg-black rounded mb-2"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div class="w-full sm:w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="flex justify-center items-center cursor-pointer w-full px-4 py-2 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  onChange={handleImageChange}
                  accept="image/jpeg, image/png,image/jpg"
                  disabled={isLoading?true:false}
                />
              </div>
            </div>
          </div>

          {imagePreviews.IdImage1 && (
            <img
              src={imagePreviews.IdImage1}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 2 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name2", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone2"
                  value={userInput.phone2}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone2", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone2", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}
          <div class="flex items-center space-x-2">
            <label
              for="file_upload2"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload2"
              name="IdImage2"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage2 && (
            <img
              src={imagePreviews.IdImage2}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 3 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name3"
              value={userInput.name3}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name3", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone3"
                  value={userInput.phone3}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone3", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone3", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage3"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload3"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload3"
              name="IdImage3"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage3 && (
            <img
              src={imagePreviews.IdImage3}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 4  */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 4 </h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name4"
              value={userInput.name4}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name4", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone4"
                  value={userInput.phone4}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone4", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone4", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage4"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload4"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload4"
              name="IdImage4"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage4 && (
            <img
              src={imagePreviews.IdImage4}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 5 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 5</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name5"
              value={userInput.name5}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name5", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
              required
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone5"
                  value={userInput.phone5}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone5", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone5", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  required
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}
          <div class="flex items-center space-x-2">
            <label
              for="file_upload5"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload5"
              name="IdImage5"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage5 && (
            <img
              src={imagePreviews.IdImage5}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 6 */}
        <div className="p-4 bg-black text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 6 (optional)</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name6"
              value={userInput.name6}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name6", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone6"
                  value={userInput.phone6}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone6", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone6", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload6"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload6"
              name="IdImage6"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage6 && (
            <img
              src={imagePreviews.IdImage6}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Player 7 */}
        <div className="p-4 bg-black rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 7 (optional)</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name7"
              value={userInput.name7}
              onChange={(e) => {
                const val = e.target.value;
                if (/[^A-Za-z ]/g.test(val)) {
                toast.error("Only alphabets are allowed!");
                }
                const val1 = val.replace(/[^A-Za-z ]/g, ""); // Remove invalid characters
                handleChange({ target: { name: "name7", value: val1 } });
              }}

              placeholder="Name"
              className="w-1/2 p-2 border bg-black rounded mb-2"
            />
            <div className="flex items-center justify-start gap-2 border bg-black rounded mb-2 w-1/2 p-2 overflow-hidden">
            <span className="text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone7"
                  value={userInput.phone7}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange({ target: { name: "phone7", value: val } });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.length !== 10) {
                      toast.error("Phone number must be exactly 10 digits!");
                      handleChange({ target: { name: "phone1", value: "" } }); // Clear input
                    }
                  }}
                  placeholder="Phone"
                  className="bg-black text-white outline-none w-full"
                  
                />
              </div>

          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload7"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-grey text-black border-grey border rounded mb-2 rounded-md   focus:outline-none whitespace-nowrap max-w-full"
            >
              <span class="material-icons mr-2">cloud_upload</span>
              Upload your ID image
            </label>
            <input
              id="file_upload7"
              name="IdImage7"
              type="file"
              class="hidden"
              onChange={handleImageChange}
              accept="image/jpeg, image/png,image/jpg"
              disabled={isLoading?true:false}
            />
          </div>
          {imagePreviews.IdImage7 && (
            <img
              src={imagePreviews.IdImage7}
              alt="ID Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
         disabled={isLoading?true:false}
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md  "
        >
         {isLoading?<Loader width={"15px"} height={"15px"}/>:"Register Team"}
        </button>
      </form>
    </div>
  );
}

export { PentApp, DualApp, TrioApp, SoloApp, FootballApp };

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
