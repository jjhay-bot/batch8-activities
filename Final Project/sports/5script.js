groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/billiard-sports`)
    .then(Response=>Response.json())
    .then(data => {
        targetData = data.data.relationships.sports.data;
        target = targetData.filter( ({ type }) => type == "sport");

        console.log(target)
        
        // for (let i = 0; i < target.length-1; i++) {
        for (let i = 0; i < target.length-1; i++) {
            let targetSample = target[i].id;
            fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)
            .then(Response=>Response.json())
            .then(data => {
                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                    if(targetSample == 470) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">English or “side” refers to sidespin applied to the cue ball (CB) by hitting left or right of the cue-ball vertical centerline. Proper usage suggests the term “english” is preferable to “English” for describing sidespin, but “English” is also commonly used. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    else {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">${data.data.attributes.description}</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
            })
        .catch(Error => {console.log(`error`) }) 
            }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()