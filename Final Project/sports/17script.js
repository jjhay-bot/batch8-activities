groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/club-and-ball-sports`)
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
                    if(targetSample == 739) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Park Golf is a sport where players can hit the ball with a club on courses covered with green and play happily while competing for the number of strokes before cupping in. </div>
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
                    if (targetSample == 741){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">A Shotgun start is a golf tournament format in which all groups of players tee off simultaneously from different holes. A shotgun is shot into the air to signal the start of the tournament. Each hole on a course will be the tee off hole for each foursome. Group 1 would start from hole 1, Group 2 from hole 2, etc. Each group starts play at the same time. A shotgun start will allow a tournament to end at the same time it takes the slowest foursome to finish a full round or 18 holes of golf. If there are more than 18 teams, some double up at the 4 and 5 par holes as A & B teams. </div>
                                            <img class="thumbnail" src="https://ninjagolfer.net/wp-content/uploads/2020/08/What-Is-a-Shotgun-Start.jpg"/>
                                        </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()