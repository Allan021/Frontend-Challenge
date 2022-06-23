import { useCallback, useState } from "react";
import { Sticky } from "../stiky";
import { Header } from "../ui";
import { Helmet, HelmetProvider } from "react-helmet-async";
interface Props {
  children: React.ReactNode;
  navbar?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const MainLayout = ({ children, navbar, subtitle, title }: Props) => {
  // state

  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
  return (
    <HelmetProvider>
      <Helmet>
        {title && <title>{title}</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}
    </HelmetProvider>
  );
};
