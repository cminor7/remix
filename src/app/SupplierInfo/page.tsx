"use client";

import type { FormField } from "@/types/FormGrid";
import FormGrid from "@/components/FormGrid";
import SearchBar from "@/components/SearchBar";

export default function SupplierInfo() {
    
    const fields: FormField[] = [
    {
        name: "supplierNumber",
        label: "Supplier Number",
        type: "select",
        options: [],
    },

    { name: "supplierName", label: "Supplier Name *", type: "input" },
    { name: "contactName", label: "Contact Name *", type: "input" },
    { name: "contactEmail", label: "Contact Email *", type: "input" },
    { name: "contactPhone", label: "Contact Phone *", type: "input" },

    {
        name: "country",
        label: "Country *",
        type: "select",
        options: ["USA", "Canada", "UK"],
    },

    {
        name: "state",
        label: "State *",
        type: "select",
        options: []
    },
    
    {
        name: "supplierManager",
        label: "Supplier Manager *",
        type: "select",
        options: []
    },

    {
        name: "contractType",
        label: "Contract Type",
        type: "select",
        options: ["SAL", "CREDIT PACKAGE", "PO TERMS"]
    },

    { name: "spaEmail", label: "SPA Email", type: "input", defaultvalue: "SUPPLIER_ONBOARDING@GRAINGER.COM" },
    
    {
        name: "comments",
        label: "Comments",
        type: "textarea",
        rows: 8,
        spanColumns: 2,
    },

];


  return (
    <div className='pageLayout'>
        
        <SearchBar placeholder="Type to search…" onSearch={(q) => console.log(q)} />
        <FormGrid fields={fields}/>
    </div>
  )
}
