
declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    ignoreCancelEvents?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}

  export interface ElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class Element extends React.Component<ElementProps> {}

  export interface EventsProps {
    begin?: (to: string, element: HTMLElement) => void;
    end?: (to: string, element: HTMLElement) => void;
  }

  export const Events: {
    scrollEvent: {
      register: (events: EventsProps) => void;
      remove: (events: string) => void;
    };
  };

  export function animateScroll(options?: {
    duration?: number;
    delay?: number;
    smooth?: boolean;
    offset?: number;
    containerId?: string;
  }): void;

  export function scrollSpy(options?: {
    containerId?: string;
  }): void;

  export const scroller: {
    scrollTo(
      to: string,
      options?: {
        duration?: number;
        delay?: number;
        smooth?: boolean;
        offset?: number;
        containerId?: string;
      }
    ): void;
  };
}
