groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/artistic-and-dance-sports`)
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
                    if(targetSample == 681) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Zumba is a fitness program that combines Latin and international music with dance moves. Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 432) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">This gives the gymnast the opportunity to test out her own field of expertise and to show her individual talents by devising her own routine. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 106) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Rhythmic gymnastics is a sport that combines elements of ballet, gymnastics, dance, and apparatus manipulation. Individuals or teams of competitors (from 2 to 6 people) manipulate one or two pieces of apparatus: rope, clubs, hoop, ball, ribbon and Free (no apparatus, so called "floor routine"). </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 430) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">You can find gymnastics classes for children as young as 2 years of age, but many coaches say that it's better to wait until your child is 5 or 6 before enrolling in a serious gymnastics program. For younger children, introductory classes should focus on developing body awareness and a love for the sport.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 105) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Artisitic gymnastics is an Olympic sport which involves physical strength, power, agility, flexibility, grace, control, coordination, and balance. Gymnastics is governed by the Federation Internationale de Gymnastique. Competitive artistic gymnastics is the most popular gymnastic events. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 675) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Hip hop or hip-hop is a culture and art movement that was created by African Americans, Latino Americans and Caribbean Americans in the Bronx, New York City. The origin of the name is often disputed. It is also argued as to whether hip hop started in the South or West Bronx. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 424) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Contemporary dance is a genre of dance performance that developed during the mid-twentieth century and has since grown to become one of the dominant genres for formally trained dancers throughout the world, with particularly strong popularity in the U.S. and Europe. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 669) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Acrobatic gymnastics is a competitive gymnastic discipline where partnerships of gymnasts work together and perform figures consisting of acrobatic moves, dance and tumbling, set to music. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 103) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Street dance, also informally referred to as street, is an umbrella term which encompasses a range of dance styles characterised by descriptions such as hip hop, funk and breakdancing. Its eclectic nature has spawned a whole new street dance lexicon, including terms such as popping, locking, waving and krumping. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 674) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Acro dance is a style of dance that combines classical dance technique with precision acrobatic elements. It is defined by its athletic character, its unique choreography, which seamlessly blends dance and acrobatics, and its use of acrobatics in a dance context. </div>
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
                    if (targetSample == 671){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Parkour, the practice of traversing obstacles in a man-made or natural environment through the use of running, vaulting, jumping, climbing, rolling, and other movements in order to travel from one point to another in the quickest and most efficient way possible without the use of equipment.</div>
                                            <img class="thumbnail" src="https://www.topendsports.com/sport/images/parkour-freeimages.jpg"/>
                                        </div>`
                    }
                    if (targetSample == 678){
                    groups.innerHTML += `<div class="thisLink" href="">
                        <div class="groupDiv">${name}</div>
                        <div class="description">The foxtrot is a smooth dance where the dancers travel across the dance floor (Bedinghaus). The long walking movements contribute to the iconic rise and fall motion. The footwork is a combination of slow and quick steps.</div>
                        <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ballroom_dance.jpg/220px-Ballroom_dance.jpg"/>
                    </div>`
                    }                    
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()