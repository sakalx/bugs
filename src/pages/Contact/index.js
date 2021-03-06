import React from 'react';

import Header from 'root/components/Header';
import Link from 'root/components/Link';

import {Card, Icon, Ornament, Wrap, WrapTitle} from './style';

function ContactPage() {
  return (
      <section>
        <Header title='Contact'/>

        <Wrap>
          <li>
            <Card>
              <WrapTitle>
                <Icon color='#8c6ab6' id='icon-Email'/>
                <h2 style={{margin: 0}}>Email</h2>
              </WrapTitle>
              <Link
                  href='mailto:serhii.sakal@gmail.com'
                  title='serhii.sakal@gmail.com'
              />
              <Link
                  href='mailto:sakal.s@hotmail.com'
                  title='sakal.s@hotmail.com'
              />
              <Link
                  href='mailto:sakals@mail.ua'
                  title='sakals@mail.ua'
              />
            </Card>
          </li>
          <li>
            <Card>
              <WrapTitle>
                <Icon color='#039688' id='icon-Phone'/>
                <h2 style={{margin: 0}}>Phone</h2>
              </WrapTitle>
              <Link
                  href='tel:1-929-238-3363'
                  title='1-929-238-3363'
              />
            </Card>
          </li>
          <li>
            <Card>
              <WrapTitle>
                <Icon id='icon-Linkedin'/>
                <Link
                    href='https://linkedin.com/in/serhii-sakal'
                    title='LinkedIn'
                />
              </WrapTitle>
              <WrapTitle>
                <Icon color='#7f7f7f' id='icon-Github'/>
                <Link
                    href='https://github.com/sakalx'
                    title='GitHub'
                />
              </WrapTitle>
            </Card>
          </li>
        </Wrap>

        <Ornament color='none' id='ornament_2'/>
      </section>
  );
}

export default ContactPage;