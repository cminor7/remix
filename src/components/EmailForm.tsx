import React from "react";
import styles from "./EmailForm.module.css";
import type { EmailFormProps } from "@/types/EmailForm";

const EmailForm: React.FC<EmailFormProps> = ({
  showSupplier = false,
  showToCheckbox = false,
  showToInput = false,
}) => {
  const recipients = ["Alice", "Bob", "David", "Eve", "Jeffrey"];

  return (
    <div className={styles.emailForm}>

      {/* FROM */}
      <div className={styles.formRow}>
        <label className={styles.inputLabel}>FROM:</label>
        <input type="email" />
      </div>

      {/* TO AS INPUT */}
      {showToInput && (
        <div className={styles.formRow}>
          <label className={styles.inputLabel}>TO:</label>
          <input type="email" />
        </div>
      )}

      {/* TO AS CHECKBOXES */}
      {showToCheckbox && (
        <div className={styles.formRow}>
          <label className={styles.inputLabel}>TO:</label>
          <div className={styles.checkboxGroupHorizontal}>
            {recipients.map((name) => (
              <label key={name} className={styles.checkboxLabel}>
                <input type="checkbox" />
                {name}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* CC */}
      <div className={styles.formRow}>
        <label className={styles.inputLabel}>CC:</label>
        <input
          type="email"
          placeholder="multiple emails ex → email_1; email_2"
        />
      </div>

      {/* SUBJECT */}
      <div className={styles.formRow}>
        <label className={styles.inputLabel}>SUBJECT:</label>
        <input type="text" />
      </div>

      {/* MESSAGE ROW (SUPPLIER + MESSAGE) */}
      <div className={`${styles.formRow} ${styles.horizontalMessageRow}`}>
        {showSupplier && (
          <div className={styles.supplierColumn}>
            <textarea placeholder="List suppliers here" />
          </div>
        )}

        <div className={styles.messageColumn}>
          <textarea placeholder="Type your message here" />
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
