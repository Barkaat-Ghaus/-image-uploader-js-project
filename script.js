let addBtn = document.querySelector(".btn");
let imageSrc = document.querySelector(".imageSrc");
let fullName = document.querySelector(".name");
let submitBtn = document.querySelector(".submitBtn");

let showForm = () => {
    document.querySelector("form").classList.remove("hide")
    document.querySelector("form").classList.add("form")
    addBtn.style.display = "none";
}

let addImage = (imageSrc, fullName) => {
    let img = document.createElement("img");
    img.src = imageSrc.value;
    let div = document.createElement("div");
    div.innerText = fullName.value;
    let card = document.createElement("div");
    card.classList.add("cards");
    card.appendChild(img);
    card.appendChild(div);
    document.querySelector(".container").appendChild(card);
};

let hideForm = () => {
    document.querySelector("form").classList.add("hide")
    document.querySelector("form").classList.remove("form")
    addBtn.style.display = "block";
    imageSrc.value = "";
    fullName.value = "";
}

addBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (imageSrc.value !== "" && fullName.value !== "")
        { addImage(imageSrc, fullName);
            hideForm();
        };
});
