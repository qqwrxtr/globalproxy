import "./info.css";

const InfoBlock = () => {
    return (
        <div className="container_info w-100" style={{ marginTop: "49px" }}>
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-12 bg_color">
                    <div className="row d-flex justify-content-center gap-3 w-100">
                        <div className="col-2">
                            <div className="title_info_abt">
                                <p>250 GB per Port</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Avg port data limit is 250 GB</p>
                            </div>
                        </div>
                        <div className="vr"></div>
                        <div className="col-2">
                            <div className="title_info_abt">
                                <p>100 000 +</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>IP addresses</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="title_info_abt">
                                <p>3 +</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Locations</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="title_info_abt">
                                <p>35+ Mbps</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Avg port speed </p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="title_info_abt">
                                <p>2+ Operators</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Avg 2+ operators  per country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
