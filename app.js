class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        {this.props.items.map((item) => (
          <GroceryListItem item={item}/>
        ))}
      </div>
    );
  }
};

var GroceryListItem = (props) => (
  <div>{props.item}</div>
);

ReactDOM.render(<GroceryList items={['kale', 'spinach', 'tomatoes', 'rice']}/>, document.getElementById("app"));