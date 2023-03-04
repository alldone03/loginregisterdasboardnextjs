import Head from 'next/head';
import Link from "next/link";
import { useState } from "react";



export default function login() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState({
        username: "",
        password: "",

    });
    function checkdata() {

    }


    return (

        <>
            <Head>
                <title>Login - Alldone</title>
            </Head>

            <div className="bg-dark">
                <div className="container " >
                    <section className="vh-100 gradient-custom">
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div className="card bg-primary bg-gradient text-white" style={{ borderRadius: "1rem" }}>
                                        <div className="card-body p-5 text-center">
                                            <div className="mb-md-5 mt-md-4 pb-5">
                                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                                <p className="text-white-50 mb-5"></p>
                                                <div className="form-outline form-white mb-4">
                                                    <input onChange={(e) => { setData({ username: e.target.value, password: data.password }) }} type="email" id="typeEmailX" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                                                </div>
                                                <div className="form-outline form-white mb-4">
                                                    <input onChange={(e) => { setData({ username: data.username, password: e.target.value }) }} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                                </div>
                                                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                                <button onClick={() => { checkdata(); }} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                            </div>


                                            <div>
                                                <p className="mb-0">I have an account? <Link href="/login" className="text-white-50">Login</Link>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            </div>
        </>

    );
}