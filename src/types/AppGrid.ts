// props for AppGrid
export interface AppItem {
  name: string;
  icon: string;      // URL or local import
  path?: string;
  onClick?: () => void;
}

export interface AppGridProps {
  apps: AppItem[];
}