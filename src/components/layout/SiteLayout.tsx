import Navigation from "./Navigation";
import Footer from "./Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16 lg:pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}
