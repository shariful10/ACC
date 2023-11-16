import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const WithLayout = ({ children }) => {
	return <div>
      <Navbar />
      {children}
      <Footer />
      </div>;
};

export default WithLayout;
