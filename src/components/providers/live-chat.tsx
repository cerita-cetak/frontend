"use client";

import React from "react";
import { LiveChatWidget } from "@livechat/widget-react";
const license = "17143392";
const alreadyLogin = false;

export default function LiveChat() {
  return (
    <LiveChatWidget
      license={license}
      visibility="minimized"
      onNewEvent={(event) => {
        console.log("needs live chat : ", event);
      }}
      customerEmail="customerEmail@example.com"
      customerName="customer name 1"
    />
  );
}
