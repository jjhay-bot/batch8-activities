groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/stick-and-ball-sports`)
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
                    if(targetSample == 348) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Floorball is a type of indoor hockey that doesn't require any bulky equipment. All you need is a stick and a ball! ... While floorball is similar to ball or floor hockey, it is faster and safer because of the unique rules and the lightweight equipment. The emphasis is on speed and skill rather than strength. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 175) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Ice hockey, also known as "hockey", is a team sport that is played on a specially ice rink surface. The aim of each team is to send the puck (a disk made of vulcanized rubber) and to score into the opponent's goal. A match lasts three periods of 20 minutes each. the clock running only when the puck is in play. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 368) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">a game similar to ice hockey, but played on foot on a hard surface without ice, using a hard plastic ball instead of a puck. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 98) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Field hockey, also called hockey, outdoor game played by two opposing teams of 11 players each who use sticks curved at the striking end to hit a small, hard ball into their opponent's goal. It is called field hockey to distinguish it from the similar game played on ice. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 504) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description"> </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 504) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description"> </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 177) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Roller inline hockey, or inline hockey is a variant of hockey played on a hard, smooth surface, with players using inline skates to move and hockey sticks to shoot a hard, plastic puck into their opponent's goal to score points. ... Inline hockey is a very fast-paced and free-flowing game. </div>
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
                    if(targetSample == 407) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Street hockey (also known as shinny, dek hockey, ball hockey, road hockey) is a variation of the sport of ice hockey where the game is played outdoors on foot, or with inline or roller skates using a ball or puck. Both ball and puck are typically designed to be played on non-ice surfaces. </div>
                                                <img class="thumbnail" src="https://www.gazettenet.com/getattachment/b1a2941c-3f34-4e53-b8be-4ec66de60769/Bundy-Cup-reaches-30th-year"/>
                                            </div>`
                    }
                    if(targetSample == 762) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Unicycle hockey is a team sport, similar to rink hockey where players try to hit the ball with their sticks into the other team's goal, except that each player must be mounted on a unicycle to play the ball. ... The goals are also set back from the end walls so that players can go behind them, similarly to ice hockey. </div>
                                                <img class="thumbnail" src="https://lh3.googleusercontent.com/proxy/4cYHkneiIbRkTISM0FBbzJF-Fr8dXd68nShXJVu7C4U4BF-76uP4eeQiBTbN-WIclQOxyPRQhgCPanATdF9PMFt_jzhaRRFlsut61pi76PLiQZt1sQ"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()