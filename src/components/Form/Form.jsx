import "./index.css";
import { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [country, setCountry] = useState();
  const [street, setStreet] = useState();
  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send form",
    });
  }, []);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <>
      <div className="form">
        <h3>Enter your data</h3>
        <input
          type="text"
          className="input"
          value={country}
          onChange={onChangeCountry}
          placeholder="Country"
        />
        <input
          type="text"
          className="input"
          value={street}
          onChange={onChangeStreet}
          placeholder="Street"
        />

        <select className="select" value={subject} onChange={onChangeSubject}>
          <option value="physical">Phisical</option>
          <option value="legal">Legal</option>
        </select>
      </div>
    </>
  );
};

export default Form;
