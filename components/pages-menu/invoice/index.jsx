import Link from "next/link";
import InfoBox from "./InfoBox";
import TableInvoice from "./TableInvoice";
import Image from "next/image";

const index = () => {
  return (
    <>
      {/* <!-- Invoice Section --> */}
      <section className="invoice-section">
        <div className="auto-container">
          <div className="upper-box btn-box">
            <Link href="/" className="theme-btn btn-style-three">
              Back Home
            </Link>
            <button className="theme-btn btn-style-one ms-3">Print</button>
          </div>
        </div>
        {/* End auto-container */}

        <div className="auto-container">
          <div className="invoice-wrap">
            <div className="invoice-content">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <Image
                      width={154}
                      height={50}
                      src="/images/logo.svg"
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="invoice-id">
                  Invoice # <span>0043128641</span>
                </div>
              </div>
              {/* End logobox */}

              <InfoBox />
              {/* End infobox */}

              <div className="table-outer">
                <TableInvoice />
              </div>
              {/* End table-outer */}
            </div>
            {/* End .invoice-content */}

            <div className="invoice-footer">
              <ul className="bottom-links">
                <li>
                  <a
                    href="https://qimemsolutions.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    qimemsolutions.vercel.app
                  </a>
                </li>
                <li>
                  <a href="invoice@qimemsolutions.com">invoice@qimemsolutions.com</a>
                </li>
                <li>
                  <a href="tel:+251962939288">(+251) 962-939-288</a>
                </li>
              </ul>
            </div>
            {/* End invoice footer */}
          </div>
        </div>
      </section>
      {/* <!-- End Invoice Section -->  */}
    </>
  );
};

export default index;
