"use client";

import React, { useEffect } from "react";
import { LiveChatWidget } from "@livechat/widget-react";
import { CustomerAuth } from "@livechat/customer-sdk";

const license = "17143392";
const alreadyLogin = { already: true };

export default function LiveChat() {
  return (
    <LiveChatWidget
      license={license}
      visibility="minimized"
      // onNewEvent={(event) => {
      //   console.log("needs live chat : ", event);
      // }}
      // onReady={(e) => {
      //   console.log("needs on ready", e.customerData);
      // }}
    />
  );
}
