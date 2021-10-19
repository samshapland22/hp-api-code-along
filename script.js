//STEP 1 <-------------------------------------------FETCH DATA------------------------------------------------------->
fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
  .then((res) => {
    //"res" is the unparsed JSON data that we received from our API call.
    //.json() parses the JSONcod to make it a javascript object so that we can use it. (data in JSON format is unusable in JavaScript)
    return res.json();
  })
  .then((characters) => {
    //"characters" is the parsed data that we received from our API call. It is a JavaScript array of objects.
    console.log(characters);
    //STEP 2 <------------------------USE DATA TO ADD CHARACTER NAMES TO THE DROPDOWN MENU------------------------------->

    let dropDown = document.querySelector("#dropdown");

    //add each character's name from the characters array to the dropdown menu
    for (let character of characters) {
      const option = document.createElement("option");
      option.setAttribute("value", character.name);
      option.textContent = character.name;
      dropDown.append(option);
    }

    //STEP 3 <--------------------------------DISPLAY SELECTED CHARACTER'S INFO------------------------------------------->

    let currentName = document.querySelector("#name");
    const dob = document.querySelector("#dob");
    const patronus = document.querySelector("#patronus");
    const headshot = document.querySelector("#headshot");

    let selectedCharacter;

    //add an event listener for when the drop down menu is changed. The selected character's
    //info will be displayed on the screen using all of our selected elements (currentName, dob, patronus, and headshot)
    dropDown.addEventListener("change", () => {
      for (let character of characters) {
        if (dropDown.value === character.name) {
          console.log(character);
          selectedCharacter = character;
          currentName.textContent = character.name;
          dob.textContent = character.dateOfBirth;
          patronus.textContent = character.patronus;
          headshot.src = character.image;

          //The addButton is set to "display:none" by default in index.html.
          //Line 45 is here to make the button visible once a character is picked.
          addButton.setAttribute("style", "display:block");
        }
      }
    });

    //STEP 4 <------------------ADD SELECTED CHARACTER'S NAME TO TEAM MEMBERS LIST ON BUTTON CLICK------------------------>

    //use querySelector to select our unordered list and our "Add to Team" button
    const membersUL = document.querySelector("#members");
    let addButton = document.querySelector("#addButton");

    //set an event listener on the "Add to Team" button. Every time this button gets clicked,
    //we create a new li called "newMember" using document.createElement, then set its textContent to be our selectedCharacter's name, then append it
    //to the unordered list, which is called "membersUL"
    addButton.addEventListener("click", () => {
      let newMember = document.createElement("li");
      newMember.textContent = selectedCharacter.name;
      membersUL.append(newMember);
    });
  });
