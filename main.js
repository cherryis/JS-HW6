let animalArray = [];
let selectedDiet = "";

// define a constructor to create animal objects with 3 parameters
let AnimalObject = function (pAnimal, pYear, pDiet) {
    this.animal = pAnimal;
    this.year = pYear;
    this.diet = pDiet;
}


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        animalArray.push(new AnimalObject(document.getElementById("animal").value,
         document.getElementById("year").value, selectedDiet));
        console.log(animalArray);
        document.getElementById("animal").value = ""; //Clear current input screen
        document.getElementById("year").value = "";
});

    $(document).bind("change", "#select-diet", function (event, ui) {
        selectedDiet = document.getElementById("select-diet").value;
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {   
        createList();
    });
    

});

function createList() {
    
    // clear prior data
    // let myul = document.getElementById("myList");
    // myul.innerHTML = '';

    // animalArray.forEach(function (element,) {   // use handy array forEach method
    //     let li = document.createElement('li');
    //     li.innerHTML = "Animal: " + element.animal + " Year: " + element.year + " Diet: " + element.diet;
    //     myul.appendChild(li);
    // });
    
    // clear prior data
    let mytbody = $("tbody");
    mytbody.empty();
    
    // Adding a row inside the tbody
    animalArray.forEach(function (element,) {
        let tr = "<tr><td width='250'>" + element.animal + "</td><td width='150'>" + element.year + 
            "</td><td width='200'>" + element.diet + "</td></tr>";
        mytbody.append(tr);
    });
};