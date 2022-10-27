import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center mb-4'>Some questions related to web development.</h2>
            <div className='p-5 m-5'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is cors?

                        </Accordion.Header>
                        <Accordion.Body>
                            Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                        </Accordion.Body>
                    </Accordion.Item  >
                </Accordion>
                <Accordion className='mt-2' defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?

                        </Accordion.Header>
                        <Accordion.Body>
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion>
                    <Accordion className='mt-2' defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How does the private route work?

                            </Accordion.Header>
                            <Accordion.Body>
                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Accordion className='mt-2' defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Node? How does Node work?
                            </Accordion.Header>
                            <Accordion.Body>
                                Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;