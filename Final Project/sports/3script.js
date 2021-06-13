groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/bat-and-ball-games`)
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
                    if(targetSample == 347) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Softball, a variant of baseball and a popular participant sport, particularly in the United States. It is generally agreed that softball developed from a game called indoor baseball, first played in Chicago in 1887. It became known in the United States by various names, such as kitten ball, mush ball, diamond ball, indoor–outdoor, and playground ball. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }


                    else {
                        // console.log(data.data.attributes)
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">${data.data.attributes.description}</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
            })
            .catch(Error => {
                
                console.log(`error`)
                let targetSample = target[i].id;

                fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)            
                .then(Response=>Response.json())
                .then(data => {
                    let name = data.data.attributes.name;
                    console.log(name, targetSample);                   
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()