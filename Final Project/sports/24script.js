groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/sliding-sports`)
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
                groups.innerHTML += `<div class="thisLink" href="">
                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                        <div class="description">${data.data.attributes.description}</div>
                                        <img class="thumbnail" src="${image}"/>
                                    </div>`
            })
            .catch(Error => {
                
                console.log(`error`)
                let targetSample = target[i].id;

                fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)            
                .then(Response=>Response.json())
                .then(data => {
                    let name = data.data.attributes.name;
                    console.log(name, targetSample)
                    if (targetSample == 818){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Street luge is an extreme gravity-powered activity that involves riding a street luge board (sometimes referred to as a sled) down a paved road or course. Street luge is also known as land luge or road luge. Like skateboarding, street luge is often done for sport and for recreation.</div>
                                                <img class="thumbnail" src="https://static.educalingo.com/img/en/800/street-luge.jpg"/>
                                            </div>`
                    }
                    if (targetSample == 820){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Extreme sledding is a sport where riders do not simply sled down a hill, but use the sleds and their bodies to carry out various tricks, using apparatus such as ramps, rails, ledges, and some that are performed simply riding down the hill. </div>
                                                <img class="thumbnail" src="https://res.cloudinary.com/mommy-nearest/image/upload/c_crop,h_2986,w_6720,x_0,y_410/c_scale,f_auto,fl_lossy,q_75,w_848/qacxbvyxeml0v2sjzq34"/>
                                            </div>`
                    }
                    if (targetSample == 821){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Riverboarding is a boardsport in which the participant lies prone on their board with fins on their feet for propulsion and steering. This sport is also known as hydrospeed in Europe and as riverboarding or white-water sledging in New Zealand, depending on the type of board used. </div>
                                                <img class="thumbnail" src="https://cdn.getyourguide.com/img/tour/5ca777230ebd3.jpeg/68.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()