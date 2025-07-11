const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} TalentLeaf by{" "}
        <a
          href="https://qimemsolutions.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qimem Solutions
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
