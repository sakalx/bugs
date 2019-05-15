import React from 'react';

import Header from 'root/components/Header';
import TimeRange from 'root/components/TimeRange';

import {Company} from './style';

function ExperiencePage() {
  return (
      <article role='article' aria-labelledby='list of work experience'>
        <Header title='Experience.'/>

        <Company>
          <span>add icon</span>

          <section>
            <h2>mPoint Media, Inc.</h2>
            <address>New York, NY</address>
            <TimeRange
                start={{dateTime: '2018-05-01', title: 'May 2018'}}
                end={{dateTime: new Date(), title: 'Present'}}
            />



            <h4>Junior Front-end Engineering.</h4>

          <ul>
            <li>
              Developing fully functional responsive prototypes based on
              Business Requirements using HTML5, CSS3, JavaScript and React.
            </li>
            <li>
              Review designs to ensure technical feasibility while scrutinizing
              validity of all user input before submitting to back-end, and
              generating reusable components and front-end libraries for future
              utilization.
            </li>
            <li>
              Translate designs and wireframes into high-quality codes and
              deliver outstanding support in reviewing codes to ensure code
              quality while efficiently using GitHub tools for source code
              management and version control.
            </li>
            <li>
              Optimizing components for maximum performance across a vast array
              of web-capable devices and browsers.
            </li>
            <li>
              Build and maintain strong relationships with other team members
              and stakeholders, coordinate with web designers to match visual
              design requirements, and deliver high-quality projects within
              tight deadlines.
            </li>
          </ul>


          </section>
        </Company>

        {/*   <p>
          <span>add icon</span>
          <strong>Hearts and Minds Network, Inc.</strong>
          <address>New York, NY</address>

          <time dateTime='2018-02-01'>February 2018</time>
          <time dateTime='2018-05-01'>May 2018</time>
          <strong>Web Developer Volunteer</strong>

          <ul>
            <li>
              Implemented functions for custom scrolling, used vanilla
              JavaScript and module, resulted in a better user experience, more
              comfortable scrolling via buttons on the page and enhanced
              customer satisfaction.
            </li>
            <li>
              Validated the coded pages against the design per company Page
              Integrity Test guidelines; edited more than 30 web pages.
            </li>
            <li>
              Crafted various website features using HTML5 CSS3 and JavaScript.
            </li>
          </ul>
        </p>

        <p>
          <span>add icon</span>
          <strong>Self-Employed, Interactive Web Design, Development</strong>
          <address>New York, NY</address>

          <time dateTime='2017-02-01'>February 2017</time>
          <time dateTime='2018-01-01'>January 2018</time>
          <strong>Front-end Developer</strong>

          <ul>
            <li>
              Skillfully built responsive HTML pages from wireframes,
              analytically followed direction of product owners and designers to
              understand design specifications, and resolved several technical
              problems in an effective way.
            </li>
            <li>
              Supervised multiple projects simultaneously and delivered projects
              within time and budget while producing a unique, responsive, and
              cross-platform front-end code that integrated with various backend
              systems.
            </li>
            <li>
              Demonstrated advanced analytical and technical expertise while
              testing the code on a variety of platforms to ensure pixel-perfect
              work, and optimized application code for speed and scalability.
            </li>
            <li>
              Delivered consistent performance excellence, dedication, and
              commitment while achieving interactive web designs, development &
              marketing services, and front-end engineering projects.
            </li>
          </ul>
        </p>

        <p>
          <span>add icon</span>
          <strong>ТехноХвиля</strong>
          <address>Kalush, Ivano-Frankivsk, Ukraine</address>

          <time dateTime='2008-08-01'>August 2008</time>
          <time dateTime='2016-01-01'>January 2016</time>
          <strong>Senior Windows System Administrator</strong>

          <ul>
            <li>
              Resolve issues related to Windows, application, virus isolation,
              and removal, storage and hardware configuration problems.
            </li>
            <li>
              Standardized and implemented the documentation process of the
              scheduled maintenance plan; performed data restore for users as
              needed, and ensured successful backups of accurate and incremental
              data.
            </li>
            <li>
              Proficiently administered and deployed 1С:Enterprise database
              application with a focus on handling company database and
              accounting within standalone and clustered environments.
            </li>
            <li>
              Performed a vital role in diagnosing, analyzing, and resolving
              computer problems related to both hardware and software, and
              monitored system performance by following technical best
              practices.
            </li>
            <li>
              Utilized advanced troubleshooting and analytical skills to
              resolve issues related to Windows, applications, and virus
              isolation, as well as removal, storage, and hardware configuration
              problems.
            </li>
          </ul>
        </p>*/}
      </article>
  );
}

export default ExperiencePage;