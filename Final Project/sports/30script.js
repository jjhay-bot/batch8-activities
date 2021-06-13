groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/relaxation-training`)
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
                    if(targetSample == 904) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Acroyoga (also written Acro-Yoga or Acro Yoga) is a physical practice which combines yoga and acrobatics. Acroyoga includes many types of (mostly recreational) partner and group acrobatics in which at least someone is lifted. As such it also draws on traditions of circus arts, cheer-leading, and dance acro. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 905) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Ashtanga Yoga, also called Ashtanga Vinyasa Yoga, is a vigorous and flowing style of yoga developed in the 20th century. It involves synchronizing breath with progressive and continuous postures, which produces internal heat while detoxifying the body. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 906) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Bhakti yoga is the path of devotion, the method of attaining God through love and the loving recollection of God. Most religions emphasize this spiritual path because it is the most natural. As with other yogas, the goal of the bhakta, the devotee of God, is to attain God-realization--oneness with the Divine. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 907) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">During the Bikram form of hot yoga, the room is heated to approximately 105 F (40 C) and has a humidity of 40 percent. Bikram yoga is a 90-minute program that consists of a series of different standing and stretching postures. The postures require lengthy, forceful and sustained contractions of all major muscle groups. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 909) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Literally however, Hatha means 'force' and is more traditionally defined as 'the yoga of force', or 'the means of attaining a state of yoga through force'. So Hatha yoga can be considered as anything you might do with the body, including: asana – yoga postures (practised in any style of 'yoga') </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 910) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Hot yoga is a vigorous form of yoga performed in a very warm and humid studio. ... During the Bikram form of hot yoga, the room is heated to approximately 105 F (40 C) and has a humidity of 40 percent. Bikram yoga is a 90-minute program that consists of a series of different standing and stretching postures. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 916) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Power yoga is a general term used to describe a vigorous, fitness-based approach to vinyasa-style yoga. ... Power yoga incorporates the athleticism of Ashtanga, including lots of vinyasas (series of poses done in sequence) but gives each teacher the flexibility to teach any poses in any order, making every class different. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 915) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Yoga nidra is a state in which the body is completely relaxed, and the practitioner becomes systematically and increasingly aware of the inner world by following a set of verbal instructions. This state of consciousness is different from meditation, in which concentration on a single focus is required. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 918) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Rāja yoga thus refers to "chief, best of yoga". The historical use of the term Rāja yoga is found in other contexts, quite different than its modern usage. In ancient and medieval Sanskrit texts, it meant the highest state of yoga practice (one reaching samadhi). </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 920) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">From Wikipedia, the free encyclopedia. A vinyasa (Sanskrit: विन्यास, IAST: vinyāsa) is a smooth transition between asanas in styles of modern yoga as exercise such as Vinyasa Krama Yoga, Ashtanga Vinyasa Yoga and Bikram Yoga, especially when movement is paired with the breath. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 921) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Yin yoga is based on the Taoist concept of yin and yang chi, the cooling and heated energetic principles in nature. Yin is consider as stable, unmoving, restorative; yang is the active, changing, dynamic. Our structural body are supported by relatively stiff connective tissues (tendons, ligaments, fascia) which are referred to as yin, while the more mobile and pliable muscles and blood are referred to as yang. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 911) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Iyengar Yoga is a form of yoga as exercise with a focus on the structural alignment of the physical body through the practice of asanas. It differs from other styles of yoga in three ways: precision, sequence and use of props. Precision is sought in body alignment in every asana. </div>
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