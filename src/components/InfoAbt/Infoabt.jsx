import "./info.css";

const InfoBlock = () => {
    return (
        <div className="container_info w-100 d-flex align-items-center justify-content-center" style={{ marginTop: "49px",padding:"0 20px" }}>
            <div className="row w-100 d-flex justify-content-center ">
                <div className="col-12 bg_color pt-4">
                    <div className="row d-flex justify-content-center w-100 flex-xxl-nowrap flex-xl-nowrap flex-lg-wrap row_blocks">
                        <div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12">
                            <div className="title_info_abt">
                                <p>250 GB</p>
                            </div>
                            <div className="subtitle_info_abt text_big">
                                <p>Data limit per port</p>
                            </div>
                            <div className="border-btm-sm">         
                            </div>
                        </div>
                        <div className="vr d-none d-sm-block "></div>
                        <div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12" >
                            <div className="title_info_abt">
                                <p>100 000 +</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>IP addresses</p>
                            </div>
                            <div className="border-btm-sm">         
                            </div>
                        </div>
                        <div className="vr d-none d-xxl-block d-xl-block"></div>
                        <div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12">
                            <div className="title_info_abt">
                                <p>3 +</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Locations</p>
                            </div>
                            <div className="border-btm-sm">         
                            </div>
                        </div>
                        <div className="vr d-none d-sm-block"></div>
                        <div className="info_block col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12">
                            <div className="title_info_abt">
                                <p>35+ Mbps</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Avg port speed </p>
                            </div>
                            <div className="border-btm-sm">

                            </div>
                        </div>
                        <div className="vr d-xl-block d-xxl-block d-none "></div>
                        <div className="last-row-item col-xxl-2 col-xl-2 col-lg-12 col-sm-12">
                            <div className="title_info_abt">
                                <p>2+ Operators</p>
                            </div>
                            <div className="subtitle_info_abt">
                                <p>Per country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
