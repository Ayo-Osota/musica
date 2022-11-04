const homePage = document.getElementsByClassName("home-container")[0];
const collectionPage = document.getElementsByClassName("collection-container")[0];
const collectionCardRect = document.getElementsByClassName("collection-card-rect");
const collectionCard = document.getElementsByClassName("collection-card");
const homeBtn = document.getElementById("home-btn");
const likesBtn = document.getElementById("likes-btn");
const collectionCardPlayBtn = document.getElementsByClassName("collection-card-play-btn");
const collectionDetails = document.getElementsByClassName("collection-details");
const collectionLikes = document.getElementsByClassName("collection-likes");
const myCollectionBtn = document.getElementById("my-collection-btn")
const playlistBtn = document.getElementById("music-library-btn");
const likesBtnText = document.getElementsByClassName("likes-text")[0];
const myCollectionText = document.getElementsByClassName("my-collection-text")[0];
const chartCard = document.getElementsByClassName("chart-card");
const albumPage = document.getElementsByClassName("album-container")[0];
const body = document.getElementsByClassName("home-wrapper")[0];
const topNav = document.getElementsByClassName("navbar")[0];
const chartArt = document.getElementsByClassName("chart-art");
const albumPageImage = document.getElementsByClassName("lead-image")[0];
const chartTitle = document.getElementsByClassName("chart-title");
const albumPageTitle = document.getElementsByClassName("album-container-title")[0];




collectionPage.style.display = "none";
albumPage.style.display = "none";


homeBtn.addEventListener("click", (event) => {
    homeBtn.src = "clicked-home-btn.svg";
    playlistBtn.src = "music-library-2.png";
    collectionPage.style.display = "none";
    albumPage.style.display = "none";
    homePage.style.display = "flex";
    homeBtn.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
    body.style.background = "#1D2123"
    body.style.backgroundPosition = "center";
});



// likesBtn.addEventListener("click", (event) => {
//     likesBtn.style.background = "#FACD66";
//     myCollectionBtn.style.background = "none";
//     myCollectionText.style.color = "#EFEEE0";
//     likesBtnText.style.color = "#1D2123";
// });




chartArt[0].style.background = "url(chart-art1.svg), #D9D9D9";
chartArt[1].style.background = "url(chart-art2.svg), #D9D9D9";
chartArt[2].style.background = "url(lead-image2.svg), #D9D9D9";
chartArt[2].style.backgroundSize = "cover";

for (let i = 0; i < chartCard.length; i++) {
    chartArt[i].style.backgroundRepeat = "no-repeat";
    chartArt[i].style.backgroundSize = "cover";
    chartCard[i].addEventListener("click", () => {
        viewAlbum();
        albumPageImage.style.background = chartArt[i].style.background;
        body.style.background = `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), ${chartArt[i].style.background}`;
        body.style.backgroundPosition = "center";
        albumPageTitle.textContent = chartTitle[i].textContent;
    });
}


const playAllBtn = document.getElementById("play-all-btn");

playAllBtn.addEventListener("mouseover", (event) => {
    // likesBtn.style.background = "none";
    playAllBtn.style.background = "#FACD66";
    // myCollectionText.style.color = "#1D2123";
    // likesBtnText.style.color = "#EFEEE0";
});

playAllBtn.addEventListener("mouseout", (event) => {
    // likesBtn.style.background = "none";
    playAllBtn.style.background = "rgba(255, 255, 255, 0.07)";
    // myCollectionText.style.color = "#1D2123";
    // likesBtnText.style.color = "#EFEEE0";
});


const likeChartBtn = document.querySelectorAll(".favourite-btn-container");
const heartImg = document.querySelectorAll(".like-chart");

const heartIcons = ["red-heart.svg", "Heart.svg"];
let j = 0;


const listContainer = document.getElementsByClassName('list-items');

const newReleaseArray = [
    {
        title: "Life in a bubble",
        artist: "The van",
        art: "album-art1.jpg",
        likes: "2.3m"
    }, {
        title: "Mountains",
        artist: "Krisx",
        art: "album-art2.jpg",
        likes: "2.3m"
    }, {
        title: "Limits",
        artist: "John Dillion",
        art: "album-art3.jpg",
        likes: "2.3m"
    }, {
        title: "Everything's black",
        artist: "Ameed",
        art: "album-art4.jpg",
        likes: "2.3m"
    }, {
        title: "Cancelled",
        artist: "Enimen",
        art: "album-art5.jpg",
        likes: "2.3m"
    }, {
        title: "Nomad",
        artist: "Makrol eli",
        art: "album-art6.jpg",
        likes: "2.3m"
    }, {
        title: "Blind",
        artist: "Wiz zwo",
        art: "album-art7.jpg",
        likes: "2.3m"
    }
];


for (let i = 0; i < newReleaseArray.length; i++) {
    const newReleaseCard = document.createElement("div");
    const newReleaseArt = document.createElement("div");
    const newReleaseTitle = document.createElement("h6");
    const newReleaseArtist = document.createElement("h6");

    // newReleaseCard.style.border = "solid red"
    newReleaseCard.classList.add("new-release-card");

    newReleaseArt.classList.add("new-release-art");
    newReleaseArt.style.background = `url(${newReleaseArray[i].art}), #D9D9D9`;

    newReleaseTitle.classList.add("new-release-title");
    newReleaseTitle.textContent = `${newReleaseArray[i].title}`;

    newReleaseArtist.classList.add("new-release-artist");
    newReleaseArtist.textContent = `${newReleaseArray[i].artist}`;

    newReleaseCard.append(newReleaseArt);
    newReleaseCard.append(newReleaseTitle);
    newReleaseCard.append(newReleaseArtist);
    listContainer[0].append(newReleaseCard);

    newReleaseCard.addEventListener("click", () => {
        viewAlbum();
        albumPageTitle.textContent = newReleaseTitle.textContent;
        albumPageImage.style.background = newReleaseArt.style.background;

        body.style.background =
            `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), 
        ${newReleaseArt.style.background}`;

        setAlbumPage();
    });
}

const popularMusicArray = [...newReleaseArray];  //using spread operator for now

for (let i = 0; i < popularMusicArray.length; i++) {
    const popularCard = document.createElement("div");
    const popularArt = document.createElement("div");
    const popularTitle = document.createElement("h6");
    const popularArtist = document.createElement("h6");

    popularCard.classList.add("new-release-card");

    popularArt.classList.add("new-release-art");
    popularArt.style.background = `url(${popularMusicArray[i].art}), #D9D9D9`;

    popularTitle.classList.add("new-release-title");
    popularTitle.textContent = `${popularMusicArray[i].title}`;

    popularArtist.classList.add("new-release-artist");
    popularArtist.textContent = `${popularMusicArray[i].artist}`;

    popularCard.append(popularArt);
    popularCard.append(popularTitle);
    popularCard.append(popularArtist);
    listContainer[1].append(popularCard);

    popularCard.addEventListener("click", () => {
        viewAlbum();
        albumPageTitle.textContent = popularTitle.textContent;
        albumPageImage.style.background = popularArt.style.background;

        body.style.background =
            `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), 
        ${popularArt.style.background}`;

        setAlbumPage();
    });
}

const viewAlbum = () => {
    homeBtn.src = "clicked-home-btn.svg";
    playlistBtn.src = "music-library-2.png";
    collectionPage.style.display = "none";
    homePage.style.display = "none";
    albumPage.style.display = "flex";
    homeBtn.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
    body.style.backgroundSize = "cover";
}

const setAlbumPage = () => {
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    albumPageImage.style.backgroundRepeat = "no-repeat";
    albumPageImage.style.backgroundSize = "cover";
}


const buttonRight = document.querySelectorAll('.slide-right');
const buttonLeft = document.querySelectorAll('.slide-left');



for (let i = 0; i < listContainer.length; i++) {
    listContainer[i].addEventListener("mouseover", (event) => {
        buttonRight[i].style.opacity = "1";
        buttonLeft[i].style.opacity = "1";
    });

    listContainer[i].addEventListener("mouseout", (event) => {
        buttonRight[i].style.opacity = "0";
        buttonLeft[i].style.opacity = "0";
    });

    buttonRight[i].addEventListener("mouseover", (event) => {
        buttonRight[i].style.opacity = "1";
        buttonLeft[i].style.opacity = "1";
    });

    buttonLeft[i].addEventListener("mouseover", (event) => {
        buttonRight[i].style.opacity = "1";
        buttonLeft[i].style.opacity = "1";
    });

    buttonRight[i].addEventListener("click", () => {
        listContainer[i].scrollLeft += 130;
    });

    buttonLeft[i].addEventListener("click", function () {
        listContainer[i].scrollLeft -= 130;
    });
}


const allCollections = document.querySelector(".collection-card-wrapper");
const likesWrapper = document.getElementsByClassName("likes-card-wrapper")[0];
likesWrapper.classList.add("collection-card-wrapper");
likesWrapper.style.display = "none";
likesWrapper.style.border = "solid red";
allCollections.style.border = "solid yellow";

let collectionArray = [];

const collectionObject = {};

const collectionData = JSON.parse(localStorage.getItem("collectionStore"));

if (collectionData) {
    collectionArray = collectionData;
} else {
    collectionArray = [];
}

const addToCollectionBtn = document.getElementById("add-collection-btn");

addToCollectionBtn.addEventListener("click", () => {
    let collection = Object.create(collectionObject);
    collection.title = `${albumPageTitle.textContent}`;
    collection.art = `${albumPageImage.style.background}`
    collection.artist = "ay dot";

    const collectionIndex = collectionArray.findIndex(collection => {
        return collection.title === `${albumPageTitle.textContent}`;
    });

    if (collectionIndex === -1) {
        collectionArray.push(collection);
    } else {
        collectionArray.splice(collectionIndex, 1);
    }
    
    localStorage.setItem("collectionStore", JSON.stringify(collectionArray));
});





let newCollection;
let newCollectionCardPlayBtn;
let newCollectionLikes;
let newCollectionDetails;
let newCollectionTitle;
let newCollectionCardRect;
let newCollectionArtist;

playlistBtn.addEventListener("click", (event) => {
    homeBtn.src = "home-btn.svg";
    playlistBtn.src = "clicked-music-library-2.svg";
    homePage.style.display = "none";
    collectionPage.style.display = "flex";
    playlistBtn.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
    albumPage.style.display = "none";
    body.style.background = "#1D2123"
    body.style.backgroundPosition = "center";
    likesWrapper.style.display = "none";
    allCollections.style.display = "flex";

    collectionHover();
});

addToCollectionBtn.addEventListener("mouseover", (event) => {
    // likesBtn.style.background = "none";
    addToCollectionBtn.style.background = "#FACD66";
    // myCollectionText.style.color = "#1D2123";
    // likesBtnText.style.color = "#EFEEE0";
});

addToCollectionBtn.addEventListener("mouseout", (event) => {
    // likesBtn.style.background = "none";
    addToCollectionBtn.style.background = "rgba(255, 255, 255, 0.07)";
    // myCollectionText.style.color = "#1D2123";
    // likesBtnText.style.color = "#EFEEE0";
});

const favouriteArt = document.querySelectorAll(".likeable-art");
const favouriteTitle = document.querySelectorAll(".likeable-title");
const favouriteArtist = document.querySelectorAll(".likeable-artist");

let likesArray = [];

const likesObject = {};

const likesData = JSON.parse(localStorage.getItem("likesStore"));

if (likesData) {
    likesArray = likesData;
} else {
    likesArray = [];
}

for (let i = 0; i < likeChartBtn.length; i++) {
    likeChartBtn[i].addEventListener("click", () => {
        if (j === heartIcons.length) {
            j = 0;
        }
        heartImg[i].src = heartIcons[j];
        j++;

        let likes = Object.create(likesObject);
        likes.title = `${favouriteTitle[i].textContent}`;
        likes.art = `${favouriteArt[i].style.background}`;
        likes.artist = `${favouriteArtist[i].textContent}`;

        const likesIndex = likesArray.findIndex(likes => {
            return likes.title === `${favouriteTitle[i].textContent}`;
        });

        if (likesIndex === -1) {
            likesArray.push(likes);
        } else {
            likesArray.splice(likesIndex, 1);
        }
        
        localStorage.setItem("likesStore", JSON.stringify(likesArray));
    });
}


likesBtn.addEventListener("click", (event) => {
    likesBtn.style.background = "#FACD66";
    myCollectionBtn.style.background = "none";
    myCollectionText.style.color = "#EFEEE0";
    likesBtnText.style.color = "#1D2123";

    allCollections.style.display = "none";
    likesWrapper.style.display = "flex";

    newCollection.style.display = "flex";

    if (likesData) {
        for (let i = 0; i < likesData.length; i++) {
            addToCollection();
            newCollectionTitle.textContent = `${likesData[i].title}`;
            newCollectionCardRect.style.background = `
                 linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), 
                 ${likesData[i].art}`;
            
            // if (document.allCollections.contains(newCollection)) {
            //     console.log("full")
            // } else {
            //     console.log("oga")
            //     //allCollections.prepend(newCollection);
            // }
            
            likesWrapper.prepend(newCollection);
            //allCollections.children = newCollection;
            //newCollection === allCollections.childElement;
        }
    } else {
        console.log("okay");
    }

    collectionHover();
});


const addToCollection = () => {
    newCollection = document.createElement("div");
    newCollection.classList.add("collection-card");

    newCollectionCardPlayBtn = document.createElement("input");
    newCollectionCardPlayBtn.type = "image";
    newCollectionCardPlayBtn.src = "collection-play.svg";
    newCollectionCardPlayBtn.alt = "play";
    newCollectionCardPlayBtn.classList.add("collection-card-play-btn");
    newCollectionCardPlayBtn.style.opacity = "0";

    newCollectionLikes = document.createElement("h6");
    newCollectionLikes.textContent = `2.3 likes`;
    newCollectionLikes.classList.add("collection-likes");

    newCollectionDetails = document.createElement("div");
    newCollectionDetails.classList.add("collection-details");

    newCollectionTitle = document.createElement("h3");
    newCollectionTitle.classList.add("collection-title");

    newCollectionCardRect = document.createElement("div");
    newCollectionCardRect.classList.add("collection-card-rect");

    newCollectionArtist = document.createElement("h6");
    newCollectionArtist.textContent = `lol lmao`
    newCollectionArtist.classList.add("collection-artist");

    newCollectionDetails.append(newCollectionTitle);
    newCollectionDetails.append(newCollectionArtist);

    newCollection.append(newCollectionCardRect);
    newCollection.append(newCollectionCardPlayBtn);
    newCollection.append(newCollectionLikes);
    newCollection.append(newCollectionDetails);
}

const collectionHover = () => {
    for (let i = 0; i < collectionCard.length; i++) {
        collectionCard[i].addEventListener("mouseover", (event) => {
            collectionCardRect[i].style.width = "366px";
            collectionCardRect[i].style.height = "366px";
            collectionCardRect[i].style.left = "-86px";
            collectionCardRect[i].style.top = "-20px";
            collectionCardRect[i].style.backgroundSize = "cover";
            collectionCardPlayBtn[i].style.opacity = "1";
            collectionDetails[i].style.top = "133px";
            collectionLikes[i].style.top = "195px";
        });

        collectionCard[i].addEventListener("mouseout", (event) => {
            collectionCardRect[i].style.width = "213px";
            collectionCardRect[i].style.height = "234px";
            collectionCardRect[i].style.left = "0px";
            collectionCardRect[i].style.top = "0px";
            collectionCardRect[i].style.backgroundSize = "cover";
            collectionCardPlayBtn[i].style.opacity = "0";
            collectionDetails[i].style.top = "170px";
            collectionLikes[i].style.top = "235px";
        });
    }
}

function addLikedItem() {
    if (likesData) {
        for (let i = 0; i < likesData.length; i++) {
            addToCollection();
            newCollectionTitle.textContent = `${likesData[i].title}`;
            newCollectionCardRect.style.background = `
            linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), 
            ${likesData[i].art}`;
            likesWrapper.prepend(newCollection);
        }
    } else {
        console.log("okay");
    }
}

addLikedItem();

function addCollection() {
    if (collectionData) {
        for (let i = 0; i < collectionData.length; i++) {
            addToCollection();
            newCollectionTitle.textContent = `${collectionData[i].title}`;
            newCollectionCardRect.style.background = `
                 linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), 
                 ${collectionData[i].art}`;
            allCollections.prepend(newCollection);
        }
    } else {
        console.log("okay");
    }
}

addCollection();

myCollectionBtn.addEventListener("click", (event) => {
    likesBtn.style.background = "none";
    myCollectionBtn.style.background = "#FACD66";
    myCollectionText.style.color = "#1D2123";
    likesBtnText.style.color = "#EFEEE0";


    likesWrapper.style.display = "none";
    allCollections.style.display = "flex";

    displayCollection();

    collectionHover();
});

const displayCollection = () => {
    if (collectionData) {
        for (let i = 0; i < collectionData.length; i++) {
            addToCollection();
            newCollectionTitle.textContent = `${collectionData[i].title}`;
            newCollectionCardRect.style.background = `
                 linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), 
                 ${collectionData[i].art}`;
            
            // if (document.allCollections.contains(newCollection)) {
            //     console.log("full")
            // } else {
            //     console.log("oga")
            //     //allCollections.prepend(newCollection);
            // }
            
            allCollections.prepend(newCollection);
            //allCollections.children = newCollection;
            //newCollection === allCollections.childElement;
        }
    } else {
        console.log("okay");
    }   
}

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.style.width = "340px";
    homePage.addEventListener("click", () => {
        sideMenu.style.width = "0px";
    });
});