import React from 'react';
import {styled} from 'linaria/react';
import {darken} from 'polished';
// @ts-ignore (No type definitions exist for this package.)
import Octicon from 'react-octicon';

import {GRAY} from 'etc/colors';
import FlexSpacer from 'components/layout/FlexSpacer';


// ----- Styles ----------------------------------------------------------------

const FooterWrapper = styled.footer`
  background-color: ${GRAY};
  border-top: 1px solid ${darken(0.05, GRAY)};
  width: 100%;
`;

const Footer = styled.div`
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & h1 {
    font-size: 32px;
    font-weight: 400;
  }

  & a {
    font-size: 14px;
  }

  & p {
    font-size: 14px;
    font-weight: 300;
  }

  & strong {
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    & a {
      font-size: 16px;
    }

    & p {
      font-size: 16px;
    }
  }
`;


// ----- Component -------------------------------------------------------------

const FooterComponent: React.FunctionComponent = props => {
  return (
    <>
      <FlexSpacer />
      <FooterWrapper>
        <div className="container">
          <Footer className="row pt-5 pb-3">
            <div className="col-12 col-md-6 about">
              <h1 className="mb-4">About</h1>
              <p>
                Browse and download more than 1000 sticker packs for Signal, the secure messenger. These
                stickers are created by the community; the maintainers of this website do not claim any
                rights. <strong>This site is not affiliated with Signal</strong>.
              </p>
              <p>
                <a href="https://twitter.com/search?q=%23makeprivacystick&src=typed_query" rel="noreferrer" target="_blank">
                  <strong>#makeprivacystick</strong>
                </a>
              </p>
            </div>
            <div className="col-12 col-md-6 links">
              <h1 className="mb-4">Links</h1>
              <ul>
                <li>
                  <a href="https://signal.org" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> Learn More About Signal
                  </a>
                </li>
                <li>
                  <a href="https://github.com/romainricard/signalstickers" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://github.com/romainricard/signalstickers/issues/new" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> Report an Issue
                  </a>
                </li>
                <li>
                  <a href="https://support.signal.org/hc/en-us/articles/360031836512-Stickers#h_c2a0a45b-862f-4d12-9ab1-d9a6844062ca" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> Sticker Pack Creation Guide
                  </a>
                </li>
              </ul>
            </div>
          </Footer>
        </div>
      </FooterWrapper>
    </>
  );
};


export default FooterComponent;
