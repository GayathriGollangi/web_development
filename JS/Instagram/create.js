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

    alert("Post created successfully!");
  } catch (error) {
    console.log("Error:", error);
  }
};

//patch update
// Update specific fields of an existing post

let getPatchData = async () => {
  let patchId = document.getElementById("patch_id").value;
  let patchTitle = document.getElementById("patch_title").value;
  console.log(patchId, patchTitle);
  // Create an object with updated data

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
  } catch (error) {
    console.log("Error:", error);
  }
};
// Replace the entire post data
// Update an existing post using PUT
let updateData = async () => {
  let putId = document.getElementById("put_id").value;
  let putTitle = document.getElementById("put_title").value;
  console.log(patchId, patchTitle);
  let newData = {
    title: putTitle,
  };
  // Create the updated post object

  try {
    let response = await fetch(`http://localhost:3000/posts/${putId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    console("updated successfully!");
  } catch (error) {
    console.log("Error:", error);
  }
};
//delete data
// Delete an existing post using its ID

let deleteData = async () => {
  let deleteId = document.getElementById("delete_id").value;
  console.log(deleteId);
  try {
    let response = await fetch(`http://localhost:3000/posts/${deleteId}`, {
      method: "DELETE",
    });

    console.log("updated successfully!");
    window.location.href = "index.html";
  } catch (error) {
    console.log("Error:", error);
  }
};
