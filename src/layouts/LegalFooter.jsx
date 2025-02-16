import { BsWhatsapp } from "react-icons/bs";

export default function LegalFooter() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Company Info */}
        <p>
          <strong>Company Information:</strong> This website (Crypto Option
          Trade) is operated by
          <span className="text-white">
            {" "}
            INVESTMENT ANALYTICS SOLUTIONS LTD
          </span>
          , a London investment firm, authorised and regulated by the
          International Financial Services Commission of London with company
          number 10417255. INVESTMENT ANALYTICS SOLUTIONS LTD is a product of
          Investment Solutions Limited incorporated in the United Kingdom.
        </p>

        {/* Risk Warning */}
        <p>
          <strong>Risk Warning:</strong> Contracts for difference (‘CFDs’) is a
          complex financial product with speculative character, the trading of
          which involves significant risks of loss of capital. Trading CFDs,
          which is a marginal product, may result in the loss of your entire
          balance. Remember that leverage in CFDs can work both to your
          advantage and disadvantage. CFDs traders do not own, or have any
          rights to, the underlying assets. Trading CFDs is not appropriate for
          all investors. Past performance does not constitute a reliable
          indicator of future results. Future forecasts do not constitute a
          reliable indicator of future performance. Before deciding to trade,
          you should carefully consider your investment objectives, level of
          experience, and risk tolerance. You should not deposit more than you
          are prepared to lose. Please ensure you fully understand the risk
          associated with the product envisaged and seek independent advice, if
          necessary. Please read our Risk Disclosure document.
        </p>

        {/* Disclaimer */}
        <p>
          INVESTMENT ANALYTICS SOLUTIONS LTD does not issue advice,
          recommendations, or opinions in relation to acquiring, holding, or
          disposing of any financial product. INVESTMENT ANALYTICS SOLUTIONS LTD
          is not a financial adviser.
        </p>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          {/* WhatsApp Icon */}
          <div className="flex items-center gap-2">
            <a href="wa.me/12314896705">
              <BsWhatsapp className="text-green-500 text-3xl" />
            </a>
          </div>

          {/* Copyright */}
          <p>© All Rights Reserved.</p>

          {/* Legal Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
