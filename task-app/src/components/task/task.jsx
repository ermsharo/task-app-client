import { useState } from "react";
import styled from "styled-components";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60vw;
  margin: auto;
  padding: 1rem;
`;

const TaskBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding: 1rem;
`;
const TaskButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const DefaultButton = styled.div`
  background-color: #81fccb;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

function Task({ title, description, completed }) {
  const [isChecked, setIsChecked] = useState(completed);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
  };
  //A tarefa vai ter 2 modos
  //1 - Em execução
  // Pode se editar ou excluir
  //2 - Concluída
  //Não pode ser editada ou excluída a cor padrão e a interação serão desaivadas exceto caixa de conclusão
  if (completed) {
    return (
      <TaskBox>
        <div>
          <h3>{title}</h3>{" "}
          <div>
            <label>
              <input
                type="checkbox"
                checked={isChecked} // Controlled input
                onChange={handleCheckboxChange} // Event handler
              />
              {isChecked ? "Checked" : "Unchecked"}
            </label>
          </div>{" "}
        </div>
        <p>{description}</p>

        <TaskButtonBox>
          <DefaultButton> Concluir</DefaultButton>
        </TaskButtonBox>
      </TaskBox>
    );
  }

  return (
    <TaskBox>
      <div>
        <h3>
          {title}{" "}
          <input
            type="checkbox"
            checked={isChecked} // Controlled input
            onChange={handleCheckboxChange} // Event handler
          />
        </h3>{" "}
        <div>
          {/* <label> */}

          {/* {isChecked ? 'Checked' : 'Unchecked'} */}
          {/* </label> */}
        </div>{" "}
      </div>
      <p>{description}</p>

      {!isChecked && (
        <TaskButtonBox>
          <DefaultButton> Editar</DefaultButton>
          <DefaultButton> Remover</DefaultButton>
        </TaskButtonBox>
      )}
    </TaskBox>
  );
}

export default Task;
