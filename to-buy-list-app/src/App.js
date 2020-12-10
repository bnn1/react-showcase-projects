import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const itemPlaceholder = { title: '', id: null };
  const alertPlaceholder = { show: false, msg: '', type: '' };

  const [list, setList] = useState([]);
  const [item, setItem] = useState(itemPlaceholder);
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState(alertPlaceholder);
  const [editId, setEditId] = useState(null);

  const handleInput = (e) => {
    const newItem = {
      title: e.target.value,
      id: new Date().getTime().toString(),
    };
    setItem(newItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.title === '') {
      setAlertParams(true, "can't be empty string", 'danger');
      return;
    }
    if (isEdit) {
      const newList = list.map((listItem) => {
        if (listItem.id === editId) {
          return item;
        } else return listItem;
      });
      setEditId(null);
      setList(newList);
      setAlertParams(true, 'item edited', 'success');
      setIsEdit(false);
    } else {
      const newList = [...list, item];
      setList(newList);
      setAlertParams(true, 'item added', 'success');
    }
    setItem(itemPlaceholder);
  };

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setAlertParams(true, 'item removed', 'danger');
    setList(newList);
  };

  const editItem = (id) => {
    setIsEdit(true);
    const itemToEdit = list.find((item) => item.id === id);
    setEditId(itemToEdit.id);
    setItem({ ...itemToEdit });
  };

  const clearList = () => {
    setAlertParams(true, 'all items removed', 'danger');
    setList([]);
  };

  const setAlertParams = (show, msg, type) => {
    setAlert({ show, msg, type });
  };
  useEffect(() => {
    const timeout = setTimeout(() => setAlert(alertPlaceholder), 3500);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.type && <Alert alert={alert} />}
        <h3>to buy list</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={item.title}
            onChange={handleInput}
          />
          <button className='submit-btn'>{isEdit ? 'edit' : 'add'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List list={list} editItem={editItem} removeItem={removeItem} />
          <button className='clear-btn' onClick={clearList}>
            remove all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
