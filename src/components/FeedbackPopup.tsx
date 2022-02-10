// import { RootState, useSelector } from "@srclaunch/state";
import {
  // useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import CloseButton from '../ui/CloseButton';
// import Button from "../forms/Button";
// import Form, { FormActions, InputRow } from "../forms/Form";
// import Label from "../forms/Label";

const FeedbackPopup = (): React.ReactElement => {
  const [popupVisible, setPopupVisible] = useState(false);

  // const userName = useSelector((state:RootState) => state.user.email_address);
  // const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  // const [messageText, setMessageText] = useState("");
  // const messageInputRef = useRef();

  // const sendFeedback = async () => {
  //   if (userName) {
  //     // const result = await sendUserFeedback({
  //     //   accessToken,
  //     //   message: messageText,
  //     //   userName,
  //     // });
  //     // if (!result.error) {
  //     //   setSuccessMessageVisible(true);
  //     //   setTimeout(() => {
  //     //     setSuccessMessageVisible(false);
  //     //   }, 8000);
  //     // }
  //   }
  // };

  return (
    <Container>
      <Trigger onClick={() => setPopupVisible(!popupVisible)}>
        <span>Have feedback?</span>
      </Trigger>

      <Popup visible={popupVisible}>
        <Close>
          <CloseButton onClick={() => setPopupVisible(false)} />
        </Close>

        <Content>
          <h3>Provide Feedback</h3>
          {/* 
          {successMessageVisible ? (
            <SuccessMessage>Thank you for your feedback!</SuccessMessage>
          ) : (
            <>
              <p>
                Your feedback is super important to creating the best personal
                finance and budgeting application we can. Ideas? Problems? Let
                us know!
              </p>

              <Form>
                <InputRow>
                  <Label>Message</Label>
                  <textarea
                    onChange={(e) => setMessageText(e.target.value)}
                    ref={messageInputRef.current}
                  />
                </InputRow>

                <FormActions>
                  <Button onClick={() => sendFeedback()}>Send</Button>
                </FormActions>
              </Form>
            </>
          )} */}
        </Content>
      </Popup>
    </Container>
  );
};

const Container = styled.div``;

const Trigger = styled.div`
  background: rgba(255, 255, 255, 1);
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 8px 0 0 0;
  border-right: none;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  bottom: 0;
  cursor: pointer;
  padding: 5px 12px 8px 12px;
  position: fixed;
  right: 0;
  transition: box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
  z-index: 100001;

  &:hover {
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

    span {
      color: #5b5b5b;
    }
  }

  span {
    color: #999;
    font-size: 11px;
    font-weight: 800;
    transition: color 0.2s ease-in-out;
  }
`;

const Popup = styled.div<{
  visible?: boolean;
}>`
  background: rgba(255, 255, 255, 1);
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 8px 0 0 0;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  bottom: 0;
  height: 400px;
  opacity: 0;
  position: fixed;
  pointer-events: none;
  right: 0;
  transform: translateX(350px) translateY(400px);
  transition: background 0.2s ease-in-out, opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  width: 350px;
  z-index: 100000;

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: translateX(0) translateY(0);
      z-index: 100002;
    `}
`;

const Close = styled.div`
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Content = styled.div`
  padding: 25px;

  h3 {
    color: #5b5b5b;
  }

  p {
    color: #7b7b7b;
    font-size: 14px;
    line-height: 20px;
    margin: 30px 0;
  }

  .input-row {
    height: auto;

    textarea {
      background: white;
      box-shadow: 0 0 0 transparent;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #5b5b5b;
      font-family: 'Helvetica Neue', arial, sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 18px;
      height: 100px;
      padding: 10px;
      width: 100%;

      &:focus {
        border: 1px solid #0074d9 !important;
      }

      &:hover {
        border: 1px solid #bbb;
      }

      &:focus {
        border: 1px solid #0074d9;
      }

      &::placeholder {
        color: #9b9b9b;
      }
    }
  }
`;

// const SuccessMessage = styled.div`
//   color: #9b9b9b;
//   font-size: 15px;
//   font-weight: 700;
//   margin: 160px 0;
//   text-align: center;
// `;

export default FeedbackPopup;
