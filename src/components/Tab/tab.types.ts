import { ReactNode } from "react";

export interface TabProps {
  tabs: Array<{ name: string; Child: ReactNode }>;
}
