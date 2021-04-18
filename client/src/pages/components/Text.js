import React, {Component} from 'react'

export class Text extends Component {
    constructor(props) {
        super(props);
        const token = JSON.parse(localStorage.getItem('userData')).token
        const id = this.props.item._id
        const value = this.props.item.value
        const owner = this.props.item.owner
        const i = this.props.i
        this.state = {
            i,
            id,
            value,
            owner,
            token
        }
    }

    componentDidMount() {

    }

    changeHandler = (e) => {
        const target = e.target
        const val = target.value
        const name = target.name

        this.setState({
            [name]:val
        })
    }

    async request(url,method = 'GET',body = {},headers = {}) {
        try {
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const requestOption = {
                method: method,
                headers: headers,
                body: body
            }
            const response = await fetch(url, requestOption)
            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.message || 'Request throwing is wrong!')
            }

            return data
        } catch (e) {
            console.log(e.message)
        }
    }

    async editHandler() {
        console.log(this.state.id)
        try {
            const response = await this.request(`api/text/edit/${this.state.id}`,'PUT',{value: `${this.state.value}`}, {Authorization: `Bearer ${this.state.token}`})
            //const data = await this.request(`api/text/edit/${this.state.id}`, 'PUT', {value: `${this.state.value}`}, {Authorization: `Bearer ${this.state.token}`})
            console.log('Editing!')
        } catch (e) {
            console.log(e.message)
        }
    }

    async deleteHandler() {
        try {
            const response = await this.request(`api/text/delete/${this.state.id}`, 'DELETE', null, {Authorization: `Bearer ${this.state.token}`})
            console.log('Deleting!')
            window.location.reload()
        } catch (e) {
            console.log(e.message)
        }
    }

    render() {
        return (
            <tr>
                <td>{this.state.i + 1}</td>
                <td>
                    <input
                        type="text"
                        name="value"
                        value={this.state.value}
                        onChange={this.changeHandler.bind(this)}
                    />
                </td>
                <td>
                    <button
                        className="btn btn-small green darken-1"
                        style={{marginRight:"1em",marginLeft:"1em"}}
                        onClick={this.editHandler.bind(this)}
                    >Edit</button>
                    <button
                        className="btn btn-small red darken-2"
                        onClick={this.deleteHandler.bind(this)}
                    >Delete</button>
                </td>
            </tr>
        )
    }

}

