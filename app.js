function validate() {
    var count = 0;
    var flag = 0,
        flag1 = 0;
    var username = document.getElementById("username").value;
    var err1 = document.getElementById("err1");
    var err2 = document.getElementById("err2");
    var err3 = document.getElementById("err3")
    if (username == "") { err1.style.display = "block"; } else {
        err1.style.display = "none";
        count = 1
    }

    var num = document.getElementById("number").value;
    if (num < 1111111111 || num > 9999999999) {
        err2.style.display = "block";
    } else {
        err2.style.display = "none";
        flag = 1
    }
    var date = document.getElementById("date").value;
    console.log(date);
    if (date == "") {
        err3.style.display = "block";
    } else {
        err3.style.display = "none";
        flag1 = 1
    }
    if (count == 1 && flag == 1 && flag1 == 1) {
        alert("login successful");
    }
}