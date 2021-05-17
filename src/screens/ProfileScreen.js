import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css";
function ProfileScreen() {
    const user = useSelector(selectUser);



    return (
        <div className="phofileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://vietcetera.com/wp-content/uploads/2019/10/Khanh-Linh-Featured-Image.jpg"
                        alt="avatar"
                    />

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plants">


                            <h3>Plans (Current Plant: premium)</h3>
                            <h4>Renewal day : 11/03/2021</h4>
                            <div className="profileScreen__Renewal">

                                <div className="text_detail">
                                    <p>Netflix Standard</p>
                                    <p>1080p</p>
                                </div>

                                <button className="subscribe">
                                    Subscribe
                                </button>

                            </div>

                            <div className="profileScreen__Renewal">

                                <div className="text_detail">
                                    <p>Netflix Basic</p>
                                    <p>480p</p>
                                </div>

                                <button className="subscribe">
                                    Subscribe
                                </button>

                            </div>
                            <div className="profileScreen__Renewal">

                                <div className="text_detail">
                                    <p>Netflix Premium</p>
                                    <p>4k+HDR</p>
                                </div>

                                <button className="current_Pakage">
                                    Current Pakage
                                </button>

                            </div>

                            <button
                                className="profileScreen__signOut"
                                onClick={() => auth.signOut()}
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
