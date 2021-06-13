groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/basque-lumberjack-sports`)
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
                    if(targetSample == 579) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Pole Climbing also known as Mast Climbing, is an activity which involves climbing very high wooden poles. The activity requires intense physical strength and endurance. Though Pole climbing is practiced as a competitive sport, there is not much interest in it at present, and is regarded as a dying sport. </div>
                                                <img class="thumbnail" src="https://www.pole-climbing.eu/wp-content/uploads/2019/11/wooden_poles_climbing_classic_05-495x400.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 563) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Stone lifting takes place throughout Scotland, Wales, Iceland and other Northern European countries, involving heavy local stones that serve as a test of strength for the locals and any competitors. ... The competitors in the event often compete by loading the heaviest stone onto a stone wall. </div>
                                                <img class="thumbnail" src="https://miro.medium.com/max/1600/1*ltNAp7H1WlDnFvBTTKG-rA.jpeg"/>
                                            </div>`
                    }       
                    if(targetSample == 561) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">In this competition, the wood cutter has to chop through a number of tree trunks arranged on the ground in rows as quickly as possible while standing on the log to beat his competitors. </div>
                                                <img class="thumbnail" src="https://i.pinimg.com/originals/8c/d3/cc/8cd3ccce398a70556a429c16aa6408cf.jpg"/>
                                            </div>`
                    }                
                    if(targetSample == 562) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">This sport translates as Human-animal tests and is a collective term for a number of sports in which humans and animals are involved in dragging heavy weights. </div>
                                                <img class="thumbnail" src="https://espanafascinante.com/wp-content/uploads/abere-probak.jpg"/>
                                            </div>`
                    }                
                    if(targetSample == 564) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The hole drilling competition involves having to grind holes into a rock. Teams of three compete against each other. They take turns in using a long metal pole (called laztabin) to punch and drill a hole into a large rock upon which they are standing, pouring water onto the working area while the third person gets to rest. </div>
                                                <img class="thumbnail" src="https://live.staticflickr.com/3040/2795308691_6da8045392_b.jpg"/>
                                            </div>`
                    }                
                    if(targetSample == 570) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Contestants have to lift the back of an ox cart weighing 360 kg 40 cm above ground. The cart is pivoted to the ground at the front end and competitors must rotate it, trying to go around as many times as possible. It is also called andartza in Basque. </div>
                                                <img class="thumbnail" src="http://lh6.ggpht.com/jokinsu/SGk9-jWKZ_I/AAAAAAAAEV0/n_9Hu7qclcw/s800/kontrabandista02.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()