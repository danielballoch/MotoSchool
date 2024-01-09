import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: none;
z-index: 600;
margin: 0 20px 0 0;
body {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:white;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .ham4 .top {
    stroke-dasharray: 40 121;
  }
  .ham4 .bottom {
    stroke-dasharray: 40 121;
  }
  .ham4.active .top {
    stroke-dashoffset: -68px;
  }
  .ham4.active .bottom {
    stroke-dashoffset: -68px;
  }
  .active .line {
    stroke: black;
  }
  .invert .line {
    stroke: black;
  }
  @media(max-width: 1080px) {
    display: block;
  }
`

export default function Hamburger({clickFunction, invert, toggle}){
    
    return (
        <Wrapper onClick={() => {clickFunction()}}>
            <svg className={toggle? "ham hamRotate ham4 active" : invert ? "ham hamRotate ham4 invert" : "ham hamRotate ham4"} viewBox="0 0 100 100" width="80">
            <path
                    className="line top"
                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
                    className="line middle"
                    d="m 70,50 h -40" />
            <path
                    className="line bottom"
                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
            </svg>
        </Wrapper>
    )
}
