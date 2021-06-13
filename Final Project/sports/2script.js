groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/athletics`)
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
                console.log(targetSample,data.data.attributes.name)
                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                    if(targetSample == 488) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Nordic walking is a Finnish-origin total-body version of walking that can be enjoyed both by non-athletes as a health-promoting physical activity, and by athletes as a sport. The activity is performed with specially designed walking poles similar to ski poles.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 487) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description">Racewalking, or race walking, is a long-distance discipline within the sport of athletics. ... This is assessed by race judges. Typically held on either roads or running tracks, common distances range from 3,000 metres (1.9 mi) up to 100 kilometres (62.1 mi).</div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }                   
                    if(targetSample == 461) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description">Road running is the sport of running on a measured course over an established road (as opposed to track and field and cross country running). These events are usually classified as long-distance according to athletics terminology, with races typically ranging from 5 kilometers to 42.2 kilometers in the marathon.</div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }                  
                    if(targetSample == 338) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                        <div class="groupDiv">${data.data.attributes.name}</div>
                                                        <div class="description">When you run indoors, you don't have to worry about what the weather is like outside. With the heater running to keep the temperature comfortable. It is much easier to get in a full workout without getting cold or wet. This way, you can maximize your efforts to get the most out of your winter workouts.</div>
                                                        <img class="thumbnail" src="${image}"/>
                                                    </div>`
                    }
                
                    if(targetSample == 341) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Relay race, also called Relay, a track-and-field sport consisting of a set number of stages (legs), usually four, each leg run by a different member of a team. The runner finishing one leg is usually required to pass on a baton to the next runner while both are running in a marked exchange zone.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }                    
                    if(targetSample == 5) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The marathon is a long-distance race with an official distance of 42.195 kilometres (26 miles 385 yards), usually run as a road race. The event was instituted in commemoration of the fabled run of the Greek soldier Pheidippides, a messenger from the Battle of Marathon to Athens, who reported the victory.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }                  
                    if(targetSample == 517) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Sprinting is running over a short distance at the top-most speed of the body in a limited period of time. It is used in many sports that incorporate running, typically as a way of quickly reaching a target or goal, or avoiding or catching an opponent.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 280) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Trail running is a sport-activity which combines running, and, where there are steep gradients, hiking, that is run "on any unpaved surface". ... Unlike road running and track running it generally takes place on hiking trails, often in mountainous terrain, where there can be much larger ascents and descents.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 4) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">A half marathon is a road running event of 21.0975 km (13.109 mi, or 13 mi 192½ yd)—half the distance of a marathon. It is common for a half marathon event to be held concurrently with a marathon or a 5K race, using almost the same course with a late start, an early finish or shortcuts.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 261) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Racewalking is an Olympic athletics (track and field) event with distances of 20 kilometres for both men and women and 50 kilometres for men only. Racewalking first appeared in the modern Olympics in 1904 as a half-mile walk in the 'all-rounder,' the precursor to the 10-event decathlon.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 523) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Combining aerobic activity with ease of walking over snow without sinking in, snowshoeing is an activity for all ages. Snowshoe races are part of the Arctic Winter Games and the winter Special Olympics.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 522) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Racewalking, or race walking, is a long-distance discipline within the sport of athletics. Although a foot race, it is different from running in that one foot must appear to be in contact with the ground at all times. ... Top level athletics championships and games typically feature 20 km racewalking events.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 390) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">The 10K run is a long-distance road running competition over a distance of ten kilometres (6.2 miles). Also referred to as the 10K road race, 10 km, or simply 10K, it is one of the most common types of road running event, alongside the shorter 5K and longer half marathon and marathon. It is usually distinguished from the 10,000 metres track running event by stating the distance in kilometres, rather than metres.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 513) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Mountain running is a sports discipline which takes place mainly off-road in mountainous terrain, but if there is significant elevation gain on the route, surfaced roads may be used. ... Mountain running is a combination of running, jogging, and walking, depending on how steep the trail is.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 511) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Long-distance running, in athletics (track and field), footraces ranging from 3,000 metres through 10,000, 20,000, and 30,000 metres and up to the marathon, which is 42,195 metres (26 miles 385 yards). It includes cross-country races over similar distances.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 515) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Skyrunning is a sport of mountain running up to or exceeding 2,000 metres (6,600 ft) where the minimum average incline is 6% over the total distance and at least 5% has an incline of 30% or more. The climbing difficulty does not exceed II grade UIAA. Poles, crampons and hands may be used to aid progress.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 339) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Cross country running is a sport in which teams and individuals run a race on open-air courses over natural terrain such as dirt or grass. ... Cross country running is one of the disciplines under the umbrella sport of athletics and is a natural-terrain version of long-distance track and road running.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 511) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description">Long-distance running, in athletics (track and field), footraces ranging from 3,000 metres through 10,000, 20,000, and 30,000 metres and up to the marathon, which is 42,195 metres (26 miles 385 yards). It includes cross-country races over similar distances.</div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }

                    if(targetSample == 511) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description"></div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }
                    if(targetSample == 511) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description"></div>
                                                <img class="thumbnail" src="${image}"/>
                                            </div>`
                    }  if(targetSample == 511) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${data.data.attributes.name}</div>
                                                <div class="description"></div>
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
                    console.log(name, targetSample , 'error')
                    if(targetSample == 340) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Hurdling is the act of jumping over an obstacle at a high speed or in a sprint.In the early 19th century, hurdlers ran at and jumped over each hurdle, landing on both feet and checking their forward motion. Today, the dominant step patterns are the 3-step for high hurdles, 7-step for low hurdles, and 15-step for intermediate hurdles. Hurdling is a highly specialized form of obstacle racing, and is part of the sport of athletics. In hurdling events, barriers known as hurdles are set at precisely measured heights and distances.</div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbK232s5a8wCtyauMP8jmJp0eYIZAmZCeyA&usqp=CAU"/>
                                            </div>`
                    }  
                    if(targetSample == 338) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">An indoor track is typically 200 meters long whereas an outdoor track is 400 meters. According to USA Track and Field rules, an indoor track has to be completely enclosed. In some places an indoor track is longer than 200 meters. This is an advantage, so races run on these tracks are sometimes not recognized until a standard amount of time has been added. An indoor track can have a maximum of six lanes; an outdoor track typically has eight lanes. An indoor track is further unique because it can have banked turns. This banking is an advantage to a runner who competes on a flat track. </div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujSj9rkVFhOS01q8xAEf9df-CaQ1QwBcSgg&usqp=CAU"/>
                                            </div>`
                    }

                    if(targetSample == 520) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">An ultramarathon is a race that exceeds the 42.2km distance of traditional marathons. They range from 50km to almost 5,000km. Athletes often compete in extreme conditions. The Marathon des Sables in the Sahara and the Last Desert in Antarctica each cover 250km.</div>
                                                <img class="thumbnail" src="https://www.ispo.com/sites/default/files/styles/teaser_desktop/public/2019-10/vi6.jpg?h=46516cef&itok=GIYxCG1e"/>
                                            </div>`
                    }

                    if(targetSample == 519) {
                        return groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Tower running is a sport which involves running up tall man-made structures. Usually the races take place on the internal staircases of skyscrapers, but the term can cover any foot race which involves a course that ascends a man-made structure.</div>
                                                <img class="thumbnail" src="https://soutv.files.wordpress.com/2017/01/gghk4a.jpg"/>
                                            </div>`
                    }

                    if(targetSample == 518) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Steeplechase, in athletics (track-and-field), a footrace over an obstacle course that includes such obstacles as water ditches, open ditches, and fences. The sport dates back to a cross-country race at the University of Oxford in 1850.</div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYEtoVr3vqjgO2ueEx3lAK5Ar1I6eoe-gd7HWaMdkPgRXuNeUD4EGBLum6oVpCyYmcHc&usqp=CAU"/>
                                            </div>`
                    }

                    if(targetSample == 516) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Snowshoe running, or snowshoeing, is a winter sport practiced with snowshoes, which is governed by World Snowshoe Federation (WSSF) founded in 2010, which until 2015 had its name International Snowshoe Federation (ISSF). The snowshoes running is part of the Special Olympics and Arctic Winter Games programs.</div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xTbXpERdBmFHjIyb5TiBf7xAbXYb2kFcZA&usqp=CAU"/>
                                            </div>`
                    }

                    if(targetSample == 510) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">What is fell running? Fell running, a traditionally British sport, is running and racing off road, where a signficant gradient is climbed. ... Fell running also involves running between two checkpoints, often without a clear path.</div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePIJLBtpRZxdIzlOYhUOUZjiUdoF2vbM1aQ&usqp=CAU"/>
                                            </div>`
                    }

                    if(targetSample == 512) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Middle-distance running, in athletics (track and field), races that range in distance from 800 metres (roughly one-half mile) to 3,000 metres (almost 2 miles).</div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS68xsRshQl69Zz7pHAOwVxaFjfASGouJCbgQ&usqp=CAU"/>
                                            </div>`
                    }

                    if(targetSample == 514) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">The Paralympic Games are a major international multi-sport event for athletes with physical disabilities or intellectual impairments. This includes athletes with mobility disabilities, amputations, blindness, and cerebral palsy. </div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1Aenvp_5durK6xQDjG04c-lEb0z9Qca67w&usqp=CAU"/>
                                            </div>`
                    }
                    
                    if(targetSample == 341) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Relay race, also called Relay, a track-and-field sport consisting of a set number of stages (legs), usually four, each leg run by a different member of a team. The runner finishing one leg is usually required to pass on a baton to the next runner while both are running in a marked exchange zone. </div>
                                                <img class="thumbnail" src="https://www.liveabout.com/thmb/bO0jn5kUZSmz7GVO79lZZFrB2CM=/3504x1971/smart/filters:no_upscale()/82513004-56a97d525f9b58b7d0fbecb2.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 508) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Adventure racing (also called expedition racing) is typically a multidisciplinary team sport involving navigation over an unmarked wilderness course with races extending anywhere from two hours up to two weeks in length. (What Is Adventure Racing Video) Some races offer solo competition as well.</div>
                                                <img class="thumbnail" src="https://cdn.shopify.com/s/files/1/0942/6160/files/swimrun-multi-sport-guide.jpg?v=1562314882"/>
                                            </div>`
                    }
                    if(targetSample == 509) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Ekiden is a long-distance relay road race in which runners pass a cloth sash, or tasuki, to the next runner on their team having completed their leg. Ekiden competitions are held throughout Japan, with many people gathering along the route to cheer the runners on. </div>
                                                <img class="thumbnail" src="https://www.gov-online.go.jp/eng/publicity/book/hlj/html/201910/img/img_04_02.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 389) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Jogging is a form of trotting or running at a slow or leisurely pace. The main intention is to increase physical fitness with less stress on the body than from faster running but more than walking, or to maintain a steady speed for longer periods of time. </div>
                                                <img class="thumbnail" src="https://www.mensjournal.com/wp-content/uploads/2021/01/manrunning.jpg?w=1200&h=630&crop=1&quality=86&strip=all"/>
                                            </div>`
                    }
                    if(targetSample == 532) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Pole vault, sport in athletics (track and field) in which an athlete jumps over an obstacle with the aid of a pole. Originally a practical means of clearing objects, such as ditches, brooks, and fences, pole-vaulting for height became a competitive sport in the mid-19th century. </div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETLznHsfEjmkjNy9Uzq2AaH4Qs-VrVsVgYOtRjWu99AD6ROxaBq8qSKtIqPy63gAh5j8&usqp=CAU"/>
                                            </div>`
                    }
                    if(targetSample == 527) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Triple jump, also called hop, step, and jump, event in athletics (track and field) in which an athlete makes a horizontal jump for distance incorporating three distinct, continuous movements—a hop, in which the athlete takes off and lands on the same foot; a step, landing on the other foot; and a jump, landing in any manner, usually with both feet together. If a jumper touches ground with a wrong leg, the jump is disallowed. Other rules are similar to those of the long jump.
                                                <br><br>
                                                Viktor Saneyev of the Soviet Union triple jumping at the 1968 Olympic Games in Mexico City. </div>
                                                <img class="thumbnail" src="https://www.insidethegames.biz/media/image/186669/o/GettyImages-1272277281.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 528) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Shot Put is a sport where an athlete needs to exercise his throwing power with a heavy object. It is a track and field event. ... Shot Put is played with a heavy spherical object popularly known as shot. The aim is to throw the shot-put as far as possible through a pushing action. </div>
                                                <img class="thumbnail" src="https://media.wired.com/photos/5932c19bf682204f73697a80/master/pass/AP11082702060.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 530) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">High jump, sport in athletics (track and field) in which the athlete takes a running jump to attain height. The sport's venue (see illustration) includes a level, semicircular runway allowing an approach run of at least 15 metres (49.21 feet) from any angle within its 180° arc. </div>
                                                <img class="thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpckfXzpg6ciaCqpwtBkWs_tUjYfbcRBBBTgpTecIpzIjNoiSnQLA7Anck8Ro3eZCNzM&usqp=CAU"/>
                                            </div>`
                    }
                    if(targetSample == 531) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">The long jump is a track and field event in which athletes combine speed, strength and agility in an attempt to leap as far as possible from a take off point. Along with the triple jump, the two events that measure jumping for distance as a group are referred to as the "horizontal jumps". </div>
                                                <img class="thumbnail" src="https://www.tutorialspoint.com/long_jump/images/take_off.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 521) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Wheelchair racing is the racing of wheelchairs in track and road races. ... Like running, it can take place on a track or as a road race. The main competitions take place at the Summer Paralympics which wheelchair racing and athletics has been a part of since 1960. </div>
                                                <img class="thumbnail" src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/462_462/1607481506.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 525) {
                        groups.innerHTML += `<div class="thisLink" href="">
                                                <div class="groupDiv">${name}</div>
                                                <div class="description">Discus throw, sport in athletics (track and field) in which a disk-shaped object, known as a discus, is thrown for distance. In modern competition the discus must be thrown from a circle 2.5 metres (8.2 feet) in diameter and fall within a 40° sector marked on the ground from the centre of the circle. </div>
                                                <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Robert_Harting_%282008%29.jpg"/>
                                            </div>`
                    }
                    if(targetSample == 526) {
                                        groups.innerHTML += `<div class="thisLink" href="">
                                                                <div class="groupDiv">${name}</div>
                                                                <div class="description">Hammer throw, sport in athletics (track and field) in which a hammer is hurled for distance, using two hands within a throwing circle. Throwing the hammer at the Highland Games in Scotland. The sport developed centuries ago in the British Isles. </div>
                                                                <img class="thumbnail" src="https://i.pinimg.com/originals/25/df/d9/25dfd9c7d88ad0047da25c7f56691864.jpg"/>
                                                            </div>`
                                    }
                                })
                            })
                            .catch(Error => console.log('ERROR'));
                        }
    })
}
groupCollection();