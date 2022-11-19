// import { Day } from "./WorkTime.styled";
import { nanoid } from "nanoid";

const WorkTime = workDays => {
  return (
    <ul>
      {workDays.workDays.map(({ day, from, to, isOpen }) => (
        <li key={nanoid()}>
          {isOpen ? (
            <p>
              <small>{day}&nbsp;&nbsp;</small>
              {from} - {to}
            </p>
          ) : (
            <p>
              <small>{day}</small> Closed
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default WorkTime;
