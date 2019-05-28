import React from 'react';

import Header from 'root/components/Header';

import {Card, Column, Icon, Title, Wrap} from './style';

function SkillsPage() {
  return (
      <article>
        <Header title='Skills'/>

        <Wrap>
          <Column>
            <Title>
              <h2>Industry Knowledge</h2>
              <Icon id='icon-Industry'/>
            </Title>
            <Card>
              <ul>
                <li>Algorithms</li>
                <li>Data Structures</li>
                <li>Functional Programming</li>
                <li>MVC</li>
                <li>OOP</li>
                <li>Responsive Web Design</li>
                <li>REST</li>
                <li>SEO</li>
                <li>SPA</li>
                <li>UI/UX</li>
                <li>User Acceptance Testing</li>
                <li>Wireframing</li>
              </ul>
            </Card>
          </Column>

          <Column>
            <Title>
              <h2>Tools & Technologies</h2>
              <Icon id='icon-Technologies'/>
            </Title>
            <Card>
              <ul>
                <li>AJAX</li>
                <li>BEM</li>
                <li>CSS/CSS3</li>
                <li>DOM</li>
                <li>Git/GitHub</li>
                <li>Gulp</li>
                <li>HTML/HTML5</li>
                <li>JavaScript(ES)</li>
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
            </Card>
          </Column>

          <Column>
            <Title>
              <h2>Interpersonal Skills</h2>
              <Icon id='icon-Interpersonal'/>
            </Title>
            <Card>
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
            </Card>
          </Column>
        </Wrap>
      </article>
  );
}

export default SkillsPage;