// From Button.tsx
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// From Layout.tsx
import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}

// From index.tsx (Home page)
export interface PageRouteProps {
  pageRoute: string
}
