import React from 'react';

import Header from 'root/components/Header';
import Link from 'root/components/Link';

import {Icon, Title, Wrap, WrapTitle} from './style';

function ContactPage() {
  return (
      <section>
        <Header title='Contact.'/>

        <Wrap>
          <section>
            <WrapTitle>
              <Icon color='#8c6ab6' id='icon-Email'/>
              <Title>Email</Title>
            </WrapTitle>
            <hr/>
            <Link
                href='mailto:serhii.sakal@gmail.com'
                title='serhii.sakal@gmail.com'
            />
            <hr/>
            <Link
                href='mailto:sakal.s@hotmail.com'
                title='sakal.s@hotmail.com'
            />
            <hr/>
            <Link
                href='mailto:sakals@mail.ua'
                title='sakals@mail.ua'
            />
          </section>

          <section>
            <WrapTitle>
              <Icon color='#039688' id='icon-Phone'/>
              <Title>Phone</Title>
            </WrapTitle>
            <hr/>
            <Link
                href='tel:1-929-238-3363'
                title='1-929-238-3363'
            />
          </section>

          <section>
            <WrapTitle>
              <Icon id='icon-Linkedin'/>
              <Link
                  href='https://linkedin.com/in/serhii-sakal'
                  title='LinkedIn'
              />
            </WrapTitle>
            <hr/>
            <WrapTitle>
              <Icon color='#7f7f7f' id='icon-Github'/>
              <Link
                  href='https://github.com/sakalx'
                  title='GitHub'
              />
            </WrapTitle>
          </section>

        </Wrap>
      </section>
  );
}

export default ContactPage;