class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['kale', 'spinach', 'tomatoes', 'rice']
    }
  }
  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        {this.state.items.map((item) => (
          <GroceryListItem item={item}/>
        ))}
      </div>
    );
  }
};

var GroceryListItem = (props) => (
  <div>{props.item}</div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));