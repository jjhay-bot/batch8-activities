groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/shooting-sports`)
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
                if(targetSample == 464) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Shooting sports is a collective group of competitive and recreational sporting activities involving proficiency tests of accuracy, precision and speed in shooting — the art of using various types of ranged firearms, mainly referring to man-portable guns (firearms and airguns, in forms such as handguns, rifles and shotguns) and bows/crossbows. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 877) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Archery, sport involving shooting arrows with a bow, either at an inanimate target or in hunting. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 885) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Field-Shooting or Terrain-Shooting refer to a set of pistol and rifle shooting disciplines that usually are shot from temporary shooting ranges in the outdoor terrain at varying (and sometimes unknown) distances, rather than at permanent shooting ranges at fixed distances. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 891) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Practical shooting, also known as action shooting or dynamic shooting, is a generic term applicable to shooting sports where speed is of equal importance as precision. Many of the disciplines involve movement, and when using handguns they are often drawn from a holster. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 36) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Clay pigeon shooting, also known as clay target shooting, is a shooting sport involving shooting a firearm at special flying targets known as clay pigeons, or clay targets.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 876) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Run archery is a shooting discipline connecting archery with running. It is similar to the sport of biathlon. </div>
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
                    if (targetSample == 873){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">A crossbow is a ranged weapon using an elastic launching device consisting of a bow-like assembly called a prod, mounted horizontally on a main frame called a tiller, which is hand-held in a similar fashion to the stock of a long firearm. Crossbows shoot arrow-like projectiles called bolts or quarrels. </div>
                                            <img class="thumbnail" src="https://static.wikia.nocookie.net/residentevil/images/7/73/CrossBow_RE6.jpeg/revision/latest?cb=20130107220243"/>
                                        </div>`
                    }
                    if (targetSample == 881){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Woodsball (also known as woods paintball, hillball or bushball) is a format of paintball gaming, in which players compete in a natural outdoors area or a recreation of a town called urban fields. ... The term "woodsball" is sometimes used to describe non-milsim airsoft games, which take place in a forest. </div>
                                                <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/en/7/7a/Woodsball_marksman_06.JPG"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()