import React, { Component } from "react";
import Countdown from "./Countdown";
import { Logo } from "./Logo.jsx";
import logo from "../images/tathva.svg";
import fb from "../images/facebook.svg";
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";
import {Links} from "./Links.jsx";
import "../styles/ComingSoon.css";
import { Title } from "./Title.jsx";
import { Description } from "./Description.jsx";
import Subscribe from "./Subscribe.jsx";


class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-8-19 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: logo
    },
    title:{
        text:"tathva'20"
    },
    description:{
        text:"The early years of this century saw some aspiring students garner around in the hope to behold the seeds of ideas that sprouted in their minds take life before them. This resulted in one of south India's biggest scholastic endeavors - Tathva, the techno-management fest of NIT Calicut. Since it's inception in 2000, this annual symposium has known only growth, and has flourished into one of the few promising enterprises the nation has witnessed."
    },
    subscribe:{
      placeholder:"Enter Email Address",
      buttonText:"Submit"
    },
    links:[
      {
        url: "https://www.facebook.com/tathva/",
        logo: fb,
        text: "Join"
      },
      {
        url:"https://www.instagram.com/tathva_nitcalicut/?hl=en",
        logo:insta,
        text:"Follow"
      },{
        url:"https://www.youtube.com/channel/UCzAX5YADY7tossml3HMnc5g",
        logo:youtube,
        text:"Watch",
      }
    ]
  };
  render() {
    const { countdown, logo,title,description,subscribe,links } = this.state;
    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text}/>
        <Description text={description.text}/>
        <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText}/>
        <Links links={links}/>
      </div>
    );
  }
}
export default ComingSoon;
