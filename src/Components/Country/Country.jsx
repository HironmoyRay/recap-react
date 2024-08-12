

const Country = ({country}) => {
    console.log(country);
    const {name, flags, capital} = country;
    return (
        <div className="box">
            <h1>{name.common}</h1>
            <hr />
            <div>
                <img src={flags.png} alt="" />
            </div>
            <h2>{capital}</h2>

        </div>
    );
};

export default Country;