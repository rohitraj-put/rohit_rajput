import React from 'react'

const Review = () => {
    let feedNames = [
        {
            imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
            contant: "sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.",
            uname: ".....Lorem"
        },
        {
            imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
            contant: "sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.",
            uname: ".....Lorem"
        },
        {
            imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
            contant: "sense of accomplishment and encourages players to keep progressing and exploring new levels and challenges.",
            uname: ".....Lorem"
        }
    ]

    let feedback = feedNames.map(feedName => <div className='card-3' data-aos="flip-up" >
        <p className='reviewuser'><q>{feedName.contant}</q></p>
        <p style={{ paddingLeft: "100px", color: "rgb(120, 67, 233)", fontSize: "20px" }}>{feedName.uname}</p>
        <div className='profile'>
            <img src={feedName.imgsrc} alt='img' />
        </div>
    </div>)
    return (
        <>
            <h1 className='aboutme userText'>What Our Users Say</h1>
            <div className='review' >
                {feedback}
            </div>
        </>
    )
}

export default Review