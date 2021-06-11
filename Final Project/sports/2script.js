groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/athletics`)
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
                    if(targetSample == 228) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Synchronised Swimming used to be known as "water ballet". This is because the routines are essentially a series of athletic movements choreographed to a piece of chosen music. Not unlike staged ballet, except that it is performed in the water. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 506) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description" >Aqua jogging, aka deep water running, is a form of cardiovascular exercise that mimics the motion of jogging while submerged in water. You can do aqua jogging by running laps in the pool or wearing a flotation device around your trunk and running in place.
                                                            <br><br>
                                                            A flotation device or running belt keeps your body suspended, allowing your arms and legs to move freely while keeping your head above the surface of the water. </div>
                                                        <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDMoSOkGVrM1wJJGmUAzfK6GAG8pTdw_q6Q&usqp=CAU"/>
                                                    </div>`
                    }

                    if(targetSample == 505) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description" >Aqua aerobics (also called water aerobics and aquafit) is a form of exercise which provides cardiovascular conditioning, increasing your pulse and your breathing rate. The term "aerobic" actually means "with oxygen". This means that your breathing controls the amount of oxygen that reaches your muscles to help them move and burn stored fuel. Aqua aerobics is similar to a normal aerobics class, but since it's done in the water, it places less strain on your joints.</div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }

                    if(targetSample == 406) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                            <div class="description" onclick="getArray()"> Open water swimming is one of the five aquatic sports governed by Federation Internationale de Natation de Amateur (FINA). Swimming, water polo, synchronized swimming, and diving are the others within FINA's mandate. Open water swimming is defined by FINA as any competition that takes place in rivers, lakes, or oceans. Open water swimming is also an important part of both the Olympic triathlon (swim/cycle/run segments, with the swim 0.9 mile (1.5 km) in length) and the longer version, the Iron-man, which has a 2.4 mile (4 km) open water swim.
                                                        </div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }

                    if(targetSample == 331) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description" onclick="getArray()"> Aquatic Fitness is defined as activities performed in the water that promote and enhance physical and mental fitness. Aquatic Fitness is typically performed in a vertical position in shallow and/or deep water. There are numerous applications to appeal to a wide variety of participants.</div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }

                    if(targetSample == 504) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description"> </div>
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
                    if (targetSample == 221){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Aqua cycling (or water cycling) is an aerobic activity conducted in a pool of water on a purpose-built, hydro-spin bike.  The aqua cycling routine facilitates an intense cycling workout which incorporates various arm, chest and core exercises. </div>
                                            <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Aqua_spinning_class_aboard_a_cruise_ship.jpg/375px-Aqua_spinning_class_aboard_a_cruise_ship.jpg"/>
                                        </div>`
                    }
                    if(targetSample == 501) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Paralympic swimming is an adaptation of the sport of swimming for athletes with disabilities. Paralympic swimmers compete at the Summer Paralympic Games and at other sports competitions throughout the world. The sport is governed by the International Paralympic Committee. Both men and women compete in Paralympic swimming, racing against competitors of their own gender. Swimming has been a part of the Paralympic program since the 1960 Summer Olympics in Rome, Italy. </div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVXDrcxSJus6-8Jzz1So0E3VTSm9etE5r6A&usqp=CAU"/>
                                            </div>`
                    }

                    if(targetSample == 500) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description" >Marathon swimming is a class of open water swimming defined by long distances (at least 10 kilometers) and traditional rules based in English Channel swimming. Unlike marathon foot-races which have a specifically defined distance, marathon swims vary in distance. However, one commonly used minimum definition is 10 kilometers, the distance of the marathon swimming event at the Olympic Games. </div>
                                                <img class="thumbnail" src="https://i0.wp.com/www.swimmingworldmagazine.com/news/wp-content/uploads/2020/07/marathon-odaiba-marine-park-tokyo2020.jpeg?fit=930%2C560&ssl=1"/>
                                            </div>`
                    }

                    if(targetSample == 502) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">The flipper is the name of a particular bowling delivery used in cricket, generally by a leg spin bowler. In essence it is a back spin ball. Squeezed out of the front of the hand with the thumb and first and second fingers, it keeps deceptively low after pitching and can accordingly be very difficult to play. </div>
                                                <img class="thumbnail" src="https://hw-media.herworld.com/public/Flippa%20Ball.png"/>
                                            </div>`
                    }

                    if(targetSample == 503) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Surf polo was originally played by Duke Kahanamoku in Hawaii on flat days with his brothers in the early 1900s.  Louis Kahanamoku is credited to be the first to add surfboards to water polo.  In 2013, nearly 100 years after its inception, Jeff Brooks and Jacob Kelly Quinlan brought the spirit of Surf Polo to the indoor pool environment to keep the river surf community going while rivers were frozen over for the winter.  
                                                    <br><br>
                                                    The river surfers were quick to appreciate the mental and physical benefits of paddling a surfboard in the pool for 60 minutes and often meet up after the game building relationships with each other. </div>
                                                <img class="thumbnail" src="https://thumbs.dreamstime.com/b/surfboard-polo-event-duke-kahanamoku-oceanfest-surf-location-queen-s-beach-waikiki-island-o-ahu-hawai-i-usa-viii-subject-43849137.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()