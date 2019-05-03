var addBtn;
var schoolName;

var navButton = document.querySelector("#search-btn");
var divOpen = document.querySelector(".div-open");

var tween = TweenLite.to(".cover-img", 2, {
    width: "40%"
});

var tl = new TimelineLite();

// tl.to(".cover-img", 1, {
//     width: "50%",
//     ease: Power2.easeOut
// })
tl.to(".div-animate", 0.5, {
    height: "100%",
    ease: Power2.easeOut
}, "-=2"
).fromTo(".div-open", 1.5, {
    opacity:0,
    x: 100,
    ease: Power2.easeOut
},{
    opacity: 1,
    x: 0
}).fromTo(".cover-img", 1, {
    opacity: 0,
    ease: Power2.easeOut,
    y: -60
}, {
    opacity: 1,
    y: 8
}
)

$("#search-btn").on("click", function(event) {
    console.log("search btn clicked")
    event.preventDefault();

    required();
        function required() {
        if ($("#input-grade").val() === "Select a Grade") {
        // alert("Required Information")
        $("#modal-required-grade").modal("toggle");

      } else {
        searchByGrade();
      }
    }

})
//SEARCH BY GRADE
//========================================================================
function searchByGrade() {
    // alert("Search started")

    var userGradeInput = {
        grade: $("#input-grade").val()
    }

    location.href = "results/" + userGradeInput.grade;
}

//SEARCH BY GRADE END
//==========================================================

//LEARN MORE
//==========================================================
$(document).on("click", ".learnBtn", schoolDetail);

function schoolDetail() {

    
    var key = $(this).attr("value");
    console.log("view school ID ", key);

    $.get("/", key, function(data) {
        console.log(data);
        $("#div-school-logo").empty();
        $("#school-name").empty();
        $("#school-address").empty();
        $("#school-city").empty();
        $("#school-state").empty();
        $("#school-phone").empty();
        $("#school-website").empty();
        $("#school-description").empty();
        $("#school-tuition").empty();
        $(".event-name-list").empty();
        $(".event-date").empty();

        $("#div-school-logo").append(data.logo);
        $("#school-name").append(data.school_name);
        $("#school-address").append(address);
        $("#school-city").append(data.city);
        $("#school-state").append(data.state);
        $("#school-phone").append(data.phone);
        $("#school-website").append(data.website);
        $("#school-description").append(data.description);
        $("#school-tuition").append(data.tuition);
        for (var i = 0; i < data.length; i++) { 
            $(".event-name-list").append(data[i].event);
            $(".event-date").append(data[i].date);
        }

    })

    //location.href = "school/";
}
//LEARN MORE END
//========================================================

//ADD TO FAVORITES
//========================================================
$(document).on("click", ".add-btn", addFavorite);

function addFavorite() {
    // alert("adding to favorites");
    event.preventDefault();
    var key = $(this).attr("value");
    console.log("add school ID ", key);

    $.post("/", key)
    .done(function(data) {
        console.log(data);
        var school = data.school_name.replace(/\s/g,''); 

         //For each school in DB create a "learn more" button with a specific value to
            //associate to that school
            var learnBtn = document.createElement("button");
            learnBtn.setAttribute("class", "learn-btn btn btn-sm btn-dark col-lg-2");
            learnBtn.setAttribute("value", data[i].school_id);
            learnBtn.innerHTML = "LEARN MORE";

            //For each school in DB create a "add to favorite" button with a specific value to
            //associate to that school
            var remove = document.createElement("button");
            remove.setAttribute("class", "remove-btn btn btn-sm btn-dark col-lg-2");
            remove.setAttribute("value", data.school_id);
            remove.setAttribute('data-name', school);
            addBtnremove.innerHTML = "REMOVE";

            //Create a div to hold the city saved name and set attributes
            var schoolAdded = document.createElement("h4");
            schoolAdded.setAttribute("data-name", id);
            schoolAdded.setAttribute("value", data.school_name);
            schoolAdded.setAttribute("class", "school-name-list col-lg-8");
            schoolAdded.innerText = data.school_name.toUpperCase(data.school_name);

            var td = document.createElement("td");

            //Create a row to hold each school and its elements (remove button, name, learn more)
            var newRow = document.createElement("tr");
            newRow.setAttribute("id", "rowfav" + school);

            td.append(schoolAdded, learnBtn, remove);
            //Append the td to its row
            newRow.append(td);

            //Append the new row to the table body
            $("#tbodyfav").append(newRow);
    })
}
//ADD TO FAVORITES END
//========================================================

//REMOVE
//========================================================

$(document).on("click", ".remove-btn", removeFav);

function removeFav() {
    //Remove data by its key that was set up as attribute of that remove button
    var key = $(this).attr("value");
    console.log('CLICKED REMOVE > removing...', key);
    var schoolNameRemoved = data.school_name;
    console.log(schoolNameRemoved);
     //Get the name of the removed city and remove spaces in order to use as part of id and remove the right city
     var idRemoved = schoolNameRemoved.replace(/\s/g,''); 
     //Remove the city/row and its elements from the DOM
     $("#row"+idRemoved).empty();
     $("#row"+idRemoved).remove();
}

$('#body-results').css("background-image", "url(/img/library1.jpeg)"); 
//REMOVE END
//========================================================
 



