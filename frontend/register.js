const arr = [];

// ############ Validate the form data ###########
function validateForm() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    let z = document.forms["myform"]["femail"].value;
    if (z.length < 5) {
        alert("fill the valid email address")
        return false;
    }


    let y = document.forms["myform"]["fphone"].value;

    if (y == "") {
        alert("phone no. must be filled out");
        return false;
    }
    else if (y.length != 10) {
        alert("phone no. must have 10 digits");
        return false;
    }


    let p = document.forms["myform"]["faddress"].value;
    if (p.length < 10) {
        alert("fill the valid address")
        return false;
    }

    let pas = document.forms["myform"]["fpassword"].value
    if (pas.length > 20) {
        console.log('Password is too long')
    }

    let b = document.forms["myform"]["fdepartment"].value
    if (pas.length > 20) {
        console.log('Password is too long')
    }




    var value = form_data(x, z, y, p, b, pas);
    console.log(value);

    // ########### Fetching API ##########
    fetch('http://localhost:7000/addUser',
        { method: "POST", body: JSON.stringify(value), headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json())
        .then(json => console.log(json));
    localStorage.setItem("userData", JSON.stringify(value));
    return value
}

function form_data(fname, femail, fphone, faddress, fdepartment, fpassword) {
    const data = {}
    data.name = fname
    data.email = femail
    data.phone = fphone
    data.address = faddress
    data.department = fdepartment
    data.password = fpassword

    if (arr.some(item => item.email === femail)) {
        console.log('duplicate email is not permitted')
    } else {
        arr.push(data)
    }

    return data;
}
