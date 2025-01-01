'use client';

import React from "react";
import styles from './datingApplication.module.css';

export default function DatingApplication() {
  const [formData, setFormData] = React.useState({
    name: "",
    snapchat: false,
    instagram: false,
    phoneNumber: false,
    snapchatValue: "",
    instagramValue: "",
    phoneNumberValue: "",
    interestingTopic: "",
    surpriseMe: false,
    preferredActivity1: "",
    preferredActivity2: "",
    preferredActivity3: "",
  })

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.datingApplication}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={"name"} className={styles.nameLabel}>Name</label>
        <input
          type={"text"}
          id={"name"}
          name={"name"}
          value={formData.name}
          onChange={handleChange}
        />
        <div>Socials</div>
        <div className={styles.socials}>
          <label htmlFor={"snapchat"}>Snapchat</label>
          <input
            type={"checkbox"}
            id={"snapchat"}
            name={"snapchat"}
            checked={formData.snapchat}
            onChange={handleChange}
            className={styles.socialsItem}
          />
          <label htmlFor={"instagram"}>Instagram</label>
          <input
            type={"checkbox"}
            id={"instagram"}
            name={"instagram"}
            checked={formData.instagram}
            onChange={handleChange}
            className={styles.socialsItem}

          />
          <label htmlFor={"phoneNumber"}>Phone Number</label>
          <input
            type={"checkbox"}
            id={"phoneNumber"}
            name={"phoneNumber"}
            checked={formData.phoneNumber}
            onChange={handleChange}
            className={styles.socialsItem}

          />
        </div>
        {formData.snapchat && (
          <>
            <label htmlFor={"snapchatValue"}>Snapchat</ label>
            <input
              type={"text"}
              id={"snapchatValue"}
              name={"snapchatValue"}
              value={formData.snapchatValue}
              onChange={handleChange}
            />
          </>
        )}
        {formData.instagram && (
          <>
            <label htmlFor={"instagramValue"}>Instagram </label>
            <input
              type={"text"}
              id={"instagramValue"}
              name={"instagramValue"}
              value={formData.instagramValue}
              onChange={handleChange}
            />
          </>
        )}
        {formData.phoneNumber && (
          <>
            <label htmlFor={"phoneNumberValue"}>Phone Number</label>
            <input
              type={"text"}
              id={"phoneNumberValue"}
              name={"phoneNumberValue"}
              value={formData.phoneNumberValue}
              onChange={handleChange}
            />
          </>
        )}
        <label htmlFor={"interestingTopic"}>Something you know a lot about, and would like to tell someone about</label>
        <textarea
          id={"interestingTopic"}
          name={"interestingTopic"}
          value={formData.interestingTopic}
          onChange={handleChange}
          required={true}
          placeholder={"Something you know about and like..."}
        />
        <label htmlFor={"surpriseMe"}>Would you prefer to be taken on a surprise adventure, or choose our date?</label>
        <input
          type={"checkbox"}
          id={"surpriseMe"}
          name={"surpriseMe"}
          checked={formData.surpriseMe}
          onChange={handleChange}
        />
        {formData.surpriseMe ? (<></>) : (<><label htmlFor={"preferredActivity1"}>If you could do ANYTHING (for around
          $50/person) on a date, what would it be?</label>
          <textarea
            id={"preferredActivity1"}
            name={"preferredActivity"}
            value={formData.preferredActivity1}
            onChange={handleChange}
            placeholder={"Take me stargazing, or to the zoo, or..."}
          />
          <label htmlFor={"preferredActivity2"}>What is your second choice?</label>
          <textarea
            id={"preferredActivity2"}
            name={"preferredActivity"}
            value={formData.preferredActivity2}
            onChange={handleChange}
            placeholder={"Take me stargazing, or to the zoo, or..."}
            required
          />
          <label htmlFor={"preferredActivity3"}>Aaaaand a tertiary choice </label>
          <textarea
            id={"preferredActivity2"}
            name={"preferredActivity"}
            value={formData.preferredActivity2}
            onChange={handleChange}
            placeholder={"Take me stargazing, or to the zoo, or..."}
            required
          />
        </>)
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  )
    ;
}
