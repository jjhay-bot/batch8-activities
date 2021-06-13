groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/paddle-sports`)
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
                console.log(targetSample,data.data.attributes.name)
                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                    if(targetSample == 651) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Creeking is a branch of canoeing and kayaking that involves descending very steep low-volume whitewater. It is usually performed in specialized canoes and kayaks specifically designed to withstand the extreme whitewater environment in which the activity occurs. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 403) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">A sea kayak or touring kayak is a kayak developed for the sport of paddling on open waters of lakes, bays, and the ocean. ... They trade off the maneuverability of whitewater kayaks for higher cruising speed, cargo capacity, ease of straight-line paddling, and comfort for long journeys. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 645) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Sprint kayak is a sport held on calm water (lakes, flatwater streams, etc. with little waves). The paddler is seated, facing forward, and uses a double-bladed paddle pulling the blade through the water on alternate sides to propel the boat forward. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 375) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">the 14ft Race Hybrid Soft SUP PaddleBoard is Designed for riders up to 260lbs. ... Single Fin, Pointed Displacement Bow Shape makes it perfect for the the racing enthusiast. Narrow thick template gives good float and minimum resistance moving through the water. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 198) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The Touring stand-up paddle board shape will generally have a pointed nose, like a kayak, and is designed for longer, more fast-paced flat-water paddles. The pointed nose is known as a displacement hull. ... Touring boards are best for speed, SUP racing and covering long distances. </div>
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
                    if (targetSample == 664){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Snow boating or snow kayaking is a winter sport that usually involves kayakers descending snow slopes, in contrast to river sports such as whitewater kayaking for which the boats were usually designed. Typically either playboats or creek-boats are used depending on the style of snowboating to be done.</div>
                                            <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/d/da/Snow_rafting_Monarch_Mountain_detail.jpg"/>
                                        </div>`
                    }
                    if (targetSample == 646){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">A surfski (or: "surf ski", "surf-ski") is a type of kayak in the kayaking "family" of paddling craft. ... Many surfski models use a self-bailer to eliminate water in the cockpit area. The sit-on-top cockpit means a surfski is easy to remount in the event of a capsize and also that the hull will not fill with water.</div>
                                                <img class="thumbnail" src="https://netdna.coolthings.com/wp-content/uploads/2009/08/surfskiing1.jpg"/>
                                            </div>`
                        }

                    if (targetSample == 221){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description"></div>
                                            <img class="thumbnail" src=""/>
                                        </div>`
                    }

                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()