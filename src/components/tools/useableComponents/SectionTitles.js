import { MdDashboard } from "react-icons/md";

const SectionTitles = (props) => {
  return (
    <div className={["in-main-container", props.pdTop].join(" ")}>
      <MdDashboard className="d-inline titlesIcon icon-success" />
      <h3 className="d-inlineBlock">{props.title}</h3>
    </div>
  );
};

export default SectionTitles;
