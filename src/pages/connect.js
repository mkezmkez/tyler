import React from "react"

import Layout from "../components/layout"

import { Row, Col } from "react-bootstrap"


import whiteLogo from "../images/logo-white.svg"
import CalendlyEmbed from "../components/CalendlyEmbed"
import twitterIMG from "../images/twitter.svg"
import mailIMG from "../images/mail.svg"
import linkedinIMG from "../images/linkedin.svg"
import LogoFixedMobile from "../components/LogoFixedMobile"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbySeo } from "gatsby-plugin-next-seo"

class Connect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <GatsbySeo
          title="Connect with Tyler Vawser"
          description="Set a time to chat with Tyler"
          canonical="https://www.tylervawser.com/connect"
          keywords="tylervawser,tyler vawser,apptegy,people ops," // keywords list
          openGraph={{
            url: "https://www.tylervawser.com/connect",
            title: "Chat with Tyler",
            description: "Set up a call with Tyler Vawser",
            images: [
              {
                url: "../src/images/OGtylervawser.jpg",
                width: 1200,
                height: 1200,
                alt: "About Tyler Vawser",
              },
            ],
            site_name: "TylerVawser",
          }}
          twitter={{
            handle: "@tvaw",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        <LogoFixedMobile />

        <AniLink
          style={{
            color: "var(--textTitle)",
          }}
          to="/"
          cover
          bg="var(--gradient-background)"
          direction="right"
          top="entry"
          duration={1}
          entryOffset={800}
          className="d-none d-sm-block"
        >
          {" "}
          <img
            src={whiteLogo}
            onClick={this.handleClose}
            alt="Tyler Vawser"
            className="logo-fixed"
            style={{ zIndex: `1` }}
          ></img>
        </AniLink>
        <Col
          xl={7}
          sm={12}
          md={8}
          lg={8}
          style={{ minHeight: `1120px`, marginBottom: `50px` }}
        >
          <CalendlyEmbed account="tyler-apptegy" eventName="call-with-tyler" />
        </Col>
        <div className="sidebar-fixed pl-5 ">
          <Row
            className="mx-auto px-auto mr-3 pr-3"
            style={{ position: `fixed`, bottom: `10px` }}
          >
            <Col
              xs={11}
              sm={11}
              md={11}
              lg={11}
              xl={11}
              style={{ fontSize: `20px`, paddingTop: `20px` }}
              className="wider wsans w-medium line-height-1 text-light h2 sm-h1 w-semibold align-center m-auto m-sm-4 pl-5 pt-4 text-right social-text"
            >
              Tyler wants to hear from you.
            </Col>
            <Col
              xs={11}
              sm={11}
              md={12}
              lg={12}
              xl={{ span: 8, offset: 2 }}
              className="d-flex  justify-content-between pt-3 pl-5 "
            >
              <Row className="d-flex align-items-end justify-content-between">
                <Col
                  xl={{ span: 12, offset: 2 }}
                  className="d-flex justify-content-between pt-5 mt-5"
                >
                  <a
                    href="https://twitter.com/intent/follow?screen_name=tvaw"
                    className="d-flex align-items-end justify-content-between"
                    target="_blank"
                  >
                    <img
                      src={twitterIMG}
                      alt="Link to Tyler's twitter"
                      className="d-flex align-self-end"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tylervawser/"
                    target="_blank"
                    className="px-4"
                  >
                    <img
                      className="d-flex align-self-end"
                      src={linkedinIMG}
                      alt="Link to Tyler's Linkedin profile"
                    />
                  </a>

                  <a
                    href="mailto:tvawser@gmail.com?subject=Saw%20your%20website%20lets%20chat"
                    target="_blank"
                  >
                    <img
                      src={mailIMG}
                      alt="Link to Tyler's email"
                      className="d-flex align-self-end"
                    />
                  </a>
                </Col>
              </Row>
              <Row
                style={{
                  padding: `6vw`,
                  marginBottom: `20vh`,
                  textAlign: `end`,
                  position: `fixed`,
                  bottom: `20px`,
                }}
              ></Row>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default Connect
