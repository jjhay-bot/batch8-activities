let toggleButton = document.getElementsByClassName('toggle-button');
let clickCategory = document.querySelectorAll('groupDiv');


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
            let targetSample = target[i].relationships.sports.data[0].id;

            fetch(`https://sports.api.decathlon.com/sports/${targetSample}`,{
                
            })
            .then(Response=>Response.json())
            .then(data => {
                // image =  data.relationships.images.data.thumbnail.url;
                // console.log(data.data.relationships.images.data[0].variants[0].thumbnail.url)
                groups.innerHTML += `<div>
                                        <div class="groupDiv" class="${target [i].attributes.name}" onclick="getArray()" >${target [i].attributes.name}</div>
                                        <img class="thumbnail" src="${data.data.relationships.images.data[0].variants[0].thumbnail.url}"/>
                                    </div>`
            })
            .catch(Error => console.log('ERROR'))






        }

    })
    .catch(Error => console.log('ERROR'));
}
groupSports();










function getArray(e) {
    

    document.getElementsByClassName(e.this).onclick = function() {
        console.log(this.innerHTML);
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