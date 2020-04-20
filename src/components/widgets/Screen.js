import React from "react";

import { Link, useLocation } from "react-router-dom";

import ShareSvg from "../../assets/images/share.svg";
import "../../assets/styles/Screen.css";

const Screen = ({ title, subTitle, body, imgPath, footer }) => {
  const openDrawer = () => {
    console.log("yes");
  };

  const getPath = useLocation().pathname.split("/")[1];

  const pagesList = [
    "intro",
    "people",
    "originAndFounder",
    "ethics",
    "newIntentions",
    "seniorManagement",
  ];

  let getPagesListindex;

  const prevPage = () => {
    pagesList.forEach((page, i) => {
      if (page === getPath) {
        if (i === 0) {
          getPagesListindex = pagesList.length - 1;
        } else {
          getPagesListindex = i - 1;
        }
      }
    });

    window.location.href = `/${pagesList[getPagesListindex]}`;
  };

  const nextPage = () => {
    pagesList.forEach((page, i) => {
      if (page === getPath) {
        if (i === pagesList.length - 1) {
          getPagesListindex = 0;
        } else {
          getPagesListindex = i + 1;
        }
      }
    });

    window.location.href = `/${pagesList[getPagesListindex]}`;
  };

  return (
    <div className="main-content">
      <div className="main-content-container">
        <div className="main-content-header">
          <h2 className="article-title">{title}</h2>
          <div onClick={openDrawer} className="share-row">
            <div className="share-img">
              <img className="share_logo" src={ShareSvg} alt="" />
            </div>
            <p>Share</p>
          </div>
        </div>

        <div className="main-content-body">
          <h2 className="main-content-body-title">{subTitle}</h2>

          {body.map((bo, i) => (
            <p key={i} className="main-content-body-content">
              {bo}
            </p>
          ))}

          {footer
            ? footer.map((f, i) => (
                <div key={i} className="main-content-body-footer">
                  {f}
                </div>
              ))
            : null}

          {imgPath ? <img src={imgPath} alt="" /> : null}
        </div>

        <div className="page-control">
          <div onClick={prevPage} className="page-controller prev"></div>
          <Link to="/" className="page-controller drawer">
            <div className="row1">
              <div className="one"></div>
              <div className="two"></div>
            </div>
            <div className="row2">
              <div className="three"></div>
              <div className="four"></div>
            </div>
          </Link>
          <div onClick={nextPage} className="page-controller next"></div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
