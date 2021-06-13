groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/strength-training`)
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
                    if(targetSample == 708) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">A form of high intensity interval training, CrossFit is a strength and conditioning workout that is made up of functional movement performed at a high intensity level. These movements are actions that you perform in your day-to-day life, like squatting, pulling, pushing etc. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 112) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Stretching is a form of physical exercise in which a specific muscle or tendon (or muscle group) is deliberately flexed or stretched in order to improve the muscle's felt elasticity and achieve comfortable muscle tone. The result is a feeling of increased muscle control, flexibility, and range of motion. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 425) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Cross-training is athletic training in sports other than the athlete's usual sport. ... The goal is improving overall performance. It takes advantage of the particular effectiveness of one training method to negate the shortcomings of another. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 703) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">As muscles repair from the workouts your body's metabolism is increased. This means that calories are burned by BodyPump at an increased rate long after you finish your Body Pump class. With increased muscle mass, you'll use more energy, resulting in a greater rate of weight loss. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 111) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Pilates is a method of exercise that consists of low-impact flexibility and muscular strength and endurance movements. Pilates emphasizes proper postural alignment, core strength and muscle balance. Pilates is named for its creator, Joseph Pilates, who developed the exercises in the 1920s. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 397) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Bodybuilding, a regimen of exercises designed to enhance the human body's muscular development and promote general health and fitness. As a competitive activity, bodybuilding aims to display in artistic fashion pronounced muscle mass, symmetry, and definition for overall aesthetic effect. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 706) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Plyometrics is a type of exercise training that uses speed and force of different movements to build muscle power. ... Plyometrics can include different types of exercises, like pushups, throwing, running, jumping, and kicking. Athletes often use plyometrics as part of their training, but anyone can do these workouts. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 353) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Step aerobics is a choreographed routine of stepping up and down on a rectangular, square, or circular platform (or, in the case of BOSU, a domed, flexible apparatus). Many classes combine step aerobics with body sculpting, jumping rope, sliding, or funk aerobics.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 701) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">High-intensity interval training (HIIT) is a form of interval training, a cardiovascular exercise strategy alternating short periods of intense anaerobic exercise with less intense recovery periods, until too exhausted to continue. </div>
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
                    if (targetSample == 709){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Kettlebell Sport lifting (Russian: гиревой спорт, girevoy sport, GS) is a repetitive weight lifting sport performed with kettlebells in a given period of time. </div>
                                            <img class="thumbnail" src="https://www.topendsports.com/fitness/images/kettlebells-snatch-pixabay.jpg"/>
                                        </div>`
                    }
                    if (targetSample == 711){
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Powerlifting is a strength sport that consists of three attempts at maximal weight on three lifts: squat, bench press, and deadlift. As in the sport of Olympic weightlifting, it involves the athlete attempting a maximal weight single lift of a barbell loaded with weight plates. </div>
                                                <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/0/05/IPF_World_Champion_Dean_Bowring_performing_the_three_Powerlifting_moves.jpg"/>
                                            </div>`
                    }
                    if (targetSample == 704){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description"> The benefits of calisthenics include better long-term health, improved mobility and ease of movement, reduced injury risk, and more calories burned. Some of the best example calisthenics workouts for beginners are push-ups, squats, planks, and jumping exercises.</div>
                                            <img class="thumbnail" src="https://post.healthline.com/wp-content/uploads/2020/08/732x549_THUMBNAIL_Calisthenics.jpg"/>
                                        </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()