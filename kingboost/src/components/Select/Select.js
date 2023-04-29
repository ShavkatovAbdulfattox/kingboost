import React, { useState } from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import { ChevronDown } from "react-feather";

function Select({ selectProperty,borderRadious}) {
  console.log(selectProperty);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(selectProperty[0]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const select = (i) => {
    setLanguage(selectProperty[i]);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <MainPopup
        style={{
          "--border-radious": borderRadious,
        }}
        onClick={(e) => handleClick(e.target)}
      >
        <img src={language.img} alt="select-language" />
        <p>
          {language.text}
          <ChevronDown />
        </p>
      </MainPopup>

      {isOpen && (
        <Popup>
          {selectProperty.map(({ text, img }, i) => {
            return (
              <div key={i}>
                {language.img !== img && (
                  <PopupDescription onClick={() => select(i)}>
                    <img
                      src={img}
                      alt={`select-${text.toLowerCase()}-language`}
                    />
                    <p>{text}</p>
                  </PopupDescription>
                )}
              </div>
            );
          })}
        </Popup>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const MainPopup = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${COLORS.gray.new};
  font-weight: ${WEIGHTS.medium};
  padding: 10px 8px 10px 12px;
  border: 2px solid #313132;
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.49);
  border-radius: var(--border-radious);
  transition: background 0.3s;

  &:hover {
    background: #2f2f2f;
  }

  & p {
    display: flex;
  }
`;

const Popup = styled.div`
  position: absolute;
  width: 100%;
`;
const PopupDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  background-color: ${COLORS.gray.darkLight};
  padding: 10px 25px 10px 12px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2f2f2f;
  }
`;

export default Select;
