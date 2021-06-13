groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/target-sports`)
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
                if(targetSample == 468) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Steel tip or soft tip describes the point of a dart. ... Soft tip darts on the other hand, have flexible plastic tips and you throw them at a plastic board with moulded holes in it, which hold onto the point of the dart. These darts are commonly used on electronic machines, which score automatically.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }

                if(targetSample == 866) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">American Darts is a regional U.S. variant of the game (most U.S. dart players play the traditional games described above). This style of dartboard is most often found in eastern Pennsylvania, New Jersey, Delaware, Maryland, and parts of New York state.
                                            </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 867) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Cricket is a darts game that uses the standard 20 number dartboard with the triple and double rings. It is known by various names in Britain, including "Mickey Mouse", "Tactics" "Horse and Carriage", "Coach and Horses", "The Game", and "Faldo".</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 861) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">The game of Finnish skittles is a game of precision involving 2 opposing players or teams. Stand 4m away from the skittles and knock them over using the throwing skittle. Score a total of exactly 40 points to win the game.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 182) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Pétanque is a French (Provençal to be precise) outdoor game played by two opposing teams trying to throw boules (metallic spheres the size of an orange) as close as possible to a but (little wooden sphere the size of a plastic bottle cork, also called a cochonnet, meaning piglet).</div>
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
            .catch(Error => {
                
                console.log(`error`)
                let targetSample = target[i].id;

                fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)            
                .then(Response=>Response.json())
                .then(data => {
                    let name = data.data.attributes.name;
                    console.log(name, targetSample)
                    if (targetSample == 858){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Bowling, also called tenpins, game in which a heavy ball is rolled down a long, narrow lane toward a group of objects known as pins, the aim being to knock down more pins than an opponent. The game is quite different from the sport of bowls, or lawn bowls, in which the aim is to bring the ball to rest near a stationary ball called a jack.</div>
                                            <img class="thumbnail" src="https://cdn.britannica.com/s:400x225,c:crop/09/101209-050-7EF33C37/Tommy-Jones-final-Tournament-of-Champions-Professional-April-1-2007.jpg"/>
                                        </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()