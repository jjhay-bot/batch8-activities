groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/football-sports`)
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
                    if(targetSample == 714) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Canadian football (French: football canadien) is a sport played in Canada in which two teams of 12 players each compete for territorial control of a field of play 110 yards (101 m) long and 65 yards (59 m) wide attempting to advance a pointed oval-shaped ball into the opposing team's scoring area (end zone).</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 91) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description" >Known simply as rugby, rugby union is a full contact sport involving 15 players on each team,with 7 substitutes on the bench. The aim of the game is to score more points than the other side and points are scored through tries, conversions, penalty kicks and drop goals. </div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }

                    if(targetSample == 82) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">( US indoor soccer) football played by two teams of six players, not the usual eleven players. The playing area is surrounded by a wall, not lines, and the game does not stop for throw-ins, corners, or goal kicks. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 465) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Rugby sevens (commonly known as simply sevens), and originally known as seven-a-side rugby, is a variant of rugby union in which teams are made up of seven players playing seven-minute halves, instead of the usual 15 players playing 40-minute halves. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 713) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">a game resembling American football that is played on a shorter indoor field between two teams of eight players each. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 724) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Wheelchair Rugby is a mixed team sport for male and female quadriplegic athletes. A unique sport created by athletes with a disability, it combines elements of rugby, basketball and handball. Players compete in teams of four to carry the ball across the opposing team's goal line. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 723) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Mini rugby, also known as New Image Rugby, is a form of rugby union designed to introduce the sport to children. It uses a smaller ball and pitch than standard rugby, and has eight to ten players a side. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 719) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Sprint Football is a full-contact, intercollegiate, varsity sport and has the same rules as regular college football, except that all players must weigh 178.0 pounds or less. The league has been in existence since prior to World War II.  </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 717) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Nine-man football is a type of American football played by high schools that are too small to field teams for the usual 11-man game. ... The format is similar for five-, six-, and seven-year-old flag football, where the field is reduced to 50 yards by 50 yards. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 423) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Touch rugby refers to games derived from rugby football in which players do not tackle each other but instead touch their opponents using their hands on any part of the body, clothing, or the ball. A formal, competitive variety, known as Touch, developed from rugby league and now exists as a sport in its own right. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 715) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Eight-man football is a variation of American Football, played primarily at a high school level in the United States, by schools that have smaller student enrollments. ... Also in the eight-man format, teams generally skip special team plays due to lack of skilled players, and go for fourth downs and two point conversions. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 86) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Futsal is FIFA's official indoor soccer game which is, essentially, a scaled down version of outdoor soccer played indoors. It is a small sided game (5v5) played on a smaller field (roughly basketball court sized) with a smaller (size 3-4) ball. Futsal is played with touchline boundaries. There are no walls in play. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 90) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Rugby League is a contact sport made up of two teams with 13 players in each team and lasts for 80 minutes. The aim of the game is to beat your opposing team by receiving more points. Players drop-kick a ball into the air, run with the ball or throw the ball towards the goal in order to gain points, known as a 'try'. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 731) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Street football, also known as backyard football or sandlot football, is a simplified variant of American football primarily played informally by youth. It features far less equipment and fewer rules than its counterparts, but unlike the similar touch football, features full tackling. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 83) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Five-a-side football is a variation of association football, in which each team fields five players (four outfield players and a goalkeeper). Other differences from football include a smaller pitch, smaller goals, and a reduced game duration. </div>
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
                    if(targetSample == 727) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Jorkyball is a two-a-side soccer game played in a 10m x 5m. state of the art plexiglass court with a specially designed unique ball. The flexible walls can be used to dribble, pass and score. The team that scores 7 goals in 2 sets wins. The rules of the game make it fast, fun and challenging.</div>
                                                <img class="thumbnail" src="https://www.journalexpress.ca/wp-content/uploads/sites/6/2019/07/IMG_1216.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()