//STEP 1 <-------------------------------------------FETCH DATA------------------------------------------------------->
fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
  .then((res) => {
    //parse the json to make it a javascript object so that we can use it.
    return res.json();
  })
  .then((characters) => {
    console.log(characters);
    //STEP 2 <------------------------USE DATA TO ADD CHARACTER NAMES TO THE DROPDOWN MENU------------------------------->

    let dropDown = document.querySelector("#dropdown");

    //add each character's name from the array of data called "characters" to the dropdown menu
    for (let character of characters) {
      const option = document.createElement("option");
      option.setAttribute("value", character.name);
      option.textContent = character.name;
      dropDown.append(option);
    }
  });

//STEP 3 <--------------------------------DISPLAY SELECTED CHARACTER'S INFO------------------------------------------->

//STEP 4 <------------------ADD SELECTED CHARACTER'S NAME TO TEAM MEMBERS LIST ON BUTTON CLICK------------------------>
