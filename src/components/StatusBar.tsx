import React from "react";
import styles from "./StatusBar.module.css";

export type StatusIcon = "info" | "success" | "warning" | "error" | "loading";

interface StatusBarProps {
  message: string;
  icon?: StatusIcon;
  progress?: {
    current: number;
    total: number;
  };
}

const StatusBar: React.FC<StatusBarProps> = ({ message, icon, progress }) => {
  const percentage = progress
    ? Math.round((progress.current / progress.total) * 100)
    : 0;

  const renderIcon = () => {
    const iconClass = `${styles.statusIcon} ${icon === "loading" ? styles.spin : ""}`;
    switch (icon) {
      case "info":
        return <span className={iconClass}>ℹ️</span>;
      case "success":
        return <span className={iconClass}>✔️</span>;
      case "warning":
        return <span className={iconClass}>⚠️</span>;
      case "error":
        return <span className={iconClass}>❌</span>;
      case "loading":
        return <span className={iconClass}>⏳</span>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.statusBar}>
      <div className={styles.statusContent}>
        {icon && renderIcon()}
        <span className={styles.statusMessage}>{message}</span>

        {progress && (
          <span className={styles.statusProgressText}>
            {progress.current} / {progress.total}
          </span>
        )}
      </div>

      {progress && (
        <div className={styles.statusProgressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default StatusBar;
