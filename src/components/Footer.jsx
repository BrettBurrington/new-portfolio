export default function Footer() {
    return (
        <section className="col2">
        <ul className="links">
          <li>
            <img  src="./assets/images/linkedin.jpeg" alt="linkedin icon" className="linkedin git"/>
            <a href="https://www.linkedin.com/in/brett-burrington-6757a4171/" rel="noreferrer" target="_blank">LinkedIn</a>
          </li>
          <li>
            <img  src="./assets/images/github.jpeg" alt="github icon" className="github git"/>
            <a href="https://github.com/BrettBurrington" rel="noreferrer" target="_blank">GitHub</a>
          </li>
          <li>
            <img  src="./assets/images/phone.jpeg" alt="phone icon" className="phone git"/>
            <a href="tel:+512-645-8397" rel="noreferrer" target="_blank">512-645-8397</a>
          </li>

          <li>
            <img src="./assets/images/email.jpeg" alt="email icon" className="email git"/>
            <a href="mailto:bburrington13@gmail.com" rel="noreferrer" target="_blank">bburrington13@gmail.com</a>
          </li>

        </ul>
      </section>
    );
  }