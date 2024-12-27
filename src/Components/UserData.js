import img from "../Image/cat.jpg"


import { useState, useEffect } from "react";

const UserData = () => {
    const [data, setData] = useState([]);

    const getApiData = async () => {
        try {
            const res = await fetch("https://api.thecatapi.com/v1/breeds");
            const actualData = await res.json();
            setData(actualData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    // Function to handle button click
    const handleWikipediaClick = (url) => {
        window.open(url, "_blank"); // Opens the link in a new tab
    };

    return (
        <>
            <div className="container">
                <header className="text-center mt-4 py-2 bg-info-subtle raj">
                    <h1 className="text-primary text-opacity-75">Cat Breeds</h1>
                </header>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {data.map((ele) => {
                        return (
                            <div className="col-md-3 mb-4" key={ele.id}>
                                <div className="card h-100 shadow-sm">
                                    <div>
                                        <img src={img} class="card-img-top" alt="..." style={{ height: "250px", objectFit: "cover" }} />
                                        <div className="card-body">
                                            <h4 className="card-title text-center text-danger">{ele.name}</h4>
                                            <p className="card-title text-secondary"><b className="text-black">Temperament :- </b> {ele.temperament}</p>
                                            <p className="card-title text-center text-secondary"><b className="text-black">Origin :- </b> {ele.origin}</p>
                                            <p className="card-title text-center text-secondary"><b className="text-black">Country :- </b> {ele.country_codes}</p>
                                            <p className="card-title text-center text-secondary"><b className="text-black">Life :- </b> {ele.life_span}</p>
                                            <p className="card-title text-center text-secondary"><b className="text-black">Cat ID :- </b> {ele.reference_image_id}</p>
                                            <p className="card-title text-primary-emphasis"><b>Description :-</b> {ele.description}</p>
                                            <div className="text-center pt-3">
                                                {ele.wikipedia_url && (
                                                    <button type="button" className="btn btn-light" onClick={() => handleWikipediaClick(ele.wikipedia_url)}><b>Learn More</b></button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default UserData;




