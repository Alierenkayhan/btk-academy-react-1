/* eslint-disable react/prop-types */
import { Component } from "react";
import { Table, Button } from "reactstrap";
export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
        <Table size="sm">
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product Quantity Per Unit</th>
              <th>Product Unit Price</th>
              <th>Product Units In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>{" "}
                <td>
                  {" "}
                  <Button onClick={()=>this.props.addToCart(product)} color="info">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
