const userA = {
    name: "user name",
    phone: "xxx-xxx-xx-xx",
    email: "email@gmail.com",
    avatar:
      "https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //   avatar: "",
    address: {
      country: "Country",
      city: "City",
    },
  };

  const profileContainer = document.querySelector(".profile-container");
  function createUserProfile({avatar, name, phone, email,address}){
      const container = document.createElement("div");
      container.classList.add("user-profile");
      console.log(container);
  }

  const profileImage = document.createElement("img");
  profileImage.src = avatar;
  profileImage.alt = "user image";
  profileImage.classList.add("profile-image");

  const infoList = document.createElement("ul");
  infoList.classList.add("info");
  console.log("обертка ", infoList);
  const nameFiled = createInfoItem("Name");





  function crateInfoItem(label_1, label_2){
  const item = document.createElement("li");
  const title = document.createElement("b");
  title.textContent = `${label}`;
  const itemText = document.createTextNode(text);
  item.append(title, itemText);
  return item;
}

