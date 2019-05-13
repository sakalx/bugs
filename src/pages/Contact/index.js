import React from 'react';

import Header from 'root/components/Header';

function ContactPage() {
  return (
      <section role='contentinfo' aria-labelledby='contact information'>
        <Header title='Contact.'/>


        {/*<strong>Serhii Sakal</strong>*/}
        <address>Author: fred@example.com</address>
        <span>icon</span>
        <a href='https://linkedin.com/in/serhii-sakal'>
          <strong>LinkedIn</strong>
        </a>

        <span>icon GitHub</span>
        <a href='https://github.com/sakalx'>
          <strong>@sakalx</strong>
        </a>

        <span>icon Phone</span>
        <strong>Phone</strong>
        <a href='tel:1-929-238-3363'>1-929-238-3363</a>

        <span>icon @</span>
        <address>
         <a href='mailto:serhii.sakal@gmail.com'>serhii.sakal@gmail.com</a>.
         <a href='mailto:sakal.s@hotmail.com'>sakal.s@hotmail.com</a>.<br/>
         <a href='mailto:sakals@mail.ua'>sakals@mail.ua</a>.<br/>
        </address>
      </section>
  );
}

export default ContactPage;