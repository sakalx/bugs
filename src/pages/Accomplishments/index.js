import React from 'react';

function AccomplishmentsPage() {
  return (
      <article>
        <header>
          <h1>Accomplishments Page</h1>
        </header>
        <ul>
          <li>
            <strong>
              <a href='https://chrome.google.com/webstore/detail/hammer-for-smashing-page/gicbggcmjgdbiclnfcmiapnfeanljnmo'>
                Chrome Extension browser.
              </a>
            </strong>
            <p>
              This extension for chrome gives you a quick, easy and satisfying
              way to remove unnecessary elements and get a clean and pretty page
              for you to enjoy.
              This can be helpful for people who don't like sticky headers on
              page and others ugly elements that make difficult to read page.
            </p>

          </li>

          <li>
            <strong>
              <a href='https://patterns-js.firebaseapp.com'>
                JavaScript patterns collection.
              </a>
            </strong>
            <p>
              A JavaScript pattern and antipattern collection that covers
              function
              patterns, design patterns, general patterns, literals and
              constructor patterns, object creation patterns, code reuse
              patterns.
            </p>
          </li>

          <li>
            <strong>
              <a href='https://sunny-box.firebaseapp.com'>
                Online radio.
              </a>
            </strong>
            <p>
              Serverless application, world online radio, designed based on
              Material design,
              with React UI
              library and for manage state of App used Redux.
            </p>
          </li>

          <li>
            <strong>
              <a href='https://sakals.000webhostapp.com/landing.page/index.html'>
                Landing Page.
              </a>
            </strong>
            <p>
              Responsive landing page template, only pure JS/HTML/CSS.
            </p>
          </li>

          <li>
            <strong>
              <a href='https://sakals.000webhostapp.com/fooseshoes.page/index.html'>
                Pixel Perfect Page
              </a>
            </strong>
            <p>
              Responsive pixel perfect page.
            </p>
          </li>

          <li>
            <strong>
              <a href='https://www.npmjs.com/package/encryption-gulp'>
                npm, Gulp encryption package.
              </a>
            </strong>
            <p>
              Encryption and decryption files, folders or whole project via
              Gulp, base on crypto module from Node.js .
            </p>
          </li>

          <li>
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
          </li>

          <li>
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
          </li>

          <li>
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
          </li>

          <li>
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
          </li>
        </ul>

        <section>
          <header>
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