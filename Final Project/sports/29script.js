groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/multidisciplinary-sport`)
    .then(Response=>Response.json())
    .then(data => {
        targetData = data.data.relationships.sports.data;
        target = targetData.filter( ({ type }) => type == "sport");

        console.log(target)
        
        // for (let i = 0; i < target.length-1; i++) {
        for (let i = 0; i < target.length; i++) {
            let targetSample = target[i].id;
            fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)
            .then(Response=>Response.json())
            .then(data => {
                console.log(targetSample,data.data.attributes.name );
                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                    if(targetSample == 899) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Winter triathlon is a multisport event involving the continuous and sequential completion of snowshoeing or running, mountain biking or speed skating and cross-country skiing, all on snow. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 902) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Duathlon is an athletic event that consists of a running leg, followed by a cycling leg and then another running leg in a format similar to triathlons. The International Triathlon Union governs the sport internationally. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 897) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">A triathlon is an endurance multisport race consisting of swimming, cycling, and running over various distances. Triathletes compete for fastest overall completion time, racing each segment sequentially with the time transitioning between the disciplines included. </div>
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
                    if (targetSample == 898){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Paratriathlon is a variant of the sport of triathlon for athletes with a physical disability. The sport is governed by the International Triathlon Union (ITU), and made its Paralympic debut at the 2016 Paralympics in Rio and Commonwealth Games debut in 2018. </div>
                                            <img class="thumbnail" src="https://cpisra.org/new-site/wp-content/uploads/2019/05/paratriathlon.jpg"/>
                                        </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()