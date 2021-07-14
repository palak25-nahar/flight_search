/*var values=[0,500,1000,1500,3000,5000,7000,10000];
var input = document.getElementById('input');
    output = document.getElementById('output');*/

function input(val) {
    document.getElementById('textinput').value = val;
}

function oneorreturn() {
    if (document.getElementById('return').checked) {
        document.getElementById('returndate').style.display = 'block';

    } else {
        document.getElementById('returndate').style.display = 'none';
    }
}

function formvalidation() {
    var origin = document.forms["searchForm"]["ocity"];
    var destination = document.forms["searchForm"]["dcity"];
    var departureDate = document.forms["searchForm"]["departdate"];
    /*var returnDate = document.forms["searchForm"]["returndate"];*/
    var NOP = document.forms["searchForm"]["passengers"];

    if (origin.value == "") {
        window.alert("Please enter origin city");
        origin.focus();
        return false;
    }

    if (destination.value == "") {
        window.alert("Please enter your destination");
        destination.focus();
        return false;
    }

    if (departureDate.value == "") {
        window.alert(
            "Please enter a valid departure Date");
        departureDate.focus();
        return false;
    }

    /*if (returnDate.value == "") {
        window.alert(
          "Please enter a valid return Date");
          returnDate.focus();
        return false;
    }*/

    if (NOP.selectedIndex < 1) {
        alert("Please enter no. of passengers");
        NOP.focus();
        return false;
    }

    return true;
}

/*function redirect()
    {
        window.location.href = "dummy.html";
    }*/
