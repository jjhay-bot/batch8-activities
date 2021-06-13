groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/combat-sports`)
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
                    if(targetSample == 128) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Savate (French pronunciation: ​[saˈvat]), also known as boxe française, savate boxing, French boxing or French footfighting, is a French kickboxing combat sport that uses the hands and feet as weapons combining elements of English boxing with graceful kicking techniques. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 300) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Taekwondo is one of the most systematic and scientific Korean traditional martial arts, that teaches more than physical fighting skills. ... Thus Taekwondo means "the right way of using all parts of the body to stop fights and help to build a better and more peaceful world." </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 303) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Wrestling is a combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds. ... A wrestling bout is a physical competition, between two (occasionally more) competitors or sparring partners, who attempt to gain and maintain a superior position. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 293) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Jujutsu (Japanese: 柔術 jūjutsu. listen (help. · info)), also known as jiu-jitsu and ju-jitsu, is a family of Japanese martial arts and a system of close combat (unarmed or with a minor weapon) that can be used in a defensive or offensive manner to kill or subdue one or more weaponless or armed and armored opponents. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 594) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Fencing is a modern and exciting competitive sport involving the skilled use of the three sport weapons – foil, épée and sabre. These sport weapons are lightweight, flexible and without sharp points or edges. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 595) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Foil, a sword with a light, flexible blade of rectangular cross section tapering to a blunt point. It was designed as a practice weapon for the smallsword fashionable in the 17th century and is now used primarily in the sport of fencing. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 596) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The sabre weapon is for thrusting and cutting with both the cutting edge and the back of the blade (unlike other modern fencing weapons, the épée and foil, where the methods of making a hit are scored using the point of the blade). </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 296) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Tai chi is a series of gentle physical exercises and stretches. Each posture flows into the next without pause, ensuring that your body is in constant motion. Tai chi is sometimes described as meditation in motion because it promotes serenity through gentle movements — connecting the mind and body. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 301) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements. The themes of traditional karate training are fighting and self-defense, though its mental and moral aspects target the overall improvement of the individual. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 297) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Kung fu, (Chinese [Wade-Giles romanization]: “skill” ) , Pinyin gongfu, a martial art, both a form of exercise with a spiritual dimension stemming from concentration and self-discipline and a primarily unarmed mode of personal combat often equated with karate or tae kwon do. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 294) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Aikido, Japanese aikidō (“way of harmonizing energy”), martial art and self-defense system that resembles the fighting methods jujitsu and judo in its use of twisting and throwing techniques and in its aim of turning an attacker's strength and momentum against himself. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 355) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Muay Thai is a stand-up combat sport, where fighters are not allowed to take the fight to the ground. It is fast-paced and combines both boxing and kicking in one swirling melee of a bout. In Thailand, it is known as the art of eight limbs, referring to the eight points of contact that are used to strike the opponent. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 299) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">SAMBO is a martial art and combat sport developed and used by the Soviet Red Army in the early 1920s to improve their hand-to-hand combat abilities. The sport is similar in many ways to judo and jujutsu but also incorporates different types of wrestling and various self-defence systems. </div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 302) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Judo is a martial art that emphasizes the use of quick movement and leverage to throw an opponent. Its techniques are generally intended to turn an opponent's force to one's own advantage rather than to oppose it directly. ... It became an Olympic sport for men in 1964; women's judo was added in 1992. </div>
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
                    if (targetSample == 295){
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${name}</div>
                                            <div class="description">Kendo (剣道, Kendō, lit. 'sword way', 'sword path' or 'way of the sword') is a modern Japanese martial art, descended from swordsmanship (kenjutsu), that uses bamboo swords (shinai) as well as protective armor (bōgu). Today, it is widely practiced within Japan and has spread to many other nations across the world. </div>
                                            <img class="thumbnail" src="https://web-japan.org/kidsweb/meet/kendo/images/theart/men.jpg"/>
                                        </div>`
                    }
                })
            })
        }
    })
    .catch(Error => console.log('ERROR'));
}
groupCollection()