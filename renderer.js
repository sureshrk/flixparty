const version_info = document.getElementById("version_info")


const pingpong = async () => {
    const response = await window.versions.ping();
    console.log("response is of type ",typeof response);
    console.log("resonse from ping:",response);
    document.getElementById("ping").innerHTML = `Response from ping is ${response}`;

};

console.log(typeof pingpong);
pingpong();
version_info.innerHTML = `These are the version<br> electron: v${versions.electron()} <br>chrome:${versions.chrome()}<br>node:${versions.node()}<br>ares:${versions.ares()}`;


