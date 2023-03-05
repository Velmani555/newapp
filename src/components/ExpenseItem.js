import "./ExpenseItem.css";
function ExpenseItem(props) {
    let month=props.date.toLocaleString('en-us',{month:'long'});
    let day=props.date.toLocaleString('en-us',{day:'2-digit'});
    let year=props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        </div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
