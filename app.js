var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    {this.props.items.map((item) => (
      <GroceryListItem item={item}/>
    ))}
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{props.item}</div>
    );
  } 
};

ReactDOM.render(<GroceryList items={['kale', 'spinach', 'tomatoes', 'rice']}/>, document.getElementById("app"));