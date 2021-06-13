groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/skating-sports`)
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
                console.log(targetSample, data.data.attributes.name)
                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                    if(targetSample == 401) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Artistic roller skating is a sport similar to Figure Skating but where competitors wear roller skates instead of ice skates. Performances are usually done on quad skates, but inline skates can also be used. ... Some styles used are skating in a line, skating in a box, splicing, and skating in a circle. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 364) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">International speed skating involves a course with straight sides and curved ends of such a radius that no slackening of speed is necessary. The competitors race two at a time on a two-lane track and race against the clock. Each skater must keep his own course. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 162) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Figure skating, sport in which ice skaters, singly or in pairs, perform freestyle movements of jumps, spins, lifts, and footwork in a graceful manner. Its name derives from the patterns (or figures) skaters make on the ice, an element that was a major part of the sport until recently. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 363) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Roller derby is a roller skating contact sport played by two teams of fifteen members. ... Game play consists of a series of short scrimmages (jams) in which both teams designate a jammer (who uniquely wears a star on the helmet) and four blockers to skate counter-clockwise around a track. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 399) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Fitness skaters tend to skate more frequently and go longer distances. Fitness skates typically have faster bearings and larger wheels to generate speed and cover ground more efficiently. Skaters in this category tend to skate 10-15 mph on average. Some challenge themselves to feats of endurance skating for 30+ miles. </div>
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
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()