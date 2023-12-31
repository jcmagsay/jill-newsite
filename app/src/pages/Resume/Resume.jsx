import React, { Component } from 'react';
import Page from '../../components/Page/Page';
import Text from '../../components/Text/Text';

const heroImage = require('../../media/resume.png');
const resumeDocument = require('../../media/magsaysay_cv.pdf');

const Resume = () => {
  return (
    <Page
      heroImage={heroImage}
      heroTitle="Software Engineer"
      heroSupportingTxt="Life experience is what makes us who we are"
    >
      <Text type="headline" align="centered">
        <a
          download
          href={resumeDocument}
          target="_blank"
        >
          ***Click to download***
        </a>
      </Text>
      <div className="grid">
        <div className="grid__col">
          {/* TODO: Fix and update this to be full page */}
          <object
            data={resumeDocument}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <a href={resumeDocument} target="_blank">
              <p>
                Your browser does not support PDFs.
              </p>
            </a>
          </object>
        </div>
      </div>
    </Page>
  );
};

export default Resume;
