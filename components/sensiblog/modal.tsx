import { X } from "phosphor-react";
import { modalContent } from "../../interfaces/posts";
import ReactMarkdown from "react-markdown";

interface SensiblogModalProps {
  content: modalContent;
  visible: boolean;
  toggleVisible: (visible: boolean) => void;
}

const SensiblogModal = ({
  content,
  visible,
  toggleVisible,
}: SensiblogModalProps) => {
  function clickOutsideHandle(e: React.MouseEvent<Element, MouseEvent>) {
    if (e.currentTarget === e.target) {
      toggleVisible(false);
    }
  }

  return (
    <div
      className={`inset-0 z-40 flex items-center justify-center ${
        visible ? "fixed" : "hidden"
      }`}
    >
      <div
        onClick={(e) => clickOutsideHandle(e)}
        className="w-screen h-screen bg-black opacity-70"
      ></div>
      <div className="text-black w-1/2 absolute bg-violeta">
        <div className="relative">
          <button
            onClick={() => toggleVisible(false)}
            className="absolute m-2 right-0 top-0"
          >
            <X size={42} />
          </button>
        </div>
        <div className="m-8 flex flex-col items-center">
          <ReactMarkdown className="md-modal">
            {content.contentSpanish}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SensiblogModal;
