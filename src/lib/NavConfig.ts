import { useState } from "react";


export function NavConfig(path: string) {

  const [liveMode, setLiveMode] = useState(false);

  if (path.startsWith("/MassEmail")) {
    return [
        { label: "ReadMe", path: "/" },

        {
        label: "Attachments",
        children: [
            { label: "Select file(s)", path: "/web" },
            { label: "Select folder", path: "/mobile" },
        ],
        },

        // Slider toggle
        {
        label: "Live",
        isToggle: true,
        toggleValue: liveMode,
        onToggle: (v: boolean) => setLiveMode(v),
        },

        // Button
        {
        label: "Send",
        isButton: true,
        /*onClick: () => console.log("Login clicked!"),*/
        onClick: () => "",
        },
    ];
  }

  if (path.startsWith("/Dashboard")) {
    return [
      {
        label: "ReadMe",
        path: "/Dashboard",
      },
      {
        label: "Reports",
        path: "/Dashboard/Reports",
      },
    ];
  }

  // Home default
  return [
    { label: "ReadMe", path: "/" },
    { label: "Apps", path: "/apps" }
  ];
}
