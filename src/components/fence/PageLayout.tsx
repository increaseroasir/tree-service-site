import type { ReactNode } from "react";
import TopBar from "@/components/fence/TopBar";
import Header from "@/components/fence/Header";
import Footer from "@/components/fence/Footer";
import MobileBar from "@/components/fence/MobileBar";
import DemoBadge from "@/components/fence/DemoBadge";

type Props = {
  children: ReactNode;
  /** show the fixed mobile call/estimate bar */
  mobileBar?: boolean;
};

const PageLayout = ({ children, mobileBar = true }: Props) => (
  <div className="min-h-screen bg-background pb-[76px] md:pb-0 flex flex-col">
    <DemoBadge />
    <TopBar />
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    {mobileBar && <MobileBar />}
  </div>
);

export default PageLayout;
