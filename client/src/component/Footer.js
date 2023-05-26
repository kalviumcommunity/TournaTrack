import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assest/ttlogo.svg";
import "./css/footer.css";

function Footer() {
  return (
    <div
      className="footer"
      style={{ borderTop: "1px solid black", marginTop: "10%" }}
    >
      <footer
        style={{
          flexDirection: "row",
          marginTop: "",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2d314b",
        }}
      >
        <div
          className="footer"
          style={{
            backgroundColor: "#2d314b",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="logo-footer" style={{ backgroundColor: "#2d314b" }}>
            <div
              className="logo-text"
              style={{
                backgroundColor: "#2d314b",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // width: "100%",
                gap: "4vw",
              }}
            >
              <img
                className="logo"
                src={logo}
                alt=""
                style={{
                  backgroundColor: "#2d314b",
                  width: "3rem",
                  marginTop: "4vh",
                  marginBottom: "2vh",
                }}
              />
            </div>
          </div>
          <div
            className="logo-footer2"
            style={{
              width: "80%",
              backgroundColor: "#2d314b",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
                width: "100%",
              }}
            >
              <div
                className="options"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2vh",
                  marginLeft: "9%",
                  width: "100",
                }}
              >
                <div style={{ display: "flex", width: "100%" }}>
                  <div
                    style={{
                      backgroundColor: "#2d314b",
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                    }}
                  >
                    <h2
                      style={{
                        backgroundColor: "transparent",
                        textAlign: "left",
                        marginBottom: "2%",
                      }}
                    >
                      <span
                        style={{ color: "white", fontSize: "22px" }}
                        className="links"
                      >
                        Important Links
                      </span>
                    </h2>
                    <li
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        marginBottom: ".6vh",
                      }}
                    >
                      <Link
                        className="links"
                        to={"/"}
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ fontSize: "16px", opacity: "0.7" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        marginBottom: ".6vh",
                      }}
                    >
                      <Link
                        className="links"
                        to={"/about"}
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ fontSize: "16px", opacity: "0.7" }}
                      >
                        About
                      </Link>
                    </li>
                    <li
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        marginBottom: ".6vh",
                      }}
                    >
                      <Link
                        className="links"
                        to={"/guides"}
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ fontSize: "16px", opacity: "0.7" }}
                      >
                        Rules
                      </Link>
                    </li>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#2d314b",
                      width: "50%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                    }}
                  >
                    <h2
                      style={{
                        backgroundColor: "transparent",
                        textAlign: "left",
                        marginBottom: "2%",
                      }}
                    >
                      <span
                        style={{ color: "white", fontSize: "22px" }}
                        className="links"
                      >
                        Policies and FAQ's
                      </span>
                    </h2>
                    <li
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        marginBottom: ".6vh",
                      }}
                    >
                      <Link
                        className="links"
                        to={"/t&c"}
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ fontSize: "16px", opacity: "0.7" }}
                      >
                        T&C
                      </Link>
                    </li>
                    <li
                      style={{
                        color: "white",
                        backgroundColor: "transparent",
                        marginBottom: ".6vh",
                      }}
                    >
                      <Link
                        className="links"
                        to={"/privacypolicy"}
                        onClick={() => window.scrollTo(0, 0)}
                        style={{ fontSize: "16px", opacity: "0.7" }}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </div>
                </div>
                <div>
                  <h1 className="sub-heading" style={{ margin: "auto" }}>
                    <span style={{ color: "white", fontSize: "22px" }}>
                      Socials
                    </span>
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      marginTop: "5%",
                      backgroundColor: "#2d314b",
                    }}
                  >
                    <Link to={"https://www.linkedin.com"} target="_blank">
                      <FaLinkedin
                        size={30}
                        className="login"
                        style={{
                          backgroundColor: "#2d314b",
                          color: "white",
                        }}
                      />
                    </Link>
                    <Link to={"https://www.instagram.com"}>
                      <FaInstagram
                        size={30}
                        className="login"
                        style={{ backgroundColor: "#2d314b", color: "white" }}
                      />
                    </Link>
                    <Link to={"https://twitter.com"}>
                      <FaTwitter
                        size={30}
                        className="login"
                        style={{ backgroundColor: "#2d314b", color: "white" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            color: "white",
            opacity: "0.3",
            backgroundColor: "#2d314b",
            fontSize: "large",
            marginTop: "3%",
            marginBottom: "1%",
            paddingBottom: "1rem",
          }}
        >
          © CopyRight 2023 TornaTrack
        </h2>
      </footer>
    </div>
  );
}

export default Footer;
