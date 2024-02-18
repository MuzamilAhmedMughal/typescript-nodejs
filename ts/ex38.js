// did not understand with to do so this is all i understood
    function city() {
    let city = document.getElementById("city").value;
    let country=document.getElementById("country").value ;
    if (!(city=="" || country== "")) {
    if (country == "pakistan") {
        console.log(`${city} is in PAKISTAN`);
        
    }
    else{
        console.log(`${city} is in ${(country).toUpperCase()}`); 
    }
    }  
    else{
        alert("please fill both input")
    }
}
    
