import AppGrid from "@/components/AppGrid";


export default function Home() {


  const apps = [
    { name: "Mass Email", icon: "/icons/mail.svg", path: "/MassEmail"},
    { name: "Reminder Emails", icon: "/icons/clock.svg"},
    { name: "Request Form", icon: "/icons/document.svg", path: "/RequestForm"},
    { name: "Onboard Report", icon: "/icons/graph.svg" },
    { name: "Supplier Info", icon: "/icons/id.svg", path: "/SupplierInfo"},
    { name: "Refresh Tables", icon: "/icons/cloud.svg"},
    { name: "Email Info", icon: "/icons/message.svg" },
    { name: "Supplier Tasks", icon: "/icons/code.svg" },
    { name: "Support Ticket", icon: "/icons/lifesaver.svg"}
];

  return (
    <div className="pageLayout">
      <AppGrid apps={apps} />
      
    </div>
  );
}
