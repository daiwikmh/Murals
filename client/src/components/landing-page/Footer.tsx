import React from "react";

const KoalaFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgba(6,7,7,1)] text-[rgba(193,204,199,1)] py-6 border-t border-[rgba(21,217,137,0.2)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Mural Intelligence Agency. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm hover:text-[rgba(21,217,137,1)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-[rgba(21,217,137,1)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:text-[rgba(21,217,137,1)] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KoalaFooter;