import { useState } from "react";

function QuadApp() {
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
    email: "",
  });

  const [imagePreviews, setImagePreviews] = useState({
    IdImage1: null,
    IdImage2: null,
    IdImage3: null,
    IdImage4: null,
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
    } else {
      e.target.value = null;
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
    <div className="max-w-2xl mx-auto p-6 bg-gunmetal shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-cyber-blue text-center mb-4">
        Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Captain Details */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Captain</h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={handleChange}
                placeholder="Captain Name"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
              <input
                type="tel"
                name="phone1"
                value={userInput.phone1}
                onChange={handleChange}
                placeholder="Captain Phone"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-1/2 p-2 border bg-gunmetal rounded"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div class="w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="w-full flex items-center cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  required
                  onChange={handleImageChange}
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

        {/* Player 1 */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={handleChange}
              placeholder="Player 1 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone2"
              value={userInput.phone2}
              onChange={handleChange}
              placeholder="Player 1 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 2 */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name3"
              value={userInput.name3}
              onChange={handleChange}
              placeholder="Player 2 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
            <input
              type="tel"
              name="phone3"
              value={userInput.phone3}
              onChange={handleChange}
              placeholder="Player 2 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 3 (Optional) */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3 </h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name4"
              value={userInput.name4}
              onChange={handleChange}
              placeholder="Player 3 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
            <input
              type="tel"
              name="phone4"
              value={userInput.phone4}
              onChange={handleChange}
              placeholder="Player 3 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md hover:bg-cyber-pink"
        >
          Register Team
        </button>
      </form>
    </div>
  );
}

function DualApp(eventId, eventName) {
  const [userInput, setUserInput] = useState({
    name1: "",
    phone1: "",
    IdImage1: "",
    name2: "",
    phone2: "",
    IdImage2: "",
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
    const { name1, phone1, IdImage1, name2, phone2 } = userInput;

    if (!name1 || !phone1 || !IdImage1) {
      alert("Captain's details are required!");
      return;
    }
    if (!name2 || !phone2) {
      alert("At least one more player is required!");
      return;
    }

    console.log("Form Submitted:", userInput);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gunmetal text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Player 1 */}
        <div className="p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={handleChange}
                placeholder="Player 1 Name"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
              <input
                type="tel"
                name="phone1"
                value={userInput.phone1}
                onChange={handleChange}
                placeholder="Player 1 Phone"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-1/2 p-2 bg-gunmetal border rounded mb-2"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}

              <div class="w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="flex justify-center items-center cursor-pointer w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  required
                  onChange={handleImageChange}
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
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={handleChange}
              placeholder="Player 2 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone2"
              value={userInput.phone2}
              onChange={handleChange}
              placeholder="Player 2 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md hover:bg-cyber-pink"
        >
          Register Team
        </button>
      </form>
    </div>
  );
}

function TrioApp(eventId, eventName) {
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
    IdImage4: null,
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
    <div className="max-w-2xl mx-auto p-6 bg-gunmetal text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Player 1 Details */}
        <div className="p-4 bg-gunmetal rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full">
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={handleChange}
                placeholder="Player 1 Name"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
              <input
                type="tel"
                name="phone1"
                value={userInput.phone1}
                onChange={handleChange}
                placeholder="Player 1 Phone"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}

              <div class="w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload3"
                  class="w-full flex justify-center items-center cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload3"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  required
                  onChange={handleImageChange}
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
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={handleChange}
              placeholder="Player 2 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone2"
              value={userInput.phone2}
              onChange={handleChange}
              placeholder="Player 2 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
          </div>
          {/* <input
            type="file"
            name="IdImage2"
            onChange={handleImageChange}
            className="w-full p-2 border bg-gunmetal rounded"
          /> */}

          <div class="flex items-center space-x-2">
            <label
              for="file_upload4"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name3"
              value={userInput.name3}
              onChange={handleChange}
              placeholder="Player 3 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
            <input
              type="tel"
              name="phone3"
              value={userInput.phone3}
              onChange={handleChange}
              placeholder="Player 3 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
          </div>
          {/* <input
            type="file"
            name="IdImage3"
            onChange={handleImageChange}
            className="w-full p-2 border bg-gunmetal rounded"
          /> */}
          <div class="flex items-center space-x-2">
            <label
              for="file_upload5"
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md hover:bg-cyber-pink"
        >
          Register Team
        </button>
      </form>
    </div>
  );
}

function SoloApp(eventId, eventName) {
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
    const { name1, phone1, IdImage1 } = userInput;

    if (!name1 || !phone1 || !IdImage1) {
      alert("Player's details are required!");
      return;
    }

    console.log("Form Submitted:", userInput);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gunmetal text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Captain Details */}
        <div className="p-4 bg-gunmetal rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player</h3>
          <div className="w-full">
            <div className="flex items-center bg-gunmetal justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={handleChange}
                placeholder="Player Name"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
              <input
                type="tel"
                name="phone1"
                value={userInput.phone1}
                onChange={handleChange}
                placeholder="Player Phone"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Player Email"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div class="w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="flex jsutify-center items-center cursor-pointer w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  required
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>

          {imagePreviews.IdImage1 && (
            <img
              src={imagePreviews.IdImage1}
              alt="ID Preview"
              className="mt-2 w-full h-full object-cover rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md hover:bg-cyber-pink"
        >
          Register Team
        </button>
      </form>
    </div>
  );
}

function FootballApp() {
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
    const {
      name1,
      phone1,
      IdImage1,
      name2,
      phone2,
      IdImage2,
      name3,
      phone3,
      name4,
      phone4,
      IdImage4,
      name5,
      phone5,
      IdImage5,
      name6,
      phone6,
      IdImage6,
      name7,
      phone7,
      IdImage7,
    } = userInput;

    if (!name1 || !phone1 || !IdImage1) {
      alert("Captain's details are required!");
      return;
    }
    if (!name2 || !phone2 && (!name3 && !phone3) && (!name4 && !phone4)) {
      alert("At least one more player is required!");
      return;
    }

    console.log("Form Submitted:", userInput);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gunmetal text-cyber-blue shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Captain Details */}
        <div className="p-4 bg-gunmetal rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Captain</h3>
          <div className="w-full">
            <div className="flex items-center bg-gunmetal justify-center gap-2">
              <input
                type="text"
                name="name1"
                value={userInput.name1}
                onChange={handleChange}
                placeholder="Captain Name"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
              <input
                type="tel"
                name="phone1"
                value={userInput.phone1}
                onChange={handleChange}
                placeholder="Captain Phone"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
                required
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              />
              {/* <input
                type="file"
                name="IdImage1"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
                required
              /> */}
              <div class="w-1/2 flex items-center space-x-2">
                <label
                  for="file_upload1"
                  class="flex justify-center items-center cursor-pointer w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  <span class="material-icons mr-2">cloud_upload</span>
                  Upload your ID image
                </label>
                <input
                  id="file_upload1"
                  name="IdImage1"
                  type="file"
                  class="hidden"
                  required
                  onChange={handleImageChange}
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

        {/* Player 1 */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 1</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name2"
              value={userInput.name2}
              onChange={handleChange}
              placeholder="Player 1 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone2"
              value={userInput.phone2}
              onChange={handleChange}
              placeholder="Player 1 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 2 */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 2</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name3"
              value={userInput.name3}
              onChange={handleChange}
              placeholder="Player 2 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
            <input
              type="tel"
              name="phone3"
              value={userInput.phone3}
              onChange={handleChange}
              placeholder="Player 2 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 3  */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 3 </h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name4"
              value={userInput.name4}
              onChange={handleChange}
              placeholder="Player 3 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
            <input
              type="tel"
              name="phone4"
              value={userInput.phone4}
              onChange={handleChange}
              placeholder="Player 3 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 4 */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 4</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name5"
              value={userInput.name5}
              onChange={handleChange}
              placeholder="Player 4 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone5"
              value={userInput.phone5}
              onChange={handleChange}
              placeholder="Player 4 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 5 */}
        <div className="p-4 bg-gunmetal text-cyber-blue rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 5(optional)</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name6"
              value={userInput.name6}
              onChange={handleChange}
              placeholder="Player 5 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone6"
              value={userInput.phone6}
              onChange={handleChange}
              placeholder="Player 5 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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

        {/* Player 6 */}
        <div className="p-4 bg-gunmetal rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Player 6 (Optional)</h3>
          <div className="w-full flex justify-center items-center gap-2">
            <input
              type="text"
              name="name7"
              value={userInput.name7}
              onChange={handleChange}
              placeholder="Player 6 Name"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
            <input
              type="tel"
              name="phone7"
              value={userInput.phone7}
              onChange={handleChange}
              placeholder="Player 6 Phone"
              className="w-1/2 p-2 border bg-gunmetal rounded mb-2"
              required
            />
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
              class="flex justify-center items-center cursor-pointer w-full py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none whitespace-nowrap max-w-full"
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
          type="submit"
          className="w-full bg-cyber-blue text-gunmetal py-2 px-4 rounded-md hover:bg-cyber-pink"
        >
          Register Team
        </button>
      </form>
    </div>
  );
}

export { QuadApp, DualApp, TrioApp, SoloApp, FootballApp };

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
