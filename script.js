setInterval(()=>{
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let hrotate = 30*hour + 0.5*minute;
    let mrotate = 6*minute;
    let srotate = 6*second;
    document.getElementById('hour').style.transform = `rotate(${hrotate}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotate}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotate}deg)`;
},1000);

let img = document.getElementById("avatar");
fetch("https://api.github.com/users/SaurabhSahu01")
.then(response => response.json())
.then(result => {img.setAttribute("src", result["avatar_url"]);})

