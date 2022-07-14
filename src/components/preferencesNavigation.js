

import React from "react";
import {Link} from "react-router-dom";

export function PrefNavigation () {

    return(
        <div className="pref-navigation">
            <div className="search-input">
                <div className="search-input--input">
                    <input type="text" placeholder="Search for breeds by name"/>
                </div>
                <div className="search-input--button">
                    <button>
                        <img src="./images/components/icon-search.svg" alt=""/>
                    </button>
                </div>
            </div>

            <div className="pref-navigation--links">
                <div><Link to="/liked">
                    <img src="./images/components/icon-link-liked.svg" alt=""/>
                </Link></div>
                <div><Link to="/disliked">
                    <img src="./images/components/icon-link-disliked.svg" alt=""/>
                </Link></div>
                <div><Link to="/favorite">
                    <img src="./images/components/icon-link-favourites.svg" alt=""/>
                </Link></div>
            </div>
        </div>
    )
}