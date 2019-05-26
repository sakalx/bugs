import React from 'react';

import Header from 'root/components/Header';

import {OrnamentTop, OrnamentBottom} from './style';

function AboutPage() {
  return (
      <article role='article' aria-labelledby='described about sakal'>
        <Header title='Hi my name is Serhii'/>

        <p>
          As a strategic, creative, and performance-driven Front-end Development
          Professional, I offer applied experience in developing, designing,
          launching, and
          supporting mission-critical web & desktop application designs within
          challenging technical environments. My transferable experience
          encompasses content development, relationship management, and IT
          project management. I have demonstrated advanced technical leadership
          across highly-competitive industries and markets.
        </p>
        <p>
          I exemplify advanced expertise in developing responsive & elegant
          cross-platform functionality, optimizing pages to enhance speed,
          pre-testing web-service calls, working on complex templates, and
          facilitating client guidance and troubleshooting.
        </p>
        <p>
          During my career, I have been highly adaptable while thriving within
          fast-paced environments by effectively utilizing cross-cultural
          communications. I showcase a unique ability to operate effectively
          both independently and collaboratively as part of a team to meet
          strict deadlines and project specifications.
          Insatiable desire to grow, learn and improve skills.
        </p>
        <p>
          As a strategic thinker, I incisively analyze risks & opportunities
          to develop plans with an ability to combine top-level academic
          training with real-world experience during critical conditions.
        </p>
        <OrnamentTop color='none' id='ornament_1'/>
        <OrnamentBottom color='none' id='ornament_5'/>
      </article>
  );
}

export default AboutPage;