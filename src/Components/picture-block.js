import Picture from "./Picture"
import img1 from '../images/Animal.jpg'
import img2 from '../images/London.jpg'
import img3 from '../images/mountain.jpg'
import img4 from '../images/solar.jpg'

const Pictureblock = () => {

const pictureDatas = [

    {
        "pic":{img1},
        "quots":"Gentle wanderer of the woods, the deer paints tranquility on the canvas of nature."
    },

    
    {
        "pic":{img2},
        "quots":"A city of endless charm, where the old and new collide in a harmonious dance."
    },
    
    {        
        "pic":{img3},
        "quots":"In the presence of eternity, the mountains are as transient as the clouds."
    },
    
    {
        "image":{img4},
        "quots":"The solar system, a celestial carousel where planets ride the rays of the sun."
    }
]

    return(
        <Picture pictureDatas = {pictureDatas}/>
    )

}

export default Pictureblock;