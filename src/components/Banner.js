import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import "./styles/index.css"
const Banner = () => {
const settings = {
dots: true,
infinite: true,
slidesToShow: 1,
autoplay: true,
speed: 4000,
autoplaySpeed: 3000,
};
const dataBanner = [
{title:"Galaxy2",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg2.jpg?alt=media&token=d97c4dd6-4938-43bd-92c2-49b11f26256e"},

{title:"Honor90",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg3.jpg?alt=media&token=09b3c3cf-882b-4a91-8569-a94d84593d91"},
{title:"Honor PadX9",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg4.jpg?alt=media&token=6691097c-d086-4db0-b6eb-58409a2e5aba"},

{title:"Reno 10Series",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg5.jpg?alt=media&token=220b8e37-6346-445d-8954-aa95e2c5529e"},
{title:"Honor 90Lite",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg6.jpg?alt=media&token=33ce80d1-a2d0-42ee-bec3-7cd4c4681077"},
{title:"HuAwei Novay91",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg7.jpg?alt=media&token=fd01085d-254c-48a8-9fa9-8b79b0343b0c"},
{title:"GakaxyWatch",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg8.jpg?alt=media&token=2946a6a0-9f43-40a1-af9b-61f252fa98f3"},

{title:"MSI",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg9.jpg?alt=media&token=84346c3b-6ebc-44ba-8d78-d476553165bf"},
{title:"Motorolaedge",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg10.jpg?alt=media&token=d01a2abd-e88d-4852-bd7d-5c7048ab85fd"},
{title:"Rentréscolaire",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg11.jpg?alt=media&token=17a045e0-471c-4b12-924e-7ae7a1028d15"},
{title:"Honor90",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg3.jpg?alt=media&token=09b3c3cf-882b-4a91-8569-a94d84593d91"},
{title:"Facture",url:"https://firebasestorage.googleapis.com/v0/b/gestcom-4a752.appspot.com/o/banner%2Fimg13r.jpg?alt=media&token=986f0b95-7440-4b01-88ee-3cf0725682dd"}
]
return (
<div >
<div className="container">
<Slider {...settings}>
{dataBanner.map((item,index) =>(
<div>
<img src={item.url} alt="item"/>
<h1>{item.title}</h1>
</div>

))}

</Slider>
</div>
<pageCarousel/>
</div>
)
}
export default Banner