import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserProfile(props) {
    const Navigate = useNavigate()
    // const [user, setUser] = useState({ name: "", email: "", mobileNo: "", address: "" })
    const [user, setUser] = useState({ name: props.name, email: props.email, mobileNo: props.mobileNo, address: props.address })

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const logoutOnClick = () => {
        window.localStorage.clear()
        window.location.reload()
    }
    const updateProfileOnCLick = () => {
        const { name, email, mobileNo, address } = user
        fetch("/api/user/update", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ name, email, mobileNo, address })
        })
            .then(res => res.json())
            .then(data => {
                const token = data["token"]
                console.log(token)
                if (data.user) {
                    return Navigate('/myAccount')
                }
            })
    }
    return (
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-4 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt='' />
                        <span class="font-weight-bold">{props.name}</span>
                        <span class="text-black-50">{props.email}</span><span> </span>
                        <button class="btn btn-danger profile-button mt-5 px-5" type="button" style={{ backgroundColor: "red" }} onClick={logoutOnClick}>Logout</button>
                    </div>
                </div>
                <div class="col-md-8 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h1 class="text-right">Profile Settings</h1>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Name</label><input type="text" id='name' name='name' class="form-control" placeholder="First Name" value={user.name} onChange={handleOnChange} /></div>
                            <div class="col-md-12"><label class="labels">Email ID</label><input type="text" id='email' name='email' class="form-control" placeholder="enter Email Id" value={user.email} onChange={handleOnChange} /></div>
                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" id='mobileNo' name='mobileNo' class="form-control" placeholder="Enter Phone Number" value={user.mobileNo} onChange={handleOnChange} /></div>
                            <div class="col-md-12"><label class="labels">Address</label><input type="text" id='address' name='address' class="form-control" placeholder="Enter Address" value={user.address} onChange={handleOnChange} /></div>
                        </div>
                        <div class="mt-5 text-center">
                            <button class="btn btn-primary profile-button" type="button" onClick={updateProfileOnCLick}>Save Profile</button>
                        </div>
                    </div>
                </div>
                {/* <div class="col-md-4">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                        <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default UserProfile