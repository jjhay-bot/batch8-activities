let toggleButton = document.getElementsByClassName('toggle-button');
// let clickCategory = document.querySelectorAll('.groupDiv');

// get if there is LocalStorage data (favoriteStorage)
const favoriteStorage = JSON.parse(localStorage.getItem('favoriteStorage')) ? JSON.parse(localStorage.getItem('favoriteStorage')): [];

toggleButton = () => {
    navList.classList.toggle('active')
}

//  get API data by sport Categories
async function groupSports () {
    try {
        response = await fetch(`https://sports.api.decathlon.com/groups`);
        data = await response.json();
        setTimeout( () => {
            targetData = data.data;
            target = targetData.filter( ({ type }) => type == "group");
            for (let i = 0; i < target.length; i++) {
                let targetSample = target[i].relationships.sports.data[(target[i].relationships.sports.data.length - 1)].id;
                fetch(`https://sports.api.decathlon.com/sports/${targetSample}`)
                .then(Response=>Response.json())
                .then(data => {
                    let image = data.data.relationships.images.data[0].variants[0].thumbnail.url;
                    groups.innerHTML += `<a class="thisLink" href="https://jjhay-bot.github.io/batch8-activities/Final%20Project/sports/${target[i].id}.html">
                                            <div class="groupDiv">${target [i].attributes.name}</div>
                                            <img class="thumbnail" src="${image}"/>
                                        </a>`
                })
                .catch(Error => {
                    console.log(`${target[i].id}  ${target[i].attributes.slug} ERROR (handled)`)
                    groups.innerHTML += `<a class="thisLink" href="https://jjhay-bot.github.io/batch8-activities/Final%20Project/sports/${target[i].id}.html">
                                            <div class="groupDiv">${target [i].attributes.name}</div>
                                            <img class="thumbnail" src="https://sports-api-production.s3.amazonaws.com/uploads/sport/images/96/thumbnail_handball.jpg"/>
                                        </a>`
                })
            }  
        }, 500)   
    } catch (error) {
        console.log('ERROR')
        groups.innerHTML += `<a class="thisLink" href="https://jjhay-bot.github.io/batch8-activities/Final%20Project/sports/6.html">
                                <div class="groupDiv" >Aerial Activity</div>
                                <img class="thumbnail" src="https://sports-api-production.s3.amazonaws.com/uploads/sport/images/933/thumbnail_hanggliding.jpg"/>
                            </a>`
    }
}


//  go to Home page
showHome = () => {
    document.getElementById('maps').style.display = 'flex';
    document.getElementById('groupContainer').style.display = 'none';
    document.getElementById('listFavorite').style.display = 'none';
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';  
    toggleButton();
    document.getElementById('navHome').style.backgroundColor = 'rgba(255, 250, 250, 0.158)';
    document.getElementById('navHome').style.borderRadius = '5% / 10%';
    document.getElementById('navCategory').style.backgroundColor = 'transparent';
    document.getElementById('navFavorite').style.backgroundColor = 'transparent';
    document.getElementById('navAbout').style.backgroundColor = 'transparent';
}

//  go to Caterogy page
showCategory = () => {
    document.getElementById('maps').style.display = 'none';
    document.getElementById('groupContainer').style.display = 'flex';
    document.getElementById('listFavorite').style.display = 'none';
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';  
    toggleButton();
    document.getElementById('navCategory').style.backgroundColor = 'rgba(255, 250, 250, 0.158)';
    document.getElementById('navCategory').style.borderRadius = '5% / 10%';
    document.getElementById('navHome').style.backgroundColor = 'transparent';
    document.getElementById('navFavorite').style.backgroundColor = 'transparent';
    document.getElementById('navAbout').style.backgroundColor = 'transparent';
    groupSports();
}

//  go to Favorite page
showFavorite = () => {
    document.getElementById('maps').style.display = 'none';
    document.getElementById('groupContainer').style.display = 'none';
    document.getElementById('listFavorite').style.display = 'flex';
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';  
    favoList();
    toggleButton();
    document.getElementById('navFavorite').style.backgroundColor = 'rgba(255, 250, 250, 0.158)';
    document.getElementById('navFavorite').style.borderRadius = '5% / 10%';
    document.getElementById('navHome').style.backgroundColor = 'transparent';
    document.getElementById('navCategory').style.backgroundColor = 'transparent';
    document.getElementById('navAbout').style.backgroundColor = 'transparent';

}

//  go to About page
showAbout = () => {
    document.getElementById('maps').style.display = 'none';
    document.getElementById('groupContainer').style.display = 'none';
    document.getElementById('listFavorite').style.display = 'none';
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'flex';  
    favoList(); 
    toggleButton();
    document.getElementById('navAbout').style.backgroundColor = 'rgba(255, 250, 250, 0.158)';
    document.getElementById('navAbout').style.borderRadius = '5% / 10%';
    document.getElementById('navHome').style.backgroundColor = 'transparent';
    document.getElementById('navCategory').style.backgroundColor = 'transparent';
    document.getElementById('navFavorite').style.backgroundColor = 'transparent';
}

