let toggleButton = document.getElementsByClassName('toggle-button');
let clickCategory = document.querySelectorAll('.groupDiv');


toggleButton = () => {
    navList.classList.toggle('active')
}


// sports = () => {
//     fetch(`https://sports.api.decathlon.com/sports`)
//     .then(Response=>Response.json())
//     .then(data => {
//     console.log(data)
//     console.log(data.data[1])
//     groups.innerHTML = JSON.stringify(data.data[1].attributes.name);
// })
//     .catch(Error=>console.log('ERROR'))
// }
// sports();


// storaged = [];
groupSports = () => {
    fetch(`https://sports.api.decathlon.com/groups`)
    .then(Response=>Response.json())
    .then(data => {
        targetData = data.data;
        target = targetData.filter( ({ type }) => type == "group");

        // for (let index = 0; index < target.length; index++) {
        //     const element = target[index].attributes.name;
        //     groups.innerHTML = JSON.stringify(element);
        // }
        console.log(data)

        for (let i = 0; i < target.length; i++) {
            let targetSample = target[i].relationships.sports.data[(target[i].relationships.sports.data.length - 1)].id;
            console.log()
            fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)
            .then(Response=>Response.json())
            .then(data => {
                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                groups.innerHTML += `<div>
                                        <div class="groupDiv" onclick="getArray()" >${target [i].attributes.name}</div>
                                        <img class="thumbnail" src="${image}"/>
                                    </div>`
            })
            .catch(Error => {
                console.log(`no image, ${target [i].attributes.slug}`)
                groups.innerHTML += `<div>
                                        <div class="groupDiv" onclick="getArray()" >${target [i].attributes.name}</div>
                                        <img class="thumbnail" src="https://sports-api-production.s3.amazonaws.com/uploads/sport/images/96/thumbnail_handball.jpg"/>
                                    </div>`
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupSports();







function getArray() {
    clickCategory.onclick = function() {
    // console.log(e.target);
    console.log('test');

    }

    // https://sports.api.decathlon.com/sports/

    
    // fetch(`https://sports.api.decathlon.com/groups`)
    // .then(Response=>Response.json())
    // .then(data => {
    //     targetData = data.data;
    //     target = targetData.filter( ({ type }) => type == "group");

    //     // for (let index = 0; index < target.length; index++) {
    //     //     const element = target[index].attributes.name;
    //     //     groups.innerHTML = JSON.stringify(element);
    //     // }
        
    //     for (let i = 0; i < target.length; i++) {
    //         let element = target[i].attributes.name;
    //         groups.innerHTML += `<div class="groupDiv" onclick="getArray()" >${target [i].attributes.name}</div>`
                    
    //     }

    // })
    // .catch(Error=>console.log('ERROR'))



}

// getData = () => {
//     target = 
// }