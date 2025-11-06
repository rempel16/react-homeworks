import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api");
      const userData = response.data.results[0];
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt={user.name.first + " photo"}
      />

      <h2 className={styles.name}>
        {user.name.first} {user.name.last}
      </h2>

      <p className={styles.email}>Email: {user.email}</p>
      <p className={styles.phone}>Phone: {user.phone}</p>

      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  );
}
