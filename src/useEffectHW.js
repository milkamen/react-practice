import { useEffect, useState } from "react";

const DolarsChange = (props) => {
  const [ShekelInput, SetShekelInput] = useState(0);
  const [DolarInput, SetDolarInput] = useState(0);

  const Shekel = (e) => {
    SetShekelInput(e.target.value);
  };

  const Dolar = (e) => {
    SetDolarInput(e.target.value);
  };

  useEffect(() => {
    SetDolarInput(ShekelInput * 3.14);
  }, [ShekelInput]);

  useEffect(() => {
    SetShekelInput(DolarInput / 3.14);
  }, [DolarInput]);

  return (
    <>
      <h1> Shekel-Dolar Changer</h1>
      <p>
        <label> Shekel </label>
        <input type="text" value={ShekelInput} onChange={Shekel} />
      </p>
      <p>
        <label> Dolar </label>
        <input type="text" value={DolarInput} onChange={Dolar} />
      </p>
    </>
  );
};

export default DolarsChange;
//
//עליכם לגרום לעדכון קומפוננטה ע"י שינוי של props.
//מתחת לרשימת המוצרים, רנדרו קומפוננטה נוספת שמציגה את סה"כ העלות של כל הפירות שמוצגות כעת על המסך.
//בכל פעם שרשימת הפירות משתנה, כך גם המחיר משתנה
