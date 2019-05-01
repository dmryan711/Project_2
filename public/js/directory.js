

$.get("/api/SchoolInfo", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("row_school");
        row.append("<p>" + data[i].school_name + "</p>");
        row.append("<p>" + data[i].address + "</p>");
        row.append("<p>" + data[i].borough + ", " + data[i].state + ", " + data[i].zip + "</p>");
        row.append("<p>" + "Telephone: " + data[i].phone + "</p>");
        row.append("<p>" + data[i].website + "</p>");
        $("#school_info").prepend(row);

        $('#logo').prepend('<img id="' + data[i].logo + ' src="' + data[i].school_name  + '" />')
      }
    }
  });

