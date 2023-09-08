"use client"

import React, { Component, ReactNode } from "react";
import Table from "./Table";


interface ClientTableState {
    isClient: boolean;
}

class ClientTable extends Component<{}, ClientTableState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isClient: false
        };
    }

    componentDidMount(): void {
        this.setState({ isClient: true });
    }

    render(): ReactNode {
        return (
            this.state.isClient ? <Table /> : <div>Loading...</div>
        );
    }
}

export default ClientTable
