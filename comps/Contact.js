import styles from '../styles/Contact.module.css';


const Contact = () => {
  return ( 
    < >
      <div className={styles.form}>
        <form name="contact" method="POST" data-netlify="true">
          <h3>Hire me today!</h3>
            <p>
              <input type="text" name="name" placeholder='Name'/>  
            </p>
            <p>
              <input type="email" name="email" placeholder='Email' />
            </p>
            <p>
              <textarea name="message" placeholder='Message'></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
        </form>
        </div>
    </>
   );
}
 
export default Contact;