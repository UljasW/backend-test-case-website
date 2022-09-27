import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export default function ForgotPassword() {
    const [etherealEmailAddress, setEtherealEmailAddress] = useState("");
    const [etherealPassword, setEtherealPassword] = useState("");

    const [email, setEmail] = useState("");

    function HandleEtherealEmailAddressChange(event) {
        setEtherealEmailAddress(event.target.value);
    }

    function HandleEtherealPasswordChange(event) {
        setEtherealPassword(event.target.value);
    }

    function HandleEmailChange(event) {
        setEmail(event.target.value);
    }

    async function Submit(e) {
        e.preventDefault()

        const response = await fetch("http://demonewspaper-001-site1.btempurl.com/api/users/forgotpassword", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                etherealEmailAddress : etherealEmailAddress,
                etherealPassword : etherealPassword,
                email: email,
            })
        });

        if (response.status === 200) {
            alert("Email sent");
        } else {
            alert("Somthing went wrong!");
        }
    }
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Ethereal email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Ethereal email-address"
                    onChange={HandleEtherealEmailAddressChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Ethereal password</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Ethereal password"
                    onChange={HandleEtherealPasswordChange}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email (also Ethereal email address)"
                    onChange={HandleEmailChange}
                />
            </Form.Group>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <Button variant="primary" type="submit" onClick={Submit}>
                    Login
                </Button>
            </div>
        </Form>
    )
}
