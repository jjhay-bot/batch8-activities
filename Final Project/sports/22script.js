groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/skiing-sports`)
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
                    if(targetSample == 785) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Extreme skiing is what happens when you get away from the groomed runs and head for the steepest area you can find off-piste. As opposed to 'regular' off-piste, extreme-skiing involves slope angles of at least 45-degrees or a good-sized cliff drop. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 787) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Removal of trees and brush on 2.68 ha for ski runs and lift installation and from forested strips within a 4.03 ha area that will be used for gladed tree skiing. Our terrain includes numerous summits over 1,000 m ( 3500 feet ) with steep slopes that offer alpine and tree glade skiing. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 788) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Grass skiing, skiing on grass, is a method for training for alpine skiing. Both grass skiing and alpine skiing have become established as sports in their own right. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 314) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Ski touring is skiing in the backcountry on unmarked or unpatrolled areas. Touring is typically done off-piste and outside of ski resorts, and may extend over a period of more than one day. It is similar to backcountry skiing but excludes the use of a ski lift or transport. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 799) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Ski Cross is one of the events of Freestyle Skiing in which four skiers start at the same time and compete on a roughly one-kilometer specially constructed course over jumps, waves and steep turns side by side. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 805) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The Marathon, which has been running since Canada's Centennial year of 1967, is the longest in the world. It consists of 10 sections of varying lengths and difficulties which can either be skied together over the two days (five stages per day), or individually on subsequent days. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 786) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Slalom is a timed event requiring the execution of many short, quick turns through two different courses. The slalom features the shortest course and quickest turns. As in the giant slalom, each skier makes two runs down two different courses on the same slope. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 68) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Freeriding is a form of skiing or snowboarding on open terrain, away from groomed slopes. ... What's essential when skiing or snowboarding in a freeride zone is mastering the right technique for skiing in powder snow. The movements required when skiing on powder snow are very different to those needed for groomed slopes.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 803) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Roller skiing is an off-snow equivalent to cross-country skiing. Roller skis have wheels on their ends and are used on a hard surface, to emulate cross-country skiing. The skiing techniques used are very similar to techniques used in cross-country skiing on snow. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 156) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Arguably the toughest outdoor sport in the world, it requires a unique combination of strength, speed, and endurance. The lateral movements of skate skiing are at once unnatural and exhausting, while the technique for proper classic skiing leaves most untrained participants feeling like they're just shuffling around. </div>
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