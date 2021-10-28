import * as React from 'react';
import Icon from '../Icon/icon.component';
import { SearchAlt } from "styled-icons/boxicons-regular";
import { CartAlt } from "styled-icons/boxicons-regular";

interface Props {
    bgcolor: string;
}

const HeaderSection: React.FC<Props> = ({
    bgcolor
}) => {

    return (
        <div className="contactHeader" style={{ backgroundColor: bgcolor }}>
            <div className="w-100">
                <div className="flex">
                    <label className="callSection">
                        <span className="spanTag">Call 833.262.8899</span>
                    </label>
                    <label className="searchSection" style={{ cursor: 'pointer' }}>
                        <span className="spanTag">Search</span>
                        <SearchAlt size={25} color="white" />
                    </label>
                    <label className="cartSection">
                        <span className="spanTag">Cart</span>
                        <CartAlt size={25} color="white" />
                    </label>
                </div>
            </div>
            {/* <div className="container-fluid">
                <div className="mainContent">
                    <label className="callSection">
                        <span className="spanTag">Call 833.262.8899</span>
                    </label>
                    <label className="searchSection" style={{ cursor: 'pointer' }}>
                        <span className="spanTag">Search</span>
                        <SearchAlt size={25} color="white" />
                    </label>
                    <label className="cartSection">
                        <span className="spanTag">Cart</span>
                        <CartAlt size={25} color="white" />
                    </label>
                </div>
            </div> */}
        </div>
    )
}

export default HeaderSection;