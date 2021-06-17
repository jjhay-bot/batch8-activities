// ----------------Map Page / Home Page ---------------
// Fetch API data per Region (list of popular sports to that area) 
async function popularList1 () {
    document.getElementById('listRecommendation').style.display = 'flex';
    document.getElementById('maps').style.display = 'none';
    try {
        response = await fetch(`https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=30,58`);
        data = await response.json();
        console.log('test');
        targetRec = data.filter( ({ type }) => type == "sports");
        for (let i = 0; i < targetRec.length; i++) {
            recommendation.innerHTML += `<div class="listHere">
                                            <img class="recomIcon" src="${targetRec[i].attributes.icon}" alt=" "/>
                                            <div class="recomName" onclick="descriptionList(this)">${targetRec[i].attributes.name}</div>
                                        </div>`
        }
    } catch (error) {
        console.log('ERROR')
    }
}

popularList2 = () => {
    document.getElementById('listRecommendation').style.display = 'flex';
    document.getElementById('maps').style.display = 'none';
    fetch(`https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=65,98`)
    .then(Response=>Response.json())
    .then(data => {
        targetRec2 = data.filter( ({ type }) => type == "sports");
        for (let i = 0; i < targetRec2.length; i++) {
            let targetIcon = targetRec2[i].attributes.icon;
            let targetName = targetRec2[i].attributes.name;
            recommendation.innerHTML += `<div class="listHere">
                                            <img class="recomIcon" src="${targetIcon}" alt=" "/>
                                            <div class="recomName" onclick="descriptionList2(this)">${targetName}</div>
                                        </div>`
        }
    })   
    .catch(Error => {
        console.log(`ERROR`)
    })
}

popularList3 = () => {
    document.getElementById('listRecommendation').style.display = 'flex';
    document.getElementById('maps').style.display = 'none';
    fetch(`https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=48,69`)
    .then(Response=>Response.json())
    .then(data => {
        targetRec3 = data.filter( ({ type }) => type == "sports");
        for (let i = 0; i < targetRec3.length; i++) {
            let targetIcon = targetRec3[i].attributes.icon;
            let targetName = targetRec3[i].attributes.name;
            recommendation.innerHTML += `<div class="listHere">
                                            <img class="recomIcon" src="${targetIcon}" alt=" "/>
                                            <div class="recomName" onclick="descriptionList3(this)">${targetName}</div>
                                        </div>`
        }
    })   
    .catch(Error => {
        console.log(`ERROR`)
    })
}

popularList4 = () => {
    document.getElementById('listRecommendation').style.display = 'flex';
    document.getElementById('maps').style.display = 'none';
    fetch(`https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=65,98`)
    .then(Response=>Response.json())
    .then(data => {
        targetRec4 = data.filter( ({ type }) => type == "sports");
        for (let i = 0; i < targetRec4.length; i++) {
            let targetIcon = targetRec4[i].attributes.icon;
            let targetName = targetRec4[i].attributes.name;
            recommendation.innerHTML += `<div class="listHere">
                                            <img class="recomIcon" src="${targetIcon}" alt=" "/>
                                            <div class="recomName" onclick="descriptionList4(this)">${targetName}</div>
                                        </div>`
        }
    })   
    .catch(Error => {
        console.log(`ERROR`)
    })
}

popularList5 = () => {
    document.getElementById('listRecommendation').style.display = 'flex';
    document.getElementById('maps').style.display = 'none';
    fetch(`https://sports.api.decathlon.com/sports/recommendations/geolocation?coordinates=12.75,122.73`)
    .then(Response=>Response.json())
    .then(data => {
        targetRec5 = data.filter( ({ type }) => type == "sports");
        for (let i = 0; i < targetRec5.length; i++) {
            let targetIcon = targetRec5[i].attributes.icon;
            let targetName = targetRec5[i].attributes.name;
            recommendation.innerHTML += `<div class="listHere">
                                            <img class="recomIcon" src="${targetIcon}" alt=" "/>
                                            <div class="recomName" onclick="descriptionList5(this)">${targetName}</div>
                                        </div>`
        }
    })   
    .catch(Error => {
        console.log(`ERROR`)
    })
}

// Give Description and image of sellected sports (this click)
descriptionList = (e) => {
    console.log('test')
    const thisValue = e.innerHTML;
    // console.log(classList);
    for (let i = 0; i < targetRec.length; i++) {
        if(targetRec[i].attributes.name == thisValue) {
            document.getElementById('imageRec').innerHTML = "";
            console.log(targetRec[i].attributes.description);
            document.getElementById('descriptionRecContainer').style.display = 'flex';
            document.getElementById('titleRec').innerHTML = targetRec[i].attributes.name;
            document.getElementById('descriptionDetails').innerHTML = targetRec[i].attributes.description;
            document.getElementById('imageRec').innerHTML += `<img class="imageRecom" src="${targetRec[i].relationships.images.data[0].url}"/>`;
            
        }
    }
}

descriptionList2 = (e) => {
    console.log('test')
    const thisValue = e.innerHTML;
    let targetRec = targetRec2;
    for (let i = 0; i < targetRec.length; i++) {
        if(targetRec[i].attributes.name == thisValue) {
            document.getElementById('imageRec').innerHTML = "";
            console.log(targetRec[i].attributes.description);
            document.getElementById('descriptionRecContainer').style.display = 'flex';
            document.getElementById('titleRec').innerHTML = targetRec[i].attributes.name;
            document.getElementById('descriptionDetails').innerHTML = targetRec[i].attributes.description;
            document.getElementById('imageRec').innerHTML += `<img class="imageRecom" src="${targetRec[i].relationships.images.data[0].url}"/>`;
            
        }
    }
}

descriptionList3 = (e) => {
    console.log('test')
    const thisValue = e.innerHTML;
    let targetRec = targetRec3;
    for (let i = 0; i < targetRec.length; i++) {
        if(targetRec[i].attributes.name == thisValue) {
            document.getElementById('imageRec').innerHTML = "";
            console.log(targetRec[i].attributes.description);
            document.getElementById('descriptionRecContainer').style.display = 'flex';
            document.getElementById('titleRec').innerHTML = targetRec[i].attributes.name;
            document.getElementById('descriptionDetails').innerHTML = targetRec[i].attributes.description;
            document.getElementById('imageRec').innerHTML += `<img class="imageRecom" src="${targetRec[i].relationships.images.data[0].url}"/>`;
            
        }
    }
}

descriptionList4 = (e) => {
    console.log('test')
    const thisValue = e.innerHTML;
    // console.log(classList);
    let targetRec = targetRec4;

    for (let i = 0; i < targetRec.length; i++) {
        if(targetRec[i].attributes.name == thisValue) {
            document.getElementById('imageRec').innerHTML = "";
            console.log(targetRec[i].attributes.description);
            document.getElementById('descriptionRecContainer').style.display = 'flex';
            document.getElementById('titleRec').innerHTML = targetRec[i].attributes.name;
            document.getElementById('descriptionDetails').innerHTML = targetRec[i].attributes.description;
            document.getElementById('imageRec').innerHTML += `<img class="imageRecom" src="${targetRec[i].relationships.images.data[0].url}"/>`;
            
        }
    }
}

descriptionList5 = (e) => {
    console.log('test')
    const thisValue = e.innerHTML;
    // console.log(classList);
    let targetRec = targetRec5;

    for (let i = 0; i < targetRec.length; i++) {
        if(targetRec[i].attributes.name == thisValue) {
            document.getElementById('imageRec').innerHTML = "";
            console.log(targetRec[i].attributes.description);
            document.getElementById('descriptionRecContainer').style.display = 'flex';
            document.getElementById('titleRec').innerHTML = targetRec[i].attributes.name;
            document.getElementById('descriptionDetails').innerHTML = targetRec[i].attributes.description;
            document.getElementById('imageRec').innerHTML += `<img class="imageRecom" src="${targetRec[i].relationships.images.data[0].url}"/>`;
            
        }
    }
}

// Exit Description page 
exitDescription = () => {
    document.getElementById('descriptionRecContainer').style.display = 'none';
}

// Add new arr  to favoriteStorage 
class favoriteData {
    constructor (titleFav,descriptionFav,source) {
        this.titleFav = titleFav,
        this.descriptionFav = descriptionFav;
        this.source = source;
}}

addToFavorite = () => {
    let newFavorite = new favoriteData(titleRec.innerHTML,descriptionDetails.innerHTML, document.getElementsByClassName('imageRecom')[0].src);
    favoriteStorage.push(newFavorite);
    localStorage.setItem('favoriteStorage', JSON.stringify(favoriteStorage));
}

// List data from favoriteStorage (Favorite Page)
favoList = () => {
    favorites.innerHTML = "";
    for (let i = 0; i < favoriteStorage.length; i++) {
        favorites.innerHTML += `<div class="listFav">
                                    <h2 class="favName"> ${favoriteStorage[i].titleFav}</h2>
                                    <div class="favDes" onclick="descriptionList(this)">${favoriteStorage[i].descriptionFav}</div>
                                    <img class="favImage" src=${favoriteStorage[i].source} />
                                </div>`

    }
}