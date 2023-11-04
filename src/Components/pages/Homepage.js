import React,{useState} from 'react';
import Alert from './Alert';
import AddTodoModal from './Modal';
import List from './List';
import { useNavigate } from 'react-router-dom';


const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Homepage = () => {


  const containerStyle={
    height:'62vh'
  }

  const[name,setName]=useState("");
  const[list,setList]=useState(getLocalStorage());
  const [isEditing, setIsEditing] = React.useState(false);
  const [dueDate, setDueDate] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [editID, setEditID] = React.useState(null);
  const [alert, setAlert] = React.useState({ show: false, msg: "", type: "" });


   const [showCompleted, setShowCompleted] = React.useState(false);

  // sort by date
  const [sortOrder, setSortOrder] = React.useState("asc");

  // modal open close
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return {
              ...item,
              title: name,
              dueDate: dueDate,
              priority: priority,
              completed: false
            };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "Item added to the list.");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        dueDate: dueDate,
        priority: priority
      };
      setList([...list, newItem]);
      setName("");
      setDueDate("");
      setPriority("");
      closeModal();
    }
  };



  const navigate=useNavigate();


  // logout
  const handleLogout=()=>{
    localStorage.clear();
    navigate('/login');

  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const filteredList = showCompleted
    ? list.filter((item) => item.completed)
    : list;

  // complete-active toggle task
  const handleToggleComplete = (id) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
            title: `${item.title}`
          };
        }
        return item;
      });
    });
  };



  // sort by date
  // Function to compare due dates for sorting
  const compareDueDates = (a, b) => {
    if (sortOrder === "asc") {
      return a.dueDate.localeCompare(b.dueDate);
    } else {
      return b.dueDate.localeCompare(a.dueDate);
    }
  };

  // Sort the filtered list by due date
  const sortedList = [...filteredList].sort(compareDueDates);


  return (
    <div style={containerStyle}>
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

      <h3>Todo List</h3>

      <div className="form-control">
        <AddTodoModal
          show={showModal}
          onClose={closeModal}
          onSubmit={handleSubmit}
          name={name}
          dueDate={dueDate}
          priority={priority}
          onNameChange={(e) => setName(e.target.value)}
          onDueDateChange={(e) => setDueDate(e.target.value)}
          onPriorityChange={(e) => setPriority(e.target.value)}
        />
        {!showModal && (
          <button type="button" className="submit-btn" onClick={openModal}>
            {isEditing ? "Edit" : "Add Todos"}
          </button>
        )}
        &emsp;
        <div className="btns">
          <button
            type="button"
            className="submit-btn"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted ? "Show  Completed" : "Show Active"}
          </button>

          {/* sort date btn */}
          <button
            type="button"
            className="submit-btn"
            onClick={() => {
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
          >
            Sort {sortOrder === "asc" ? "Ascending" : "Descending " }
          </button>
          <button className='logout-btn' onClick={handleLogout}>
              LOGOUT
          </button>
        </div>
      </div>
      {sortedList.length > 0 && (
        <div className="grocery-container">
          <List
            items={sortedList}
            removeItem={removeItem}
            editItem={editItem}
            onToggleComplete={handleToggleComplete}
            priority={priority}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
    </div>  
  );
}

export default Homepage;
