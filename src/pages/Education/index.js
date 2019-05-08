import React from 'react';

import PageTitle from 'root/components/PageTitle';

function EducationPage() {
  return (
      <article role='article' aria-labelledby='described education'>
        <PageTitle title='Education.'/>

        <p>
          <span>add icon</span>
          <a href='http://www.lp.edu.ua/en'>
            Lviv Polytechnic National University - Bachelor’s Degree,
            Computer Engineering
          </a>
          <time dateTime='2017-09-01'>September 2006</time>
          <time dateTime='2017-06-01'>June 2008</time>
        </p>

        <p>
          <span>add icon</span>
          <a href='https://geekbrains.ru/professions/web_developer'>
            GeekBrains – Online university - Professional Web developer
          </a>
          <time dateTime='2016-12-01'>December 2016</time>
          <time dateTime='2017-09-01'>September 2017</time>
          <a href='https://geekbrains.ru/certificates/205752.en'>
            certificate: Web Developer
          </a>
          <a href='https://geekbrains.ru/certificates/253173.en'>
            certificate: Web Designer
          </a>
          <a href='https://geekbrains.ru/certificates/294257.en'>
            certificate: JavaScript developer
          </a>
          <a href='https://geekbrains.ru/certificates/331214.en'>
            certificate: ReactJS developer
          </a>
        </p>

        <p>
          <span>add icon</span>
          <a href='http://javascript.info'>
            JavaScript.info – Intensive course (JavaScript / DOM / Interfaces) -
            JavaScript developer
          </a>
          <time dateTime='2017-10-01'>October 2017</time>
          <time dateTime='2017-12-01'>December 2017</time>
          <a href='http://learn.javascript.ru/courses/js-20171027-1930/sakal/ru/certificate.jpg'>
            certificate
          </a>
        </p>

        <p>
          <span>add icon</span>
          <a href='https://www.udacity.com/course/react-nanodegree--nd019'>
            Udacity – Nanodegree program - React developer
          </a>
          <time dateTime='2017-11-01'>November 2017</time>
          <time dateTime='2018-01-01'>January 2018</time>
          <a href='https://graduation.udacity.com/confirm/D9GUSHH5'>
            certificate
          </a>
        </p>

      </article>
  );
}

export default EducationPage;