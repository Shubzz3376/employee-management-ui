import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeTable = ({employee, deleteEmployee}) => {

  const navigate = useNavigate();

  const editEmployee = (e,id) =>{
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }; 

  return (
    <tr key={employee.id}>

      <td className="text-left text-gray-500 px-6 py-4 whitespace-nowrap">
        {employee.firstName}
      </td>

      <td className="text-left   text-gray-500 px-6 py-4 whitespace-nowrap">
        {employee.lastName}
      </td>

      <td className="text-left  text-gray-500 px-6 py-4 whitespace-nowrap">
        {employee.emailId}
      </td>

        <td className="text-right  text-gray-500 px-6 py-4 whitespace-nowrap">
        <a onClick={(e,id) => editEmployee(e,employee.id)} className="text-indigo-600 hover:text-indigo-800 px-5 hover:cursor-pointer">
          Edit
        </a>

        <a onClick={(e,id) => deleteEmployee(e,employee.id)} className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer ">
         Delete
        </a>
      </td>
    </tr>
  );
};

export default EmployeeTable;
