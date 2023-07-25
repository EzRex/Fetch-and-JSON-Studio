// TODO: add code here
window.addEventListener("load",function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(astronauts){
            console.log(astronauts);
            console.log(astronauts.length);

            const div = document.getElementById("container");
            for(let i = 0; i < astronauts.length; i++) {
                console.log(astronauts[i])
                    div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                                <li>Active: ${astronauts[i].active}</li>
                                <li>Skills: ${astronauts[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronauts[i].picture}">
                    </div>`
            }
            
            
        })
    })
})