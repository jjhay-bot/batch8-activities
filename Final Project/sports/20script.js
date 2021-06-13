groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/racquet-and-net-sports`)
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
                    if(targetSample == 308) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Crossminton (previously known as Speed Badminton) is a racket game that combines elements from different sports like badminton, squash and tennis. It is played without any net and has no prescribed playground, so it can be executed on tennis courts, streets, beaches, fields or gyms.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 770) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Ball badminton is a sport native to India. It is a racket game, played with a yellow ball made of wool, on a court of fixed dimensions (12 by 24 metres) divided by a net. ... Ball badminton is a fast-paced game; it demands skill, quick reflexes, good judgment, agility, and the ability to control the ball with one's wrist. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 95) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">In beach volleyball there are no specialized positions, as there are only two people on each side of the net. Each person needs to be able to block, set, dig, and hit at any time. When the receiving team wins point they gain the right to serve. The serving player must be alternated every time this occurs. </div>
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
                    console.log(name, targetSample)
                    if(targetSample == 775) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Sepak takraw, or kick volleyball, is a sport native to Southeast Asia. Sepak takraw differs from the similar sport of footvolley in its use of a rattan ball and only allowing players to use their feet, knee, and head to touch the ball. </div>
                                                <img class="thumbnail" src="https://www.tutorialspoint.com/sepak_takraw/images/sepak_takraw.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()