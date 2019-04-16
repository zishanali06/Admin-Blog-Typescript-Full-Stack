import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Login extends React.Component<LoginProps, LoginState>{
    constructor(props: LoginProps) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    async componentDidMount() {

    }

    handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value })
    }

    handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value })
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // let newpost = {
        //     title: this.state.title,
        //     content: this.state.content,
        //     tagid: this.state.tag
        // }
        // fetch('/api/blogs/add', {
        //     method: "POST",
        //     mode: "cors",
        //     cache: "no-cache",
        //     credentials: "same-origin",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     redirect: "follow",
        //     referrer: "no-referrer",
        //     body: JSON.stringify(newpost)
        // }).then(() => this.props.history.push('/'))
        // .catch(e => console.log(e));
    }

    render() {
        return (
            <section className="row">
                <section className="col-12"><h1><br /></h1>
                    <h1><br /></h1>
                </section>
                <section className="col-4"></section>
                <section className="col-4">
                    <form>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control shadow-sm" id="exampleFormControlInput1" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                        </section>
                        <section className="form-group">
                            <label htmlFor="exampleFormControlInput2">Password</label>
                            <input type="password" className="form-control shadow-sm" id="exampleFormControlInput2" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                        </section>
                        <button type="submit" className="btn btn-primary mt-3 shadow-lg" onClick={this.handleClick}>Login</button>
                    </form>
                </section>
                <section className="col-4"></section>
            </section>
        )
    }
}

interface LoginProps extends RouteComponentProps {

}

interface LoginState {
    email: string,
    password: string
}