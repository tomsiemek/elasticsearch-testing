import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import errorImage from '../images/sadFace.png';

const PageContent = (data) => {

    if (data.length === 0) {
        return <div> NOTHING HERE :/</div>
    }

    console.log("IN PAGECONTENT: ");
    console.log(data);

    if (data.data !== undefined) {
        var data = data.data;
    }


    return (
        <Table fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Picture</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Price[$]</Table.HeaderCell>
                    <Table.HeaderCell>Amount in storage</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map((item, key) =>
                    <Table.Row>
                        <Table.Cell>
                            <Image src={errorImage} Small fluid onError={(e) => { e.target.src = errorImage }} />
                        </Table.Cell>
                        <Table.Cell>
                            {item.name}
                        </Table.Cell>
                        <Table.Cell>
                            {item.price + ".00" || "NO DATA :("}
                        </Table.Cell>
                        <Table.Cell>
                            {item.amount || "NO DATA :("}
                        </Table.Cell>

                    </Table.Row>)}
            </Table.Body>
        </Table>
    );
}

export default PageContent;