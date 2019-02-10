import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import "./costom.css"

class card extends Component {

    render() {

            let showcase = {
                "Scientists": {

                    "items": [{
                            "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nicolaus_Copernicus_AGE_V13_1804.jpg",
                            "name": "Inventors",
                            "des": "Know Those Who Revolutionalize the World"
                        },
                        {
                            "imgSrc": "https://c1.staticflickr.com/4/3078/2557680419_d6cfe4b2fb.jpg",
                            "name": "Inventions",
                            "des": "Meet the Tomorrow ,Today"
                        },
                        {
                            "imgSrc": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Faraday-Millikan-Gale-1913.jpg",
                            "name": "News",
                            "des": "What is Trending In the World Of Science"
                        },
                        {
                            "imgSrc": "/static/img/close-up-code-codes-239898.jpg",
                            "name": "Hackaton",
                            "des": "Be a Titan Of Solution"
                        },
                        {
                            "imgSrc": "/static/img/diagram-direction-display-1305360.jpg",
                            "name": "About Us",
                            "des": "We are Here for You"
                        }
                    ]

                }
            }
            let home = jsonData.Scientists.items.map((item, index) =>
                <
                div key = { index } >
                <
                img style = { imgStyle }
                src = { item.imgSrc } > < /img> <
                p style = { textBoxStyle } > { item.name } < /p> <
                p style = { textBoxStyle2 } > { item.des } < /p> <
                /div>
            );


            let homeCard = ( < Carouselcard sliderBoxStyle = {
                    { height: "450px", width: "80%", background: "transparent", alignContent: "flex-end", alignSelf: "space-around" } }
                accEle = {
                    { dots: false } }
                slideCpnts = { home }
                itemsStyle = { itemsStyle }
                />);







                return ( < div style = {
                        {
                            position: "relative",
                            margin: "0 auto",
                            width: "60%",
                        }
                    } > { homeCard } < /div>);

                }
            };



            export default card;
