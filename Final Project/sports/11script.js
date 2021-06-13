groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/cycle-sports`)
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
                    console.log(targetSample, data.data.attributes.name)
                if(targetSample == 258) {
                    return groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Cycling, use of a bicycle for sport, recreation, or transportation. The sport of cycling consists of professional and amateur races, which are held mostly in continental Europe, the United States, and Asia. The recreational use of the bicycle is widespread in Europe and the United States. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }


                    if(targetSample == 283) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">A utility bicycle, city bicycle, urban bicycle, European City Bike (ECB), classic bike or simply city-bike, is a bicycle designed for frequent short, moderately paced rides through relatively flat urban areas. ... City bikes may be individually owned or operated as part of a public bike sharing scheme. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 659) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Cyclocross is a bike racing discipline that involves riding a drop-handlebar bike on a short, off-road course, usually in a park or similar. Courses include features like mud, sandpits, barriers and steps or slopes too steep to ride, forcing riders to run, as well as easier sections. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 661) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Trail Course is a rodeo event in which a horse and rider attempt to complete a series of obstacles in the fastest time. It combines the horse's athletic ability and the horsemanship skills of a rider in order to safely and successfully maneuver a horse through a series of five obstacles.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 660) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Cross-country cycling is defined by the terrain on which it is performed. XC courses and trails consist of a mix of rough forest paths and singletrack (also referred to as doubletrack depending on width), smooth fireroads, and even paved paths connecting other trails. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 23) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Simply put, a gravel bike is a bicycle that you ride on gravel. This definition is intentionally vague because riders all over the world enjoy riding dirt and gravel on bicycles as different as lightweight carbon-fiber road race bikes and heavy-duty dual-suspension mountain bikes. </div>
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