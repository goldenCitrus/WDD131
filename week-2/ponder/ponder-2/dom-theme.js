
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.transition = "background-image 1s ease";
        document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fhalloween-pirate-ship-ghost-rising-depths-cursed-ocean-eerie-339746111.jpg&f=1&nofb=1&ipt=905b99bc7e0fc6693e32aa17564aeafd0d57e67516317e977ece92050a002bcf')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        document.getElementById("foghorn").play();
    } else if (current === 'forest') {
        document.body.style.transition = "background-image 1s ease";
        document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdnb.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F001%2F850%2F753%2Flarge%2Falexandra-gaudibuendia-khitrova-999.jpg%3F1453723299&f=1&nofb=1&ipt=bb007e77ea8cee7472b431cae51bcd94d1aa88c3e23dddf895b85b415839ff85')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        document.getElementById("bbdragon").play();
    } else if (current === 'desert') {
        document.body.style.transition = "none";
        document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmysteryinhistory.com%2Fwp-content%2Fuploads%2FAncient-Egyptian-Demons-Guarding-And-Wandering-In-A-Mystical-Desert-Night-Scene.webp&f=1&nofb=1&ipt=7bacacd00bbf53c997baa3dad80e91d98fc5df4e4dd51c414232ca40ca48d5bc')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        document.getElementById("thunder").play();
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}