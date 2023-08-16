import React from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/resume.scss";

/* import images */

const Resume = ({}) => {
  const line1 = "Frontend Developer";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  return (
    <>
      <div className="resume-section d-flex align-items-center justify-content-center h-100 py-4">
        <div className="container-lg">
          <motion.h2
            className="fs-70 color-primary text-center mb-4"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // animate={{ opacity: "1" }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            Resume
          </motion.h2>
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="600"
            align="center"
            bgcolor="#ffffff"
            style={{ background: "#ffffff","margin": "0 auto" }}
          >
            <tr>
              <td>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  className="resume-table"
                >
                  <tr>
                    <td
                      width="40"
                      bgcolor="#f1dfd3"
                      style={{ background: "#f1dfd3", color: "#2b2929" }}
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        width="100%"
                        align="center"
                      >
                        <tr>
                          <td colspan="3" height="13"></td>
                        </tr>
                        <tr>
                          <td width="50"></td>
                          <td>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                              align="center"
                            >
                              <tr>
                                <td
                                  width="3"
                                  bgcolor="#2b2929"
                                  style={{
                                    background: "#2b2929"
                                  }}
                                ></td>
                                <td width="17"></td>
                                <td width="27">
                                  <img
                                    src=""
                                    width="27"
                                    height="27"
                                    style={{
                                      "background-color": "red",
                                      height: "27px",
                                      width: "27px",
                                      display: "block",
                                    }}
                                  />
                                </td>
                                <td width="15"></td>
                                <td
                                  style={{
                                    "font-size": "17px",
                                    "text-transform": "uppercase",
                                    color: "#2b2929",
                                    "font-weight": "600",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  CONTACT ME
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3"></td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block",
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              +123456789
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              +123456789
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3">  
                                </td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block",
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              www.google.com
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              www.google.com
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3"></td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block",
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              India
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              India
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="14"></td>
                              </tr>
                              <tr>
                                <td
                                  colspan="5"
                                  height="1"
                                  background="#2b2929"
                                  style={{ background: "#2b2929" }}
                                ></td>
                              </tr>
                              <tr>
                                <td colspan="5" height="14"></td>
                              </tr>

                              <tr>
                                <td
                                  width="3"
                                  bgcolor="#2b2929"
                                  style={{
                                    background: "#2b2929"
                                  }}
                                ></td>
                                <td width="17"></td>
                                <td width="27">
                                  <img
                                    src=""
                                    width="27"
                                    height="27"
                                    style={{
                                      "background-color": "red",
                                      height: "27px",
                                      width: "27px",
                                      display: "block",
                                    }}
                                  />
                                </td>
                                <td width="15"></td>
                                <td
                                  style={{
                                    "font-size": "17px",
                                    "text-transform": "uppercase",
                                    color: "#2b2929",
                                    "font-weight": "600",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  REFERENCES
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3">  
                                </td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block",
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              +123456789
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              +123456789
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3">  
                                </td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block",
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              www.google.com
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              www.google.com
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td
                                  colspan="5"
                                  height="1"
                                  background="#2b2929"
                                  style={{ background: "#2b2929" }}
                                ></td>
                              </tr>
                              <tr>
                                <td colspan="5" height="14"></td>
                              </tr>
                              <tr>
                                <td
                                  width="3"
                                  bgcolor="#2b2929"
                                  style={{
                                    background: "#2b2929"
                                  }}
                                ></td>
                                <td width="17"></td>
                                <td width="27">
                                  <img
                                    src=""
                                    width="27"
                                    height="27"
                                    style={{
                                      "background-color": "red",
                                      height: "27px",
                                      width: "27px",
                                      display: "block",
                                    }}
                                  />
                                </td>
                                <td width="15"></td>
                                <td
                                  style={{
                                    "font-size": "17px",
                                    color: "#2b2929",
                                    "font-weight": "600",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  REFERENCES
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3">  
                                </td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block",
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              +123456789
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              +123456789
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td width="3"></td>
                                <td width="17"></td>
                                <td
                                  colspan="3"
                                  style={{
                                    "font-size": "20px",
                                    color: "#2b2929",
                                    "font-family": "Roboto",
                                  }}
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    align="center"
                                  >
                                    <tr>
                                      <td width="27">
                                        <img
                                          src=""
                                          width="27"
                                          height="27"
                                          style={{
                                            "background-color": "red",
                                            height: "27px",
                                            width: "27px",
                                            display: "block"
                                          }}
                                        />
                                      </td>
                                      <td width="15"></td>
                                      <td colspan="3">
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                          align="center"
                                        >
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              www.google.com
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                "font-size": "14px",
                                                color: "#2b2929",
                                                "font-weight": "400",
                                                "font-family": "Roboto",
                                              }}
                                            >
                                              www.google.com
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="5" height="6"></td>
                              </tr>
                              <tr>
                                <td
                                  colspan="5"
                                  height="1"
                                  background="#2b2929"
                                  style={{ background: "#2b2929" }}
                                ></td>
                              </tr>
                              <tr>
                                <td colspan="5" height="14"></td>
                              </tr>
                            </table>
                          </td>
                          <td width="50"></td>
                        </tr>
                      </table>
                    </td>
                    <td width="40">right block</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Resume;
