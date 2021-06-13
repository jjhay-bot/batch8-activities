groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/circus-disciplines`)
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
                    if (targetSample == 810){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Highlining is the sport of walking across rope or wire between two high points. He is the only person in the world to practise extreme highlining.</div>
                                            <img class="thumbnail" src="https://slacktivity.com/wp-content/uploads/2021/04/what-is-highlining-1024x683.jpg"/>
                                        </div>`
                    }
                    if (targetSample == 811){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Slacklining is a sport and art that can be a balance training, recreation, and a moving meditation. It is similar, at first glance to tightrope walking, and is accomplished by stretching and tensioning a 1”– 2” wide length of nylon/polyester webbing between two anchor points, most often trees.</div>
                                                <img class="thumbnail" src="https://layoga.com/wp-content/uploads/2018/07/slackliningFEAT.jpg"/>
                                            </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()