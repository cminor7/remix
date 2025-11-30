"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./FileUploader.module.css";

type Uploaded = { id: string; file: File };

export default function FileUploader() {
  const [singleFile, setSingleFile] = useState<Uploaded | null>(null);
  const [multiFiles, setMultiFiles] = useState<Uploaded[]>([]);

  const MAX_VISIBLE = 8;

  /*  SINGLE FILE (CSV ONLY) */

  const onDropSingle = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSingleFile({
        id: crypto.randomUUID(),
        file: acceptedFiles[0],
      });
    }
  }, []);

  const dropzoneSingle = useDropzone({
    onDrop: onDropSingle,
    accept: { "text/csv": [".csv"] },
    multiple: false,
  });

  const removeSingle = () => setSingleFile(null);

  /* MULTIPLE FILE UPLOAD */
  
  const onDropMulti = useCallback((files: File[]) => {
    const newFiles = files.map((f) => ({
      id: crypto.randomUUID(),
      file: f,
    }));
    setMultiFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const dropzoneMulti = useDropzone({
    onDrop: onDropMulti,
    multiple: true,
  });

  const removeMulti = (id: string) =>
    setMultiFiles((prev) => prev.filter((u) => u.id !== id));

  const removeAllMulti = () => setMultiFiles([]);

  /* -----------------------------
     RENDER
  ----------------------------- */
  return (
    <div>
      {/* SINGLE FILE */}
      <div
        {...dropzoneSingle.getRootProps()}
        className={`${styles.dropZone} ${
          dropzoneSingle.isDragActive ? styles.dropZoneActive : ""
        }`}
      >
        <input {...dropzoneSingle.getInputProps()} />
        Drop or select a supplier number csv file
      </div>

      {singleFile && (
        <ul className={styles.uploadList}>
          <li className={styles.uploadListItem}>
            <span className={styles.uploadFileName}>{singleFile.file.name}</span>
            <button onClick={removeSingle}>Remove</button>
          </li>
        </ul>
      )}

      {/* MULTIPLE FILES */}
      <div
        {...dropzoneMulti.getRootProps()}
        className={`${styles.dropZone} ${
          dropzoneMulti.isDragActive ? styles.dropZoneActive : ""
        }`}
      >
        <input {...dropzoneMulti.getInputProps()} />
        Drop or select multiple attachments
      </div>

      {multiFiles.length > 0 && (
        <>
          <div className={styles.multiFilesHeader}>
            <button onClick={removeAllMulti} className={styles.removeAllBtn}>
              Remove All Files
            </button>
          </div>

          <ul className={styles.uploadList}>
            {/* Visible files */}
            {multiFiles.slice(0, MAX_VISIBLE).map((u) => (
              <li key={u.id} className={styles.uploadListItem}>
                <span className={styles.uploadFileName}>{u.file.name}</span>
                <button onClick={() => removeMulti(u.id)}>Remove</button>
              </li>
            ))}

            {/* Placeholder if too many */}
            {multiFiles.length > MAX_VISIBLE && (
              <li className={styles.placeholderItem}>
                … {multiFiles.length - MAX_VISIBLE} more files
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
