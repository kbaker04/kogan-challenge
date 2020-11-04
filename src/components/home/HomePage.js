import React, { useEffect, useState } from "react";
import challengeAPI from "../../apis/challengeAPI";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { calcCubicWeight } from "../../helpers/calculations";

/**
 * HomePage Component fetches product list from api and returns results
 * Some clean up of data is done to convert weight in grams to kg
 * N/A is shown where data is missing or incomplete
 * Cubic Weight is calculated for Air Conditioners category only
 **/

const HomePage = () => {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    //on component mount fetch products for display
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let list = null;
    let response = null;
    let paginateFlag = false;
    let paginatePath = null;

    //fetch first list of products
    response = await challengeAPI.get("/api/products/1");

    //contains an objects array with each index being a product object
    list = response.data.objects && response.data.objects;

    //identify next page path for pagination
    paginateFlag = response.data.next ? true : false;

    //store next page path for pagination
    paginatePath = response.data.next;

    //fetch all subsequent product pages
    while (paginateFlag) {
      let nextPage = await challengeAPI.get(`${paginatePath}`);

      //using && as a means to avoid errors, do not assign/proceed if no data in variable
      nextPage.data.objects &&
        nextPage.data.objects.map((data) => {
          list = [...list, data];
        });
      paginatePath = nextPage.data.next;
      paginateFlag = paginatePath ? true : false;
    }

    //set the complete list as component state
    setProductList(list);
  };

  //render each product, todo move into a helpers file to make code reusable
  const renderProducts = () => {
    return (
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Weight</th>
            <th>Size</th>
            <th>Cubic Weight</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, id) => {
            const { size } = product;
            const { width, length, height } = size;
            const weight = product.weight / 1000;
            return (
              <tr key={id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{weight > 0 ? `${weight.toFixed(2)} kg` : "N/A"}</td>
                <td>
                  {size.length > 0
                    ? `Width: ${width}cm Length: ${length}cm Height: ${height}cm`
                    : "N/A"}
                </td>
                <td>
                  {product.category === "Air Conditioners"
                    ? `${calcCubicWeight(length, height, width)} kg`
                    : "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return productList ? (
    <Container className="mt-2">
      <h3>Products</h3>
      {renderProducts()}
    </Container>
  ) : (
    <div>Loading...</div>
  );
};

export default HomePage;
