import React from 'react';

import Header from 'root/components/Header';
import Link from 'root/components/Link';

import {CodeLink, Icon, Item, WrapLink} from './style';

const CodeSourceLink = ({href}) =>
    <WrapLink data-tooltip='source'>
      <CodeLink href={href} title='GitHub source code'>
        <Icon color='var(--primary-color)' id='icon-Github'/>
      </CodeLink>
    </WrapLink>;

function AccomplishmentsPage() {
  return (
      <article>
        <Header title='Accomplishments.'/>
        <hr/>
        <ul>
          <Item>
            <WrapLink>
              <Link
                  href='https://chrome.google.com/webstore/detail/hammer-for-smashing-page/gicbggcmjgdbiclnfcmiapnfeanljnmo'
                  title='Chrome Extension.'
              />
              <CodeSourceLink href='https://github.com/sakalx/hammer'/>
            </WrapLink>
            <p>
              This extension for chrome gives you a quick, easy and satisfying
              way to remove unnecessary elements and get a clean and pretty page
              for you to enjoy.
              This can be helpful for people who don't like sticky headers on
              page and others ugly elements that make difficult to read page.
            </p>
          </Item>

          <Item>
            <WrapLink>
              <Link
                  href='https://patterns-js.firebaseapp.com'
                  title='PWA, JavaScript patterns.'
              />
              <CodeSourceLink
                  href='https://github.com/sakalx/javascript-patterns'/>
            </WrapLink>

            <p>
              A JavaScript pattern and antipattern collection that covers
              function
              patterns, design patterns, general patterns, literals and
              constructor patterns, object creation patterns, code reuse
              patterns. Webpack for handling build process.
            </p>
          </Item>

          <Item>
            <WrapLink>
              <Link
                  href='https://sunny-box.firebaseapp.com'
                  title='Online radio WebApp.'
              />
              <CodeSourceLink href='https://github.com/sakalx/sunny-box'/>
            </WrapLink>
            <p>
              Serverless application, world online radio, designed based on
              Material design,
              with React UI
              library, manage state handled by Redux, CSS in Js handled by
              Styled-Components, DB and host handle
              via Firebase, Webpack for handling build process.
            </p>
          </Item>
          <Item>
            <WrapLink>
              <Link
                  href='https://sakals.000webhostapp.com/landing.page/index.html'
                  title='Landing Page.'
              />
              <CodeSourceLink
                  href='https://github.com/sakalx/work-space.gulp/tree/master/projects/Landing/src.landing-page'/>
            </WrapLink>
            <p>
              Responsive landing page template, only pure JS/HTML/CSS.<br/>
              Optimization and lazy load image, CSS styling designed on
              BEM methodology, Gulp for handling build process.
            </p>
          </Item>
          <Item>
            <WrapLink>
              <Link
                  href='https://sakals.000webhostapp.com/fooseshoes.page/index.html'
                  title='Pixel Perfect Page.'
              />
              <CodeSourceLink
                  href='https://github.com/sakalx/work-space.gulp/tree/master/projects/Foose-Shoes/src.commercial-page'/>
            </WrapLink>
            <p>
              Responsive pixel perfect page, web pages that automatically scale
              appropriately depending on the size, and orientation, of
              the screen.
            </p>
          </Item>

          <Item>
            <strong>
              <a href='https://www.npmjs.com/package/encryption-gulp'>
                npm, Gulp encryption package.
              </a>
            </strong>
            <p>
              Encryption and decryption files, folders or whole project via
              Gulp, base on crypto module from Node.js .
            </p>
          </Item>

          <Item>
            <strong>
              <a href='https://expo.io/@sakal/cards'>
                Mobile Game "Challenge".
              </a>
            </strong>

            <p>
              Mobile App for training your memory, developed a cross-platform
              (iOS and Android) mobile application that allows users to create
              and organize collections of flashcards. Leveraged React Native to
              manage infinite lists, routing, and user input.
            </p>
          </Item>

          <Item>
            <strong>
              <a href='https://www.npmjs.com/package/react-glitch-effect'>
                npm, React glitch-effect-component.
              </a>
            </strong>
            <a href='https://www.npmjs.com/package/react-glitch-effect'>
              DEMO page.
            </a>
            <p>
              React component, that makes glitch effects.

              An experimental glitch effect powered by CSS animations and the
              clip-path property also use CSS variables for setting some
              properties that will allow for an easy adjustment of the effect.
            </p>
          </Item>

          <Item>
            <strong>
              <a href='https://www.npmjs.com/package/react-input-ui'>
                npm, React Input UI Collection.
              </a>
            </strong>
            <a href='https://sakalx.github.io/react-input-collection/'>
              DEMO page.
            </a>
            <p>
              Form inputs offer a great opportunity to add some subtle and
              interesting effects to a web page. They are elements that your
              user will interact with at some point and making them fun to use
              can enhance the experience. We are used to the default form
              resembling its paper counterpart but in the digital world we can
              be more creative.
            </p>
          </Item>

          <Item>
            <strong>
              <a href='https://www.npmjs.com/package/redux-socket-auth-middleware'>
                npm, Redux middleware for handle socket.io authentication.
              </a>
            </strong>
            <a href='https://socketio-auth.herokuapp.com'>
              DEMO, Simple chat with authorization via Socket.io.
            </a>
            <p>
              Middleware are the right place for persistent connections like
              websockets in a Redux app. Given a single action with a
              socketIOClient.connect payload, the middleware transforms the
              action to a separate a pending action and a separate
              connected/rejected/disconnected action.
            </p>
          </Item>
        </ul>

        <section>
          <header>
            <Icon id='icon-Language'/>

            <h3>Languages</h3>
            <h4>
              <strong>Ukrainian</strong>
              Native.
            </h4>
            <h4>
              <strong>Russian</strong>
              Native.
            </h4>
            <h4>
              <strong>English</strong>
              Limited working proficiency.
            </h4>
          </header>
        </section>
      </article>
  );
}

export default AccomplishmentsPage;