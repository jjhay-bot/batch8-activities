groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/throw-and-catch-sports`)
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
                groups.innerHTML += `<div class="thisLink" href="">
                    <div class="groupDiv">${data.data.attributes.name}</div>
                    <div class="description">${data.data.attributes.description}</div>
                    <img class="thumbnail" src="${image}"/>
                </div>`
                    
            })
            .catch(Error => {
                
                console.log(`error`)
                let targetSample = target[i].id;

                fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)            
                .then(Response=>Response.json())
                .then(data => {
                    let name = data.data.attributes.name;
                    console.log(name, targetSample)
                    if(targetSample == 585) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">"Aussie rules", "football" or "footy", is a contact sport played between two teams of 18 players on an oval field, often a modified cricket ground. Points are scored by kicking the oval ball between the middle goal posts (worth six points) or between a goal and behind post (worth one point).</div>
                                                <img class="thumbnail" src="https://cdn.newsapi.com.au/image/v1/6ad29e4bd94eed2cb275817a8c2bbe82"/>
                                            </div>`
                    }
                    if(targetSample == 590) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Trick Catch and Doubling used to be separate events but have now been combined into a single event.  The first half involves throwing a single boomerang and making a series of increasingly harder catches.  Once complete the thrower then uses a pair of boomerangs, designed to be used together , to throw at the same time and catch both again with increasingly harder to make catches.  Points are awarded for a successful catch with harder catches being worth more points. </div>
                                                <img class="thumbnail" src="https://pixfeeds.com/images/topic/4848/640-4848-rugby-photo3.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 591) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Ultimate, also and originally known as ultimate Frisbee, is a low-contact team sport played with a flying disc (Frisbee). ... Although ultimate resembles many traditional sports in its athletic requirements, it is unlike most sports due to its focus on self-officiating, even at the highest levels of competition. </div>
                                                <img class="thumbnail" src="https://ultimaterob.com/wp-content/uploads/2013/02/i-LMxFrVC-L.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 592) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Players try to advance the disc down the court by passing it back and forth to their teammates. ... To score, a player must catch the disc in the scoring zone they are advancing towards. The location of the disc is what is important, not the location of the chair. </div>
                                                <img class="thumbnail" src="https://i.ytimg.com/vi/DO51l9WVxZM/maxresdefault.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()