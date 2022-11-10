const homePage = document.getElementsByClassName("home-container")[0];
const collectionPage = document.getElementsByClassName("collection-container")[0];
const collectionCardRect = document.getElementsByClassName("collection-card-rect");
const collectionCard = document.getElementsByClassName("collection-card");
const homeBtn = document.querySelectorAll(".home-btn");
const likesBtn = document.getElementById("likes-btn");
const collectionCardPlayBtn = document.getElementsByClassName("collection-card-play-btn");
const collectionDetails = document.getElementsByClassName("collection-details");
const collectionLikes = document.getElementsByClassName("collection-likes");
const myCollectionBtn = document.getElementById("my-collection-btn")
const playlistBtn = document.querySelectorAll(".music-library-btn");
const likesBtnText = document.getElementsByClassName("likes-text")[0];
const myCollectionText = document.getElementsByClassName("my-collection-text")[0];
const albumPage = document.getElementsByClassName("album-container")[0];
const body = document.getElementsByClassName("home-wrapper")[0];
const topNav = document.getElementsByClassName("navbar")[0];
const albumPageImage = document.getElementsByClassName("lead-image")[0];
const chartTitle = document.getElementsByClassName("chart-title");
const albumPageTitle = document.getElementsByClassName("album-container-title")[0];
const addToCollectionBtn = document.getElementById("add-collection-btn");



homeBtn.forEach(
    (button, i) => {
        button.addEventListener("click", (event) => {
            homeBtn[0].src = "./images/clicked-home-btn.svg";
            playlistBtn[0].src = "./images/music-library-2.png";
            collectionPage.style.display = "none";
            albumPage.style.display = "none";
            homePage.style.display = "flex";
            homeBtn[0].style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
            body.style.background = "#1D2123"
            body.style.backgroundPosition = "center";
            sideMenu.style.width = "0px";
            homeBtn[1].style.color = "#FFFFFF";
            playlistBtn[1].style.color = "rgba(239, 238, 224, 0.25)";
        });
    }
)

const chartCard = document.getElementsByClassName("chart-card");
const chartArt = document.getElementsByClassName("chart-art");

chartArt[0].style.background = "url(./images/chart-art1.svg), #D9D9D9";
chartArt[1].style.background = "url(./images/chart-art2.svg), #D9D9D9";
chartArt[2].style.background = "url(./images/lead-image2.svg), #D9D9D9";
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

        collectionToggle();
        collectionToggle();
    });
}


const playAllBtn = document.getElementById("play-all-btn");
const addToCollectionBtnText = document.querySelector(".add-collection-btn-text");
const playAllBtnText = document.querySelector(".play-all-btn-text");

playAllBtn.addEventListener("mouseover", (event) => {
    playAllBtn.style.background = "#FACD66";
    playAllBtnText.style.color = "#1D2123";
});

playAllBtn.addEventListener("mouseout", (event) => {
    playAllBtn.style.background = "rgba(255, 255, 255, 0.07)";
    playAllBtnText.style.color = "#FFFFFF";
});

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

    newReleaseCard.classList.add("new-release-card");

    newReleaseArt.classList.add("new-release-art");
    newReleaseArt.style.background = `url(./images/${newReleaseArray[i].art}), #D9D9D9`;

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
        collectionToggle();
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
    popularArt.style.background = `url(./images/${popularMusicArray[i].art}), #D9D9D9`;

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
        collectionToggle();
    });
}

const viewAlbum = () => {
    homeBtn[0].src = "./images/clicked-home-btn.svg";
    playlistBtn[0].src = "./images/music-library-2.png";
    collectionPage.style.display = "none";
    homePage.style.display = "none";
    albumPage.style.display = "flex";
    homeBtn[0].style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
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


let collection;
let collectionIndex;
let likesIndex;
let newCollection;
let newCollectionCardPlayBtn;
let newCollectionLikes;
let newCollectionDetails;
let newCollectionTitle;
let newCollectionCardRect;
let newCollectionArtist;

const likeChartBtn = document.querySelectorAll(".favourite-btn-container");
const heartImg = document.querySelectorAll(".like-chart");
const allCollections = document.querySelector(".collection-card-wrapper");
const likesWrapper = document.getElementsByClassName("likes-card-wrapper")[0];
likesWrapper.classList.add("collection-card-wrapper");
likesWrapper.style.display = "none";


let collectionArray = [];

const collectionObject = {};

const collectionData = JSON.parse(localStorage.getItem("collectionStore"));

if (collectionData) {
    collectionArray = collectionData;
} else {
    collectionArray = [];
}

localStorage.setItem("collectionStore", JSON.stringify(collectionArray));

playlistBtn.forEach(
    (button, i) => {
        button.addEventListener("click", (event) => {
            homeBtn[0].src = "./images/home-btn.svg";
            playlistBtn[0].src = "./images/clicked-music-library-2.svg";
            homePage.style.display = "none";
            collectionPage.style.display = "flex";
            playlistBtn[0].style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
            albumPage.style.display = "none";
            body.style.background = "#1D2123"
            body.style.backgroundPosition = "center";
            likesWrapper.style.display = "none";
            allCollections.style.display = "flex";
            homeBtn[1].style.color = "rgba(239, 238, 224, 0.25)";
            playlistBtn[1].style.color = "#FFFFFF";

            likesBtn.style.background = "none";
            myCollectionBtn.style.background = "#FACD66";
            myCollectionText.style.color = "#1D2123";
            likesBtnText.style.color = "#EFEEE0";

            likesWrapper.style.display = "none";
            allCollections.style.display = "flex";

            sideMenu.style.width = "0px";

            displayCollection();
        });
    }
)

addToCollectionBtn.addEventListener("click", () => {
    collection = Object.create(collectionObject);
    collection.title = `${albumPageTitle.textContent}`;
    collection.art = `${albumPageImage.style.background}`
    collection.artist = "ay dot";

    collectionIndex = collectionArray.findIndex(collection => {
        return collection.title === `${albumPageTitle.textContent}`;
    });

    if (collectionIndex === -1) {
        collectionArray.push(collection);
    } else {
        collectionArray.splice(collectionIndex, 1);
    }

    collectionToggle();

    localStorage.setItem("collectionStore", JSON.stringify(collectionArray));
});

myCollectionBtn.addEventListener("click", (event) => {
    likesBtn.style.background = "none";
    myCollectionBtn.style.background = "#FACD66";
    myCollectionText.style.color = "#1D2123";
    likesBtnText.style.color = "#EFEEE0";

    likesWrapper.style.display = "none";
    allCollections.style.display = "flex";

    displayCollection();    
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

localStorage.setItem("likesStore", JSON.stringify(likesArray));

for (let i = 0; i < likeChartBtn.length; i++) {
    likeChartBtn[i].addEventListener("click", () => {
        let likes = Object.create(likesObject);
        likes.title = `${favouriteTitle[i].textContent}`;
        likes.art = `${favouriteArt[i].style.background}`;
        likes.artist = `${favouriteArtist[i].textContent}`;

        likesIndex = likesArray.findIndex(likes => {
            return likes.title === `${favouriteTitle[i].textContent}`;
        });

        if (likesIndex === -1) {
            likesArray.push(likes);
        } else {
            likesArray.splice(likesIndex, 1);
        }

        likesToggle();
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

    likesWrapper.innerHTML = "";
    if (likesData.length > 0) {
        for (let i = 0; i < likesData.length; i++) {
            addToCollection();
            newCollectionTitle.textContent = `${likesData[i].title}`;
            newCollectionCardRect.style.background = `
                 linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), 
                 ${likesData[i].art}`;
            likesWrapper.prepend(newCollection);

            newCollection.addEventListener("click", () => {
                viewAlbum();
                albumPageTitle.textContent = likesData[i].title;
                albumPageImage.style.background = likesData[i].art;

                body.style.background =
                    `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), 
                ${likesData[i].art}`;

                setAlbumPage();
                collectionToggle();
            });
        }
    } else {
        const nolikes = document.createElement("h3");
        nolikes.classList.add("no-likes");
        nolikes.textContent = `No favourites.`;

        likesWrapper.append(nolikes);
    }
});


const addToCollection = () => {
    newCollection = document.createElement("div");
    newCollection.classList.add("collection-card");

    newCollectionCardPlayBtn = document.createElement("input");
    newCollectionCardPlayBtn.type = "image";
    newCollectionCardPlayBtn.src = "./images/collection-play.svg";
    newCollectionCardPlayBtn.alt = "play";
    newCollectionCardPlayBtn.classList.add("collection-card-play-btn");

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

const displayCollection = () => {
    allCollections.innerHTML = "";
    if (collectionData.length > 0) {
        for (let i = 0; i < collectionData.length; i++) {
            addToCollection();
            newCollectionTitle.textContent = `${collectionData[i].title}`;
            newCollectionCardRect.style.background = `
                 linear-gradient(179.89deg, rgba(0, 0, 0, 0) 0.1%, rgba(15, 18, 19, 0.85) 80.67%), 
                 ${collectionData[i].art}`;
            allCollections.prepend(newCollection);

            newCollection.addEventListener("click", () => {
                viewAlbum();
                albumPageTitle.textContent = collectionData[i].title;
                albumPageImage.style.background = collectionData[i].art;

                body.style.background =
                    `linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), 
                ${collectionData[i].art}`;

                setAlbumPage();
                collectionToggle();
            });
        }
    } else {
        const noCollection = document.createElement("h3");
        noCollection.classList.add("no-collection");
        noCollection.textContent = `Opps! Your Collections are empty.`;

        allCollections.append(noCollection);
    }
}

const collectionToggle = () => {
    collectionIndex = collectionArray.findIndex(collection => {
        return collection.title === `${albumPageTitle.textContent}`;
    });

    if (collectionIndex === -1) {
        addToCollectionBtnText.style.color = "#FFFFFF";
        addToCollectionBtn.style.background = "rgba(255, 255, 255, 0.07)";
    } else {
        addToCollectionBtnText.style.color = "#1D2123";
        addToCollectionBtn.style.background = "#FCD66A";
    }
}

const likesToggle = () => {
    for (let i = 0; i < favouriteTitle.length; i++) {
        likesIndex = likesArray.findIndex(likes => {
            return likes.title === `${favouriteTitle[i].textContent}`;
        });

        if (likesIndex === -1) {
            heartImg[i].src = "./images/Heart.svg";
        } else {
            heartImg[i].src = "./images/red-heart.svg";
        }
    }

}

likesToggle();


const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.style.width = "340px";
    homePage.addEventListener("click", () => {
        sideMenu.style.width = "0px";
    });
    collectionPage.addEventListener("click", () => {
        sideMenu.style.width = "0px";
    });
    albumPage.addEventListener("click", () => {
        sideMenu.style.width = "0px";
    });
});



