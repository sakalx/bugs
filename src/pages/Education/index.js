import React from 'react';

import Header from 'root/components/Header';
import Link from 'root/components/Link';
import VerticalBar from 'root/components/VerticalBar';
import HorizontalBar from 'root/components/HorizontalBar';

import {Education, Content, Icon} from './style';

function EducationPage() {
  return (
      <article role='article' aria-labelledby='described education'>
        <Header title='Education'/>

        <Education>
          <Icon color='#31338B' id='icon-LPNU'/>

          <Content>
            <h2>Bachelor’s Degree of Computer Engineering.</h2>
            <p>
              <time dateTime='2006-09-01'>September 2006</time>
              <HorizontalBar/>
              <time dateTime='2008-06-01'>June 2008</time>
            </p>
            <Link
                href='http://www.lp.edu.ua/en'
                title='Lviv Polytechnic National University.'
            />
          </Content>
        </Education>

        <Education rtl>
          <Icon color='#50667b' id='icon-GB'/>

          <Content>
            <h2>Professional Web Developer.</h2>
            <p>
              <time dateTime='2016-12-01'>December 2016</time>
              <HorizontalBar/>
              <time dateTime='2017-09-01'>September 2017</time>
            </p>
            <Link
                href='https://geekbrains.ru/professions/web_developer'
                title='GeekBrains – Online University.'
            />
            <aside data-tooltip='CERTIFICATE'>
              <Link
                  href='https://geekbrains.ru/certificates/205752.en'
                  title='Web Developer'
              />
              <VerticalBar/>
              <Link
                  href='https://geekbrains.ru/certificates/253173.en'
                  title='Web Designer'
              />
              <br/>
              <Link
                  href='https://geekbrains.ru/certificates/294257.en'
                  title='JavaScript Developer'
              />
              <VerticalBar/>
              <Link
                  href='https://geekbrains.ru/certificates/331214.en'
                  title='ReactJS Developer'
              />
            </aside>
          </Content>
        </Education>

        <Education>
          <Icon color='#fd9460' id='icon-JSinfo'/>

          <Content>
            <h2>JavaScript Soft Developer.</h2>
            <p>
              <time dateTime='2017-10-01'>October 2017</time>
              <HorizontalBar/>
              <time dateTime='2017-12-01'>December 2017</time>
            </p>
            <Link
                href='http://javascript.info'
                title='JavaScript.info – Intensive Course.'
            />
            <aside data-tooltip='CERTIFICATE'>
              <Link
                  href='http://learn.javascript.ru/courses/js-20171027-1930/sakal/en/certificate.jpg'
                  title='JavaScript | DOM | Interfaces'
              />
            </aside>
          </Content>
        </Education>

        <Education rtl>
          <Icon color='#02b3e4' id='icon-Udacity'/>

          <Content>
            <h2>React Developer.</h2>
            <p>
              <time dateTime='2017-11-01'>November 2017</time>
              <HorizontalBar/>
              <time dateTime='2018-01-01'>January 2018</time>
            </p>
            <Link
                href='https://www.udacity.com/course/react-nanodegree--nd019'
                title='Udacity.'
            />
            <aside data-tooltip='CERTIFICATE'>
              <Link
                  href='https://graduation.udacity.com/confirm/D9GUSHH5'
                  title='Nanodegree program.'
              />
            </aside>
          </Content>
        </Education>
        {/*








        <p>
          <span>add icon</span>
          <a href='https://www.udacity.com/course/react-nanodegree--nd019'>
            Udacity – Nanodegree program - React developer
          </a>



        </p>
*/}
      </article>
  );
}

export default EducationPage;