declare module "@tawk.to/tawk-messenger-react" {
  import { Component, ReactNode } from "react";

  interface TawkMessengerReactProps {
    propertyId: string;
    widgetId?: string;
    onLoad?: () => void;
    onStatusChange?: (status: string) => void;
    onBeforeLoad?: () => void;
    onChatMaximized?: () => void;
    onChatMinimized?: () => void;
    onChatHidden?: () => void;
    onChatStarted?: () => void;
    onChatEnded?: () => void;
    onPrechatSubmit?: (data: any) => void;
    onOfflineSubmit?: (data: any) => void;
    onChatMessageVisitor?: (message: string) => void;
    onChatMessageAgent?: (message: string) => void;
    onChatMessageSystem?: (message: string) => void;
    onAgentJoinChat?: (data: any) => void;
    onAgentLeaveChat?: (data: any) => void;
    onChatSatisfaction?: (satisfaction: number) => void;
    onVisitorNameChanged?: (visitorName: string) => void;
    onFileUpload?: (link: string) => void;
    onTagsUpdated?: (data: any) => void;
    onUnreadCountChanged?: (count: number) => void;
    ref?: any; // You may need to adjust the type of ref according to your use case
    customStyle?: {
      zIndex?: number | string;
      visibility?: {
        desktop?: {
          xOffset?: number | string;
          yOffset?: number | string;
          position?: string;
        };
        mobile?: {
          xOffset?: number | string;
          yOffset?: number | string;
          position?: string;
        };
      };
    };
  }

  export default class TawkMessengerReact extends Component<TawkMessengerReactProps> {
    maximize: () => void;
    minimize: () => void;
    toggle: () => void;
    popup: () => void;
    getWindowType: () => string;
    showWidget: () => void;
    hideWidget: () => void;
    toggleVisibility: () => void;
    getStatus: () => string;
    isChatMaximized: () => boolean;
    isChatMinimized: () => boolean;
    isChatHidden: () => boolean;
    isChatOngoing: () => boolean;
    isVisitorEngaged: () => boolean;
    endChat: () => void;
    setAttributes: (
      attributes: any,
      callback: (error: string | null) => void,
    ) => void;
    addEvent: (
      eventName: string,
      metaData?: any,
      callback?: (error: string | null) => void,
    ) => void;
    addTags: (
      tags: string[],
      callback?: (error: string | null) => void,
    ) => void;
    removeTags: (
      tags: string[],
      callback?: (error: string | null) => void,
    ) => void;
    visitor: (data: { name?: string; email?: string; hash?: string }) => void;
    onLoaded: () => boolean | undefined;
    onBeforeLoaded: () => boolean | undefined;
    widgetPosition: () => string;
  }
}
