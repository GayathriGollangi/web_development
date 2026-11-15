function convertImage(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();

    reader.onload = () => resolve(reader.result);

    reader.readAsDataURL(file);
  });
}

// Get title and image
let getData = async () => {
  let titleEle = document.getElementById("title").value;

  let imageFile = document.getElementById("image").files[0];

  if (!titleEle || !imageFile) {
    alert("Please enter title and select an image");
    return;
  }

  // Convert image into Base64
  let imageURL = await convertImage(imageFile);

  let newData = {
    title: titleEle,
    images: imageURL,
  };

  postData(newData);
};

// Save post in JSON Server
const postData = async (newData) => {
  try {
    let response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    let result = await response.text();

    console.log("Status:", response.status);
    console.log("Server response:", result);

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    alert("Post created successfully!");

    // Redirect to home page
    console.log("Redirecting...");

    window.location.replace("./index.html");
  } catch (error) {
    console.log("Error:", error);
  }
};

//patch update
let getPatchData = async () => {
  let patchId = document.getElementById("patch_id").value;
  let patchTitle = document.getElementById("patch_title").value;
  console.log(patchId, patchTitle);
  let newData = {
    title: patchTitle,
  };
  try {
    let response = await fetch(`http://localhost:3000/posts/${patchId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    alert("updated successfully!");

    // Redirect to home page
    console.log("Redirecting...");

    // window.location.replace("./index.html");
    window.location.href = "http://127.0.0.1:5500/index.html";
  } catch (error) {
    console.log("Error:", error);
  }
};
