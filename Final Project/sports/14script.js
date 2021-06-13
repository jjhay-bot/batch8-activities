groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/equestrianism`)
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
                    if(targetSample == 58) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">show jumping, competitive equestrian event in which horse and rider are required to jump, usually within a time limit, a series of obstacles that have been designed for a particular show. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    else {
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
                    if(targetSample == 411) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Horseball is a sport played on horseback in which a ball is handled and points are scored by shooting it through a hoop of 1 m diameter. The sport is a combination of polo, rugby and basketball. It is one of the officially recognized ten disciplines of the International Federation for Equestrian Sports. </div>
                                                <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/CIMG3133_crop_10x7.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 695) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Polo, game played on horseback between two teams of four players each who use mallets with long, flexible handles to drive a wooden ball down a grass field and between two goal posts. It is the oldest of equestrian sports. </div>
                                                <img class="thumbnail" src="http://4.bp.blogspot.com/-EMEafD36BA0/VDID4nMKqaI/AAAAAAAAKW4/s2xHQeEpcv8/s1600/20140814-Polo-on-the-Mall-VPb01.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()