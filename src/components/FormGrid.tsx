import React from "react";
import type { FormGridProps } from "@/types/FormGrid";
import styles from "./FormGrid.module.css";

const FormGrid: React.FC<FormGridProps> = ({ fields, columns }) => {
  return (
    <div className={styles.formGridWrapper}>
      <div
        className={styles.formGrid}
        style={
          columns
            ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
            : undefined
        }
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className={styles.formItem}
            style={
              field.spanColumns
                ? { gridColumn: `span ${field.spanColumns}` }
                : undefined
            }
          >
            <label className={styles.formLabel} htmlFor={field.name}>
              {field.label}
            </label>

            {field.type === "input" && (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={field.defaultvalue}
                className={styles.formInput}
              />
            )}

            {field.type === "textarea" && (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows ?? 4}
                className={styles.formTextarea}
              />
            )}

            {field.type === "select" && (
              <select name={field.name} className={styles.formSelect}>
                {field.options?.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormGrid;