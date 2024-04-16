import { writable } from 'svelte/store';
import {executeClientToGroup} from "api/rage";

export const isMapLoad = writable(false);

export const isSim = writable(false);

export const selectedImage = writable(false);
export const selectedImageFunc = writable(false);
export const radioState = writable(false);
export const radioStation = writable(0);


let pageArray = [];

export const currentPage = writable("mainmenu");

currentPage.subscribe(page => {
    if (page === "mainmenu") {
        pageArray = [];
        executeClientToGroup ("finger", 1)
    } else if (page !== "callView") {
        pageArray.push(page)
        executeClientToGroup ("finger", 5)
    }
});


export const pageBack = () => {

    let page = "mainmenu";
    const lastIndex = pageArray.length - 1;

    if (typeof pageArray [lastIndex] === "string") {
        page = pageArray [lastIndex];
        pageArray.splice(lastIndex, 1);
    }

    if (page !== "call")
        selectNumber.set(null);

    currentPage.set (page);
}


export const selectNumber = writable(null);




export const currentWeather = writable("thunder");


export const categoriesList = writable([
    {
        name: "Structurile Statului",
        icon: "gos",
        content: [
            "City Hall",
            "LSPD",
            "EMS",
            "FIB",
            "NEWS",
            "Centrul de Control",
            "SHERIFF 1",
            "SHERIFF 2",
        ]
    },
    {
        name: "Bandele",
        icon: "weapons",
        content: [
            "Marabunta Grande",
            "Vagos",
            "Ballas",
            "The Families",
            "Bloods Street",
        ]
    },
    {
        name: "Mafia",
        icon: "mafia",
        content: [
            "La Cosa Nostra",
            "Русская мафия",
            "Yakuza",
            "Армянская мафия",
        ]
    },
    {
        name: "Locuri de munca",
        icon: "licenses",
        content: [
            "Centrală electrică",
            "Oficiu poștal",
            "Parc de taxiuri",
            "Depoul de autobuze",
            "Parcare pentru mașina de tuns iarba",
            "Parcare pentru camionete",
            "Parcare pentru colectori de numerar",
            "Parcare mecanica auto",
        ]
    },
    {
        name: "Loc de muncă cu jumătate de normă",
        icon: "jobs",
        content: [
            "Mina civilă 1",
            "Mina civilă 2",
            "Mina civilă 3",
            "Mina civilă 4",
            "State mina",
            "Bătrânul de lemne 1",
            "Bătrânul de lemne 2",
            "Bătrânul de lemne 3",
            "Bătrânul de lemne 4",
            "Bătrânul de lemne 5",
        ]
    },
    {
        name: "Cele mai apropiate locuri",
        icon: "recent",
        content: [

            "Cea mai apropiată închiriere de motociclete",
            "Cea mai apropiată închiriere de biciclete",
            "Cea mai apropiată barcă de închiriere",
           /* "Ближайшая аренда самолета",
            "Ближайшая аренда вертолета",*/
        ]
    },
    {
        name: "Alte",
        icon: "clubs",
        content: [
            "Scoala de soferi",
            "Cazinou",
            "Familiile",
            "Arenă",
            "Amfiteatru",
            "Laboratoarele umane",
            "Far",
            "Magazin de vânătoare",
            "Piața principală",
            "Piață neagră",
            "Biserică",
            "Vânzător de animale de companie",
            "Curtea",
        ]
    }
])