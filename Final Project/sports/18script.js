groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/basket-and-handball-sports`)
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
                    if(targetSample == 747) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">3x3 (also called streetball or street basketball) is an informal variation of basketball which is played widely all around the world. The 3x3 form of the game is played with two teams of three players, with one hoop. The International Basketball Federation (FIBA) created a set of rules for 3x3 basketball and have organized international competitions in the sport. The sport made its first appearance on the international stage at the 2010 Youth Olympic Games.</div>
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
                    if(targetSample == 755) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Indoor netball is a variation of netball, played exclusively indoors, in which the playing court is surrounded on each side and overhead by a net. The net prevents the ball from leaving the court, reducing the number of playing stoppages. This gives indoor netball a faster pace than netball. </div>
                                                <img class="thumbnail" src="https://www.businessgames.co.nz/wp-content/uploads/2016/01/netball_102s-300x200.jpg"/>
                                            </div>`
                    }

                    if(targetSample == 754) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Fast5 Netball is your way to play netball with the dial cranked right up. ... Each team has only five players on the court. There are different scoring zones, rolling subs, and the quarters are shorter. Players can even double and triple their points with Power Plays and Super Shots. </div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzCrHMElABi-6X3PLUSEvo9nbGmGpxofiF8XE26DtWnlNr5jXPs1ETAhG034BdLL0mVQ&usqp=CAU"/>
                                            </div>`
                    }
                    if(targetSample == 751) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Water basketball is a water sport, which mixes the rules of basketball and water polo, played in a swimming pool. Teams of five players each must shoot at the goal with a ball within a certain time after gaining possession. </div>
                                                <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Meppel-waterbasketbal-doel-poging.JPG"/>
                                            </div>`
                    }
                    if(targetSample == 748) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The game is played on a circular court with no backboard on the goal. There are no out-of-bounds, ball movement is via the pass or 2½ steps, and there is no dribbling. </div>
                                                <img class="thumbnail" src="https://i.ytimg.com/vi/XS1KKhfn1jA/maxresdefault.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()