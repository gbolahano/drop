const Task = ({ index, refd, isActive, setIsActive }) => {
  return (
    <tr>
      <td>1</td>
      <td>Paris</td>
      <td>Shopping</td>
      <td className="toggle-container">
        <button onClick={() => setIsActive(index)}>click me!</button>
        {/* {isActive && ( */}
        <div
          ref={refd}
          className={`dropdown-container ${isActive ? "active" : ""}`}
        >
          <div className="dropdown-item">Edit</div>
          <div className="dropdown-item">Cancel</div>
        </div>
        {/* )} */}
      </td>
    </tr>
  );
};

export default Task;
