const createPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title-input").value.trim();
    const description = document.querySelector("#post-description-input").value.trim();

    if(title && description) {
        //send a POST request to the API endpoint
        const response = await fetch("api/user/login", {
            method: "POST",
            body: JSON.stringify({ title, description}),
            headers: { "Content-Type": "application/json"},
        });

        if(response.ok){
            document.location.replace("/dashboard");
        }else{
            alert(response.statusText);
        }
    }
}

const newPostForm = document.querySelector(".newPost-form")
newPostForm.addEventListener("submit", createPostFormHandler);