import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color: lightblue;
height: 760px;
width: 100%;
.content-left {
    max-width: 800px;
    .image-placeholder {
        width: 800px;
    }
    .track-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }
    .track-text {
        max-width: 260px;
    }
}
.content-right {
    max-width: 400px;
    padding-left: 40px;
    .image-placeholder {
        width: 400px;
    }
    .content-box {
        padding: 0 10px;
    }
}
.image-placeholder {
    height: 360px;
    width: 500px;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div className="content-left">
                <div className="image-placeholder">Image Placeholder</div>
                <div className="track-list">
                    <div className="track-text"><p><b>1. Track Name:</b> this is a short description of the track, skill level etc.</p></div>
                    <div className="track-text"><p><b>2. Track Name:</b> this is a short description of the track, skill level etc.</p></div>
                    <div className="track-text"><p><b>3. Track Name:</b> this is a short description of the track, skill level etc.</p></div>
                    <div className="track-text"><p><b>4. Track Name:</b> this is a short description of the track, skill level etc.</p></div>
                    <div className="track-text"><p><b>5. Track Name:</b> this is a short description of the track, skill level etc.</p></div>
                </div>
            </div>
            <div className="content-right">
                <div className="image-placeholder">Image Placeholder</div>
                <div className="content-box">
                    <p><b>Where is MotoSchool Tauranga?</b> We're about 10 minutes out of Tauranga on Omanawa Road. Book today and we'll be in touch with full track location.</p>
                </div>
            </div>
        </Wrapper>
    )
}