groupCollection = () => {
    fetch(`https://sports.api.decathlon.com/groups/adventure-travel-sports`)
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
                console.log(targetSample,data.data.attributes.name )

                let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                if(targetSample == 46) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Glacier hiking involves walking on a glacier with special equipment, such as crampons, rope, climbing harness, helmet and ice axe, so that to some degree it resembles mountaineering. Glaciers are found on every continent except for Australia. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }

                if(targetSample == 244) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Trolling is a method of fishing where one or more fishing lines, baited with lures or bait fish, are drawn through the water. This may be behind a moving boat, or by slowly winding the line in when fishing from a static position, or even sweeping the line from side-to-side, e.g. when fishing from a jetty. Trolling is used to catch pelagic fish such as salmon, mackerel and kingfish. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }

                if(targetSample == 51) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Canyoning, also known as canyoneering, is the act of navigating down a fast flowing mountain stream in a gorge using a variety of techniques including abseiling, climbing, sliding and jumping. The canyon itself is a natural gorge that has been carved out of the mountainside by a water current. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }

                if(targetSample == 247) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Bottom fishing refers to investing in assets that have experienced a decline, due to intrinsic or extrinsic factors, and are considered undervalued.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }

                if(targetSample == 618) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Big-game hunting is the hunting of large game animals for meat, commercially valuable by-products (such as horns/antlers, furs, tusks, bones, body fat/oil, or special organs and contents), trophy/taxidermy, or simply just for recreation ("sporting"). </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 614) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Mountain bike orienteering (MTBO) is orienteering using a mountain bike where navigation is primarily along trails and tracks. MTBO combines the fun and excitement of a typical mountain bike ride with the added dimension of map reading, route choice and trying not to get lost!</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 613) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Foot orienteering is an endurance sport which involves a huge mental element. There is no marked route – the orienteer must navigate with map and compass while running. The map gives detailed information on the terrain such as hills, ground surface, obstacles etc. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 39) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Big wall climbing is a type of rock climbing where a climber ascends a long multi-pitch route, normally requiring more than a single day to complete the climb. Big wall routes require the climbing team to live on the route often using portaledges and hauling equipment. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 333) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Saltwater fishing is done from a beach, off rocks, from a pier, or from a boat, which may vary in size from a rowboat in inland waters to oceangoing craft of considerable size. ... Saltwater anglers fishing from boats take grouper, flounder, snapper, mackerel and many other species by trolling or bottom fishing. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 332) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Predatory fish are fish that prey upon other fish or animals. Some predatory fish include perch, muskie, pike, walleye and salmon.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 235) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">A fishing lure is a type of artificial fishing bait which is designed to attract a fish's attention. The lure uses movement, vibration, flash and color to bait fish. Many lures are equipped with one or more hooks that are used to catch fish when they strike the lure. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 237) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Catfishing is a deceptive activity where a person creates a fictional persona or fake identity on a social networking service, usually targeting a specific victim. The practice may be used for financial gain, to compromise a victim in some way, as a way to intentionally upset a victim, or for wish fulfillment. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 623) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Turkey hunting is a sport involving the pursuit of the elusive wild turkey. Long before the European settlers arrived in North America, the Native Americans took part in hunting wild turkeys. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 619) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="descriptionSome of the most frequent targets of bowhunters include whitetails, mule deer, elk, bear and turkey. But very skilled bowhunters often use a bow to hunt animals as large as moose or as wary as coyotes! Those with sniper-like accuracy may even have success bowhunting for squirrels or rabbits.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 236) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">The natural bait used may be alive or dead. Common natural baits include worms, leeches (notably bait-leech Nephelopsis obscura), minnows, frogs, salamanders, and insects. Natural baits are effective due to the lifelike texture, odour and colour of the bait presented. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 193) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">The sport catamaran is a two-hulled, lightweight boat that does not have a cabin. ... Sport catamarans belong to the small sailing boat (as opposed to houseboats), meaning light ships where the most important load is the crew. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 44) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Ice climbing is the activity of ascending inclined ice formations. Usually, ice climbing refers to roped and protected climbing of features such as icefalls, frozen waterfalls, and cliffs and rock slabs covered with ice refrozen from flows of water.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 439) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">(ˈhaɪkɪŋ) the sporting or leisure activity of going for long, often strenuous, walks in the country. This is the perfect base for hiking, white-water rafting and fly-fishing. Also included in the price of the holiday are two days hiking in the High Atlas mountains. some harder, more strenuous hiking on cliff pathways. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 627) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Treks, meanwhile, are always considered to be multi-day journeys. They involve at least a couple of days on the trail, but often can involve many days, weeks or months on the trail. As a result of the time spent on the trail, in terms of location, treks tend to go to places that are a lot less accessible than hikes.</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 634) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Backpacking is a form of low-cost, independent travel, which often includes staying in inexpensive lodgings and carrying all necessary possessions in a backpack. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 628) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Angling is the sport or pastime of fishing with a rod and line where catching fish is the aim. There are several types of angling to experiment with, including float fishing, lure fishing and fly fishing. Each type involves different techniques to tempt fish into taking the bait. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 631) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Free climbing is a form of rock climbing in which the climber may use climbing equipment such as ropes and other means of climbing protection, but only to protect against injury during falls and not to assist progress. ... At the end of each pitch, climbers are allowed to anchor themselves to belay stations and rest. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 632) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Rock climbing is a sport in which participants climb up, down or across natural rock formations or artificial rock walls. The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling. ... These disciplines are bouldering, lead climbing, and top roping. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 630) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">When lake fishing in a man-made reservoir or pit for largemouth bass, use baits or lures that can be worked on the bottom near ledges or drop-offs. Soft-plastic worms, lizards, and jerkbaits are all good baits to try. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 38) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Indoor climbing refers to any type of rock climbing that occurs within the confines of a building or other structure, usually on specially constructed fake rock walls. This allows climbers to climb no matter the time of day or condition of weather. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 635) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Canoe camping, also known as touring, tripping or expedition canoeing, is a combination of canoeing and camping. Like backpacking, canoe campers carry enough with them to travel and camp for several days, but do so via a canoe or kayak. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 624) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Waterfowl hunting (also called wildfowling or waterfowl shooting in the UK) is the practice of hunting ducks, geese, or other waterfowl for food and sport. Many types of ducks and geese share the same habitat, have overlapping or identical hunting seasons, and are hunted using the same methods. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 612) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Canoe orienteering (canoe-O) is an orienteering sport using a canoe, kayak, or other small boat. Usually, a canoe-O is a timed race in which one- or two-person boats start at staggered intervals, are timed, and are expected to perform all navigation on their own. ... Frequently, two-person teams compete using one canoe. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 438) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Hiking, walking in nature as a recreational activity. Especially among those with sedentary occupations, hiking is a natural exercise that promotes physical fitness, is economical and convenient, and requires no special equipment. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 617) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Bear hunting is the act of hunting bears. Bears have been hunted since prehistoric times for their meat and fur. In addition to being a source of food, in modern times they have been favoured by big game hunters due to their size and ferocity. ... Bears are large mammals in the order Carnivora. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 450) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Trout are species of freshwater fish belonging to the genera Oncorhynchus, Salmo and Salvelinus, all of the subfamily Salmoninae of the family Salmonidae. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 629) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Big-game fishing, also known as offshore sportfishing, offshore gamefishing, or blue-water fishing is a form of recreational fishing, targeting large fish such as tuna and marlin. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 504) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description"> </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 371) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">a rowing, speedboat, or sailing race or a series of such races. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 370) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Sailing cruising yachts are designed for multi-day voyages with the capacity for overnight passage making. Their range and endurance relies primarily on sail power and the storage of provisions for the crew. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 317) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">A sailing yacht (US ship prefixes SY or S/Y), is a leisure craft that uses sails as its primary means of propulsion. A yacht may be a sail or power vessel used for pleasure, cruising, or racing. ... Sailing yachts in excess of 130 feet (40 m) are generally considered to be superyachts. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 243) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Fly fishing works very differently than traditional fishing. With a traditional fishing set-up, sinkers or weights are placed onto the end of the line to weigh it down. This weight allows you to cast the bait far out into the water. With fly fishing, all you have is the line, and the incredibly light fly on the end. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 459) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">A large-scaled fish with two barbels on each side of its upper jaw, the carp lives alone or in small schools in quiet, weedy, mud-bottomed ponds, lakes, and rivers. It is omnivorous, and in rooting about for food it often roils the water, increasing turbidity and adversely affecting many plants and animals. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 616) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Trail orienteering (TrailO) is an orienteering sport that involves precise reading of an orienteering map and the corresponding terrain. ... TrailO involves navigation skills but unlike most other forms of orienteering, it involves no point to point racing and little or no route choice. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 440) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">The moment you are moving on a trail at a faster than your usual walking pace, you are technically speed hiking. This fun activity is also known as power hiking. In essence, speed hiking is all about walking a trail at an increased speed and intensity for whatever reason. </div>
                                            <img class="thumbnail" src="${image}"/>
                                        </div>`
                }
                if(targetSample == 620) {
                    groups.innerHTML += `<div class="thisLink" href="">
                                            <div class="groupDiv">${data.data.attributes.name}</div>
                                            <div class="description">Deer hunting is hunting for deer for meat or sport, an activity which dates back tens of thousands of years. Venison, the name for deer meat, is a nutritious and natural food source of animal protein that can be obtained through deer hunting. There are many different types of deer around the world that are hunted for their meat. </div>
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