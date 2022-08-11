import { faBook, faFire, faGamepad, faMusic, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DataMenuHeader = [
    {
        icon : <FontAwesomeIcon icon = {faFire} />,
        title : "Trending",
        color: "#fd8a86"
    },
    {
        icon : <FontAwesomeIcon icon = {faMusic} />,
        title : "Music",
        color: "#ffc200"
    },
    {
        icon : <FontAwesomeIcon icon = {faGamepad} />,
        title : "Gaming",
        color: "#e04c1a"
    },
    {
        icon : <FontAwesomeIcon icon = {faBook} />,
        title : "News",
        color: "#71a4fc"
    },
    {
        icon : <FontAwesomeIcon icon = {faTrophy} />,
        title : "Sport",
        color: "#0031ff"
    }
]