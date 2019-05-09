import React from 'react';

// NOTE <a aria-labelledby href="http://somerandomwebsite.com/" rel="nofollow">your anchor text</a>
// FIXME role="button" role="main"
// role="Definition" ro" definition

import Header from 'root/components/Header';

function SkillsPage() {
  return (
      <article role='article' aria-labelledby='list of skills'>
        <Header title='Skills.'/>

        {/*  <article>
          <header>
            <h1>This is the heading.</h1>
            <h4>This is the sub-heading.</h4>
            <p>This is the metadata.</p>
          </header>
        </article>*/}

        <strong>Industry Knowledge</strong>
        <ul role='list'>
          <li role='listitem'><strong>Functional Programming</strong></li>
          <li>MVC</li>
          <li>OOP</li>
          <li>Responsive Web Design</li>
          <li>REST</li>
          <li>SEO</li>
          <li>SPA</li>
          <li>UI/UX</li>
          <li>User Acceptance Testing</li>
          <li>Web Development</li>
          <li>Wireframing</li>
        </ul>

        <strong>Tools & Technologies</strong>
        <ul>
          <li>AJAX</li>
          <li>BEM</li>
          <li>CSS3</li>
          <li>DOM</li>
          <li>GitHub</li>
          <li>Gulp</li>
          <li>HTML5</li>
          <li>JavaScript(ES6 / ES7 / ES8)</li>
          <li>jQuery</li>
          <li>JSON</li>
          <li>MySQL</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Redux</li>
          <li>SASS</li>
          <li>Webpack</li>
          <li>WebSocket</li>
          <li>WordPress</li>
      </ul>

        <strong>Interpersonal Skills</strong>
        <ul>
          <li>Active Listening</li>
          <li>Analytical Skills</li>
          <li>Critical Thinking</li>
          <li>Cross-cultural Communication</li>
          <li>Flexibility</li>
          <li>Patience</li>
          <li>Problem Solving</li>
          <li>Teamwork</li>
        </ul>

      </article>
  );
}

export default SkillsPage;