import {useState} from 'react'

const Country = ({country}) => {
    console.log(country);
    const {name, flags, capital} = country;
    const [visited,setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className="box">
            <h1>{name.common}</h1>
            <hr />
            <div>
                <img src={flags.png} alt="" />
            </div>
            <h2>{capital}</h2>
            <button onClick={handleVisited}>{visited?"Visited":"Going"}</button>

        </div>
    );
};

export default Country;