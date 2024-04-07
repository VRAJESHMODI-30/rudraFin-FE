import React, { useEffect } from "react";
import "../styles/LogoCarousel.css";
const logos = [
    "bob.jpg",
    "cbi.jpg",
    "hdfc.jpg",
    "ib.jpg",
    "icici.jpg",
    "iob.jpg",
    "lic.jpg",
    "lichomeloan.jpg",
    "mas.jpg",
    "ua.jpg"
];

function LogoCarousel() {
    useEffect(() => {
        const copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logos").appendChild(copy);

        return () => {
            copy.remove();
        };
    }, []);

    return (
        <div className="logos">
            <div className="logos-slide">
                {
                    logos.map((logo, idx) => (
                        <img key={idx} src={`assets/img/partner_logos/${logo}`} alt={logo} />
                    ))
                }
            </div>
        </div>
    );
}

export default LogoCarousel;
