import React from "react";
import { Container, Button, Table } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <h2>TOURS</h2>
        <Table responsive>
          <tbody>
            <tr>
              <td className="text-center">JUL16</td>
              <td className="text-center">DETROIT, MI</td>
              <td className="text-center">DTE ENERGY MUSIC THEATRE</td>
              <td className="text-center">
                <Button variant="primary">BUY TICKETS</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center" >JUL 22</td>
              <td className="text-center" >TORONTO,ON</td>
              <td className="text-center" >BUDWEISER STAGE</td>
              <td className="text-center" >
                <Button variant="primary">BUY TICKETS</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center">JUL 29</td>
              <td className="text-center">TORONTO,ON</td>
              <td className="text-center">BUDWEISER STAGE</td>
              <td className="text-center">
                <Button variant="primary">BUY TICKETS</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center">AUG 2</td>
              <td className="text-center">TORONTO,ON</td>
              <td className="text-center">BUDWEISER STAGE</td>
              <td className="text-center">
                <Button variant="primary">BUY TICKETS</Button>
              </td>
            </tr>
            <tr>
              <td className="text-center">AUG 7</td>
              <td className="text-center">TORONTO,ON</td>
              <td className="text-center">BUDWEISER STAGE</td>
              <td className="text-center">
                <Button variant="primary">BUY TICKETS</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
