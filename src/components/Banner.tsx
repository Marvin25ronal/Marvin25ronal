import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CaretRightSquare } from 'react-bootstrap-icons';
import Lottie from 'react-lottie';
import spaceman from '../assets/lottie/spaceman.json'
export default function Banner() {
    const message = " I'm Marvin";
    return (
        <section className='banner' id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} >
                        <Container className="tagline">
                            <span className='hello-text'>
                                Hi,
                            </span>
                            {
                                message.split('').map((letter, index) => (
                                    <span className='name-text'>
                                        {letter}
                                    </span>
                                ))
                            }

                        </Container>



                        <h1>{'Sciences and Systems Engineer'}
                            {/* <span className='wrap' >
                                {'-Full Stack Developer'}
                            </span> */}
                        </h1>
                        <p>
                            {'I am a Full Stack Developer with a background in Sciences and Systems Engineering. I have a passion for creating and developing web applications and software.'}
                        </p>
                        <button>
                            <span>Let’s Connect
                                <CaretRightSquare size={25} />
                            </span>
                        </button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Lottie options={{
                            loop: true,
                            autoplay: true,
                            animationData: spaceman,
                            rendererSettings: {
                                preserveAspectRatio: "xMidYMid slice"
                            },
                            
                        }}
                            height={500}
                            width={500}
                        />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
