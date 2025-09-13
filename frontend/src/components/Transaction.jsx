import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";
import axios from "axios";
function Transaction() {

const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/sale/getsales") // ✅ API to fetch sales
      .then((res) => setSales(res.data))
      .catch((err) => console.error("Error fetching sales:", err));
  }, []);
  return (
    <>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
      <div className="overflow-auto mt-4">
        <Table bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Sale ID</th>
              <th>Book Title</th>
              <th>Quantity</th>
              <th>Customer</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {sales.length > 0 ? (
              sales.map((sale, index) => (
                <tr key={sale._id}>
                  <td>{index + 1}</td>
                  <td>{sale.book_id?.title || "Unknown"}</td>
                  <td>{sale.quantity}</td>
                  <td>{sale.customer_name || "—"}</td>
                  <td>{sale.payment_method}</td>
                  <td>{new Date(sale.sale_date).toLocaleDateString()}</td>
                  <td>₹ {sale.total_amount?.toFixed(2) || "0.00"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No sales records found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </main>
    </>
  )
}

export default Transaction