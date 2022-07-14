
import React from "react";
import {useNavigate} from "react-router-dom";


export function GalleryNavBar() {
    const nav = useNavigate()
    return(
        <div className="gallery-nav-bar">
            <div className="nav-bar--control">
                <div className="back-btn">
                    <button>
                        <img
                            src="./images/components/icon-btn-back.svg"
                            alt="Back"
                            onClick={()=>{nav(-1)}}
                        />
                    </button>
                </div>
                <div className="title-page">
                    <span>GALLERY</span>
                </div>
            </div>

            <div>
                <button>UploadS</button>
            </div>
        </div>
    )
}