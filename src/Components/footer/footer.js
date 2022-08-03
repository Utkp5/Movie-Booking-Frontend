import React from "react";
import "./footer.css";
import logoo from "../../Assets/img/logo.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_svg">
          <a className="footer_a" href="">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z" />
            </svg>
            <p className="footer_p ft-p">Customer Care</p>
          </a>
          <a className="footer_a" href="">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128z" />
            </svg>
            <p className="footer_p ft-p1">Book Tickets</p>
          </a>
          <a className="footer_a" href="">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078zM256 444.8C393.1 378 431.1 230.1 432 141.4L256 66.77L256 444.8z" />
            </svg>
            <p className="footer_p">Security</p>
          </a>
        </div>
        <div className="footer_img">
          <img className="footer_logo" src={logoo} alt="" />
        </div>
        <div className="footer_svg1_flex">
          <div className="footer_svg1">
            <svg
              className="footer_svg_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 98 98"
            >
              <path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm11.8 49.2h-7.7v27.5H40.6V49.7h-5.4V40h5.4v-6.3c0-4.5 2.1-11.6 11.6-11.6h8.5v9.4h-6.2c-1 0-2.4.5-2.4 2.7v5.7h8.7l-1 9.8z"></path>
            </svg>
            <svg
              className="footer_svg_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 98 98"
            >
              <path d="M48 .5C21.8.5.5 21.8.5 48S21.8 95.5 48 95.5 95.5 74.2 95.5 48 74.2.5 48 .5zm21.2 36.6v1.4c0 14.4-11 31.1-31.1 31.1-6.2 0-11.9-1.8-16.8-4.9.9.1 1.7.2 2.6.2 5.1 0 9.8-1.7 13.6-4.7-4.8-.1-8.8-3.2-10.2-7.6.7.1 1.4.2 2.1.2 1 0 2-.1 2.9-.4-5-1-8.8-5.4-8.8-10.7v-.1c1.5.8 3.2 1.3 4.9 1.4-2.9-2-4.9-5.3-4.9-9.1 0-2 .5-3.9 1.5-5.5 5.4 6.6 13.4 11 22.5 11.4a10.93 10.93 0 0 1 10.6-13.4c3.1 0 6 1.3 8 3.5 2.5-.5 4.8-1.4 6.9-2.7-.8 2.6-2.6 4.7-4.8 6 2.2-.3 4.3-.8 6.3-1.7-1.3 2.2-3.2 4.1-5.3 5.6z"></path>
            </svg>
            <svg
              className="footer_svg_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
            >
              <path d="M50 59a8.96 8.96 0 0 0 7.3-14.2 8.9 8.9 0 0 0-14.6 0A8.96 8.96 0 0 0 50 59zm19.7-20v-8.7H61V39z"></path>
              <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm25.6 39.8v20.9c0 5.4-4.4 9.9-9.9 9.9H34.3c-5.4 0-9.9-4.4-9.9-9.9V34.3c0-5.4 4.4-9.9 9.9-9.9h31.4c5.4 0 9.9 4.4 9.9 9.9v10.5z"></path>
              <path d="M64.1 50c0 7.7-6.2 14-14 14a13.98 13.98 0 0 1-13-19.2h-7.6v20.9c0 2.7 2.2 4.9 4.9 4.9h31.4c2.7 0 4.9-2.2 4.9-4.9V44.8H63c.7 1.5 1.1 3.4 1.1 5.2z"></path>
            </svg>
            <svg
              className="footer_svg_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
            >
              <path d="M50 2.5C23.8 2.5 2.5 23.8 2.5 50S23.8 97.5 50 97.5 97.5 76.2 97.5 50 76.2 2.5 50 2.5zm-7.8 63.9h-8.6V36.3h8.6v30.1zm-4-32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm34.1 32h-8.6V47.8c0-2.2-.6-3.7-3.3-3.7-4.4 0-5.3 3.7-5.3 3.7v18.6h-8.6V36.3h8.6v2.9c1.2-.9 4.3-2.9 8.6-2.9 2.8 0 8.6 1.7 8.6 11.7v18.4z"></path>
            </svg>
          </div>
          </div>
          <div className="footer_info">
            <p className="footer_info_p">
              Copyright 2022 © Owner Pandit Utkarsh Just Book Entertainment Pvt. Ltd. All Rights
              Reserved.
              <br />
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is intended to promote the
              works and no endorsement of the artist shall be implied.
              Unauthorized use is prohibited and punishable by law.
            </p>
          </div>
        <div className="footer_owner">
          Made With&nbsp;
          <svg
            className="footer_owner_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
          </svg>
          &nbsp;in India
        </div>
      </footer>
    </div>
  );
}

export default Footer;
