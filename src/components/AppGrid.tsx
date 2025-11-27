"use client";

import React from "react";
import styles from "./AppGrid.module.css";
import type { AppGridProps } from "@/types/AppGrid";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  const router = useRouter();

  return (
    <div className={styles.appGrid}>
      {apps.map((app, index) => {
        const handleClick = () => {
          if (app.path) {
            router.push(app.path);     // navigate to page
          } else if (app.onClick) {
            app.onClick();             // run function
          }
        };

        return (
          <div
            key={index}
            className={styles.appGridItem}
            onClick={handleClick}
          >
            <div className={styles.appGridIconWrapper}>
              <Image
                src={app.icon}
                alt={app.name}
                width={80}
                height={80}
                style={{ objectFit: "cover" }}
              />
            </div>

            <span className={styles.appGridLabel}>{app.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AppGrid;
