import styles from '../styles/Contact.module.css';


const Contact = () => {
  return ( 
    < >
      <div id="hire" className={styles.form}>
        <form name="contact" method="POST" data-netlify="true">
          <h1>Hire me today!</h1>
            <p>
              <input  className={styles.inputs}type="text" name="name" placeholder='Name'/>  
              <br />
              <input className={styles.inputs} type="email" name="email" placeholder='Email' />
              <br />
              <textarea className={styles.inputs} name="message" placeholder='Message' rows="5"></textarea>
              <br />
              <button className={styles.formButton}type="submit">Submit</button>
            </p>   
        </form>
        </div>
    </>
   );
}
 
export default Contact;