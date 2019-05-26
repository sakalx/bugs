import React from 'react';

import Header from 'root/components/Header';
import Link from 'root/components/Link';
import TimeRange from 'root/components/TimeRange';
import VerticalBar from 'root/components/VerticalBar';

import {
  Content,
  Education,
  Icon,
  OrnamentGeek,
  OrnamentJs,
  OrnamentUdacity,
} from './style';

function EducationPage() {
  return (
      <article>
        <Header title='Education'/>

        <Education>
          <Icon color='#31338B' id='icon-LPNU'/>
          <Content>
            <h2>Bachelor’s Degree of Computer Engineering.</h2>
            <TimeRange
                start={{dateTime: '2006-09-01', title: 'September 2006'}}
                end={{dateTime: '2008-06-01', title: 'June 2008'}}
            />
            <Link
                href='http://www.lp.edu.ua/en'
                title='Lviv Polytechnic National University.'
            />
          </Content>
        </Education>

        <Education rtl>
          <OrnamentGeek color='none' id='ornament_1'/>
          <Icon color='#50667b' id='icon-GB'/>
          <Content>
            <h2>Professional Web Developer.</h2>
            <TimeRange
                start={{dateTime: '2016-12-01', title: 'December 2016'}}
                end={{dateTime: '2017-09-01', title: 'September 2017'}}
            />
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
          <OrnamentJs color='none' id='ornament_2'/>
          <Icon color='#fd9460' id='icon-JSinfo'/>
          <Content>
            <h2>JavaScript Soft Developer.</h2>
            <TimeRange
                start={{dateTime: '2017-10-01', title: 'October 2017'}}
                end={{dateTime: '2017-12-01', title: 'December 2017'}}
            />
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
          <OrnamentUdacity color='none' id='ornament_5'/>

          <Icon color='#02b3e4' id='icon-Udacity'/>
          <Content>
            <h2>React Developer.</h2>
            <TimeRange
                start={{dateTime: '2017-11-01', title: 'November 2017'}}
                end={{dateTime: '2018-01-01', title: 'January 2018'}}
            />
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

      </article>
  );
}

export default EducationPage;