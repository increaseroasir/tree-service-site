import type { ReactNode } from "react";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileBar from "@/components/site/MobileBar";
import DemoBadge from "@/components/site/DemoBadge";

type Props = {
  children: ReactNode;
  /** show the fixed mobile call/text/quote bar */
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
