import React from 'react';
import { Table } from 'semantic-ui-react';

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
        <Table celled>

            <Table.Body>
                {data.map((item, key) =>
                    <Table.Row>
                        <Table.Cell>
                            {item.name}
                        </Table.Cell>
                        <Table.Cell>
                            {item.price || "NO DATA :("}
                        </Table.Cell>

                    </Table.Row>)}
            </Table.Body>
        </Table>
    );
}

export default PageContent;