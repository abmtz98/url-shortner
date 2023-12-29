function TargetInfo(prop){
    return(
        <>
            <div className="card-wrapper">
                <div className="cardImgWrapper">
                    <img src={prop.img} width={80} />
                </div>
                <div className="cInfo">
                    <h3>{prop.title}</h3>
                    <p>{prop.desc}</p>
                </div>
            </div>
        </>
    )
}

export default TargetInfo