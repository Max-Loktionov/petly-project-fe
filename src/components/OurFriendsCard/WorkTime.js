// import { Day } from "./WorkTime.styled";
import { nanoid } from "nanoid";
import { Div } from "./WorkTime.styled";

const WorkTime = workDays => {
  return (
    <Div>
      <span>
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
      </span>

      <>
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
      </>
    </Div>
  );
};

export default WorkTime;
