import React, { useEffect, useRef, useState } from "react";
import { chat } from "../services/network";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [statusText, setStatusText] = useState("");
  const chatRef = useRef(null);
  const questionRef = useRef(null);

  const change = (e) => {
    setStatusText("");
    setQuestion(e.target.value);
  };

  const setFocusToQuestion = () => {
    questionRef.current.focus();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsBusy(true);
      setStatusText("Getting response...");
      const res = await chat(question);
      if (res.success) {
        const questionObj = { type: "question", data: question };
        const answerObj = { type: "answer", data: res.data };
        setMessages([...messages, questionObj, answerObj]);
        setQuestion("");
        setStatusText("");
      } else {
        setStatusText(res.error);
      }
    } catch (error) {
      setStatusText("An error occured! Please try again.");
      console.log("An error occured while getting chat response: ", error);
    } finally {
      setIsBusy(false);
      setFocusToQuestion();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setFocusToQuestion();
  }, [statusText]);

  return (
    <div className="chat-container">
      <h2>Open AI Chat</h2>
      <hr />
      <div ref={chatRef} className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={m.type}>
            {m.data}
          </div>
        ))}
      </div>
      <hr />
      <div style={{ color: 'red' }}>{statusText}</div>
      <div className="inputarea">
        <form onSubmit={handleSubmit}>
          <input className="question-input" type="text"  value={question}onChange={change} placeholder="Your question here"
            disabled={isBusy}
            ref={questionRef}
            required
          />
          <input type="submit" value="Send" className="send-btn btn btn-success" disabled={isBusy} />
        </form>
      </div>
    </div>
  );
}
