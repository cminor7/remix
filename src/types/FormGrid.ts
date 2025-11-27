// Form field definition
export interface FormField {
  name: string;
  label: string;
  type: "input" | "textarea" | "select";
  defaultvalue?: string;
  placeholder?: string;
  options?: string[];
  rows?: number;        // for textarea
  spanColumns?: number; // number of columns to span
}

// Props for FormGrid component
export interface FormGridProps {
  fields: FormField[];
  columns?: number; // optional override
}