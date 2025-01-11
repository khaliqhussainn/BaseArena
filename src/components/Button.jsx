// Button.jsx
import React from 'react';
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  disabled,
  loading,
  ariaLabel,
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    h-11 uppercase rounded-lg text-base font-medium
    text-white bg-transparent
    border border-[#0969DD]/40
    transition-all duration-300 ease-out
    cursor-pointer select-none
    hover:bg-[#0969DD]/10 hover:border-[#0969DD]
    hover:shadow-[0_0_15px_rgba(9,105,221,0.3)]
    group
    ${px || "px-7"}
    ${className || ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const spanClasses = "relative z-10 transition-transform duration-300 group-hover:scale-105";

  const renderContent = () => (
    <>
      <span className={spanClasses}>{children}</span>
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </>
  );

  return href ? (
    <a
      href={href}
      className={baseClasses}
      target="_self"
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
      role="button"
      tabIndex={disabled || loading ? -1 : 0}
      onClick={(e) => {
        if (disabled || loading) {
          e.preventDefault();
        }
      }}
    >
      {renderContent()}
    </a>
  ) : (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading}
    >
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  px: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  href: null,
  onClick: null,
  px: "px-7",
  loading: false,
  disabled: false,
  ariaLabel: "",
};
export default Button;