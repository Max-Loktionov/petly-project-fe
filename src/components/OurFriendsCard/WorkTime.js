// import { Day } from "./WorkTime.styled";

const WorkTime = workDays => {
  console.log(workDays);

  return (
    <ul>
      {workDays.workDays.map(({ day, from, to, isOpen }) => (
        <li>
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
