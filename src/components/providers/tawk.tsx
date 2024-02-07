"use client";

import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function TawkChat() {
  const tawkRef: any = useRef();

  const handleOnload = () => {
    tawkRef.current.setAttributes(
      {
        name: "nasirin 1",
        email: "ahmadnasirin50@gmail.com",
      },
      function (error: any) {
        console.log("needs setAttributes ", error);
      },
    );
  };

  return (
    <TawkMessengerReact
      widgetId="1hlulb3kj"
      propertyId="65c19dc60ff6374032c9b678"
      onLoad={handleOnload}
      ref={tawkRef}
    />
  );
}
