import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "../styles/global.scss"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Tyler Vawser"
          keywords={[`blog`, `Tyler Vawser`, `Tvawser`, `react`]}
        />

        <Row
          style={{
            color: "var(--textNormal)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="wider ml-3 wsans w-medium h2 pt-3 pb-0 mb-0 line-height-1"
        >
          Let’s talk.
        </Row>
        <Row
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="ml-3 roboto w-regular h4 pt-0 mt-0 line-height-1"
        >
          <AniLink
            style={{
              color: "var(--textTitle)",
              transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
              transition: `0.4s`,
            }}
            className="fancy-link"
            cover
            bg="#663399"
            direction="left"
            top="exit"
            to="blog"
          >
            Set up a call
          </AniLink>
        </Row>
        <Row
          style={{
            color: "var(--textTitle)",
            transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
            transition: `0.4s`,
          }}
          className="ml-0 mr-5 pr-5 roboto w-regular h6 d-flex justify-content-between flex-md-nowrap w-100 align-items-end mt-5 pt-5"
        >
          <Col lg={3} md={2}>
            <Link
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link "
              to="#"
            >
              T
            </Link>{" "}
            /{" "}
            <Link
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link "
              to="#"
            >
              E
            </Link>{" "}
            /{" "}
            <Link
              style={{
                color: "var(--textTitle)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="fancy-link "
              to="#"
            >
              L
            </Link>
          </Col>
          <Col lg={3} md={2} className="mr-5 pr-5">
            <Row
              style={{
                color: "var(--textNormal)",
                transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                transition: `0.4s`,
              }}
              className="justify-content-end wsans w-medium h4 d-flex"
            >
              P
            </Row>
            <Row className="justify-content-end">
              <Link
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="fancy-link  mr-1"
                to="#"
              >
                S
              </Link>
              <div>/</div>
              <Link
                style={{
                  color: "var(--textTitle)",
                  transitionTimingFunction: `cubic-bezier(0.25, 0.1, 0.25, 1)`,
                  transition: `0.4s`,
                }}
                className="fancy-link ml-1 "
                to="#"
              ></Link>
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
