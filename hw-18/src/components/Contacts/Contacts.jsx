import React from "react";
import styles from "./Contacts.module.css";

import snapchatLogo from "../../assets/snapchat.svg";
import facebookLogo from "../../assets/facebook.svg";
import xLogo from "../../assets/x.svg";

const Contacts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h1 className={styles.title}>Контакты</h1>

        <ul className={styles.list}>
          <li className={styles.item}>
            Телефон:{" "}
            <a href="tel:+491234567890" className={styles.link}>
              +49 123 456 7890
            </a>
          </li>
          <li className={styles.item}>
            Email:{" "}
            <a href="mailto:info@example.com" className={styles.link}>
              info@example.com
            </a>
          </li>
        </ul>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            // здесь потом можно добавить логику отправки
            alert("Сообщение отправлено (демо).");
          }}
        >
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Ваша почта"
            required
          />
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
          />
          <input
            className={styles.input}
            type="text"
            name="message"
            placeholder="Сообщение"
            required
          />
          <button className={styles.button} type="submit">
            Отправить
          </button>
        </form>
      </div>

      {/* Правая колонка: соцсети */}
      <div className={styles.right}>
        <p className={styles.socialTitle}>Найдите нас на:</p>

        <div className={styles.socials}>
          <a
            className={styles.socialLink}
            href="https://www.snapchat.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Snapchat"
          >
            <img src={snapchatLogo} alt="Snapchat" className={styles.icon} />
          </a>

          <a
            className={styles.socialLink}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img src={facebookLogo} alt="Facebook" className={styles.icon} />
          </a>

          <a
            className={styles.socialLink}
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <img src={xLogo} alt="X (Twitter)" className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
