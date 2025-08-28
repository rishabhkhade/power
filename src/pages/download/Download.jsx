import React from 'react'
import "./Download.scss"
import PageTop from '../../components/page-top/PageTop'

function Download() {
  return (
    <>
      <PageTop text="Download" subText="Brochure" />
      <div className="parent download-parent bg-img-cover">
        <div className="container download-cont">
          <div className="box-cont">
            <h3>Download Our Brochure</h3>
            <p>Click the button below to download the brochure</p>
            <div className="btn">Download NOW</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Download
