groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/diving-sports`)
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

                    if(targetSample == 690) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Deep-sea diving is an activity in which a person can descend beyond the recreational scuba diving limit of 40 m (130 ft). Beyond this depth, safer and more complex equipment must be used. Due to the logistical support and expenses required, deep-sea diving is normally done for science or profit. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 402) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Snorkelling is an activity in which a person swims using a mask, snorkel and swimming aids such as fins, but without using self-contained underwater breathing apparatus (SCUBA). Snorkelling includes both snorkel swimming and snorkel diving. Snorkel swimming is snorkelling on the surface of the water. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 190) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Scuba diving is a mode of underwater diving where the diver uses an apparatus which is completely independent of surface supply to breathe underwater. The name "scuba", an acronym of "Self-Contained Underwater Breathing Apparatus", was first used by Christian J. Lambertsen in a patent submitted in 1952. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 187) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Freediving, free-diving, free diving, breath-hold diving, or skin diving is a form of underwater diving that relies on breath-holding until resurfacing rather than the use of breathing apparatus such as scuba gear. </div>
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
                                            <div class="description">By its most basic definition, cliff diving is exactly what you would expect it to be based on the name. It is an extreme sport that involves highly-trained athletes diving into the water from a very high, rocky cliff. This give it a smilier allure as other extreme sports, including base jumping and rock climbing. </div>
                                            <img class="thumbnail" src="https://www.tariolaw.com/wp-content/uploads/2019/07/cliff-diving.jpg"/>
                                        </div>`
                    }
                    if (targetSample == 692){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Ice diving is one of the most adventurous types of diving out there and is a great way to try something completely different. It is challenging, takes extra preparation, and is different from most recreational dive types. Ice diving offers the opportunity to dive in winter when other types of diving may not possible and experience unique underwater environments and marine life few people ever get to see. </div>
                                                <img class="thumbnail" src="https://www.divein.com/wp-content/uploads/image-archive/img/ice-diving-signal.jpg"/>
                                            </div>`
                        }

                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()